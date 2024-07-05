import styles from "./WorkoutCatalog.module.css"
import { useEffect, useState } from "react";
import {getAllWorkouts} from "../../../services/workoutService"

const WorkoutCatalog = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        (async () => {
            getAllWorkouts(setWorkouts);
        })();
    }, []);

    return (
      <>
        <div className={styles.title}>
          <h2>Workouts</h2>
          <h3>
            <i>From rookie to expert!</i>
          </h3>
        </div>
        <div className={styles.container}>
          {workouts.length === 0 && (
            <p className={styles.noRecipes}>No recipes found.</p>
          )}
        </div>
      </>
    );
};

export default WorkoutCatalog;