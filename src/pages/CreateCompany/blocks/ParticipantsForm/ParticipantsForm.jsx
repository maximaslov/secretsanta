import { Form } from "components";
import { participantsFormSchema } from "./participantsFormSchema";
import ParticipantsFormBody from "./ParticipantsFormBody";
import { useAppContext } from "contexts";
import { useState } from "react";
import { handleEvent } from "utils/helpers";

const ParticipantsForm = ({ initValues, ...props }) => {
 const { companyRegistration } = useAppContext();
 const [isError, setIsError] = useState(false);

 const handleSubmit = (data) => {
  if (!isError) {
   companyRegistration(data.names);
  }
 };

 return (
  <Form
   defaultValues={initValues}
   onSubmit={handleSubmit}
   schema={participantsFormSchema}
  >
   <ParticipantsFormBody
    setIsError={setIsError}
    {...handleEvent(handleSubmit)}
    {...props}
   />
  </Form>
 );
};

export default ParticipantsForm;
