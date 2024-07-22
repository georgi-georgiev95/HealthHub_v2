import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./WorkoutGridCard.module.css";
import fatLossImage from "/images/fatLoss.png";
import muscleGainImage from "/images/muscleGain.png";

const WorkoutGridCard = ({ title, difficulty, goal, ownerName, id }) => {
  const imageSrc = goal === "Weight Loss" ? fatLossImage : muscleGainImage;
  const background =
    goal === "Weight Loss"
      ? "linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)"
      : goal === "Muscle Gain"
      ? "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
      : "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)";

  return (
    <Link to={`/catalog/workouts/${id}`} className={styles.link}>
      <div className={styles.card} style={{ background }}>
        <div className={styles.leftSide}>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.difficulty}>Difficulty: {difficulty}</p>
          <p className={styles.goal}>Goal: {goal}</p>
          <p className={styles.owner}>Added by: {ownerName}</p>
        </div>
        <img src={imageSrc} alt="Workout" className={styles.image} />
      </div>
    </Link>
  );
};

WorkoutGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default WorkoutGridCard;
