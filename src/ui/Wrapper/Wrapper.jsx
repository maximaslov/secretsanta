import styles from "./Wrapper.module.css";
import Paper from "ui/Paper";

const Wrapper = ({ children, fullWidth, variant, ...props }) => {
 return (
  <Paper fullWidth={fullWidth} variant={variant}>
   <div className={styles.wrapper} style={{ ...props }}>
    {children}
   </div>
  </Paper>
 );
};

export default Wrapper;
