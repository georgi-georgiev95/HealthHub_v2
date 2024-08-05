import { getDocs, getDoc, collection, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";

export const getAllWorkouts = async () => {
    try {
        const workoutsCollection = collection(firebaseAuth.db(), "workouts");
        const workoutsSnapshot = await getDocs(workoutsCollection);
        const workoutsList = workoutsSnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        });
        return workoutsList;
    } catch (error) {
        throw new Error(error);
    }
};

export const getOneWorkout = async (workoutId) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        const workoutSnapshot = await getDoc(workoutDocRef);
        const workoutData = workoutSnapshot.data();
        if (workoutData.likes === undefined) {
            workoutData.likes = [];
        }
        return workoutData;
    } catch (error) {
        throw new Error(error);
    }
};

export const createWorkout = async (workoutData) => {
    try {
        const workoutDocRef = doc(collection(firebaseAuth.db(), "workouts"));
        await setDoc(workoutDocRef, workoutData);
    } catch (error) {
        throw new Error(error);
    }
};


export const deleteWorkout = async (workoutId) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        await deleteDoc(workoutDocRef);
    } catch (error) {
        throw new Error(error);
    }
};

export const editWorkout = async (workoutId, workoutData) => {
    try {
        const workoutDocRef = doc(firebaseAuth.db(), "workouts", workoutId);
        await updateDoc(workoutDocRef, workoutData);
    } catch (error) {
        throw new Error(error);
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
        throw new Error(error);
    }
};