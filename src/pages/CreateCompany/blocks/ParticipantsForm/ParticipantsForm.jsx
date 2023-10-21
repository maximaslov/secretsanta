import { Form } from "components";
import { participantsFormSchema } from "./participantsFormSchema";
import ParticipantsFormBody from "./ParticipantsFormBody";

const ParticipantsForm = ({ initValues, ...props }) => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      defaultValues={initValues}
      onSubmit={handleSubmit}
      schema={participantsFormSchema}
    >
      <ParticipantsFormBody {...props}/>
    </Form>
  );
};

export default ParticipantsForm;
