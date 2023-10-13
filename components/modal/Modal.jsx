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
          {modalType === "contact" && (
            <>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>ECommerce Warning</h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faX} style={{ marginBottom: "-3px" }} />
              </button>
              <div className={styles.modalContent}>
                This project is still a work in progress! It is being constantly
                updated. To return to the homepage, please press the
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{ marginLeft: "3px", fontSize: "2vh" }}
                />{" "}
                icon in the top left.
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setIsOpen(false)}
                  >
                    Close warning
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
