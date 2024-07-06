import { getDocs, collection, query, where } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";

export const getUserRecipes = async (userId, setRecipes) => {
    try {
        const recipesCollection = collection(firebaseAuth.db(), "recipes");
        const userRecipesQuery = query(recipesCollection, where("ownerId", "==", userId));
        const userRecipesSnapshot = await getDocs(userRecipesQuery);
        const userRecipesList = userRecipesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setRecipes(userRecipesList);
    } catch (error) {
        console.log(error);
    }
};

export const getUserWorkouts = async (userId, setWorkouts) => {
    try {
        const workoutsCollection = collection(firebaseAuth.db(), "workouts");
        const userWorkoutsQuery = query(workoutsCollection, where("ownerId", "==", userId));
        const userWorkoutsSnapshot = await getDocs(userWorkoutsQuery);
        const userWorkoutsList = userWorkoutsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setWorkouts(userWorkoutsList);
    } catch (error) {
        console.log(error);
    }
}