import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import styles from "./AuthForms.module.css";
import { firebaseAuth } from "../../config/firebase";
import { updateProfile } from "firebase/auth";
import { useUser } from "../../contexts/UserContext";
import {
  validateEmail,
  validatePassword,
  validateRePassword,
  validateUsername,
} from "../../utils/authInputValidator";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

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

    if (userData.password !== userData.rePassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const userCredential = await firebaseAuth.register(
        userData.email,
        userData.password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: userData.username,
      });

      setUser({
        userId: user.uid,
        email: user.email,
        username: userData.username,
      });

      navigate("/");
    } catch (error) {
      setError({ ...error, email: "Email already registered!" });
      setUserData({ ...userData, password: "", rePassword: "" });
      return;
    }
  };

  return (
    <form className={styles.authForm} onSubmit={submitHandler}>
      <header className={styles.header}>
        <h1>Register</h1>
      </header>

      <fieldset>
        <legend>User details:</legend>
        <div
          className={`${styles.field} ${styles.text} ${styles.iconUsername}`}
        >
          <input
            type="text"
            id="username"
            ref={inputRef}
            value={userData.username}
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
              validateUsername(e, error, setError);
            }}
            required
          />
          <i className="fa fa-user"></i>
          <label htmlFor="username">Username:</label>
          {error.username && <p className={styles.error}>{error.username}</p>}
        </div>

        <div className={`${styles.field} ${styles.text} ${styles.iconEmail}`}>
          <input
            type="email"
            id="email"
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
      </fieldset>

      <fieldset>
        <legend>Password section:</legend>
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

        <div
          className={`${styles.field} ${styles.text} ${styles.iconPassword}`}
        >
          <input
            type="password"
            id="rePassword"
            value={userData.rePassword}
            onChange={(e) => {
              setUserData({ ...userData, rePassword: e.target.value });
              validateRePassword(e, userData.password, error, setError);
            }}
          />
          <i className="fa fa-key"></i>
          <label htmlFor="rePassword">Repeat Password:</label>
          {error.rePassword && (
            <p className={styles.error}>{error.rePassword}</p>
          )}
        </div>
      </fieldset>

      <input className={styles.submit} type="submit" value="Register" />
      <Link className={styles.link} to="/users/login">
        Already registered? Login here!
      </Link>
    </form>
  );
};

export default Register;
