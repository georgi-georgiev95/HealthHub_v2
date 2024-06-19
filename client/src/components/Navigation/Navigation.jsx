import styles from "./Navigation.module.css";
import { firebaseAuth } from "../../config/firebase";
import { useUser } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [mobileNavStatus, setMobileNavStatus] = useState(false);

  const logoutHandler = async () => {
    await firebaseAuth.logout();
    setUser({});
    navigate("/");
  };

  const expandNav = () => {
    setMobileNavStatus(!mobileNavStatus);
  }

  return (
      <div className={styles.navWrapper}>
        <div className={styles.navContent}>
          {user.username && (
            <p className={styles.username}>Welcome, {user.username}!</p>
          )}
          <nav className={styles.siteNavigation}>
              <Link to="/"><p className={styles.logo}></p></Link>
            <ul>
              <Link to="catalog">Catalog</Link>
              {user.username && <Link to="create">Add</Link>}
            </ul>
            <ul>
              {user.email ? (
                <Link onClick={logoutHandler}>Logout</Link>
              ) : (
                <>
                  <Link to="users/login">Sign in</Link>
                  <Link to="users/register" className={styles.signUp}>Sign up</Link>
                </>
              )}
            </ul>
            {mobileNavStatus ? <i onClick={expandNav} className="fa-solid fa-x"></i> : <i onClick={expandNav} className="fa-solid fa-bars"></i> }         
          </nav>
          {mobileNavStatus && 
            <ul className={styles.dropDown}>
              <Link to="catalog">Catalog</Link>
              {user.username && <Link to="create">Add</Link>}
              {user.email ? (
                <Link onClick={logoutHandler}>Logout</Link>
              ) : (
                <>
                  <Link to="users/login">Sign in</Link>
                  <Link to="users/register" className={styles.signUp}>Sign up</Link>
                </>
              )}
            </ul>}
        </div>
      </div>
  );
};

export default Navigation;
