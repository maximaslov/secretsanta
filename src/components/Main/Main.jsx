import { useAppContext } from "contexts";
import styles from "./Main.module.css";
import Snowfall from "react-snowfall";
import { Error } from "ui";

const Main = ({ children }) => {
 const { isError, errorMessage } = useAppContext();

 return (
  <main className={styles.content}>
   <Snowfall />
   {isError && <Error text={errorMessage} />}
   <div className={styles.container}>{children}</div>
  </main>
 );
};

export default Main;
