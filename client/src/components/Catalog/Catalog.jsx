import {Link} from 'react-router-dom'
import styles from './Catalog.module.css'

const Catalog = () => {
    return (
      <>
        <h2 className={styles.catalogIntro}>Explore our catalog</h2>
        <div className={styles.createHomeView}>
          <Link className={styles.groupLink} to="/catalog/recipes">
            <div className={styles.groupLink}>
              <div className={styles.upperSide}>
                <img
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
                  alt=""
                />
              </div>
              <div className={styles.bottomSide}>
                <h3>Recipes</h3>
              </div>
            </div>
          </Link>
          <div className={styles.logo}></div>
          <Link
            className={`${styles.groupLink} ${styles.reverse}`}
            to="/catalog/workouts"
          >
            <div className={`${styles.groupLink} ${styles.reverse}`}>
              <div className={styles.bottomSide}>
                <img
                  src="https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
                  alt=""
                />
              </div>
              <div className={styles.upperSide}>
                  <h3>Workouts</h3>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
};

export default Catalog;