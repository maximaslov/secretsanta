import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button } from "ui";

const CreateNewCompanyButton = () => {
 const handleButtonClick = () => {
    localStorage.removeItem("name")
 };

 return (
  <Link tabIndex={-1} to="/create-company" style={{margin: '0 auto'}}>
   <Button onClick={handleButtonClick}>
    <FormattedMessage id="result.createNewCompany" />
   </Button>
  </Link>
 );
};

export default CreateNewCompanyButton;
