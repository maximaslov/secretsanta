import styles from "./Main.module.css";
import Snowfall from "react-snowfall";

const Main = ({ children }) => {
  return (
    <main className={styles.content}>
      <Snowfall />
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Main;
