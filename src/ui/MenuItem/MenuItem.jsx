import Text from "../Text";
import styles from "./MenuItem.module.css";

const MenuItem = ({ label, isActive }) => {
  return (
    <li className={styles.menuItem}>
      <Text>{label}</Text>
    </li>
  );
};

export default MenuItem;
