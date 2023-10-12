import styles from "./Main.module.css";
import Snowfall from "react-snowfall";

const Main = ({ children }) => {
  return (
    <main className={styles.content}>
      <Snowfall />
      {children}
    </main>
  );
};

export default Main;
