import styles from "./ParticipantsFormFields.module.css";
import { FormInput } from "components";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";

const ParticipantsFormFields = ({
 fields,
 append,
 remove,
 emptyFieldErrorIndexes,
 pairFieldErrorIndexes,
 currentValues,
}) => {
 const isShowAddFieldButton = fields.length < 30;
 const disabled = fields.length === 30;

 const contentRef = useRef(null);

 const scrollToTop = () => {
  if (contentRef.current) {
   contentRef.current.scrollTop = 0;
  }
 };

 const handleDelete = (index) => {
  remove(index);
 };

 const handleAddField = (event) => {
  event.preventDefault();
  append({ name: "" });
  scrollToTop();
 };

 const isError = (index) => {
  return (
   emptyFieldErrorIndexes.includes(index) ||
   pairFieldErrorIndexes.includes(index)
  );
 };

 return (
  <div ref={contentRef} className={styles.fields}>
   {fields.map(({ id }, index) => (
    <FormInput
     key={id}
     name={`names[${index}].name`}
     onRemove={() => handleDelete(index)}
     canDelete={fields.length > 3}
     placeholder="participantsForm.nameInput.placeholder"
     isError={isError(index)}
     index={index}
     currentValues={currentValues}
    />
   ))}
   {isShowAddFieldButton && (
    <Button disabled={disabled} variant="secondary" onClick={handleAddField}>
     <FormattedMessage id="participantsForm.fields.addField" />
    </Button>
   )}
  </div>
 );
};

export default ParticipantsFormFields;
