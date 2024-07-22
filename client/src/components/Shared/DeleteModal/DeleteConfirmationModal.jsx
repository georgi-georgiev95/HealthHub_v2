import PropTypes from "prop-types";

import styles from "./DeleteConfirmationModal.module.css";

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm, title }) => {
  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <p>Are you sure you want to delete - &quot;{title}&quot;?</p>
          <div className={styles.buttons}>
            <button className={styles.cancelButton} onClick={onCancel}>
              Not sure
            </button>
            <button className={styles.confirmButton} onClick={onConfirm}>
              Yes, I am sure. Delete it!
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
  title: PropTypes.string.isRequired,
};

export default DeleteConfirmationModal;
