import { Logo } from "ui";
import Menu from "components/Menu";
import styles from "./Header.module.css";
import { menuItems } from "./menuDefinitions";
import BurgerMenu from "components/BurgerMenu";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBox}>
        <ul className={styles.headerMenu}>
          <Logo size="md" />
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
