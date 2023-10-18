const Heading = ({ children, props }) => {
  return (
    <h4
      style={{
        color: "var(--primary-text-color)",
        fontSize: "var(--heading-font-size)",
        textAlign: "center",
      }}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Heading;
