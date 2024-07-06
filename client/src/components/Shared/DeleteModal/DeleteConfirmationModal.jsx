import styles from "./DeleteConfirmationModal.module.css";
import PropTypes from "prop-types";

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <p>Are you sure you want to delete this entry?</p>
          <div className={styles.buttons}>
            <button className={styles.cancelButton} onClick={onCancel}>
              Cancel
            </button>
            <button className={styles.confirmButton} onClick={onConfirm}>
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
