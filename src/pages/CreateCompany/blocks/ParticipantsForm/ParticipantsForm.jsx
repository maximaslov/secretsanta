import { Form } from "components";
import { Heading, Wrapper } from "ui";
import { FormattedMessage } from "react-intl";
import ParticipantsFormFields from "./ParticipantsFormFields";
import ParticipantsFormButtons from "./ParticipantsFormButtons";
import { participantsFormSchema } from "./participantsFormSchema";

const ParticipantsForm = ({ initValues, ...props }) => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <Form defaultValues={initValues} onSubmit={handleSubmit} schema={participantsFormSchema}>
      <Wrapper maxHeight="60vh" paddingRight="0">
        <div style={{ paddingRight: "24px" }}>
          <Heading>
            <FormattedMessage id="participantsForm.title" />
          </Heading>
        </div>
        <ParticipantsFormFields initValues={initValues} />
        <ParticipantsFormButtons {...props}/>
      </Wrapper>
    </Form>
  );
};

export default ParticipantsForm;
