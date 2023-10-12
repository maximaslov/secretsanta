import Header from "components/Header";
import styles from "./MainLayout.module.css";
import Main from "components/Main";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Main children={children}/>
    </div>
  );
};

export default MainLayout;
