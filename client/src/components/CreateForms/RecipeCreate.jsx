import styles from './CreateForm.module.css'

const CreateRecipe = () => {
  return (
    <>
      <h1 className={styles.formTitle}>Create Recipe</h1>
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
          <label htmlFor="ingredients">Ingredients</label>
          <textarea name="ingredients" id="ingredients" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">ImageURL</label>
          <input type="text" name="image" id="image" />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </>
  );
};


export default CreateRecipe;