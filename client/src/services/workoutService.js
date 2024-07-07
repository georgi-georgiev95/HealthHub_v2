import { getDocs, getDoc, collection, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";

export const getAllWorkouts = async (setWorkout) => {
    try {
        const workoutsCollection = collection(firebaseAuth.db(), "workouts");
        const workoutsSnapshot = await getDocs(workoutsCollection);
        const workoutsList = workoutsSnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        });
        setWorkout(workoutsList);
    } catch (error) {
        console.log(error);
    }
};

export const getOneWorkout = async (workoutId, setWorkout) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        const workoutSnapshot = await getDoc(workoutDocRef);
        const workoutData = workoutSnapshot.data();
        setWorkout(workoutData);
    } catch (error) {
        console.log(error);
    }
};

export const createWorkout = async (workoutData) => {
    try {
        const workoutDocRef = doc(collection(firebaseAuth.db(), "workouts"));
        await setDoc(workoutDocRef, workoutData);
    } catch (error) {
        console.log(error);
    }
};


export const deleteWorkout = async (workoutId) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        await deleteDoc(workoutDocRef);
    } catch (error) {
        console.log(error);
    }
};

export const editWorkout = async (workoutId, workoutData) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        await updateDoc(workoutDocRef, workoutData);
    } catch (error) {
        console.log(error);
    }
};

export const setLikes = async (userId, workoutId) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        const workoutSnapshot = await getDoc(workoutDocRef);
        const workoutData = workoutSnapshot.data();
        const likes = workoutData.likes || [];

        if (likes.includes(userId)) {
            await updateDoc(workoutDocRef, {
                likes: likes.filter((id) => id !== userId),
            });
        } else {
            await updateDoc(workoutDocRef, {
                likes: [...likes, userId],
            });
        }
    } catch (error) {
        console.log(error);
    }
};