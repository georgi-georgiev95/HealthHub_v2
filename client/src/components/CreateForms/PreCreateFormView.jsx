import styles from "./PreCreateFormView.module.css";
import { LargeRecipesLink } from "../Shared/LargeLinks/LargeRecipesLink";
import { LargeWorkoutsLink } from "../Shared/LargeLinks/LargeWorkoutsLink";

const PreCreateFormView = () => {
  return (
    <>
      <h2 className={styles.catalogIntro}>Create your own</h2>
      <div className={styles.createHomeView}>
          <LargeRecipesLink destination={'/create/recipe'} />
        <div className={styles.logo}></div>
          <LargeWorkoutsLink destination={'/create/workout'} />
      </div>
    </>
  );
};

export default PreCreateFormView;
