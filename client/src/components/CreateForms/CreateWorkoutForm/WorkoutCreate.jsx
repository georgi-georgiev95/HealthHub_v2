import styles from "../EntityForm.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { createWorkout } from "../../../services/workoutService";

const CreateWorkout = () => {
  const difficultyLevels = ["-", "Beginner", "Intermediate", "Advanced"];
  const goals = ["-", "Weight Loss", "Muscle Gain"];
  const [exercises, setExercises] = useState([
    {
      exerciseName: "",
      sets: "",
      reps: "",
    },
  ]);
  const [difficulty, setDifficulty] = useState("-");
  const [goal, setGoal] = useState("-");

  const navigate = useNavigate();

  const addInputField = () => {
    if (
      exercises[exercises.length - 1].sets === "" ||
      exercises[exercises.length - 1].reps === "" ||
      exercises[exercises.length - 1].exerciseName === "" ||
      exercises[exercises.length - 1].sets === undefined ||
      exercises[exercises.length - 1].reps === undefined ||
      exercises[exercises.length - 1].exerciseName === undefined
    ) {
      return;
    }
    setExercises([...exercises, { value: "" }]);
  };

  const handleNewExercise = (index, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      [field]: value,
    };
    setExercises(updatedExercises);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const deleteExercise = (index) => {
    setExercises(exercises.filter((exercise, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const workoutData = {
      title: event.target.title.value,
      description: event.target.description.value,
      exercises: exercises,
      difficulty: difficulty,
      goal: goal,
      ownerId: firebaseAuth.currentUser().uid,
      ownerName: firebaseAuth.currentUser().displayName,
    };

    if (
      workoutData.title === "" ||
      workoutData.description === "" ||
      difficulty === "-" ||
      goal === "-" ||
      workoutData.exercises[0] === ""
    ) {
      return;
    }

    await createWorkout(workoutData);

    navigate("/catalog/workouts");
  };

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
        <div className={styles.listGroup}>
          <label className={styles.exerciseLabel}>Exercises:</label>
          <div className={styles.labels}>
            <div>Exercise Name:</div>
            <div>Sets:</div>
            <div>Reps:</div>
          </div>
          {exercises.map((exercise, index) => (
            <div key={index} className={styles.exerciseRow}>
              <span>{index + 1}. </span>
              <div className={styles.col}>
                <input
                  type="text"
                  name="exerciseName"
                  id="exerciseName"
                  placeholder="Exercise name"
                  value={exercises.exerciseName}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleNewExercise(index, "exerciseName", e.target.value)
                  }
                  required
                />
              </div>
              <div className={styles.col}>
                <input
                  type="number"
                  name="sets"
                  id="sets"
                  placeholder="Sets"
                  value={exercises.sets}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleNewExercise(index, "sets", e.target.value)
                  }
                  required
                />
              </div>
              <div className={styles.col}>
                <input
                  type="number"
                  name="reps"
                  id="reps"
                  placeholder="Reps"
                  value={exercises.reps}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleNewExercise(index, "reps", e.target.value)
                  }
                  required
                />
              </div>
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
        <div className={styles.formGroup}>
          <label htmlFor="goal">Goal:</label>
          <select
            name="goal"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            {goals.map((level) => (
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
