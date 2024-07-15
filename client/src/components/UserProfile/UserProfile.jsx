import styles from "./UserProfile.module.css";
import { useUser } from "../../contexts/UserContext";
import { useState, useEffect } from "react";
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
  const { user } = useUser();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getUserRecipes(user.userId, setRecipes);
      await getUserWorkouts(user.userId, setWorkouts);
      await getUserLikedRecipes(user.userId, setLikedRecipes);
      await getUserLikedWorkouts(user.userId, setLikedWorkouts);
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
        <LikedSection likedRecipes={likedRecipes} likedWorkouts={likedWorkouts} />
      </div>
    </div>
  );
};

export default UserProfile;
