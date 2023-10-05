import styles from "./Logo.module.css";

const Logo = ({ text, size, withAnimation }) => {
  const classVariants = {
    sm: styles.smallLogo,
    md: styles.middleLogo,
    lg: withAnimation ? styles.largeLogoGradient:  styles.largeLogo,
  };

  const currentClass = classVariants[size];
  return (
      <p className={currentClass}>
        {text}
      </p>
  )
};

Logo.defaultProps = {
  text: "SecretSanta",
  size: "lg",
};

export default Logo;
