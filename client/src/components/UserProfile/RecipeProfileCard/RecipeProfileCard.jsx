import PropTypes from "prop-types";
import styles from "../Card.module.css";
import { Link } from "react-router-dom";

const RecipeProfileCard = ({ recipeData }) => {
  const difficulty = "⭐".repeat(recipeData.difficulty);

  return (
    <Link to={`/catalog/recipes/${recipeData.id}`} className={styles.link}>
      <div className={styles.card}>
        <img src={recipeData.image} alt="recipe" />
        <span>{difficulty}</span>
        <p>{recipeData.title}</p>
      </div>
    </Link>
  );
};

RecipeProfileCard.propTypes = {
  recipeData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    difficulty: PropTypes.number.isRequired,
    ownerName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeProfileCard;
