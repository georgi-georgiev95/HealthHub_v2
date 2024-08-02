import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import styles from "./DeleteConfirmationModal.module.css";

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm, title }) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (event) => {
    setIsTouched(true);
    const value = event.target.value;
    setIsValid(value === title);
  };

  const handleConfirm = () => {
    if (isValid) {
      onConfirm();
    }
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <p className={styles.title}>
            Are you sure you want to delete - &quot;{title}&quot;?
          </p>
          <p className={styles.warning}>Please type "{title}" to confirm:</p>
          <input
            type="text"
            onChange={handleInputChange}
            className={
              styles.input + " " + (isValid ? styles.valid : styles.invalid)
            }
            placeholder={"ex. " + title}
          />
          {!isValid && isTouched && (
            <p className={styles.error}>Title does not match.</p>
          )}
          <div className={styles.buttons}>
            <button className={styles.cancelButton} onClick={onCancel}>
              Not sure
            </button>
            <button className={styles.confirmButton} onClick={handleConfirm}>
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
