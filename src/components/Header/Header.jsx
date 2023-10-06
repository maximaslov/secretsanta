import { Logo, MenuItem } from "ui";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBox}>
        <ul className={styles.headerMenu}>
          <Logo size="md" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "600px",
            }}
          >
            {" "}
            <MenuItem label="Інструкція" />
            <MenuItem label="Розробник" />
            <MenuItem label="Донат на ЗСУ" />
            <MenuItem label="Moва" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
