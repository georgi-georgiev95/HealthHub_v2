import styles from './Navigation.module.css'
import { firebaseAuth } from '../../config/firebase'
import {useUser} from '../../contexts/UserContext'
import {Link, useNavigate} from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate();
  const {user, setUser} = useUser();

  const logoutHandler = async () => {
    await firebaseAuth.logout();
    setUser({});
    navigate("/");
  };

  return (
    <>
      {user.username && (
        <p className={styles.username}>Welcome, {user.username}</p>
      )}
      <nav className={styles.siteNavigation}>
        <ul>
          <Link to="/">Home</Link>
          <Link to="catalog">Catalog</Link>
        </ul>
        <ul>
          {user.email ? (
            <Link onClick={logoutHandler}>Logout</Link>
          ) : (
            <>
              <Link to="users/login">Login</Link>
              <Link to="users/register">Register</Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;