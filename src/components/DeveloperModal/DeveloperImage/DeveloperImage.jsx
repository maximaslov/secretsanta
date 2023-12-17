import styles from "./DeveloperImage.module.css";
import developer from "../../../assets/img/photos/developer.jpg";

const DeveloperImage = () => {
 return (
  <div className={styles.imageWrapper}>
   <img
    src={developer}
    alt="Maksym Maslov"
    style={{ width: "100%", objectFit: "fill" }}
   />
  </div>
 );
};

export default DeveloperImage;
