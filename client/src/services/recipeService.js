import { getDocs, getDoc, collection, setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
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
};

export const getOneRecipe = async (recipeId, setRecipe) => {
    try {
        const recipeDocRef = doc(firebaseAuth.db(), "recipes", recipeId);
        const recipeSnapshot = await getDoc(recipeDocRef);
        const recipeData = recipeSnapshot.data();
        setRecipe(recipeData);
    } catch (error) {
        console.log(error);
    }
};

export const createRecipe = async (recipeData) => {
    try {
        const recipeDocRef = doc(collection(firebaseAuth.db(), "recipes"));
        await setDoc(recipeDocRef, recipeData);
    } catch (error) {
        console.log(error);
    }
};

export const editRecipe = async (recipeId, recipeData) => {
    try {
        const recipeDocRef = doc(firebaseAuth.db(), "recipes", recipeId);
        await updateDoc(recipeDocRef, recipeData);
    } catch (error) {
        console.log(error);
    }
};

export const deleteRecipe = async (recipeId) => {
    try {
        const recipeDocRef = doc(firebaseAuth.db(), "recipes", recipeId);
        await deleteDoc(recipeDocRef);
    } catch (error) {
        console.log(error);
    }
};
