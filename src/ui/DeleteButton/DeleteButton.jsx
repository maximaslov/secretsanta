import styles from './DeleteButton.module.css'
import { Delete } from "components/icons";
import IconButton from "ui/IconButton";

const DeleteButton = ({ onClick }) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <div className={styles.deleteButton}>
      <IconButton IconComponent={Delete} onClick={handleClick} />
    </div>
  );
};

export default DeleteButton;
