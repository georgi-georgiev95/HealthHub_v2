import { useSelector } from 'react-redux';

import styles from './Comment.module.css';
import ReactionSection from '../ReactionSection/ReactionSection';

const Comment = ({ commentData, setIsOpenEditModal, setComment, setIsOpenDeleteModal }) => {
    const user = useSelector(state => state.auth.user);
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
                    <p className={styles.text}>{commentData.text}</p>
                    <p className={styles.date}>Posted at: {createdAt.toLocaleString()}</p>
                    {editAt && <p className={styles.date}>Edited at: {editAt.toLocaleString()}</p>}
                </div>

                <div className={styles.buttons}>
                    {user.userId !== "" && user.userId === commentData.ownerId && (
                        <>
                            <button className={styles.ownerButton} onClick={() => {
                                setIsOpenEditModal(true);
                                setComment(commentData);
                            }}>Edit</button>
                            <button className={styles.ownerButton} onClick={() => {
                                setIsOpenDeleteModal(true)
                                setComment(commentData)
                            }}>Delete</button>
                        </>
                    )}
                    {user.userId !== "" && user.userId !== commentData.ownerId &&
                        <>
                            <ReactionSection commentData={commentData} userId={user.userId} />
                        </>
                    }
                </div>
            </div>
        </>
    )
};

export default Comment;