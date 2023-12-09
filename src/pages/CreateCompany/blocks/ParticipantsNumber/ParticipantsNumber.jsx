import { useAppContext } from "contexts";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Heading, Input, Wrapper } from "ui";
import ParticipantsNumberButtons from "./ParticipantsNumberButtons/ParticipantsNumberButtons";

const ParticipantsNumber = ({ participantsNumber, ...props }) => {
  const { showError } = useAppContext();
  const { formatMessage } = useIntl();

  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isNumberInputError, setNumberInputError] = useState(false)

  useEffect(() => {
    setInputValue(participantsNumber);
    if (participantsNumber) {
      inputRef.current.focus();
    }
  }, [participantsNumber]);

  const handleInputChange = (value) => {
    let result = value.replace(/\D/g, "");
    if (isNaN(Number(value))) {
      showError("error.loginCompany.numberCompany.input");
     }
    if (result > 30) {
      setInputValue(30);
      showError("error.maxParticipants");
      return;
    }
    setInputValue(result);
  };

  const teamMembersPlaceholder = formatMessage({
    id: "createCompany.teamMembersNumber.placeholder",
  });

  return (
    <Wrapper>
      <Heading>
        <FormattedMessage id="createCompany.teamMembersNumber" />
      </Heading>
      <Input
        ref={inputRef}
        placeholder={teamMembersPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
        isError={isNumberInputError}
        isReturnValue
      />
      <ParticipantsNumberButtons inputValue={inputValue} setNumberInputError={setNumberInputError} {...props} />
    </Wrapper>
  );
};

export default ParticipantsNumber;
