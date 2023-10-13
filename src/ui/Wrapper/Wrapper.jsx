import styles from "./Wrapper.module.css";
import Paper from "ui/Paper";

const Wrapper = ({ children }) => {
  return (
    <Paper>
      <div className={styles.wrapper}>{children}</div>
    </Paper>
  );
};

export default Wrapper;
