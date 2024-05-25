import styles from './AuthForms.module.css';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(email, password);

        setEmail('');
        setPassword('');
    }

    return (
      <form className={styles.authForm} onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input className={styles.field} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className={styles.field} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">Login</button>
        </div>
      </form>
    );
};

export default Login;