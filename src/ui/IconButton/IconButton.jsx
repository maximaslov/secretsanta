import { handleEvent } from "utils/helpers";
import styles from "./IconButton.module.css";

const IconButton = ({ IconComponent, text, disabled, onClick }) => {
  const currentWrapperClass = disabled
    ? styles.iconButtonDisabled
    : styles.iconButton;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      className={currentWrapperClass}
      style={text && { gap: "8px" }}
      tabIndex={0}
      {...handleEvent(handleClick)}
    >
      <IconComponent />
      <p className={styles.iconButtonText}>{text}</p>
    </div>
  );
};

export default IconButton;
