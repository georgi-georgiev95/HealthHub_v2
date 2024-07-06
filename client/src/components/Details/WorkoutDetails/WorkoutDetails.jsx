import styles from "./WorkoutDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneWorkout, deleteWorkout } from "../../../services/workoutService";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import DeleteConfirmationModal from "../../Shared/DeleteModal/DeleteConfirmationModal";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";

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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getOneWorkout(id, setWorkout);
      setLoading(false);
    })();
  }, [id]);

  const deleteHandler = async () => {
    try {
      await deleteWorkout(id);
      navigate("/catalog/workouts");
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false);
  };

  if (loading) {
    return <SecondaryLoader />;
  }

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
              <span className={styles.exerciseName}>
                {exercise.exerciseName}
              </span>
              <span className={styles.exerciseSets}>Sets: {exercise.sets}</span>
              <span className={styles.exerciseReps}>Reps: {exercise.reps}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttons}>
        {user.userId === workout.ownerId && (
          <Link to={`edit`}>
            <button className={styles.editButton}>Edit</button>
          </Link>
        )}
        {user.userId === workout.ownerId && (
          <button className={styles.deleteButton} onClick={openDeleteModal}>
            Delete
          </button>
        )}
        {user.userId !== workout.ownerId &&
          user.userId !== "" &&
          user.userId !== undefined && (
            <button className={styles.likeButton}>Like</button>
          )}
      </div>

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onCancel={closeDeleteModalHandler}
        onConfirm={deleteHandler}
      />
    </div>
  );
};

export default WorkoutDetails;
