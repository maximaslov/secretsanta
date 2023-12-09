import { Wrapper, CopyTextButton } from "ui";
import ResultInfoText from "../ResultInfoText";
import { useIntl } from "react-intl";

const CompanyAccess = ({ companyId, companyPassword }) => {
 const { formatMessage } = useIntl();
 const companyIdText = formatMessage({ id: "result.companyNumber" }).concat(
  " ",
  companyId.toString()
 );
 const companyPasswordText = formatMessage({
  id: "result.companyPassword",
 }).concat(" ", companyPassword.toString());
 const dataToCopy = `${companyIdText}\n${companyPasswordText}`;

 return (
  <Wrapper variant="secondary" position="relative">
    <CopyTextButton copyText={dataToCopy}/>
   <div>
    <ResultInfoText labelId="result.companyNumber" value={companyId} />
    <ResultInfoText labelId="result.companyPassword" value={companyPassword} />
   </div>
  </Wrapper>
 );
};

export default CompanyAccess;
