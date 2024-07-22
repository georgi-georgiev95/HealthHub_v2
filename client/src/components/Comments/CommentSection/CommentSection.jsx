import { useState } from 'react';

import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import DeleteCommentModal from '../DeleteCommentModal/DeleteCommentModal';
import EditCommentModal from '../EditCommentModal/EditCommentModal';
import styles from './CommentSection.module.css';


const CommentSection = ({ comments }) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [comment, setComment] = useState({
        text: '',
        ownerId: '',
        ownerName: '',
        entityId: '',
        createdAt: '',
        editAt: '',
    });

    return (
        <>
            <div className={styles.container}>
                <h3>{comments.length} comments</h3>
                <CreateComment />
                {comments.map((comment) => (
                    <Comment key={comment.id} commentData={comment} setIsOpenEditModal={setIsOpenEditModal} setIsOpenDeleteModal={setIsOpenDeleteModal} setComment={setComment} />
                ))}
            </div>
            <EditCommentModal isOpen={isOpenEditModal} onClose={() => setIsOpenEditModal(false)} commentData={comment} setCommentData={setComment} />
            <DeleteCommentModal isOpen={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)} commentData={comment} setCommentData={setComment} />
        </>
    )
};

export default CommentSection;