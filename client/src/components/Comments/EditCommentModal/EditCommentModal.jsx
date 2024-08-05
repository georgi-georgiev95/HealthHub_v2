import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./EditCommentModal.module.css";
import { editComment } from "../../../services/commentService";
import { toggleIsCommentInteracted } from "../../../store/slices/commentsSlice";

const EditCommentModal = ({ isOpen, onClose, commentData, setCommentData }) => {
    const textareaRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(textareaRef.current.value.length, textareaRef.current.value.length);
        }
    }, [isOpen]);

    const onConfirm = async () => {
        if (commentData.text === '') {
            dispatch(toggleIsCommentInteracted());
            onClose();
            return;
        }
        commentData.text = commentData.text.trim();
        await editComment(commentData.id, { ...commentData, editAt: new Date() });
        dispatch(toggleIsCommentInteracted());
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
                        ref={textareaRef}
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