import { FormattedMessage, useIntl } from "react-intl";
import { Heading, Text, Wrapper } from "ui";

const ResultTable = ({ santaPairName, companyData, companyNames }) => {
 const { formatMessage } = useIntl();

 const name = localStorage.getItem("name");

 const secretSantaText = formatMessage({ id: "result.sectetSanta" }).replace(
  "XXX",
  (santaPairName ?? name)
 );

 return (
  <Wrapper>
   <Heading>{secretSantaText}</Heading>
   <div>
    <div style={{ display: "flex", gap: "8px" }}>
     <Text variant="lg">
      <FormattedMessage id="result.companyNumber" />
     </Text>
     <Text variant="md">{companyData.id}</Text>
    </div>
    <div style={{ display: "flex", gap: "8px" }}>
     <Text variant="lg">
      <FormattedMessage id="result.companyPassword" />
     </Text>
     <Text variant="md">{companyData.password}</Text>
    </div>
   </div>
   <Text variant="lg">
    <FormattedMessage id="result.participantsList" />
   </Text>
   <div>
    {!!companyNames.length &&
     companyNames.map((name, index) => (
      <div key={index} style={{ display: "flex", gap: "8px" }}>
       <Text variant="lg">{index + 1}</Text>
       <Text variant="md">{name}</Text>
      </div>
     ))}
   </div>
  </Wrapper>
 );
};

export default ResultTable;
