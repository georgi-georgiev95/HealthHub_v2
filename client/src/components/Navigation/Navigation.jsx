import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";
import useNavigation from "../../hooks/useNavigation";
import Weather from "../Weather/Weather";

const Navigation = () => {
  const {
    user,
    mobileNavStatus,
    profileDetailsVisibility,
    handleLogout,
    expandNav,
    collapseNav,
    expandProfile,
  } = useNavigation();

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
            {user?.username && (
              <Link onClick={collapseNav} to="create">
                Add
              </Link>
            )}
          </ul>
          <Weather />
          <ul className={styles.profileDropdown}>
            {user?.email ? (
              <>
                {user?.username && (
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
            {user?.username && (
              <>
                <Link onClick={collapseNav} to="create">
                  Add
                </Link>
                <Link onClick={collapseNav} to="users/profile">
                  Profile
                </Link>
              </>
            )}
            {user?.email ? (
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
            <p className={styles.username}>Welcome, {user?.username}!</p>
            <Link onClick={collapseNav} to="users/profile">
              Profile
            </Link>
            <Link onClick={handleLogout}>Logout</Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;
