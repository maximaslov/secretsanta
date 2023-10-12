import styles from "./LanguageSwitcher.module.css";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [isUkraineLanguage, setUkraineLanguage] = useState();

  const handleClick = () => {
    setUkraineLanguage(!isUkraineLanguage);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <div
        className={styles.switcherCircle}
        style={{
          transition: "all 0.3s ease",
          transform: isUkraineLanguage
            ? "translate(10%, 15%)"
            : "translate(90%, 15%)",
        }}
      >
        {isUkraineLanguage ? "UK" : "EN"}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
