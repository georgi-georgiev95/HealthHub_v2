import styles from "./AuthForms.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { validateEmail, validatePassword } from "../../utils/authInputValidator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { setUser } = useUser();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const userCredential = await firebaseAuth.login(email, password);
      const user = userCredential.user;


      setUser({ userId: user.uid, email: user.email, username: user.displayName });
      navigate("/");
    } catch (error) {
      setError({ ...error, email: "Invalid email or password!" });
      setPassword("");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateEmail(e, error, setError)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => validatePassword(e, error, setError)}
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
