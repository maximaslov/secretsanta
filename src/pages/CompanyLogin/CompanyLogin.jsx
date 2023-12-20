import { useAppContext } from "contexts";
import { useSantaApi } from "queries";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Checkbox, Heading, Input, Wrapper } from "ui";
import CompanyLoginButtons from "./CompanyLoginButtons";

const CompanyLogin = () => {
 const { formatMessage } = useIntl();
 const { showError, setUpdatedCompanyData } = useAppContext();
 const { get } = useSantaApi();
 const navigate = useNavigate();

 const [isShowPassword, setShowPassword] = useState(false);
 const [companyNumberValue, setCompanyNumberValue] = useState("");
 const [companyPasswordValue, setCompanyPasswordValue] = useState("");
 const [isInvalidPassword, setIsInvalidPassword] = useState(false);

 useEffect(() => {
  const handleBeforeUnload = (event) => {
   localStorage.setItem("reloadFlag", "true");
   event.preventDefault();
  };

  if (localStorage.getItem("reloadFlag") === "true") {
   localStorage.setItem("reloadFlag", "false");
   navigate("/");
  }

  window.addEventListener("unload", handleBeforeUnload);

  return () => {
   window.removeEventListener("unload", handleBeforeUnload);
  };
 }, [navigate]);

 useEffect(() => {
  if (!companyPasswordValue) {
   setIsInvalidPassword(false);
  }
 }, [companyPasswordValue]);

 const handleNumberInputChange = (value) => {
  let result = value.replace(/\D/g, "");
  if (isNaN(Number(value))) {
   showError("error.loginCompany.numberCompany.input");
  }
  setCompanyNumberValue(result);
 };

 const labelText = formatMessage({
  id: isShowPassword
   ? "loginCompany.hidePassword"
   : "loginCompany.showPassword",
 });

 const numberPlaceholderText = formatMessage({
  id: "loginCompany.number.placeholder",
 });
 const passswordPlaceholderText = formatMessage({
  id: "loginCompany.password.placeholder",
 });

 const isShowFieldsError = () => {
  if (!companyNumberValue && !companyPasswordValue) {
   showError("error.loginCompany.company.emptyFields");
   return true;
  }
  if (!companyNumberValue) {
   showError("error.loginCompany.company.emptyNumberField");
   return true;
  }
  if (!companyPasswordValue) {
   showError("error.loginCompany.company.emptyPasswordField");
   return true;
  }
 };

 const handleButtonClick = () => {
  if (!isShowFieldsError()) {
   get(companyNumberValue)
    .then((response) => {
     if (response.password === companyPasswordValue) {
      setIsInvalidPassword(false);
      setUpdatedCompanyData(response)
      localStorage.setItem("company", JSON.stringify(response));
      navigate("/company-result", { state: { isRegisteredCompany: true } });
     } else {
      showError("error.loginCompany.company.password");
      setIsInvalidPassword(true);
     }
    })
    .catch((error) => {
     if (error.response.status === 404) {
      showError("error.serverError");
     }
     if (error.response.status === 500) {
      showError("error.loginCompany.company.notFound");
     }
     console.log(error);
    });
  }
 };

 return (
  <Wrapper>
   <Heading>
    <FormattedMessage id="loginCompany.title" />
   </Heading>
   <Input
    isReturnValue
    value={companyNumberValue}
    onChange={(value) => {
     handleNumberInputChange(value);
    }}
    placeholder={numberPlaceholderText}
   />
   <Input
    isReturnValue
    value={companyPasswordValue}
    onChange={(value) => setCompanyPasswordValue(value)}
    placeholder={passswordPlaceholderText}
    type={isShowPassword ? "text" : "password"}
    isError={isInvalidPassword}
   />
   <Checkbox
    onChange={() => setShowPassword(!isShowPassword)}
    labelText={labelText}
   />
   <CompanyLoginButtons onClick={handleButtonClick} />
  </Wrapper>
 );
};

export default CompanyLogin;
