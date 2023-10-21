import styles from "./ParticipantsFormFields.module.css";
import { FormInput } from "components";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";

const ParticipantsFormFields = ({
  fields,
  append,
  remove,
  errorIndexes,
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

  return (
    <div ref={contentRef} className={styles.fields}>
      {fields.map((field, index) => (
        <FormInput
          key={field.id}
          name={`names[${index}].name`}
          onRemove={() => handleDelete(index)}
          canDelete={fields.length > 3}
          placeholder="participantsForm.nameInput.placeholder"
          isError={errorIndexes.includes(index)}
          index={index}
        />
      ))}
      {isShowAddFieldButton && (
        <Button
          disabled={disabled}
          variant="secondary"
          onClick={handleAddField}
        >
          <FormattedMessage id="participantsForm.fields.addField" />
        </Button>
      )}
    </div>
  );
};

export default ParticipantsFormFields;
