import { Link } from "react-router-dom";
import styles from './CreateHomeView.module.css'

const CreateHomeView = () => {
    return (
        <div className={styles.createHomeView}>
            <div className={styles.groupLink}>
                <Link to="/create/recipe"><h3>Recipe</h3></Link>
            </div>
            <div className={styles.groupLink}>
                <Link to="/create/workout"><h3>Workout</h3></Link>
            </div>
        </div>
    )
};

export default CreateHomeView;