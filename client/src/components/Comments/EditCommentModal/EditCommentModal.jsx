import styles from "./EditCommentModal.module.css";
import { useState } from "react";
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
                    <h2>Edit Comment</h2>
                    <textarea
                        className={styles.textarea}
                        value={commentData.text}
                        onChange={(e) => setCommentData({ ...commentData, text: e.target.value })}
                    />
                    <div className={styles.buttons}>
                        <button
                            className={styles.button}
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            className={styles.button}
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