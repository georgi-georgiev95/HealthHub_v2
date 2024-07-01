import styles from "../RecipeCatalog.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecipeGridCard = ({ recipeData }) => {
    return (
      <Link to={`/catalog/recipes/${recipeData.id}`} key={recipeData.id}>
        <div className={styles["flip-card"]} key={recipeData.id}>
          <div className={styles["flip-card-inner"]}>
            <div
              className={styles["flip-card-front"]}
              style={{
                backgroundImage: `url(${recipeData.image})`,
                backgroundSize: `cover`,
              }}
            ></div>
            <div className={styles["flip-card-back"]}>
              <h2>{recipeData.title}</h2>
              <p>Difficulty level: {recipeData.difficulty}</p>
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