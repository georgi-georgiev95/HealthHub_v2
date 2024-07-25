import { getDocs, collection, query, where } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";

export const getUserRecipes = async (userId) => {
    try {
        const recipesCollection = collection(firebaseAuth.db(), "recipes");
        const userRecipesQuery = query(recipesCollection, where("ownerId", "==", userId));
        const userRecipesSnapshot = await getDocs(userRecipesQuery);
        const userRecipesList = userRecipesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return userRecipesList;
    } catch (error) {
        console.log(error);
    }
};

export const getUserWorkouts = async (userId) => {
    try {
        const workoutsCollection = collection(firebaseAuth.db(), "workouts");
        const userWorkoutsQuery = query(workoutsCollection, where("ownerId", "==", userId));
        const userWorkoutsSnapshot = await getDocs(userWorkoutsQuery);
        const userWorkoutsList = userWorkoutsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return userWorkoutsList;
    } catch (error) {
        console.log(error);
    }
};

export const getUserLikedRecipes = async (userId) => {
    try {
        const recipesCollection = collection(firebaseAuth.db(), "recipes");
        const userLikedRecipesQuery = query(recipesCollection, where("likes", "array-contains", userId));
        const userLikedRecipesSnapshot = await getDocs(userLikedRecipesQuery);
        const userLikedRecipesList = userLikedRecipesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return userLikedRecipesList;
    } catch (error) {
        console.log(error);
    }
};

export const getUserLikedWorkouts = async (userId) => {
    try {
        const workoutsCollection = collection(firebaseAuth.db(), "workouts");
        const userLikedWorkoutsQuery = query(workoutsCollection, where("likes", "array-contains", userId));
        const userLikedWorkoutsSnapshot = await getDocs(userLikedWorkoutsQuery);
        const userLikedWorkoutsList = userLikedWorkoutsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return userLikedWorkoutsList;
    } catch (error) {
        console.log(error);
    }
};

export const verifyUser = (setUser, setLoading) => {

    const unsubcribe = firebaseAuth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
            setUser({
                userId: firebaseUser.uid,
                email: firebaseUser.email,
                username: firebaseUser.displayName,
            });
        } else {
            setUser({
                userId: "",
                email: "",
                username: "",
            });
        }
        setLoading(false);
    });

    return unsubcribe;
}