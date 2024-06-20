import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneRecipe } from "../../services/recipeService";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        description: "",
        ingredients: [],
        });
        const { id } = useParams();
    
        
    useEffect(() => {
      (async () => {
        await getOneRecipe(id, setRecipe);
      })();
    }, [id]);
    
    return (
      <div>
        <h2>{recipe.title}</h2>
        <div className={styles.details}>
          <img src={recipe.image} alt={recipe.title} className={styles.image} />
          <div className={styles.description}>
            <p>{recipe.description}</p>
            <p>
              <i className="fa-solid fa-utensils"></i> Ingredients:
            </p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};


export default RecipeDetails;