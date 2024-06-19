import { useEffect, useState } from "react";
import { getAllRecipes } from "../../services/recipeService";
import { Link } from "react-router-dom";
import styles from "./RecipeCatalog.module.css";

const RecipeCatalog = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => { 
    getAllRecipes(setRecipe);
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
          <Link to={`/catalog/recipes/${recipe.id}`} key={recipe.id}>
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
                <h2>{recipe.title}</h2>
                <p>Difficulty level: {recipe.difficulty}</p>
                <p>Added by: {recipe.ownerName}</p>
              </div>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecipeCatalog;
