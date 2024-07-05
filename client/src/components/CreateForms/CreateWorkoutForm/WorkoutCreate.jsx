import styles from "../EntityForm.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { createWorkout } from "../../../services/workoutService";

const CreateWorkout = () => {
  const difficultyLevels = ["-", "Beginner", "Intermediate", "Advanced"];
  const [exercises, setExercises] = useState([{ value: "" }]);
  const [difficulty, setDifficulty] = useState("-");
  

  const navigate = useNavigate();

  const addInputField = () => {
    if (exercises[exercises.length - 1].value === "") {
      return;
    }
    setExercises([...exercises, {value: ""}]);
  };

  const handleNewExercise = (index, event) => {
    const values = [...exercises];
    values[index].value = event.target.value;
    setExercises(values);
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  }
  
  const deleteExercise = (index) => {
    setExercises(exercises.filter((exercise, i) => i !== index));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const workoutData = {
      title: event.target.title.value,
      description: event.target.description.value,
      exercises: exercises.map((field) => field.value),
      difficulty: difficulty,
      ownerId: firebaseAuth.currentUser().uid,
      ownerName: firebaseAuth.currentUser().displayName,
    };

    if (workoutData.title === "" || workoutData.description === "" || difficulty === "-" || workoutData.exercises[0] === "") {
      return;
    } 

    await createWorkout(workoutData);

    navigate("/catalog/workouts");
  }

  
  return (
    <>
      <h2 className={styles.formTitle}>Create Workout</h2>
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
          {exercises.map((inputField, index) => (
            <div key={index} className={styles.listGroup}>
              <input
                type="text"
                value={inputField.value}
                onChange={(e) => handleNewExercise(index, e)}
              />
              {exercises.length > 1 && (
                <i
                  onClick={() => deleteExercise(index)}
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
            Add Exercise
          </button>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
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
