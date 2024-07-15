import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import HomeFeature from "./HomeFeature/HomeFeature";

const Home = () => {
  const recipesFeatureURL = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505';
  const workoutsFeatureURL = 'https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=';

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
        <HomeFeature
          imageUrl={recipesFeatureURL}
          destination={'/create/recipe'}
          title={'Create a Workout'}
          message={'Design and share workout routines tailored to your needs.'}
        />

        <div className={styles.arrow} onClick={handleScrollToCatalog}>
          <p>Check out what other users have created</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <HomeFeature
          imageUrl={workoutsFeatureURL}
          destination={'/create/workout'}
          title={'Create a Workout'}
          message={'Design and share workout routines tailored to your needs.'}
        />
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
