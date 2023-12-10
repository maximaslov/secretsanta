import styles from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(
 (
  { type, placeholder, onChange, value, isReturnValue, isError, ...props },
  ref
 ) => {
  const handleChange = (event) => {
   onChange?.(isReturnValue ? event.target.value : event);
  };

  return (
   <input
    ref={ref}
    className={styles.input}
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    value={value}
    style={isError ? { borderColor: "red" } : {}}
    {...props}
   />
  );
 }
);

Input.defaultProps = {
 type: "text",
};

export default Input;
