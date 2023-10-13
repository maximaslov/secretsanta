import { FormattedMessage } from "react-intl";
import { Button, Heading, Input, Wrapper } from "ui";

const CreateCompany = () => {
  return (
    <Wrapper>
      <Heading>
        <FormattedMessage id="createCompany.teamMembersNumber" />
      </Heading>
      <Input />
      <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
        <Button variant="secondary">
          <FormattedMessage id="createCompany.button.back" />
        </Button>
        <Button>
          <FormattedMessage id="createCompany.button.next" />
        </Button>
      </div>
    </Wrapper>
  );
};

export default CreateCompany;
