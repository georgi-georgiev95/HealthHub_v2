import styles from "./AuthForms.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { validateEmail, validatePassword, validateRePassword, validateUsername } from "../../utils/authInputValidator";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState({ email: "", password: "", rePassword: "" });

  const navigate = useNavigate();
  const { setUser } = useUser();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    if (password !== rePassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const userCredential = await firebaseAuth.register(email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });

      setUser({ userId: user.uid, email: user.email, username: username });
      
      navigate("/");
    } catch (error) {
      setError({ ...error, email: "Email already registered!" });
      setPassword("");
      setRePassword("");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={(e) => validateUsername(e, error, setError)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateEmail(e, error, setError)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => validatePassword(e, error, setError)}
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
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            onBlur={(e) => validateRePassword(e, password, error, setError)}
          />
          <i className="fa fa-key"></i>
          <label htmlFor="rePassword">Repeat Password:</label>
          {error.rePassword && (
            <p className={styles.error}>{error.rePassword}</p>
          )}
        </div>
      </fieldset>

      <input className={styles.submit} type="submit" value="Register" />
      <Link className={styles.link} to="/users/login">Already registered? Login here!</Link>
    </form>
  );
};

export default Register;
