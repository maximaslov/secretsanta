import { Heading } from "ui";
import CompanyAccess from "../CompanyAccess";
import styles from "./ResultTopBlock.module.css";

const ResultTopBlock = ({
 secretSantaText,
 isRegisteredCompany,
 companyData,
}) => {
 return (
  <div className={styles.resultTopBlock}>
   <Heading>{secretSantaText}</Heading>
   {!isRegisteredCompany && (
    <CompanyAccess
     companyId={companyData.id}
     companyPassword={companyData.password}
    />
   )}
  </div>
 );
};

export default ResultTopBlock;
