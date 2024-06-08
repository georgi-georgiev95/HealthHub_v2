import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import {firebaseAuth} from "../../config/firebase";
import styles from "./RecipeCatalog.module.css";

const RecipeCatalog = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => { 
    const fetchRecipes = async () => {
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

    fetchRecipes();

  }, []);


  return (
    <>
      <div className={styles.title}>
        <h2>Recipes</h2>
        <h3>
          <i>For everyone&apos;s taste!</i>
        </h3>
      </div>
      <div className={styles.container}>
        {recipe.length > 0 && recipe.map((recipe) => (
          <div className={styles["flip-card"]} key={recipe.id}>
            <div className={styles["flip-card-inner"]}>
              <div
                className={styles["flip-card-front"]}
                style={{
                  backgroundImage: `url(${recipe.image})`,
                  backgroundSize: `cover`,
                }}
              ></div>
              <div className={styles["flip-card-back"]}>
                <h1>{recipe.title}</h1>
                <p>Difficulty level: {recipe.difficulty}</p>
                <p>Added by: {recipe.ownerName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeCatalog;
