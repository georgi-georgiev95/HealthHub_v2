import styles from "./Navigation.module.css";
import { firebaseAuth } from "../../config/firebase";
import { useUser } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import {useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [mobileNavStatus, setMobileNavStatus] = useState(false);
  const [profileDetailsVisibility, setProfileDetailsVisibility] = useState(false);


  const handleLogout = async () => {
    await logoutHandler();
    collapseNav();
  }

  const logoutHandler = async () => {
    await firebaseAuth.logout();
    setUser({});
    navigate("/");
  };

  const expandNav = () => {
    setMobileNavStatus(!mobileNavStatus);
  }

  const collapseNav = () => {
    setMobileNavStatus(false);
    setProfileDetailsVisibility(false);
  }

  const expandProfile = () => {
    setProfileDetailsVisibility(!profileDetailsVisibility);
  }

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContent}>
        <nav className={styles.siteNavigation}>
          <Link onClick={collapseNav} to="/">
            <p className={styles.logo}></p>
          </Link>
          <ul>
            <Link onClick={collapseNav} to="catalog">
              Catalog
            </Link>
            {user.username && (
              <Link onClick={collapseNav} to="create">
                Add
              </Link>
            )}
          </ul>
          <ul className={styles.profileDropdown}>
            {user.email ? (
              <>
                {user.username && (
                  <>
                    <button onClick={expandProfile}>
                      <i className="fa-regular fa-user"></i>
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <Link to="users/login">Sign in</Link>
                <Link to="users/register" className={styles.signUp}>
                  Sign up
                </Link>
              </>
            )}
          </ul>
          {mobileNavStatus ? (
            <i
              onClick={expandNav}
              className="fa-solid fa-x"
              style={{ color: "#ffffff" }}
            ></i>
          ) : (
            <i
              onClick={expandNav}
              className="fa-solid fa-bars"
              style={{ color: "#ffffff" }}
            ></i>
          )}
        </nav>
        {mobileNavStatus && (
          <ul className={styles.dropDown}>
            <Link onClick={collapseNav} to="catalog">
              Catalog
            </Link>
            {user.username && (
              <Link onClick={collapseNav} to="create">
                Add
              </Link>
            )}
            {user.email ? (
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <>
                <Link onClick={collapseNav} to="users/login">
                  Sign in
                </Link>
                <Link
                  onClick={collapseNav}
                  to="users/register"
                  className={styles.signUp}
                >
                  Sign up
                </Link>
              </>
            )}
          </ul>
        )}
        {profileDetailsVisibility && (
          <ul className={styles.profileMenu}>
            <p className={styles.username}>Welcome, {user.username}!</p>
            <Link>Profile</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;
