import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "ui";
import FormNameInput from "./FormNameInput";

const Fields = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "names",
  });

  const handleDelete = (index) => {
    remove(index);
  };

  const handleAddField = () => {
    append({ name: "" });
  };

  const validate = (name) => {
    console.log("validate name ", name);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {fields.map((field, index) => (
        <FormNameInput
          key={field.id}
          name={`names.${index}.name`}
          onRemove={() => handleDelete(index)}
          canDelete={fields.length > 3}
          placeholder="participantsForm.nameInput.placeholder"
        />
      ))}
      <Button onClick={handleAddField}>Add</Button>
    </div>
  );
};

export default Fields;
