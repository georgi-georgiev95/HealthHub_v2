import styles from './AuthForms.module.css';
import { useState } from 'react';

const Register = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

   const submitHandler = (e) => {
     e.preventDefault();

     console.log(email, password);

     setEmail("");
       setPassword("");
       setRePassword("");
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
       <div>
         <label htmlFor="rePassword">Repeat Password:</label>
         <input
           className={styles.field}
           type="password"
           id="rePassword"
           value={rePassword}
           onChange={(e) => setRePassword(e.target.value)}
         />
       </div>
       <div className={styles.buttons}>
         <button className={styles.button} type="submit">
           Register
         </button>
       </div>
     </form>
   );
};

export default Register;