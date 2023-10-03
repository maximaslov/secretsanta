import styles from "./Button.module.css";

const Button = ({ children, variant, onClick, ...props }) => {
  const stylesVariants = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
  };

  const mainButtonClass = stylesVariants[variant];

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      className={mainButtonClass}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
