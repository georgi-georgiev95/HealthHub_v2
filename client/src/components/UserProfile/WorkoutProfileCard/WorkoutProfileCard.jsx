import PropTypes from "prop-types";
import styles from "./WorkoutProfileCard.module.css";
import { Link } from "react-router-dom";
import fatLossImage from "../../Catalogs/WorkoutCatalog/WorkoutGridCard/assets/fatLoss.png";
import muscleGainImage from "../../Catalogs/WorkoutCatalog/WorkoutGridCard/assets/muscleGain.png";



const WorkoutProfileCard = ({ id, workoutTitle, workoutGoal }) => {
  const image = workoutGoal == "Weight Loss" ? fatLossImage : muscleGainImage;
  
  return (
    <Link to={`/catalog/workouts/${id}`} className={styles.link}>
      <div className={styles.workoutCard}>
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