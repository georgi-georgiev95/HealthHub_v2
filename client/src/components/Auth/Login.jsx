import styles from "./AuthForms.module.css";
import { useState, useRef, useEffect } from "react";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import {
  validateEmail,
  validatePassword,
} from "../../utils/authInputValidator";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { setUser } = useUser();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      return;
    }

    try {
      const userCredential = await firebaseAuth.login(
        userData.email,
        userData.password
      );
      const user = userCredential.user;

      setUser({
        userId: user.uid,
        email: user.email,
        username: user.displayName,
      });
      navigate("/");
    } catch (error) {
      setError({ ...error, email: "Invalid email or password!" });
      setUserData({ ...userData, password: "" });
    }
  };

  return (
    <form className={styles.authForm} onSubmit={submitHandler}>
      <header className={styles.header}>
        <h1>Login</h1>
      </header>

      <fieldset>
        <legend>User details:</legend>
        <div className={`${styles.field} ${styles.text} ${styles.iconEmail}`}>
          <input
            type="email"
            id="email"
            ref={inputRef}
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
              validateEmail(e, error, setError);
            }}
            required
          />
          <i className="fa fa-envelope"></i>
          <label htmlFor="email">Email:</label>
          {error.email && <p className={styles.error}>{error.email}</p>}
        </div>

        <div
          className={`${styles.field} ${styles.text} ${styles.iconPassword}`}
        >
          <input
            type="password"
            id="password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
              validatePassword(e, error, setError);
            }}
            required
          />
          <i className="fa fa-key"></i>
          <label htmlFor="password">Password:</label>
          {error.password && <p className={styles.error}>{error.password}</p>}
        </div>
      </fieldset>

      <input className={styles.submit} type="submit" value="Login" />
      <Link className={styles.link} to="/users/register">
        Don&apos;t have an account? Register here!
      </Link>
    </form>
  );
};

export default Login;
