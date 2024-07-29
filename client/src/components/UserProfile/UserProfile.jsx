import styles from "./UserProfile.module.css";
import useFetchUserProfileData from "../../hooks/useFetchUserProfileData";
import SecondaryLoader from "../Shared/SecondaryLoader/SecondaryLoader";
import CreatedSection from "./CreatedSection/CreatedSection";
import LikedSection from "./LikedSection/LikedSection";

const UserProfile = () => {
  const { recipes, workouts, likedRecipes, likedWorkouts, loading, user } =
    useFetchUserProfileData();

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
