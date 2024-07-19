import styles from './Comment.module.css';
import { useUser } from '../../../contexts/UserContext';
import { deleteComment } from '../../../services/commentService';

const Comment = ({ commentData, setIsOpenEditModal, setComment, setIsOpenDeleteModal }) => {
    const { user, setIsCommentDeleted } = useUser();
    let createdAt;
    let editAt;


    if (commentData.createdAt !== "" && commentData.createdAt !== undefined) {
        createdAt = new Date(commentData.createdAt.seconds * 1000 + commentData.createdAt.nanoseconds / 1000000);

        if (commentData.editAt !== "" && commentData.editAt !== undefined) {
            editAt = new Date(commentData.editAt.seconds * 1000 + commentData.editAt.nanoseconds / 1000000);
        }
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
                            <button className={styles.button} onClick={() => {
                                setIsOpenEditModal(true);
                                setComment(commentData);
                            }}>Edit</button>
                            <button className={styles.button} onClick={() => {
                                setIsOpenDeleteModal(true)
                                setComment(commentData)
                            }}>Delete</button>
                        </>
                    )}
                    {user.userId !== "" && user.userId !== commentData.ownerId && <button>Like</button>}
                </div>
            </div>
        </>
    )
};

export default Comment;