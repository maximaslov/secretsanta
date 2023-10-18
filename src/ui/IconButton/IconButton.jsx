import { handleEvent } from "utils/helpers";
import styles from "./IconButton.module.css";

const IconButton = ({ Iconcomponent, children, disabled, onClick }) => {
  const currentWrapperClass = disabled
    ? styles.iconButtonDisabled
    : styles.iconButton;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      className={currentWrapperClass}
      style={children && { gap: "8px" }}
      tabIndex={0}
      {...handleEvent(handleClick)}
    >
      <Iconcomponent />
      <p className={styles.iconButtonText}>{children}</p>
    </div>
  );
};

export default IconButton;
