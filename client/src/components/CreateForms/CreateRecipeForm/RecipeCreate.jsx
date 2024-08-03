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
import useCreateForm from "../../../hooks/useCreateForm";

const CreateRecipe = () => {
  const {
    ingredients,
    difficulty,
    errors,
    addInputField,
    deleteInputField,
    handleIngredientsChange,
    handleDifficultyChange,
    handleSubmit,
    handleError
  } = useCreateForm();

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
        {errors.difficulty && (
          <p className={styles.error}>{errors.difficulty}</p>
        )}
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
