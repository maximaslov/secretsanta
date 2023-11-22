import { Form } from "components";
import { participantsFormSchema } from "./participantsFormSchema";
import ParticipantsFormBody from "./ParticipantsFormBody";
import { useAppContext } from "contexts";
import { useState } from "react";

const ParticipantsForm = ({ initValues, ...props }) => {
 const { showError, companyRegistration } = useAppContext();
 const [emptyFieldErrorIndexes, setEmtyFieldErrorIndexes] = useState([]);
 const [pairFieldErrorIndexes, setPairFieldErrorIndexes] = useState([]);

 const errorsValidation = (data) => {
  let pairs = [];
  for (let i = 0; i < data.length; i++) {
   for (let j = i + 1; j < data.length; j++) {
    if (data[j].name !== "") {
     if (data[i].name === data[j].name && !pairs.includes(j)) {
      pairs.push(j);

      if (!pairs.includes(i)) {
       pairs.push(i);
      }
     }
    }
   }
  }

  if (pairs.length) {
   showError("error.duplicateNames");
   setPairFieldErrorIndexes(pairs);
   return false;
  } else return true;
 };

 const handleSubmit = (data) => {
  console.log("submit");
  if (errorsValidation(data.names)) {
   companyRegistration(data.names);
//    console.log(data.names); // виконуємо наступні дії
  }
 };

 return (
  <Form
   defaultValues={initValues}
   onSubmit={handleSubmit}
   schema={participantsFormSchema}
  >
   <ParticipantsFormBody
    emptyFieldErrorIndexes={emptyFieldErrorIndexes}
    setEmtyFieldErrorIndexes={setEmtyFieldErrorIndexes}
    pairFieldErrorIndexes={pairFieldErrorIndexes}
    {...props}
   />
  </Form>
 );
};

export default ParticipantsForm;
