import styles from "./DeleteCommentModal.module.css";
import { useUser } from "../../../contexts/UserContext";
import { deleteComment } from "../../../services/commentService";

const DeleteCommentModal = ({ isOpen, onClose, commentData, setCommentData }) => {

    const { setIsCommentDeleted } = useUser();

    const onConfirm = async () => {
        await deleteComment(commentData.id);
        setIsCommentDeleted(true);
        onClose();
    }

    return (
        isOpen && (
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <h3>Are you sure you want to delete this comment?</h3>
                    <div className={styles.buttons}>
                        <button
                            className={styles.cancelButton}
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.confirmButton}
                            onClick={() => {
                                setCommentData(commentData)
                                onConfirm()
                                }
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    )
};

export default DeleteCommentModal;