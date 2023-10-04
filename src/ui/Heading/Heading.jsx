const Heading = ({ children }) => {
  return (
    <h4
      style={{
        color: "var(--primary-text-color)",
        fontSize: "var(--heading-font-size)",
      }}
    >
      {children}
    </h4>
  );
};

export default Heading;
