import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./RecipeDetails.module.css";
import useFetch from "../../../hooks/useFetch";
import { getOneRecipe, deleteRecipe, setLikes } from "../../../services/recipeService";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";
import DeleteConfirmationModal from "../../Shared/DeleteModal/DeleteConfirmationModal";
import isBackButtonClicked from "../../../utils/experimentalBackButton";
import CommentSection from "../../Comments/CommentSection/CommentSection";

const RecipeDetails = () => {
  const { id } = useParams();
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const { data: recipe, comments, loading, setDataHandler } = useFetch(getOneRecipe, id, user.userId,);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleBackButtonClick = (e) => {
    if (isBackButtonClicked(e)) {
      navigate("/catalog/recipes");
    }
  };

  const deleteHandler = async () => {
    try {
      await deleteRecipe(id);
      navigate("/catalog/recipes");
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
      setDataHandler(recipe);
    } catch (error) {
      console.log(error);
    }
  };


  if (loading) {
    return <SecondaryLoader />;
  }

  if (!loading && recipe.title === "") {
    navigate("/404");
    return;
  }

  return (
    <>
      <div className={styles.detailsContainer} onClick={handleBackButtonClick}>
        <h2>{recipe.title}</h2>
        <div className={styles.details}>
          <img src={recipe.image} alt={recipe.title} className={styles.image} />
          <div className={styles.description}>
            <p>{recipe.description}</p>
            <p>
              <i className="fa-solid fa-utensils"></i> Ingredients:
            </p>
            <ul className={styles.ingredientList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className={styles.buttons}>
              {user.userId === recipe.ownerId && (
                <Link to={`edit`}>
                  <button className={styles.editButton}>Edit</button>
                </Link>
              )}
              {user.userId === recipe.ownerId && (
                <button className={styles.deleteButton} onClick={openDeleteModal}>
                  Delete
                </button>
              )}
              {user.userId !== recipe.ownerId &&
                user.userId !== "" &&
                user.userId !== undefined && (
                  recipe.likes.includes(user.userId) ?
                    <button className={styles.likeButton} onClick={handleLikeAction}>Remove from favorites</button>
                    :
                    <button className={styles.likeButton} onClick={handleLikeAction}>Add to favorites</button>
                )}
            </div>
          </div>
        </div>


        <DeleteConfirmationModal
          isOpen={showDeleteModal}
          onCancel={closeDeleteModalHandler}
          onConfirm={deleteHandler}
          title={recipe.title}
        />
      </div>
      <CommentSection comments={comments} />
    </>
  );
};

export default RecipeDetails;
