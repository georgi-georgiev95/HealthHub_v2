import { Link } from 'react-router-dom';

import styles from "../../Catalogs/CatalogHomeView/Catalog.module.css";

export const LargeWorkoutsLink = (props) => {
  return (
    <Link className={`${styles.groupLink} ${styles.reverse}`} to={props.destination}>
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
  );
};
