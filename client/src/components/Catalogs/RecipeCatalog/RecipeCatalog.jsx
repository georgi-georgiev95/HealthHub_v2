import styles from "./RecipeCatalog.module.css";
import { getAllRecipes } from "../../../services/recipeService";
import RecipeGridCard from "./RecipeGridCard/RecipeGridCard";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";
import useFetch from "../../../hooks/useFetch";

const RecipeCatalog = () => {
  const {data: recipes, loading} = useFetch(getAllRecipes);

  if (loading) {
    return <SecondaryLoader />;
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
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <RecipeGridCard key={recipe.id} recipeData={recipe} />
          ))}
        {recipes.length === 0 && (
          <p className={styles.noRecipes}>No recipes found.</p>
        )}
      </div>
    </>
  );
};

export default RecipeCatalog;
