import { useState, useEffect } from 'react';

import styles from './CommentSection.module.css';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import DeleteCommentModal from '../DeleteCommentModal/DeleteCommentModal';
import EditCommentModal from '../EditCommentModal/EditCommentModal';
import commentsSorter from '../../../utils/commentsSorter';


const CommentSection = ({ comments }) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('newest');
    const [sortedComments, setSortedComments] = useState(comments);

    const [comment, setComment] = useState({
        text: '',
        ownerId: '',
        ownerName: '',
        entityId: '',
        createdAt: '',
        editAt: '',
    });

    useEffect(() => {
        const sorted = commentsSorter(comments, sortCriteria);
        setSortedComments(sorted);
    }, [comments, sortCriteria]);

    return (
        <>
            <div className={styles.container}>
                <h3>{comments.length} comments</h3>
                <CreateComment />
                <div className={styles.sort}>
                    <p>Sort by:</p>
                    <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="interactions">Most Interactions</option>
                    </select>
                </div>
                {sortedComments.map((comment) => (
                    <Comment key={comment.id} commentData={comment} setIsOpenEditModal={setIsOpenEditModal} setIsOpenDeleteModal={setIsOpenDeleteModal} setComment={setComment} />
                ))}
            </div>
            <EditCommentModal isOpen={isOpenEditModal} onClose={() => setIsOpenEditModal(false)} commentData={comment} setCommentData={setComment} />
            <DeleteCommentModal isOpen={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)} commentData={comment} setCommentData={setComment} />
        </>
    )
};

export default CommentSection;
