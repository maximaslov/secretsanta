const Text = ({ children, variant, bold, color }) => {
 const stylesVariant = {
  md: {
   color: color ?? "var(--secondary-text-color)",
   fontSize: "var(--description-font-size)",
  },
  lg: {
   color: color ?? "var(--primary-text-color)",
   fontSize: "var(--main-font-size)",
  },
 };

 return (
  <p
   style={{
    width: "fit-content",
    ...stylesVariant[variant],
    ...(bold && { fontWeight: 600 }),
   }}
  >
   {children}
  </p>
 );
};

Text.defaultProps = {
 variant: "lg",
};

export default Text;
