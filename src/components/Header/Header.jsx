import { Logo } from "ui";
import Menu from "components/Menu";
import styles from "./Header.module.css";
import { menuItems, russianMenuItems } from "./menuDefinitions";
import BurgerMenu from "components/BurgerMenu";
import { Link } from "react-router-dom";
import { useAppContext } from "contexts";

const Header = () => {
 const { isRussiaRegion } = useAppContext();

 const currentMenuList = isRussiaRegion ? russianMenuItems : menuItems;

 return (
  <div className={styles.headerWrapper}>
   <div className={styles.headerBox}>
    <ul className={styles.headerMenu}>
     <Link to="/" className={styles.logoLink}>
      <Logo size="md" />
     </Link>
     <div className={styles.headerMenuItems}>
      <Menu list={currentMenuList} />
     </div>
     <BurgerMenu list={currentMenuList} />
    </ul>
   </div>
  </div>
 );
};

export default Header;
//cnahged third file