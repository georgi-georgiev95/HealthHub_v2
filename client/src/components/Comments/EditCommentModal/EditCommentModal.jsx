import styles from "./EditCommentModal.module.css";
import { editComment } from "../../../services/commentService";
import { useUser } from "../../../contexts/UserContext";

const EditCommentModal = ({ isOpen, onClose, commentData, setCommentData }) => {

    const { setIsCommentEdited } = useUser();

    const onConfirm = async () => {
        await editComment(commentData.id, {...commentData, editAt: new Date()});
        setIsCommentEdited(true);
        onClose();
    }

    return (
        isOpen && (
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <h3>Edit Comment</h3>
                    <textarea
                        className={styles.textarea}
                        value={commentData.text}
                        onChange={(e) => setCommentData({ ...commentData, text: e.target.value })}
                    />
                    <div className={styles.buttons}>
                        <button
                            className={styles.cancelButton}
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            className={styles.confirmButton}
                            onClick={onConfirm}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )
    )
};

export default EditCommentModal;