import { useRef } from "react";
import Text from "../Text";
import styles from "./Checkbox.module.css";

const Checkbox = ({ onChange, labelText }) => {
 const labelRef = useRef();

 const handleChange = (event) => {
  onChange?.(event.target.checked);
 };

 return (
  <div className={styles.checkboxWrapper}>
   <input
    id="checkbox"
    className={styles.checkbox}
    type="checkbox"
    onChange={handleChange}
   />
   <label
    ref={labelRef}
    tabIndex={0}
    className={styles.pseudoLabel}
    htmlFor="checkbox"
    onKeyDown={handleChange} 
   />
   <label ref={labelRef} className={styles.label} htmlFor="checkbox">
    <Text variant="md">{labelText}</Text>
   </label>
  </div>
 );
};

export default Checkbox;
