import styles from "./CreateForm.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { createWorkout } from "../../services/workoutService";

const CreateWorkout = () => {
  const [inputFields, setInputFields] = useState([{value: ""}]);
  const [difficulty, setDifficulty] = useState("-");

  const navigate = useNavigate();

  const addInputField = () => {
    setInputFields([...inputFields, {value: ""}]);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleNewExercise = (event) => {
    setDifficulty(parseInt(event.target.value));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const workoutData = {
      title: event.target.title.value,
      description: event.target.description.value,
      exercises: inputFields.map((field) => field.value),
      ownerId: firebaseAuth.currentUser().uid,
      ownerName: firebaseAuth.currentUser().displayName,
    };

    await createWorkout(workoutData);

    navigate("/catalog/workouts");
  }


  return (
    <>
      <h1 className={styles.formTitle}>Create Workout</h1>
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
          <label htmlFor="exercises">Exercises:</label>
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
            Add Exercise
          </button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Add Workout
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateWorkout;
