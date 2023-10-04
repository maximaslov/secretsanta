import Text from "../Text";
import styles from "./Checkbox.module.css";

const Checkbox = ({ onChange, labelText }) => {
  const handleChange = (event) => {
    onChange?.(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <input
        id="checkbox"
        className={styles.checkbox}
        type="checkbox"
        onChange={handleChange}
      />
      <label tabIndex={0} className={styles.pseudoLabel} for="checkbox" />
      <label className={styles.label}for="checkbox">
        <Text>{labelText}</Text>
      </label>
    </div>
  );
};

export default Checkbox;
