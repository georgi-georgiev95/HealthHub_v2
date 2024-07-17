import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import styles from './CommentSection.module.css';

const CommentSection = () => {
    return(
        <div className={styles.container}>
            <h3>4 comments</h3>
            <CreateComment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
};

export default CommentSection;