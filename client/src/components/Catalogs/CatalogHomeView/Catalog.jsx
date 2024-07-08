import { Link } from "react-router-dom";
import styles from "./Catalog.module.css";
import { LargeRecipesLink } from "../../Shared/LargeLinks/LargeRecipesLink";
import { LargeWorkoutsLink } from "../../Shared/LargeLinks/LargeWorkoutsLink";

const Catalog = () => {
  return (
    <>
      <h2 className={styles.catalogIntro}>Explore our catalog</h2>
      <div className={styles.createHomeView}>
        <Link className={styles.groupLink} to="/catalog/recipes">
          <LargeRecipesLink />
        </Link>
        <div className={styles.logo}></div>
        <Link
          className={`${styles.groupLink} ${styles.reverse}`}
          to="/catalog/workouts"
        >
          <LargeWorkoutsLink />
        </Link>
      </div>
    </>
  );
};

export default Catalog;
