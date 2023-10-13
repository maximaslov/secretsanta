import styles from "./Input.module.css";

const Input = ({ type, placeholder, onChange, value }) => {
  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
