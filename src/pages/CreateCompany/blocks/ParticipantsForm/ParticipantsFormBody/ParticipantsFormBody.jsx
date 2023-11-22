import { FormattedMessage } from "react-intl";
import { Heading, Wrapper } from "ui";
import ParticipantsFormFields from "./ParticipantsFormFields";
import ParticipantsFormButtons from "./ParticipantsFormButtons";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

const ParticipamtsFormBody = ({
 emptyFieldErrorIndexes,
 setEmtyFieldErrorIndexes,
 pairFieldErrorIndexes,
 ...props
}) => {
 const { control, getValues } = useFormContext();
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
  append,
  remove,
  emptyFieldErrorIndexes,
  pairFieldErrorIndexes,
 };

 const [currentValues, setCurrentValues] = useState(null);

 useEffect(() => {
  setInterval(() => {
   const values = fieldNames.map((name) => getValues(name));
   setCurrentValues(values);
  }, 500);
 });

 return (
  <Wrapper maxHeight="60vh" paddingRight="0">
   <div style={{ paddingRight: "24px" }}>
    <Heading>
     <FormattedMessage id="participantsForm.title" />
    </Heading>
   </div>
   <ParticipantsFormFields {...fieldParams} currentValues={currentValues}/>
   <ParticipantsFormButtons
    {...props}
    setEmtyFieldErrorIndexes={setEmtyFieldErrorIndexes}
    fieldNames={fieldNames}
   />
  </Wrapper>
 );
};

export default ParticipamtsFormBody;
