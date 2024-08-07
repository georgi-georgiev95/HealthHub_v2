import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../Card.module.css";
import fatLossImage from "/images/fatLoss.png";
import muscleGainImage from "/images/muscleGain.png";

const WorkoutProfileCard = ({ id, workoutTitle, workoutGoal }) => {
  const image = workoutGoal == "Weight Loss" ? fatLossImage : muscleGainImage;

  return (
    <Link to={`/catalog/workouts/${id}`} className={styles.link}>
      <div className={styles.card}>
        <img src={image} alt="workout" />
        <p>{workoutTitle}</p>
      </div>
    </Link>
  );
};

WorkoutProfileCard.propTypes = {
  id: PropTypes.string.isRequired,
  workoutTitle: PropTypes.string.isRequired,
  workoutGoal: PropTypes.string.isRequired,
};

export default WorkoutProfileCard;
