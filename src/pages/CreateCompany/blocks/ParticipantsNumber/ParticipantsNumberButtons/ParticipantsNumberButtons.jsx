import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button } from "ui";

const ParticipantsNumberButtons = ({
 inputValue,
 setNumberInputError,
 handleSetSecondStep,
}) => {

 useEffect(() => {
  if (!inputValue) setNumberInputError(false);
 }, [inputValue, setNumberInputError]);

 return (
  <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
   <Link tabIndex={-1} to="/" state={{ isReturned: true }}>
    <Button variant="secondary">
     <FormattedMessage id="createCompany.button.back" />
    </Button>
   </Link>
   <Button onClick={handleSetSecondStep}>
    <FormattedMessage id="createCompany.button.next" />
   </Button>
  </div>
 );
};

export default ParticipantsNumberButtons;
