import { useEffect, useState } from "react";
import { getAllRecipes } from "../../../services/recipeService";
import styles from "./RecipeCatalog.module.css";
import RecipeGridCard from "./RecipeGridCard/RecipeGridCard";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";

const RecipeCatalog = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getAllRecipes(setRecipes);
      setLoading(false);
    })();
  }, []);

  if(loading) {
    return <SecondaryLoader />
  }

  return (
    <>
      <div className={styles.title}>
        <h2>Recipes</h2>
        <h3>
          <i>For everyone&apos;s taste!</i>
        </h3>
      </div>
      <div className={styles.container}>
        {recipes.length > 0 && recipes.map((recipe) => (
          <RecipeGridCard key={recipe.id} recipeData={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeCatalog;
