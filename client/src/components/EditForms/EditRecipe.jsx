import styles from "../CreateForms/EntityForm.module.css";
import useEditForms from "../../hooks/useEditForms";
import { getOneRecipe, editRecipe } from "../../services/recipeService";
import SecondaryLoader from "../Shared/SecondaryLoader/SecondaryLoader";

const EditRecipe = () => {
  const initialState = {
    title: "",
    image: "",
    description: "",
    ingredients: [],
    instructions: "",
    difficulty: 1,
  };

  const {
    entity: recipe,
    handleChange,
    addInputField,
    deleteInputField,
    handleSubmit,
    loading,
    errors,
    isPending
  } = useEditForms(initialState, getOneRecipe, editRecipe, "/catalog/recipes/");

  if (loading) return <SecondaryLoader />;

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
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {errors.title && <p className={styles.error}>{errors.title}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={recipe.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          {errors.description && (
            <p className={styles.error}>{errors.description}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients:</label>
          <div className={styles.listGroupMultyLine}>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className={styles.listGroupRecipes}>
                <span>{index + 1}. </span>
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) =>
                    handleChange("ingredients", [
                      ...recipe.ingredients.slice(0, index),
                      e.target.value,
                      ...recipe.ingredients.slice(index + 1),
                    ])
                  }
                />
                {recipe.ingredients.length > 1 && (
                  <i
                    onClick={() => deleteInputField("ingredients", index)}
                    className="fa-solid fa-x"
                  ></i>
                )}
              </div>
            ))}
          {errors.ingredients && (
            <p className={styles.error}>{errors.ingredients}</p>
          )}
          </div>
          <button
            type="button"
            className={styles.addButton}
            onClick={() => addInputField("ingredients")}
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
            onChange={(e) => handleChange("image", e.target.value)}
          />
        {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            name="difficulty"
            id="difficulty"
            value={recipe.difficulty}
            onChange={(e) =>
              handleChange("difficulty", parseInt(e.target.value))
            }
          >
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
          <button className={styles.button} type="submit" disabled={isPending}>
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditRecipe;
