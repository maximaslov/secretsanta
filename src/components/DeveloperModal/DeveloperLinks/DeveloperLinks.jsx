import styles from "./DeveloperLinks.module.css";
import { IconButton } from "ui";
import { linkItems } from "./developerLinksDefenitions";

const DeveloperLinks = () => {
 return (
  <div className={styles.links}>
   {linkItems.map(({ Component, link }, index) => (
    <a className={styles.link} key={index} href={link} target="_blank" rel="noreferrer">
     <IconButton IconComponent={Component} />
    </a>
   ))}
  </div>
 );
};

export default DeveloperLinks;
