import styles from "./AuthForms.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
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

      const userDoc = await getDoc(doc(firebaseAuth.db(), "users", user.uid));
      const userDataFromDB = userDoc.data();

      setUser({ userId: user.uid, email: user.email, username: userDataFromDB.username });
      navigate("/");
    } catch (error) {
      setError({ ...error, email: "Invalid email or password!" });
      setPassword("");
    }
  };



  return (
    <>
      <h2 className={styles.authFormIntro}>It's nice to have you back!</h2>
      <form className={styles.authForm} onSubmit={submitHandler}>
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
            className={error.password ? styles.fieldError : styles.field}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => validatePassword(e, error, setError)}
          />
        </div>
        {error.password && <p className={styles.error}>{error.password}</p>}
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Login
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={() => navigate("/users/register")}
          >
            Not an user ?
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
