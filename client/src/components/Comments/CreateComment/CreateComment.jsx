import styles from './CreateComment.module.css'

const CreateComment = () => {
    return (
        <form className={styles.commentForm}>
            <div className={styles.field}>
                <textarea type="text" placeholder='Add your comment...' />
            </div>
            <div className={styles.buttons}>
                <input type="submit" value={'Post'}/>
            </div>
        </form>
    )
};

export default CreateComment;