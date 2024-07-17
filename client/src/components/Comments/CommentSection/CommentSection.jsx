import Comment from '../Comment/Comment';
import styles from './CommentSection.module.css';

const CommentSection = () => {
    return(
        <div className={styles.container}>
            <h3>4 comments</h3>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
};

export default CommentSection;