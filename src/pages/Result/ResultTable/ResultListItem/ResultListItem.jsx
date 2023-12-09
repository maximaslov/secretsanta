import styles from "./ResultListItem.module.css";
import { Text } from "ui";

const ResultListItem = ({ name, index }) => {
 return (
  <div className={styles.resultItem}>
   <Text variant="lg">{index + 1}.</Text>
   <Text variant="md">{name}</Text>
  </div>
 );
};

export default ResultListItem;
