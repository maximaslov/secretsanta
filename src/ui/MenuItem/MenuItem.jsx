import Text from "../Text";
import styles from "./MenuItem.module.css";

const MenuItem = ({ label, isActive, onClick }) => {
 const currentClass = isActive ? styles.activeMenuItem : styles.menuItem;

 const handleClick = () => {
  onClick?.();
 };
 return (
  <li
   tabIndex={isActive ? -1 : 0}
   className={currentClass}
   onClick={handleClick}
  >
   <Text>{label}</Text>
  </li>
 );
};

export default MenuItem;
