import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "../CreateForms/EntityForm.module.css";
import { getOneRecipe, editRecipe } from "../../services/recipeService";
import SecondaryLoader from "../Shared/SecondaryLoader/SecondaryLoader";

const EditRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: [],
    instructions: "",
    difficulty: 1,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const recipeData = await getOneRecipe(id);
      setRecipe(recipeData);
      setLoading(false);
    })();
  }, [id]);

  const addInputField = () => {
    if (recipe.ingredients[recipe.ingredients.length - 1] === "") {
      return;
    }
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, ""],
    });
  };

  const deleteInputField = (index) => {
    setRecipe({
      ...recipe,
      ingredients: recipe.ingredients.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(recipe.ingredients[recipe.ingredients.length - 1] === "") {
      return;
    }

    const recipeData = recipe;

    await editRecipe(id, recipeData);
    navigate("/catalog/recipes/" + id);
  };

  if (loading) {
    return <SecondaryLoader />;
  }

  return (
    <>
      <h2 className={styles.formTitle}>Edit Recipe</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={recipe.title}
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={recipe.description}
            onChange={(e) =>
              setRecipe({ ...recipe, description: e.target.value })
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className={styles.listGroupRecipes}>
              <span>{index + 1}. </span>
              <input
                type="text"
                value={ingredient}
                onChange={(e) =>
                  setRecipe({
                    ...recipe,
                    ingredients: [
                      ...recipe.ingredients.slice(0, index),
                      e.target.value,
                      ...recipe.ingredients.slice(index + 1),
                    ],
                  })
                }
              />
              {recipe.ingredients.length > 1 && (
                <i
                  onClick={() => deleteInputField(index)}
                  className="fa-solid fa-x"
                ></i>
              )}
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={addInputField}
          >
            Add Ingredient
          </button>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">ImageURL:</label>
          <input
            type="text"
            name="image"
            id="image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            name="difficulty"
            id="difficulty"
            value={recipe.difficulty}
            onChange={(e) =>
              setRecipe({ ...recipe, difficulty: parseInt(e.target.value) })
            }
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditRecipe;
