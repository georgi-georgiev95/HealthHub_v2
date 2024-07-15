import styles from './CatalogsSection.module.css'
import { Link } from 'react-router-dom'

const CatalogsSection = () => {
  return (
    <section className={styles.catalogIntro}>
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
  )
};

export default CatalogsSection; 