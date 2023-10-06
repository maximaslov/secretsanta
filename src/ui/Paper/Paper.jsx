import styles from "./Paper.module.css";

const Paper = ({ variant, children }) => {
  const classVariants = {
    primary: styles.primaryPaper,
    secondary: styles.secondaryPaper,
    error: styles.errorPaper,
  };

  const currentClass = classVariants[variant];

  return <div className={currentClass}>{children}</div>;
};

Paper.defaultProps = {
  variant: "primary",
};

export default Paper;
