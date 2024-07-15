import styles from "./Catalog.module.css";
import { LargeRecipesLink } from "../../Shared/LargeLinks/LargeRecipesLink";
import { LargeWorkoutsLink } from "../../Shared/LargeLinks/LargeWorkoutsLink";

const Catalog = () => {
  return (
    <>
      <h2 className={styles.catalogIntro}>Explore our catalog</h2>
      <div className={styles.createHomeView}>
          <LargeRecipesLink destination={'/catalog/recipes'}/>
        <div className={styles.logo}></div>
          <LargeWorkoutsLink destination={'/catalog/workouts'} />
      </div>
    </>
  );
};

export default Catalog;
