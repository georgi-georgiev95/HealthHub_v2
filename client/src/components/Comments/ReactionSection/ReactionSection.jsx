import styles from './ReactionSection.module.css';
import { useComments } from '../../../contexts/commentsContext/CommentsContext';
import { setReaction } from '../../../services/commentService';

const ReactionSection = ({
    commentData,
    userId
}) => {
    const { handleReaction } = useComments();

    const likes = commentData.reactions?.filter((reaction) => reaction.reaction === "like") || [];
    const hates = commentData.reactions?.filter((reaction) => reaction.reaction === "hate") || [];
    const sads = commentData.reactions?.filter((reaction) => reaction.reaction === "sad") || [];
    const laughs = commentData.reactions?.filter((reaction) => reaction.reaction === "laugh") || [];

    const isLiked = likes.some((like) => like.userId === userId);
    const isHated = hates.some((hate) => hate.userId === userId);
    const isSad = sads.some((sad) => sad.userId === userId);
    const isLaugh = laughs.some((laugh) => laugh.userId === userId);

    const likeComment = async () => {
        await setReaction(userId, commentData.id, "like");
        handleReaction();
    };

    const hateComment = async () => {
        await setReaction(userId, commentData.id, "hate");
        handleReaction();
    };

    const sadComment = async () => {
        await setReaction(userId, commentData.id, "sad");
        handleReaction();
    };

    const laughComment = async () => {
        await setReaction(userId, commentData.id, "laugh");
        handleReaction();
    };

    return (
        <>
            <button onClick={likeComment} className={`${styles.reactionButton} ${isLiked && styles.liked}`}><i className="fa-solid fa-heart"></i>({likes.length})</button>
            <button onClick={hateComment} className={`${styles.reactionButton} ${isHated && styles.liked}`}><i className="fa-solid fa-face-angry"></i>({hates.length})</button>
            <button onClick={sadComment} className={`${styles.reactionButton} ${isSad && styles.liked}`}><i className="fa-solid fa-face-sad-tear"></i>({sads.length})</button>
            <button onClick={laughComment} className={`${styles.reactionButton} ${isLaugh && styles.liked}`}><i className="fa-solid fa-face-laugh"></i>({laughs.length})</button>
        </>
    )
};

export default ReactionSection;