import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../RecipeCatalog.module.css";

const RecipeGridCard = ({ recipeData }) => {
  const difficulty = "⭐".repeat(recipeData.difficulty);

  return (
    <Link to={`/catalog/recipes/${recipeData.id}`} key={recipeData.id}>
      <div className={styles.flipCard} key={recipeData.id}>
        <div className={styles.flipCardInner}>
          <div
            className={styles.flipCardFront}
            style={{
              backgroundImage: `url(${recipeData.image})`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div className={styles.flipCardBack}>
            <h2>{recipeData.title}</h2>
            <p>Difficulty: {difficulty}</p>
            <p>Added by: {recipeData.ownerName}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

RecipeGridCard.propTypes = {
  recipeData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    difficulty: PropTypes.number.isRequired,
    ownerName: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeGridCard;
