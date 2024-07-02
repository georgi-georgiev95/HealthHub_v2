import styles from './UserProfile.module.css'
import { useUser } from "../../contexts/UserContext";
import { useState, useEffect } from 'react';
import { getUserRecipes } from '../../services/userService';
import RecipeProfileCard from './RecipeProfileCard/RecipeProfileCard';
import SecondaryLoader from '../Shared/SecondaryLoader/SecondaryLoader';

const UserProfile = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser();

    useEffect(() => {
        (async () => {
            setLoading(true);
            await getUserRecipes(user.userId, setRecipes);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <SecondaryLoader />
    }

    return (
      <div className={styles.userProfileContainer}>
        <div className={styles.greeting}>
          <h2>Welcome, {user.username}!</h2>
          <span>This is your user profile.</span>
        </div>

        <div className={styles.recipes}>
          <h3>Your Recipes:</h3>
          {recipes.length === 0 && (
            <p className={styles.noRecipes}>You haven&apos;t created any recipes yet.</p>
          )}
          <ul className={styles.recipeList}>
            {recipes.map((recipe) => (
              <RecipeProfileCard key={recipe.id} recipeData={recipe} />
            ))}
          </ul>
        </div>
      </div>
    );
};

export default UserProfile;