import styles from "./Loader.module.css";
import Logo from "../Logo";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Logo withAnimation size="lg" />
    </div>
  );
};

export default Loader;
