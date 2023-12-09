import { useState } from "react";
import styles from "./CopyTextButton.module.css";
import { setTextToBoofer } from "utils/helpers";
import { Copied, Copy } from "components/icons";

const CoppyTextButton = ({ copyText }) => {
 const [isCoppiedText, setIsCoppiedText] = useState(false);

 const handleCopyText = () => {
  setTextToBoofer(copyText);
  setIsCoppiedText(true);
  setTimeout(() => {
   setIsCoppiedText(false);
  }, 3000);
 };

 return (
  <div onClick={handleCopyText} className={styles.copyButton}>
   {isCoppiedText ? <Copied /> : <Copy color="rgb(123 131 143)" />}
  </div>
 );
};

export default CoppyTextButton;
