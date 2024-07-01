import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneRecipe } from "../../services/recipeService";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        description: "",
        ingredients: [],
        });
    const { id } = useParams();
    const { user } = useUser();
    
        
    useEffect(() => {
      (async () => {
        await getOneRecipe(id, setRecipe);
      })();
      console.log(user.userId);
    }, [id, user]);
    
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
            <ul className={styles.ingredientList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className={styles.buttons}>
              {user.userId === recipe.ownerId && (
                <Link to={`edit`}>
                  <button className={styles.editButton}>Edit</button>
                </Link>
              )}
              {user.userId === recipe.ownerId && (
                <button className={styles.deleteButton}>Delete</button>
              )}
              {user.userId !== recipe.ownerId && user.userId !== '' && user.userId !== undefined && (
                <button className={styles.likeButton}>Like</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};


export default RecipeDetails;