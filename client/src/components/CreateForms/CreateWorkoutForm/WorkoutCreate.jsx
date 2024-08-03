import styles from "../EntityForm.module.css";
import {
  validateTitle,
  validateDescription,
} from "../../../utils/createFormValidator";
import useCreateForm from "../../../hooks/useCreateForm";

const CreateWorkout = () => {
  const difficultyLevels = ["-", "Beginner", "Intermediate", "Advanced"];
  const goals = ["-", "Weight Loss", "Muscle Gain"];
  const { 
    exercises,
    difficulty,
    goal,
    errors,
    addInputField,
    handleGoalChange,
    handleNewField,
    deleteInputField,
    handleDifficultyChange,
    handleSubmit,
    handleError } = useCreateForm();

  return (
    <>
      <h2 className={styles.formTitle}>Create Workout</h2>
      <form className={styles.form} onSubmit={handleSubmit} datatype="workout">
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="ex. Intense Cardio Workout"
            onBlur={(e) => validateTitle(e, handleError)}
          />
        </div>
        {errors.title && <p className={styles.error}>{errors.title}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="ex. 30 minutes of cardio with weights"
            onBlur={(e) => validateDescription(e, handleError)}
          />
        </div>
        {errors.description && (
          <p className={styles.error}>{errors.description}</p>
        )}
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
                  onChange={(e) => handleNewField(e, index, "exerciseName")}
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
                  onChange={(e) => handleNewField(e, index, "sets")}
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
                  onChange={(e) => handleNewField(e, index, "reps")}
                  required
                />
              </div>
              {exercises.length > 1 && (
                <i
                  onClick={(e) => deleteInputField(e, index)}
                  className="fa-solid fa-x"
                  datatype="exercise"
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
            datatype="workout"
          >
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        {errors.difficulty && (
          <p className={styles.error}>{errors.difficulty}</p>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="goal">Goal:</label>
          <select
            name="goal"
            id="goal"
            value={goal}
            onChange={handleGoalChange}
          >
            {goals.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        {errors.goal && <p className={styles.error}>{errors.goal}</p>}
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
