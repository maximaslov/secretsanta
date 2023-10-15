import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import { Input } from "ui";

const FormNameInput = ({
  name,
  placeholder,
  canDelete,
  onRemove,
  validate,
}) => {
  const { register } = useFormContext();
  const { formatMessage } = useIntl();

  const placeholderText = formatMessage({ id: placeholder });

  const handleDelete = () => {
    onRemove?.();
  };

  const handleValidate = (data) => {
    validate?.(data);
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Input
        {...register(name, { reqiured: true, validate: handleValidate })}
        placeholder={placeholderText}
      />
      {canDelete && <p onClick={handleDelete}>Delete</p>}
    </div>
  );
};

export default FormNameInput;
