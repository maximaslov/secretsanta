import { Logo } from "ui";
import Menu from "components/Menu";
import styles from "./Header.module.css";
import { menuItems } from "./menuDefinitions";
import BurgerMenu from "components/BurgerMenu";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <div className={styles.headerWrapper}>
   <div className={styles.headerBox}>
    <ul className={styles.headerMenu}>
     <Link to="/" style={{textDecoration: 'none'}}>
      <Logo size="md" />
     </Link>
     <div className={styles.headerMenuItems}>
      <Menu list={menuItems} />
     </div>
     <BurgerMenu list={menuItems} />
    </ul>
   </div>
  </div>
 );
};

export default Header;
