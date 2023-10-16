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

  useEffect(() => {
    setInputValue(participantsNumber);
    if (participantsNumber) {
      inputRef.current.focus();
    }
  }, [participantsNumber]);

  const handleInputChange = (value) => {
    let result = value.replace(/\D/g, "");
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
        isReturnValue
      />
      <ParticipantsNumberButtons inputValue={inputValue} {...props} />
    </Wrapper>
  );
};

export default ParticipantsNumber;
