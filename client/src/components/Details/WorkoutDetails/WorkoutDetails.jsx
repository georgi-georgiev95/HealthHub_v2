import styles from "./WorkoutDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneWorkout, deleteWorkout, setLikes } from "../../../services/workoutService";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import DeleteConfirmationModal from "../../Shared/DeleteModal/DeleteConfirmationModal";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";
import isBackButtonClicked from "../../../utils/experimentalBackButton";
import CommentSection from "../../Comments/CommentSection/CommentSection";
import { getAllComments } from "../../../services/commentService";

const WorkoutDetails = () => {
  const [workout, setWorkout] = useState({
    title: "",
    description: "",
    difficulty: "",
    goal: "",
    exercises: [],
    likes: [],
    ownerId: "",
    ownerName: "",
  });
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user, isCommentCreated, setIsCommentCreated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsCommentCreated(false);
      await getOneWorkout(id, setWorkout);
      await getAllComments(id, setComments);
      setLoading(false);
    })();
  }, [id, isCommentCreated]);

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
      setWorkout((prevWorkout) => {
        const userHasLiked = prevWorkout.likes.includes(user.userId);
        const updatedLikes = userHasLiked
          ? prevWorkout.likes.filter((like) => like !== user.userId)
          : [...prevWorkout.likes, user.userId];

        return { ...prevWorkout, likes: updatedLikes };
      });
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
      <CommentSection comments={comments}/>
    </>
  );
};

export default WorkoutDetails;
