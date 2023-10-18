import styles from "./Wrapper.module.css";
import Paper from "ui/Paper";

const Wrapper = ({ children, ...props }) => {
  return (
    <Paper>
      <div className={styles.wrapper} style={{...props}}>{children}</div>
    </Paper>
  );
};

export default Wrapper;
