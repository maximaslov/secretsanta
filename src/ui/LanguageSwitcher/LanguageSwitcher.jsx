import { useLanguage } from "contexts/languageContext";
import styles from "./LanguageSwitcher.module.css";
import { handleEvent } from "utils/helpers";

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  const isUkraineLanguage = currentLanguage === "uk";

  const handleClick = () => {
    switchLanguage();
  };

  return (
    <div className={styles.switcher} {...handleEvent(handleClick)} tabIndex={0}>
      <div className={styles.backgroundTextWrapper}>
        <p className={styles.backgroundText}>UK</p>
        <p className={styles.backgroundText}>EN</p>
      </div>
      <div
        className={styles.switcherCircle}
        style={{
          transition: "all 0.3s ease",
          transform: isUkraineLanguage
            ? "translate(15%, 15%)"
            : "translate(115%, 15%)",
        }}
      >
        {isUkraineLanguage ? "UK" : "EN"}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
