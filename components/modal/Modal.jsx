import React from "react";
import { useState } from "react";
import styles from "./Modal.module.scss";
import { faX, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ setIsOpen, modalType }) => {
  return (
    <div>
      <div
        className={styles.modalBg}
        onClick={() => {
          setIsOpen(false);
        }}
      />

      <div className={styles.centered}>
        <div className={styles.modal}>
          {modalType === "default" && (
            <>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>Dialog</h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faX} style={{ marginBottom: "-3px" }} />
              </button>
              <div className={styles.modalContent}>
                Are you sure you want to close this modal?
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setIsOpen(false)}
                  >
                    Yes
                  </button>
                  <button className={styles.cancelBtn}>No</button>
                </div>
              </div>
            </>
          )}
          {modalType === "message-sent" && (
            <>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>
                  Your message has been delivered successfully.
                </h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faX} style={{ marginBottom: "-3px" }} />
              </button>
              <div className={styles.modalContent}>
                I will respond to you as soon as I can, thank you for getting in
                touch with me!
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
