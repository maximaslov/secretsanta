import { useAppContext } from "contexts";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";

const ParticipantsFormButtons = ({ setFirstStep, setSecondStep }) => {
  const { formState } = useFormContext();
  const { showError } = useAppContext();

  const [isError, setIsError] = useState(formState.errors.name);

  useEffect(() => {
    setIsError(formState.errors.name);
  }, [formState]);

  const handleSetFirstStep = (event) => {
    event.preventDefault();
    setFirstStep(true);
    setSecondStep(false);
  };

  const handleNextStep = async () => {
    isError && showError("error.emptyField");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        justifyContent: "flex-end",
        paddingRight: "24px",
      }}
    >
      <Button variant="secondary" type="submit" onClick={handleSetFirstStep}>
        <FormattedMessage id="createCompany.button.back" />
      </Button>
      <Button type="submit" onClick={handleNextStep}>
        <FormattedMessage id="createCompany.button.next" />
      </Button>
    </div>
  );
};

export default ParticipantsFormButtons;
