import { useDispatch } from "react-redux";

import styles from "./DeleteCommentModal.module.css";
import { deleteComment } from "../../../services/commentService";
import { toggleIsCommentInteracted } from "../../../store/slices/commentsSlice";

const DeleteCommentModal = ({ isOpen, onClose, commentData, setCommentData }) => {
    const dispatch = useDispatch();

    const onConfirm = async () => {
        await deleteComment(commentData.id);
        dispatch(toggleIsCommentInteracted());
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