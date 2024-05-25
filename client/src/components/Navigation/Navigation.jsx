import styles from './Navigation.module.css';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
      <nav className={styles.siteNavigation}>
        <ul>
          <Link to="/">Home</Link>
          <Link to="catalog">Catalog</Link>
          <Link to="users/login">Login</Link>
        </ul>
      </nav>
    );
};

export default Navigation;