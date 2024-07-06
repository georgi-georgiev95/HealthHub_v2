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
        ownerId: "",
        ownerName: "",
    });
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await getOneWorkout(id, setWorkout);
        })();
    }, [id]);

    console.log(workout);
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{workout.title}</h2>
        <p className={styles.description}>Description: {workout.description}</p>
        <p className={styles.difficulty}>Difficulty: {workout.difficulty}</p>
        <p className={styles.goal}>Goal: {workout.goal}</p>
        <p className={styles.owner}>Owner: {workout.ownerName}</p>
      </div>
    );
};

export default WorkoutDetails;