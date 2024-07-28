import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./UserProfile.module.css";
import {
  getUserRecipes,
  getUserWorkouts,
  getUserLikedRecipes,
  getUserLikedWorkouts,
} from "../../services/userService";
import SecondaryLoader from "../Shared/SecondaryLoader/SecondaryLoader";
import CreatedSection from "./CreatedSection/CreatedSection";
import LikedSection from "./LikedSection/LikedSection";

const UserProfile = () => {
  const [recipes, setRecipes] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [likedWorkouts, setLikedWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const recipes = await getUserRecipes(user.userId);
      const workouts = await getUserWorkouts(user.userId);
      const likedRecipes = await getUserLikedRecipes(user.userId);
      const likedWorkouts = await getUserLikedWorkouts(user.userId);
      setRecipes(recipes);
      setWorkouts(workouts);
      setLikedRecipes(likedRecipes);
      setLikedWorkouts(likedWorkouts);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <SecondaryLoader />;
  }

  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.greeting}>
        <h2>Welcome, {user.username}!</h2>
        <span>This is your user profile.</span>
      </div>
      <div className={styles.container}>
        <CreatedSection recipes={recipes} workouts={workouts} />
        <LikedSection
          likedRecipes={likedRecipes}
          likedWorkouts={likedWorkouts}
        />
      </div>
    </div>
  );
};

export default UserProfile;
