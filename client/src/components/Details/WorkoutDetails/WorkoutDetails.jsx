import styles from "./WorkoutDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneWorkout } from "../../../services/workoutService";

const WorkoutDetails = () => {
    const [workout, setWorkout] = useState({
        title: "",
        description: "",
        difficulty: "",
        goal: "",
        exercises: [],
        ownerId: "",
        ownerName: "",
    });
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await getOneWorkout(id, setWorkout);
        })();
    }, [id]);

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{workout.title}</h2>
        <p className={styles.description}>{workout.description}</p>
        <p className={styles.difficulty}>Difficulty: {workout.difficulty}</p>
        <p className={styles.goal}>Goal: {workout.goal}</p>
        <p className={styles.owner}>Created by: {workout.ownerName}</p>

        <div className={styles.exercises}>
          <h3 className={styles.exercisesTitle}>Exercises:</h3>
          <ul className={styles.exercisesList}>
            {workout.exercises.map((exercise, index) => (
              <li key={index} className={styles.exerciseItem}>
                <span className={styles.exerciseName}>{exercise}</span>
                <span className={styles.exerciseSets}>
                  Sets: {exercise.sets}
                </span>
                <span className={styles.exerciseReps}>
                  Reps: {exercise.reps}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default WorkoutDetails;