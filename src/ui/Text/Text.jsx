const Text = ({ children, variant }) => {
  const stylesVariant = {
    md: {
      color: "var(--secondary-text-color)",
      fontSize: "var(--description-font-size)",
    },
    lg: {
      color: "var(--primary-text-color)",
      fontSize: "var(--main-font-size)",
    },
  };

  return <p style={stylesVariant[variant]}>{children}</p>;
};

Text.defaultProps = {
  variant: "lg",
};

export default Text;
