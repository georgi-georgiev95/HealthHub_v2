import styles from './Comment.module.css';
import { useUser } from '../../../contexts/userContext/UserContext';

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

    const likeComment = () => {
        console.log("like comment");
    };

    const hateComment = () => {
        console.log("hate comment");
    };

    const sadComment = () => {
        console.log("sad comment");
    };

    const laughComment = () => {
        console.log("laugh comment");
    };


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
                            <button onClick={likeComment} className={styles.reactionButton}><i className="fa-solid fa-heart"></i>(5)</button>
                            <button onClick={hateComment} className={styles.reactionButton}><i className="fa-solid fa-face-angry"></i>(10)</button>
                            <button onClick={sadComment} className={styles.reactionButton}><i className="fa-solid fa-face-sad-tear"></i>(3)</button>
                            <button onClick={laughComment} className={styles.reactionButton}><i className="fa-solid fa-face-laugh"></i>(14)</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
};

export default Comment;