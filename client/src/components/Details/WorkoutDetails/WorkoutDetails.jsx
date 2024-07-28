import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./WorkoutDetails.module.css";
import useFetch from "../../../hooks/useFetch";
import { getOneWorkout, deleteWorkout, setLikes } from "../../../services/workoutService";
import DeleteConfirmationModal from "../../Shared/DeleteModal/DeleteConfirmationModal";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";
import isBackButtonClicked from "../../../utils/experimentalBackButton";
import CommentSection from "../../Comments/CommentSection/CommentSection";

const WorkoutDetails = () => {
  const { id } = useParams();
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const { data: workout, comments, loading, setDataHandler } = useFetch(getOneWorkout, id, user.userId);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const handleLikeAction = async () => {
    try {
      await setLikes(user.userId, id);
      setDataHandler(workout);
    } catch (error) {
      console.log(error);
    }
  };


  const handleBackButtonClick = (e) => {
    if (isBackButtonClicked(e)) {
      navigate("/catalog/workouts");
    }
  };


  if (loading) {
    return <SecondaryLoader />;
  }

  if (!loading && workout.title === "") {
    navigate("/404");
    return;
  }

  return (
    <>
      <div className={styles.container} onClick={handleBackButtonClick}>
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
              workout.likes.includes(user.userId) ?
                <button className={styles.likeButton} onClick={handleLikeAction}>Remove from favorites</button>
                :
                <button className={styles.likeButton} onClick={handleLikeAction}>Add to favorites</button>
            )}
        </div>

        <DeleteConfirmationModal
          isOpen={showDeleteModal}
          onCancel={closeDeleteModalHandler}
          onConfirm={deleteHandler}
          title={workout.title}
        />
      </div>
      <CommentSection comments={comments} />
    </>
  );
};

export default WorkoutDetails;
