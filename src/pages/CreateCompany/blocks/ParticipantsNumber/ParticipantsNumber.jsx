import { useAppContext } from "contexts";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Heading, Input, Wrapper } from "ui";
import ParticipantsNumberButtons from "./ParticipantsNumberButtons";

const ParticipantsNumber = (props) => {
  const { showError } = useAppContext();
  const { formatMessage } = useIntl();

  const [inputValue, setInputValue] = useState("");

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
