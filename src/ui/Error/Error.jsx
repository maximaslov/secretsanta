import styles from "./Error.module.css";
import Paper from "ui/Paper";

const Error = ({ text }) => {
  return (
    <div className={styles.errorWrapper}>
      <Paper variant='error'>
        <div className={styles.error}>
          <p className={styles.errorText}>{text}</p></div>
      </Paper>
    </div>
  );
};

export default Error;
