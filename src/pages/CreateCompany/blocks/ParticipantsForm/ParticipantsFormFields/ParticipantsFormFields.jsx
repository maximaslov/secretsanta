import styles from "./ParticipantsFormFields.module.css";
import { FormInput } from "components";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";

const ParticipantsFormFields = () => {
  const { control  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "names",
  });

  const isShowAddFieldButton = fields.length < 30;
  const disabled = fields.length === 30;

  const handleDelete = (index) => {
    remove(index);
  };

  const handleAddField = (event) => {
    event.preventDefault();
    append({ name: "" });
  };

  return (
    <div className={styles.fields}>
      {fields.map((field, index) => (
        <FormInput
          key={field.id}
          name={`names.${index}.name`}
          onRemove={() => handleDelete(index)}
          canDelete={fields.length > 3}
          placeholder="participantsForm.nameInput.placeholder"
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
