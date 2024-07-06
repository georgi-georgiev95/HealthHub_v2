import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

const Home = () => {
  const catalogIntroRef = useRef(null);

  const handleScrollToCatalog = () => {
    if (catalogIntroRef.current) {
      catalogIntroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={styles.home}>
        <div className={styles.homeContent}>
          <h1>Welcome to HealthHub</h1>
          <p>Your gateway to delicious recipes and invigorating workouts.</p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
            alt="Create Recipe"
          />
          <h2>Create a Recipe</h2>
          <p>Craft and share your unique recipes with the community.</p>
          <Link to="/create/recipe" className={styles.featureButton}>
            Start Now
          </Link>
        </div>
        <div className={styles.arrow} onClick={handleScrollToCatalog}>
          <p>Check out what other users have created</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className={styles.feature}>
          <img
            src="https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
            alt="Create Workout"
          />
          <h2>Create a Workout</h2>
          <p>Design and share workout routines tailored to your needs.</p>
          <Link to="/create/workout" className={styles.featureButton}>
            Start Now
          </Link>
        </div>
      </section>

      <section ref={catalogIntroRef} className={styles.catalogIntro}>
        <div className={styles.catalogContent}>
          <h2>Discover More</h2>
          <p>
            Explore our catalog of recipes and workouts designed to inspire and
            motivate you.
          </p>
          <Link to="/catalog" className={styles.catalogLink}>
            Go to Catalog
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
