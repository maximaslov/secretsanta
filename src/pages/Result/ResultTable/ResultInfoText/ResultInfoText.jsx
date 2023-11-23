import { FormattedMessage } from "react-intl";
import { Text } from "ui";

const ResultInfoText = ({labelId, value}) => {
 return (
  <div style={{ display: "flex", gap: "8px" }}>
   <Text variant="lg">
    <FormattedMessage id={labelId} />
   </Text>
   <Text variant="md">{value}</Text>
  </div>
 );
};

export default ResultInfoText;
