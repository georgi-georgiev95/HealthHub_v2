import styles from "../CreateForms/EntityForm.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editWorkout } from "../../services/workoutService";
import { useParams } from "react-router-dom";
import { getOneWorkout } from "../../services/workoutService";
import SecondaryLoader from "../Shared/SecondaryLoader/SecondaryLoader";

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
  const [workout, setWorkout] = useState({
    title: "",
    description: "",
    difficulty: "",
    goal: "",
    exercises: [],
    ownerId: "",
    ownerName: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const workoutData = await getOneWorkout(id);
      setWorkout(workoutData);
      setLoading(false);
    })();
  }, [id]);

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

  const deleteExercise = (index) => {
    setExercises(exercises.filter((exercise, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      workout.title === "" ||
      workout.description === "" ||
      workout.difficulty === "-" ||
      workout.goal === "-" ||
      workout.exercises[0] === "" ||
      workout.exercises[0] === undefined
    ) {
      return;
    }

    await editWorkout(id, workout);

    navigate("/catalog/workouts/" + id);
  };

  if (loading) {
    return <SecondaryLoader />;
  }

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
            onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={workout.description}
            onChange={(e) =>
              setWorkout({ ...workout, description: e.target.value })
            }
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
                  value={exercise.sets}
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
                  value={exercise.reps}
                  className={styles.exerciseInput}
                  onChange={(e) =>
                    handleNewExercise(index, "reps", e.target.value)
                  }
                  required
                />
              </div>
              {workout.exercises.length > 1 && (
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
            value={workout.difficulty}
            onChange={(e) =>
              setWorkout({ ...workout, difficulty: e.target.value })
            }
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
            onChange={(e) => setWorkout({ ...workout, goal: e.target.value })}
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

export default CreateWorkout;
