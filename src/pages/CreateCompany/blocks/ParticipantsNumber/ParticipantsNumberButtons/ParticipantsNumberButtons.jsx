import { useAppContext } from "contexts";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button } from "ui";

const ParticipantsNumberButtons = ({
 setCurrentStep,
 setInitValues,
 inputValue,
 setPartcipiantsNumber,
 setNumberInputError,
}) => {
 const { showError } = useAppContext();

 useEffect(() => {
  if (!inputValue) setNumberInputError(false);
 }, [inputValue, setNumberInputError]);

 const handleSetSecondStep = () => {
  if (inputValue < 3) {
   showError("error.minParticipants");
   setNumberInputError(true);
   return;
  }

  setCurrentStep(2);
  setPartcipiantsNumber(inputValue);
  setInitValues({ names: new Array(Number(inputValue)).fill({ name: "" }) }); //це правильно
 };

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
