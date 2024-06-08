import styles from "./RecipeCatalog.module.css";

const RecipeCatalog = () => {
  return (
    <>
      <div className={styles.title}>
        <h2>Recipes</h2>
        <h3>
          <i>For everyone&apos;s taste!</i>
        </h3>
      </div>
      <div className={styles.container}>
        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div
              className={styles["flip-card-front"]}
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: `cover`,
              }}
            ></div>
            <div className={styles["flip-card-back"]}>
              <h1>Salad</h1>
              <p>Difficulty level: 4</p>
              <p>Added by: John Doe</p>
            </div>
          </div>
        </div>

        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div
              className={styles["flip-card-front"]}
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: `cover`,
              }}
            ></div>
            <div className={styles["flip-card-back"]}>
              <h1>Salad</h1>
              <p>Difficulty level: 4</p>
              <p>Added by: John Doe</p>
            </div>
          </div>
        </div>

        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div
              className={styles["flip-card-front"]}
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: `cover`,
              }}
            ></div>
            <div className={styles["flip-card-back"]}>
              <h1>Salad</h1>
              <p>Difficulty level: 4</p>
              <p>Added by: John Doe</p>
            </div>
          </div>
        </div>

        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div
              className={styles["flip-card-front"]}
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: `cover`,
              }}
            ></div>
            <div className={styles["flip-card-back"]}>
              <h1>Salad</h1>
              <p>Difficulty level: 4</p>
              <p>Added by: John Doe</p>
            </div>
          </div>
        </div>

        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div
              className={styles["flip-card-front"]}
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: `cover`,
              }}
            ></div>
            <div className={styles["flip-card-back"]}>
              <h1>Salad</h1>
              <p>Difficulty level: 4</p>
              <p>Added by: John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCatalog;
