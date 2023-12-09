import { useAppContext } from "contexts";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";
import ResultInput from "./ResultInput";
import ResultTable from "./ResultTable";

const Result = () => {
 const jsonString = localStorage.getItem("company");
 const name = localStorage.getItem("name");

 const navigate = useNavigate();
 const { state } = useLocation();
 const isRegisteredCompany = state && state.isRegisteredCompany;
 const { formatMessage } = useIntl();
 const { showError } = useAppContext();
 const [currentStep, setCurrentStep] = useState(jsonString && name ? 2 : 1);
 const [inputValue, setInputValue] = useState("");
 const [santaPairName, setSantaPairName] = useState(null);

 const inputText = formatMessage({ id: "result.nameInput" });
 const companyData = JSON.parse(jsonString);

 const companyNames = companyData?.company;

 const handleButtonClick = () => {
  if (!companyNames.includes(inputValue)) {
   showError("error.nameNotFound");
  } else {
   const pairs = new Map(companyData.pairs);
   const pairName = pairs.get(inputValue);
   setSantaPairName(pairName);
   localStorage.setItem("name", pairName);
   setCurrentStep(2);
  }
 };

 useEffect(() => {
  if (!companyData) {
   navigate("/");
  }
 }, [navigate, companyData]);

 if (currentStep === 1) {
  return (
   <ResultInput
    value={inputValue}
    onClick={handleButtonClick}
    onChange={setInputValue}
    placeholder={inputText}
   />
  );
 }

 if (currentStep === 2) {
  return (
   <ResultTable
    isRegisteredCompany={isRegisteredCompany}
    santaPairName={santaPairName}
    companyData={companyData}
    companyNames={companyNames}
   />
  );
 }
};

export default Result;
