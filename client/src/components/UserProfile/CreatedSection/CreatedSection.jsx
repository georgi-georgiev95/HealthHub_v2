import styles from './CreatedSection.module.css'
import EmptyList from '../EmptyList/EmptyList';
import EntityList from '../EntityList/EntityList';

const CreatedSection = ({
    recipes,
    workouts
}) => {
    return(
        <div className={styles.created}>
          <div className={styles.entity}>
            <h3>Your Recipes:</h3>
            <EmptyList entries={recipes} type={'created'} entity={'recipes'}/>
            <EntityList data={recipes} type={'recipes'}/>
          </div>

          <div className={styles.entity}>
            <h3>Your Workouts:</h3>
            <EmptyList entries={workouts} type={'created'} entity={'workouts'}/>
            <EntityList data={workouts} type={'workouts'}/>
          </div>
        </div>
    )
};

export default CreatedSection;