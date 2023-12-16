import Header from "components/Header";
import styles from "./MainLayout.module.css";
import Main from "components/Main";
import { useAppContext } from "contexts";

const MainLayout = ({ children }) => {
 const { isShowModal, setShowModal, CurrentModal } = useAppContext();

 return (
  <div className={styles.mainLayout}>
   <Header />
   <Main children={children} />
   {isShowModal && <CurrentModal onClose={() => setShowModal(false)} />}
  </div>
 );
};

export default MainLayout;
