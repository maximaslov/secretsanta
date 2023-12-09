import { FormattedMessage, useIntl } from "react-intl";
import { CopyTextButton, Heading, Text, Wrapper } from "ui";
import ResultListItem from "./ResultListItem";
import CompanyAccess from "./CompanyAccess";
import CreateNewCompanyButton from "./CreateNewCompanyButton";
import { namesArrayToStringList } from "./helpers";
import ResultTopBlock from "./ResultTopBlock/ResultTopBlock";

const ResultTable = ({
 santaPairName,
 companyData,
 companyNames,
 isRegisteredCompany,
}) => {
 const { formatMessage } = useIntl();
 const name = localStorage.getItem("name");

 const secretSantaText = formatMessage({ id: "result.sectetSanta" }).replace(
  "XXX",
  santaPairName ?? name
 );

 const titleForCopy = formatMessage({ id: "result.participantsList" });

 let companyListToCopy = namesArrayToStringList(companyNames);

 const dataToCopy = `${titleForCopy}\n\n${companyListToCopy}`;

 return (
  <Wrapper maxHeight="63vh" overflow="hidden">
   <ResultTopBlock
    secretSantaText={secretSantaText}
    isRegisteredCompany={isRegisteredCompany}
    companyData={companyData}
   />
   {!isRegisteredCompany && (
    <Wrapper maxHeight="30vh" variant="secondary" position="relative">
     {!!companyNames.length && <CopyTextButton copyText={dataToCopy} />}
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
   )}
   <Heading>
    <FormattedMessage id="result.happyNewYear" />
   </Heading>
   <CreateNewCompanyButton />
  </Wrapper>
 );
};

export default ResultTable;
