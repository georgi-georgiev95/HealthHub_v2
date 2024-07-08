import { useState } from "react";
import { firebaseAuth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../../services/recipeService";
import MultiRowInput from "../../Shared/MultiRowInput/MultiRowInput";
import styles from "../EntityForm.module.css";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([{ value: "" }]);
  const [difficulty, setDifficulty] = useState("-");

  const navigate = useNavigate();

  const addInputField = () => {
    if (ingredients[ingredients.length - 1].value === "") {
      return;
    }
    setIngredients([...ingredients, { value: "" }]);
  };

  const handleIngredientsChange = (index, event) => {
    const values = [...ingredients];
    values[index].value = event.target.value;
    setIngredients(values);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(parseInt(event.target.value));
  };

  const deleteInputField = (index) => {
    setIngredients(ingredients.filter((ingredient, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recipeData = {
      title: event.target.title.value,
      description: event.target.description.value,
      ingredients: ingredients.map((field) => field.value),
      image: event.target.image.value,
      difficulty: difficulty,
      ownerId: firebaseAuth.currentUser().uid,
      ownerName: firebaseAuth.currentUser().displayName,
    };

    if (
      recipeData.title === "" ||
      recipeData.description === "" ||
      difficulty === "-" ||
      recipeData.ingredients[0] === "" ||
      recipeData.image === ""
    ) {
      return;
    }

    await createRecipe(recipeData);

    navigate("/catalog/recipes");
  };

  return (
    <>
      <h2 className={styles.formTitle}>Create Recipe</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients:</label>
          {ingredients.map((inputField, index) => (
            <MultiRowInput
              key={index}
              index={index}
              inputField={inputField}
              entitiesArray={ingredients}
              handleNewEntity={handleIngredientsChange}
              deleteEntity={deleteInputField}
            />
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
          <input type="text" name="image" id="image" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <option value="-">-</option>
            {[...Array(5).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateRecipe;
