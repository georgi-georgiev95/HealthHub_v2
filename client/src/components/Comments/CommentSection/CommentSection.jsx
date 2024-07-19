import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import EditCommentModal from '../EditCommentModal/EditCommentModal';
import styles from './CommentSection.module.css';

import {useState} from 'react';

const CommentSection = ({comments}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState({
        text: '',
        ownerId: '',
        ownerName: '',
        entityId: '',
        createdAt: '',
        editAt: '',
    });

    return(
        <>
        <div className={styles.container}>
            <h3>{comments.length} comments</h3>
            <CreateComment />
            {comments.map((comment) => (
                <Comment key={comment.id} commentData={comment} setIsOpen={setIsOpen} setComment={setComment} />
            ))}
        </div>
        <EditCommentModal isOpen={isOpen} onClose={() => setIsOpen(false)} commentData={comment} setCommentData={setComment} />
        </>
    )
};

export default CommentSection;