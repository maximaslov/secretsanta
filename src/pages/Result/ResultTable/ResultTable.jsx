import { FormattedMessage, useIntl } from "react-intl";
import { Heading, Text, Wrapper } from "ui";
import ResultInfoText from "./ResultInfoText";
import ResultListItem from "./ResultListItem";
import CompanyAccess from "./CompanyAccess";

const ResultTable = ({ santaPairName, companyData, companyNames }) => {
 const { formatMessage } = useIntl();

 const name = localStorage.getItem("name");

 const secretSantaText = formatMessage({ id: "result.sectetSanta" }).replace(
  "XXX",
  santaPairName ?? name
 );

 return (
  <Wrapper maxHeight="60vh" overflow="hidden">
   <div
    style={{
     display: "flex",
     flexDirection: "column",
     position: "sticky",
     top: "0",
     gap: "16px",
    }}
   >
    <Heading>{secretSantaText}</Heading>
    <CompanyAccess
     companyId={companyData.id}
     companyPassword={companyData.password}
    />
   </div>
   <Wrapper maxHeight="30vh" variant="secondary">
    <Text variant="lg">
     <FormattedMessage id="result.participantsList" />
    </Text>
    <Wrapper maxHeight="20vh" overflow="scroll" position="relative" fullWidth>
     <div>
      {!!companyNames.length &&
       companyNames.map((name, index) => (
        <ResultListItem key={index} name={name} index={index} />
       ))}
     </div>
    </Wrapper>
   </Wrapper>
   <div style={{ position: "sticky", bottom: "0" }}>HELLO</div>
  </Wrapper>
 );
};

export default ResultTable;
