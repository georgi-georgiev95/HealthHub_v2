import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneRecipe, deleteRecipe, setLikes } from "../../../services/recipeService";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import styles from "./RecipeDetails.module.css";
import SecondaryLoader from "../../Shared/SecondaryLoader/SecondaryLoader";
import DeleteConfirmationModal from "../../Shared/DeleteModal/DeleteConfirmationModal";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    description: "",
    likes: [],
    ingredients: [],
    ownerId: "",
  });
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { id } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await getOneRecipe(id, setRecipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);


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
      setRecipe((prevRecipe) => {
        const userHasLiked = prevRecipe.likes.includes(user.userId);
        const updatedLikes = userHasLiked
          ? prevRecipe.likes.filter((like) => like !== user.userId)
          : [...prevRecipe.likes, user.userId];

        return { ...prevRecipe, likes: updatedLikes };
      });
    } catch (error) {
      console.log(error);
    }
  };


  if (loading) {
    return <SecondaryLoader />;
  }

  return (
    <div className={styles.detailsContainer}>
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
  );
};

export default RecipeDetails;
