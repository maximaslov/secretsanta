import { Form } from "components";
import { participantsFormSchema } from "./participantsFormSchema";
import ParticipantsFormBody from "./ParticipantsFormBody";
import { useAppContext } from "contexts";
import { useState } from "react";

const ParticipantsForm = ({ initValues, ...props }) => {
 const { companyRegistration } = useAppContext();
 const [isError, setIsError] = useState(false);

 const handleSubmit = (data) => {
  if (!isError) {
   console.log("submit");
   console.log(data.names); //видалити перед деплоєм
   companyRegistration(data.names);
  }
 };

 return (
  <Form
   defaultValues={initValues}
   onSubmit={handleSubmit}
   schema={participantsFormSchema}
  >
   <ParticipantsFormBody setIsError={setIsError} {...props} />
  </Form>
 );
};

export default ParticipantsForm;
