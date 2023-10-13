import { useAppContext } from "contexts";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Button, Heading, Input, Wrapper } from "ui";

const CreateCompany = () => {
  const { formatMessage } = useIntl();
  const { showError } = useAppContext();

  const [isFirstStep, setFirstStep] = useState(true);
  const [isSecondStep, setSecondStep] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSetSecondStep = () => {
    setFirstStep(false);
    setSecondStep(true);
  };

  const handleSetFirstStep = () => {
    setFirstStep(true);
    setSecondStep(false);
  };

  const handleInputChange = (value) => {
    let result = value.replace(/\D/g, "");
    if (result > 30) {
      setInputValue(30);
      showError('Max 30 members')
      return;
    }
    setInputValue(result);
  };

  const teamMembersPlaceholder = formatMessage({
    id: "createCompany.teamMembersNumber.placeholder",
  });

  if (isFirstStep) {
    return (
      <Wrapper>
        <Heading>
          <FormattedMessage id="createCompany.teamMembersNumber" />
        </Heading>
        <Input
          placeholder={teamMembersPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div
          style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
        >
          <Link to="/" state={{ isReturned: true }}>
            <Button variant="secondary">
              <FormattedMessage id="createCompany.button.back" />
            </Button>
          </Link>
          <Button onClick={handleSetSecondStep}>
            <FormattedMessage id="createCompany.button.next" />
          </Button>
        </div>
      </Wrapper>
    );
  }

  if (isSecondStep) {
    return <>Кількість полів: {inputValue}</>;
  }
};

export default CreateCompany;
