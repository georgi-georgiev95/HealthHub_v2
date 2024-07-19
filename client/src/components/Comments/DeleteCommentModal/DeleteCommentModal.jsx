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
                    <h2>Are you sure you want to delete this comment?</h2>
                    <div className={styles.buttons}>
                        <button
                            className={styles.button}
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.button}
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