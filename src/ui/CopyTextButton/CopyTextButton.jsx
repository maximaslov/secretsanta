import styles from "./CopyTextButton.module.css";
import { setTextToBoofer } from "utils/helpers";

const CoppyTextButton = ({ copyText }) => {
 const handleCopyText = () => {
  setTextToBoofer(copyText);
 };

 return (
  <div onClick={handleCopyText} className={styles.copyButton}>
   copy
  </div>
 );
};

export default CoppyTextButton;
