import styles from "./WorkoutCatalog.module.css"

const WorkoutCatalog = () => {
    return (
        <>
            <div className={styles.title}>
                <h2>Workouts</h2>
                <h3>
                    <i>From rookie to expert!</i>
                </h3>
            </div>
        </>
    );
};

export default WorkoutCatalog;