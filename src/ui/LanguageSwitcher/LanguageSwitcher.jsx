import { useLanguage } from "contexts/languageContext";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  const isUkraineLanguage = currentLanguage === "uk";

  const handleClick = () => {
    switchLanguage();
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
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
