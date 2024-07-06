import styles from "./WorkoutCatalog.module.css"
import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../../services/workoutService"
import WorkoutGridCard from "./WorkoutGridCard/WorkoutGridCard";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";

const WorkoutCatalog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
          await getAllWorkouts(setWorkouts);
          setLoading(false);
        })();
    }, []);
  
    
    if (loading) {
      return <SecondaryLoader />;
    }
  
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
            <p className={styles.noWorkouts}>No workouts found.</p>
          )}
          {workouts.length > 0 && 
            workouts.map((workout) => (
              <WorkoutGridCard
                key={workout.id}
                title={workout.title}
                difficulty={workout.difficulty}
                goal={workout.goal}
                ownerName={workout.ownerName}
                id={workout.id}
              />
            ))
          }
        </div>
      </>
    );
};

export default WorkoutCatalog;