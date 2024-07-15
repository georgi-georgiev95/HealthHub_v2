import styles from './EntityList.module.css'
import RecipeProfileCard from '../RecipeProfileCard/RecipeProfileCard';
import WorkoutProfileCard from '../WorkoutProfileCard/WorkoutProfileCard';

const EntityList = ({
    data,
    type,
}) => {


    return (
        <ul className={styles.entityList}>
            {type === 'recipes' ?
                data.map((entry) => (
                    <RecipeProfileCard key={entry.id} recipeData={entry} />
                ))
                :
                data.map((workout) => (
                    <WorkoutProfileCard
                        key={workout.id}
                        id={workout.id}
                        workoutTitle={workout.title}
                        workoutGoal={workout.goal}
                    />
                ))
            }
        </ul>
    )
};

export default EntityList;