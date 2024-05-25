import styles from "./Loader.module.css";
import { useUser } from "../../contexts/UserContext";

const Loader = () => {
  const { loading } = useUser();

  if (!loading) return null;

  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
