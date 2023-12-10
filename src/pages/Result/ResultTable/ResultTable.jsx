import { FormattedMessage, useIntl } from "react-intl";
import { CopyTextButton, Heading, Text, Wrapper } from "ui";
import ResultListItem from "./ResultListItem";
import CreateNewCompanyButton from "./CreateNewCompanyButton";
import { namesArrayToStringList } from "./helpers";
import ResultTopBlock from "./ResultTopBlock/ResultTopBlock";
import { useEffect, useState } from "react";

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
 const [maxMainHeight, setMaxMainHeight] = useState('65vh');
 const [maxListHeight, setMaxListHeight] = useState('30vh');

  const handleResize = () => {
    const windowHeight = window.innerHeight;
  
    if (windowHeight < 825) {
      setMaxMainHeight('none');
      setMaxListHeight('none');
    } else {
      setMaxMainHeight('65vh');
      setMaxListHeight('30vh');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


 return (
  <Wrapper maxHeight={maxMainHeight} overflow="hidden">
   <ResultTopBlock
    secretSantaText={secretSantaText}
    isRegisteredCompany={isRegisteredCompany}
    companyData={companyData}
   />
   {!isRegisteredCompany && (
    <Wrapper maxHeight={maxListHeight} variant="secondary" position="relative">
     {!!companyNames.length && <CopyTextButton copyText={dataToCopy} />}
     <Text variant="lg">    
      <FormattedMessage id="result.participantsList" />
     </Text>
     <Wrapper maxHeight="20vh" minHeight="100px" overflow="scroll" position="relative" fullWidth>
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
