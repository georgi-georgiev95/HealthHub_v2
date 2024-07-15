import styles from './LikedSection.module.css';
import EmptyList from '../EmptyList/EmptyList';
import EntityList from '../EntityList/EntityList';

const LikedSection = ({
    likedRecipes,
    likedWorkouts
}) => {
    return(
        <div className={styles.liked}>
          <div className={styles.entity}>
            <h3>Your Liked Recipes:</h3>
            <EmptyList entries={likedRecipes} type={'liked'} entity={'recipes'}/>
            <EntityList data={likedRecipes} type={'recipes'}/>
          </div>

          <div className={styles.entity}>
            <h3>Your Liked Workouts:</h3>
            <EmptyList entries={likedWorkouts} type={'liked'} entity={'workouts'}/>
            <EntityList data={likedWorkouts} type={'workouts'}/>
          </div>
        </div>
    )
};


export default LikedSection;