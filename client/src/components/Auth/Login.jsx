import styles from "./AuthForms.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useUser();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebaseAuth.login(email, password);
      const user = userCredential.user;

      setUser({ userId: user.uid, email: user.email });
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.authForm} onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className={styles.field}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className={styles.field}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
