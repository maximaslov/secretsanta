import Header from "components/Header";
import styles from "./MainLayout.module.css";
import Snowfall from "react-snowfall";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Snowfall />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
