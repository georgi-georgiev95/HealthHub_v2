import { useSelector } from "react-redux";

import styles from "./Loader.module.css";

const Loader = () => {
  const loading = useSelector((state) => state.auth.loading);

  if (!loading) return null;

  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
