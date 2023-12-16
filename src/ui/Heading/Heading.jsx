const Heading = ({ children, props, left, right }) => {
  return (
    <h4
      style={{
        color: "var(--primary-text-color)",
        fontSize: "var(--heading-font-size)",
        textAlign: left ? "left" : right ? "right" : "center",
      }}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Heading;
