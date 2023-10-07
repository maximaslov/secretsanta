import { Logo } from "ui";
import styles from "./Header.module.css";
import BurgerMenu from "components/BurgerMenu";
import Menu from "components/Menu";
import { menuItems } from "./menuDefinitions";
import { getSecretSanta } from "utils/helpers";

const Header = () => {
  console.log(getSecretSanta(['dima', 'max', 'vlad', 'dima', 'oleg', 'vika']))
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBox}>
        <ul className={styles.headerMenu}>
          <Logo size="md" />
          <div className={styles.headerMenuItems}>
            <Menu list={menuItems} />
          </div>
          <BurgerMenu list={menuItems}/>
        </ul>
      </div>
    </div>
  );
};

export default Header;
