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
    handleNewField,
    handleDifficultyChange,
    handleSubmit,
    handleError
  } = useCreateForm();

  return (
    <>
      <h2 className={styles.formTitle}>Create Recipe</h2>
      <form className={styles.form} onSubmit={handleSubmit} datatype="recipe">
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="ex. Avocado Toast"
            onBlur={(e) => validateTitle(e, handleError)}
          />
          {errors.title && <p className={styles.error}>{errors.title}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="ex. This recipe is so easy! It's healthy and delicious."
            onBlur={(e) => validateDescription(e, handleError)}
          />
          {errors.description && (
            <p className={styles.error}>{errors.description}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients:</label>
          <div className={styles.listGroupMultyLine}>
            {ingredients.map((inputField, index) => (
              <MultiRowInput
                key={index}
                index={index}
                inputField={inputField}
                entitiesArray={ingredients}
                handleNewEntity={handleNewField}
                deleteEntity={deleteInputField}
              />
            ))}
            {errors.ingredients && (
              <p className={styles.error}>{errors.ingredients}</p>
            )}
          </div>
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
          {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
            datatype="recipe"
          >
            <option value="-">-</option>
            {[...Array(5).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          {errors.difficulty && (
            <p className={styles.error}>{errors.difficulty}</p>
          )}
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
