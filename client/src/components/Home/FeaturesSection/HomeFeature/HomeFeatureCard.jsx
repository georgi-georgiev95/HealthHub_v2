import { Link } from 'react-router-dom';

import styles from './HomeFeatureCard.module.css'

const HomeFeatureCard = ({
  destination,
  imageUrl,
  title,
  message
}) => {
  return (
    <div className={styles.feature}>
      <img
        src={imageUrl}
      />
      <h2>{title}</h2>
      <p>{message}</p>
      <Link to={destination} className={styles.featureButton}>
        Start Now
      </Link>
    </div>
  )
};

export default HomeFeatureCard;