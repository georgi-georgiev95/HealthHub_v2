import { getDocs, collection } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";


export const getAllRecipes = async (setRecipe) => {
    try {
        const recipesCollection = collection(firebaseAuth.db(), "recipes");
        const recipesSnapshot = await getDocs(recipesCollection);
        const recipesList = recipesSnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        });
        setRecipe(recipesList);
    } catch (error) {
        console.log(error);
    }
}