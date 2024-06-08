import styles from "./AuthForms.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
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
      const user = await firebaseAuth.register(email, password)
      await updateProfile(user.user, {
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
    <>
      <h2 className={styles.authFormIntro}>Join our community!</h2>
      <form className={styles.authForm} onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className={error.username ? styles.fieldError : styles.field}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={(e) => validateUsername(e, error, setError)}
          />
        </div>
        {error.username && <p className={styles.error}>{error.username}</p>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={error.email ? styles.fieldError : styles.field}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateEmail(e, error, setError)}
          />
        </div>
        {error.email && <p className={styles.error}>{error.email}</p>}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className={error.email ? styles.fieldError : styles.field}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => validatePassword(e, error, setError)}
          />
        </div>
        {error.password && <p className={styles.error}>{error.password}</p>}
        <div>
          <label htmlFor="rePassword">Repeat Password:</label>
          <input
            className={error.email ? styles.fieldError : styles.field}
            type="password"
            id="rePassword"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            onBlur={(e) => validateRePassword(e, password, error, setError)}
          />
        </div>
        {error.rePassword && <p className={styles.error}>{error.rePassword}</p>}
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Register
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={() => navigate("/users/login")}
          >
            Already an user ?
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
