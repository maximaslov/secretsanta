import Text from "../Text";
import styles from "./MenuItem.module.css";

const MenuItem = ({ label, isActive }) => {
  const currentClass = isActive ? styles.activeMenuItem : styles.menuItem;

  return (
    <li tabIndex={isActive ? -1 : 0} className={currentClass}>
      <Text>{label}</Text>
    </li>
  );
};

export default MenuItem;
