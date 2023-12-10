import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button } from "ui";

const CompanyLoginButtons = ({ onClick }) => {
 const handleNextClick = () => {
  onClick?.();
 };
 return (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
   <Link tabIndex={-1} to="/" state={{ isReturned: true }}>
    <Button variant="secondary">
     <FormattedMessage id="createCompany.button.back" />
    </Button>
   </Link>
   <Button onClick={handleNextClick}>
    <FormattedMessage id="loginCompany.button.next" />
   </Button>
  </div>
 );
};

export default CompanyLoginButtons;
