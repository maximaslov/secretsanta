import { useState } from "react";
import Menu from "components/Menu";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </button>
      <ul className={styles.menu}>
        <Menu list={list} />
      </ul>
    </div>
  );
};

export default BurgerMenu;
