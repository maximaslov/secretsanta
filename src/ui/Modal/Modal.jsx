import { Close } from "components/icons";
import styles from "./Modal.module.css";
import { Paper } from "ui";

const Modal = ({ children, onCLose }) => {
  const handleClick = () => {
    onCLose?.();
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalWrapper}>
        <Paper>
          <div className={styles.additionalPadding}>
            <button className={styles.closeIcon} onClick={handleClick}>
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
