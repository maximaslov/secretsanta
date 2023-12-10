import { useEffect, useRef, useState } from "react";
import Menu from "components/Menu";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ list }) => {
 const [isOpen, setIsOpen] = useState(false);
 const menuRef = useRef(null);

 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 const handleOutsideClick = (event) => {
  if (menuRef.current && !menuRef.current.contains(event.target)) {
   // Clicked outside the menu, close it
   setIsOpen(false);
  }
 };

 useEffect(() => {
  document.addEventListener("click", handleOutsideClick);

  return () => {
   document.removeEventListener("click", handleOutsideClick);
  };
 }, []);

 return (
  <div
   ref={menuRef}
   className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}
  >
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
