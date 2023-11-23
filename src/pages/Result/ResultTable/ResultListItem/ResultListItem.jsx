import { Text } from "ui";

const ResultListItem = ({ name, index }) => {
 return (
  <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
   <Text variant="lg">{index + 1}</Text>
   <Text variant="md">{name}</Text>
  </div>
 );
};

export default ResultListItem;
