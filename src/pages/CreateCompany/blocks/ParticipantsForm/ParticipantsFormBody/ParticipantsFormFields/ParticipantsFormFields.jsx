import styles from "./ParticipantsFormFields.module.css";
import { FormInput } from "components";
import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";
import { handleEvent, onUnnecessaryEnterClick } from "utils/helpers";

const ParticipantsFormFields = ({
 fields,
 append,
 remove,
 fieldErrorIndexes,
 fieldNames,
}) => {
 const isShowAddFieldButton = fields.length < 30;
 const disabled = fields.length === 30;

 const contentRef = useRef(null);

 const [isFirstRender, setIsFirstRender] = useState(true);

 const scrollToBottom = () => {
  if (contentRef.current) {
   contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }
 };

 useEffect(() => {
  if (contentRef.current) {
   contentRef.current.scrollTop = 0;
  }
 }, []);

 useEffect(() => {
  if (isFirstRender) {
   setIsFirstRender(false);
  } else {
   scrollToBottom();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [fields.length]);

 const handleDelete = (index) => {
  remove(index);
 };

 const handleAddField = (event) => {
  append({ name: "" });
 };

 const isError = (index) => {
  return fieldErrorIndexes.includes(index);
 };

 return (
  <div
   ref={contentRef}
   className={styles.fields}
   onKeyDown={onUnnecessaryEnterClick}
  >
   {fields.map(({ id }, index) => (
    <FormInput
     fieldNames={fieldNames}
     key={id}
     name={`names[${index}].name`}
     onRemove={() => handleDelete(index)}
     canDelete={fields.length > 3}
     placeholder="participantsForm.nameInput.placeholder"
     isError={isError(index)}
     index={index}
    />
   ))}
   {isShowAddFieldButton && (
    <Button
     disabled={disabled}
     variant="secondary"
     {...handleEvent(handleAddField)}
    >
     <FormattedMessage id="participantsForm.fields.addField" />
    </Button>
   )}
  </div>
 );
};

export default ParticipantsFormFields;
