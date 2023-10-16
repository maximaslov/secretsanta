import { useAppContext } from "contexts";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button } from "ui";

const ParticipantsNumberButtons = ({
  setFirstStep,
  setSecondStep,
  setInitValues,
  inputValue,
  setPartcipiantsNumber,
}) => {
  const { showError } = useAppContext();

  const handleSetSecondStep = () => {
    if (inputValue < 3) {
      showError("error.minParticipants");
      return;
    }

    setFirstStep(false);
    setSecondStep(true);
    setPartcipiantsNumber(inputValue)
    setInitValues({ names: new Array(Number(inputValue)).fill({name: "" })});
  };

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
      <Link to="/" state={{ isReturned: true }}>
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
