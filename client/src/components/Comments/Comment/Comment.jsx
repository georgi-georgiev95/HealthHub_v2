import styles from './Comment.module.css';
import { useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import EditCommentModal from '../EditCommentModal/EditCommentModal';
import { editComment } from '../../../services/commentService';

const Comment = ({ commentData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useUser();
    let createdAt;
    let editAt;


    if (commentData.createdAt !== "" && commentData.createdAt !== undefined) {
        createdAt = new Date(commentData.createdAt.seconds * 1000 + commentData.createdAt.nanoseconds / 1000000);

        if (commentData.editAt !== "" && commentData.editAt !== undefined) {
            editAt = new Date(commentData.editAt.seconds * 1000 + commentData.editAt.nanoseconds / 1000000);
        }
    }

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <>
        <div className={styles.comment}>
            <img src={"/images/profile.jpg"} className={styles.image} alt="profile-photo" />
            <div>
                <span>by {commentData.ownerName}</span>
                <p>{commentData.text}</p>
                <p>Posted at: {createdAt.toLocaleString()}</p>
                {editAt && <p>Edited at: {editAt.toLocaleString()}</p>}
            </div>

            <div className={styles.buttons}>
                {user.userId !== "" && user.userId === commentData.ownerId && (
                    <>
                        <button onClick={() => setIsOpen(true)}>Edit</button>
                        <button>Delete</button>
                    </>
                )}
                {user.userId !== "" && user.userId !== commentData.ownerId && <button>Like</button>}
            </div>
        </div>

        <EditCommentModal isOpen={isOpen} commentData={commentData} onClose={onClose} />       
        </>
    )
};

export default Comment;