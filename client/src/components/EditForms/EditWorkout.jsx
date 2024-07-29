import useEditForms from "../../hooks/useEditForms";
import { getOneWorkout, editWorkout } from "../../services/workoutService";
import styles from "../CreateForms/EntityForm.module.css";
import SecondaryLoader from "../Shared/SecondaryLoader/SecondaryLoader";

const EditWorkout = () => {
  const difficultyLevels = ["-", "Beginner", "Intermediate", "Advanced"];
  const goals = ["-", "Weight Loss", "Muscle Gain"];

  const initialState = {
    title: "",
    description: "",
    difficulty: "",
    goal: "",
    exercises: [
      {
        exerciseName: "",
        sets: "",
        reps: "",
      },
    ],
    ownerId: "",
    ownerName: "",
  };

  const {
    entity: workout,
    handleChange,
    addInputField,
    deleteInputField,
    handleSubmit,
    loading,
  } = useEditForms(
    initialState,
    getOneWorkout,
    editWorkout,
    "/catalog/workouts/"
  );

  if (loading) return <SecondaryLoader />;

  return (
    <>
      <h2 className={styles.formTitle}>Create Workout</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={workout.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={workout.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className={styles.listGroup}>
          <label className={styles.exerciseLabel}>Exercises:</label>
          <div className={styles.labels}>
            <div>Exercise Name:</div>
            <div>Sets:</div>
            <div>Reps:</div>
          </div>
          {workout.exercises.map((exercise, index) => (
            <div key={index} className={styles.exerciseRow}>
              <span>{index + 1}. </span>
              <div className={styles.col}>
                <input
                  type="text"
                  name="exerciseName"
                  id="exerciseName"
                  placeholder="Exercise name"
                  value={exercise.exerciseName}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleChange("exercises", [
                      ...workout.exercises.slice(0, index),
                      { ...exercise, exerciseName: e.target.value },
                      ...workout.exercises.slice(index + 1),
                    ])
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
                  value={exercise.sets}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleChange("exercises", [
                      ...workout.exercises.slice(0, index),
                      { ...exercise, sets: e.target.value },
                      ...workout.exercises.slice(index + 1),
                    ])
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
                  value={exercise.reps}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleChange("exercises", [
                      ...workout.exercises.slice(0, index),
                      { ...exercise, reps: e.target.value },
                      ...workout.exercises.slice(index + 1),
                    ])
                  }
                  required
                />
              </div>
              {workout.exercises.length > 1 && (
                <i
                  onClick={() => deleteInputField("exercises", index)}
                  className="fa-solid fa-x"
                ></i>
              )}
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={() => addInputField("exercises")}
          >
            Add Exercise
          </button>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            name="difficulty"
            id="difficulty"
            value={workout.difficulty}
            onChange={(e) => handleChange("difficulty", e.target.value)}
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
            value={workout.goal}
            onChange={(e) => handleChange("goal", e.target.value)}
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
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditWorkout;
