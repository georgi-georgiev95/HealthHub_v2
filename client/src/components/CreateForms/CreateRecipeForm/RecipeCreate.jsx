import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { firebaseAuth } from "../../../config/firebase";
import { createRecipe } from "../../../services/recipeService";
import MultiRowInput from "../../Shared/MultiRowInput/MultiRowInput";
import styles from "../EntityForm.module.css";
import {
  validateTitle,
  validateDescription,
  validateImageURL,
} from "../../../utils/createFormValidator";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([{ value: "" }]);
  const [difficulty, setDifficulty] = useState("-");
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: "",
    difficulty: "",
  });

  const handleError = (element, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [element]: error,
    }));
  };

  const navigate = useNavigate();

  const addInputField = () => {
    if (ingredients[ingredients.length - 1].value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ingredients: "Field cannot be empty!",
      }));
      return;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ingredients: "",
    }));
    setIngredients([...ingredients, { value: "" }]);
  };

  const handleIngredientsChange = (index, event) => {
    const values = [...ingredients];
    values[index].value = event.target.value;
    setIngredients(values);
    setErrors((prevErrors) => ({
      ...prevErrors,
      ingredients: "",
    }))
  };

  const handleDifficultyChange = (event) => {
    if (event.target.value !== "-") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        difficulty: "",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        difficulty: "Field cannot be empty!",
      }));
    }
    setDifficulty(parseInt(event.target.value));
  };

  const deleteInputField = (index) => {
    setIngredients(ingredients.filter((ingredient, i) => i !== index));
    setErrors((prevErrors) => ({
      ...prevErrors,
      ingredients: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (errors.title || errors.description || errors.ingredients || errors.image || errors.difficulty) {
      return;
    }

    if (ingredients.some((ingredient) => ingredient.value === "")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ingredients: "Field cannot be empty!",
      }))
      return;
    }

    const recipeData = {
      title: event.target.title.value.trim(),
      description: event.target.description.value.trim(),
      ingredients: ingredients.map((field) => field.value.trim()),
      image: event.target.image.value.trim(),
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
          <input
            type="text"
            name="title"
            id="title"
            placeholder="ex. Avocado Toast"
            onBlur={(e) => validateTitle(e, handleError)}
          />
        </div>
        {errors.title && <p className={styles.error}>{errors.title}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="ex. This recipe is so easy! It's healthy and delicious."
            onBlur={(e) => validateDescription(e, handleError)}
          />
        </div>
        {errors.description && (
          <p className={styles.error}>{errors.description}</p>
        )}
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
          {errors.ingredients && (
            <p className={styles.error}>{errors.ingredients}</p>
          )}
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
            placeholder="ex. https://www.example.com/recipe.jpg"
            onBlur={(e) => validateImageURL(e, handleError)}
          />
        </div>
        {errors.image && <p className={styles.error}>{errors.image}</p>}
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
        {errors.difficulty && <p className={styles.error}>{errors.difficulty}</p>}
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
