import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import styles from './CommentSection.module.css';

const CommentSection = ({comments}) => {
    return(
        <div className={styles.container}>
            <h3>{comments.length} comments</h3>
            <CreateComment />
            {comments.map((comment) => (
                <Comment key={comment.id} commentData={comment} />
            ))}
        </div>
    )
};

export default CommentSection;