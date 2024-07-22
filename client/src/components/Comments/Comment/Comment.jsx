import styles from './Comment.module.css';
import { useUser } from '../../../contexts/userContext/UserContext';
import { useComments } from '../../../contexts/commentsContext/CommentsContext';
import { setReaction } from '../../../services/commentService';

const Comment = ({ commentData, setIsOpenEditModal, setComment, setIsOpenDeleteModal }) => {
    const { user } = useUser();
    const { handleReaction } = useComments();
    let createdAt;
    let editAt;

    const likes = commentData.reactions?.filter((reaction) => reaction.reaction === "like") || [];
    const hates = commentData.reactions?.filter((reaction) => reaction.reaction === "hate") || [];
    const sads = commentData.reactions?.filter((reaction) => reaction.reaction === "sad") || [];
    const laughs = commentData.reactions?.filter((reaction) => reaction.reaction === "laugh") || [];

    const isLiked = likes.some((like) => like.userId === user.userId);
    const isHated = hates.some((hate) => hate.userId === user.userId);
    const isSad = sads.some((sad) => sad.userId === user.userId);
    const isLaugh = laughs.some((laugh) => laugh.userId === user.userId);


    if (commentData.createdAt !== "" && commentData.createdAt !== undefined) {
        createdAt = new Date(commentData.createdAt.seconds * 1000 + commentData.createdAt.nanoseconds / 1000000);

        if (commentData.editAt !== "" && commentData.editAt !== undefined) {
            editAt = new Date(commentData.editAt.seconds * 1000 + commentData.editAt.nanoseconds / 1000000);
        }
    }

    const likeComment = async () => {
        await setReaction(user.userId, commentData.id, "like");
        handleReaction();
    };

    const hateComment = async () => {
        await setReaction(user.userId, commentData.id, "hate");
        handleReaction();
    };

    const sadComment = async () => {
        await setReaction(user.userId, commentData.id, "sad");
        handleReaction();
    };

    const laughComment = async () => {
        await setReaction(user.userId, commentData.id, "laugh");
        handleReaction();
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
                            <button onClick={likeComment} className={`${styles.reactionButton} ${isLiked && styles.liked}`}><i className="fa-solid fa-heart"></i>({likes.length})</button>
                            <button onClick={hateComment} className={`${styles.reactionButton} ${isHated && styles.liked}`}><i className="fa-solid fa-face-angry"></i>({hates.length})</button>
                            <button onClick={sadComment} className={`${styles.reactionButton} ${isSad && styles.liked}`}><i className="fa-solid fa-face-sad-tear"></i>({sads.length})</button>
                            <button onClick={laughComment} className={`${styles.reactionButton} ${isLaugh && styles.liked}`}><i className="fa-solid fa-face-laugh"></i>({laughs.length})</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
};

export default Comment;