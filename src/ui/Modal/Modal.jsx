import { Close } from "components/icons";
import styles from "./Modal.module.css";
import { Paper } from "ui";
import { useState } from "react";

const Modal = ({ children, onClose }) => {
  const [isClosing, setIsClosing] =  useState();

  const backgroundClass = `${styles.modalBackground} ${isClosing ? styles.hideModalBackground : ''}`;
  const wrapperClass = `${styles.modalWrapper} ${isClosing ? styles.hideModalWrapper : ''}`;

  const handleClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 500)
  };

  return (
    <div onClick={handleClick} className={backgroundClass}>
      <div className={wrapperClass}>
        <Paper fullWidth>
          <div className={styles.additionalPadding}>
            <button className={styles.closeIcon} onClick={handleClick} tabIndex={0}>
              <Close />
            </button>
          </div>
          <div className={styles.contentWrapper}>{children}</div>
          <div className={styles.additionalPadding} />
        </Paper>
      </div>
    </div>
  );
};

export default Modal;
