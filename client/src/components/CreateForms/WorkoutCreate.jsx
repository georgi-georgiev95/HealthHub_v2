import styles from "./CreateForm.module.css";

const CreateWorkout = () => {
  return (
    <>
      <h1 className={styles.formTitle}>Create Workout</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Exercises</label>
          <textarea name="ingredients" id="ingredients" />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Add Workout
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateWorkout;
