import { FormattedMessage } from "react-intl";
import { Heading, Wrapper } from "ui";
import ParticipantsFormFields from "./ParticipantsFormFields";
import ParticipantsFormButtons from "./ParticipantsFormButtons";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState } from "react";

const ParticipamtsFormBody = ({ setIsError, ...props }) => {
 const [fieldErrorIndexes, setFieldErrorIndexes] = useState([]);

 const { control } = useFormContext();
 const { fields, append, remove } = useFieldArray({
  control,
  name: "names",
  rules: {
   required: "Custom error message",
  },
 });
 const fieldNames = fields.map((_, index) => `names[${index}].name`);
 
 const fieldParams = {
  fields,
  fieldNames,
  append,
  remove,
  fieldErrorIndexes,
 };

 return (
  <Wrapper maxHeight="60vh" paddingRight="0">
   <div style={{ paddingRight: "24px" }}>
    <Heading>
     <FormattedMessage id="participantsForm.title" />
    </Heading>
   </div>
   <ParticipantsFormFields {...fieldParams} />
   <ParticipantsFormButtons
    {...props}
    setFieldErrorIndexes={setFieldErrorIndexes}
    fieldNames={fieldNames}
    setIsError={setIsError}
   />
  </Wrapper>
 );
};

export default ParticipamtsFormBody;
