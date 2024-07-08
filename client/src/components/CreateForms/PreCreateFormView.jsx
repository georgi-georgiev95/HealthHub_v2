import { Link } from "react-router-dom";
import styles from "./PreCreateFormView.module.css";
import { LargeRecipesLink } from "../Shared/LargeLinks/LargeRecipesLink";
import { LargeWorkoutsLink } from "../Shared/LargeLinks/LargeWorkoutsLink";

const PreCreateFormView = () => {
  return (
    <>
      <h2 className={styles.catalogIntro}>Create your own</h2>
      <div className={styles.createHomeView}>
        <Link className={styles.groupLink} to="/create/recipe">
          <LargeRecipesLink />
        </Link>
        <div className={styles.logo}></div>
        <Link
          className={`${styles.groupLink} ${styles.reverse}`}
          to="/create/workout"
        >
          <LargeWorkoutsLink />
        </Link>
      </div>
    </>
  );
};

export default PreCreateFormView;
