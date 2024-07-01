import { useState } from "react";
import { firebaseAuth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../../services/recipeService";
import styles from "../EntityForm.module.css";

const CreateRecipe = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [difficulty, setDifficulty] = useState("-"); 

  const navigate = useNavigate();

  const addInputField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recipeData = {
      title: event.target.title.value,
      description: event.target.description.value,
      ingredients: inputFields.map((field) => field.value),
      image: event.target.image.value,
      difficulty: difficulty,
      ownerId: firebaseAuth.currentUser().uid,
      ownerName: firebaseAuth.currentUser().displayName,
    };

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
          {inputFields.map((inputField, index) => (
            <div key={index} className={styles.formGroup}>
              <input
                type="text"
                value={inputField.value}
                onChange={(e) => handleInputChange(index, e)}
              />
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
            {[...Array(10).keys()].map((num) => (
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
