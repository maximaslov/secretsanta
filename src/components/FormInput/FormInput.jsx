import { useIntl } from "react-intl";
import { DeleteButton, Input } from "ui";
import styles from "./FormInput.module.css";
import { useFormContext } from "react-hook-form";

const FormInput = ({ name, placeholder, canDelete, onRemove, ...props }) => {
  const { register, formState } = useFormContext();
  const { formatMessage } = useIntl();

  const placeholderText = formatMessage({ id: placeholder });

  const isError = formState.errors.name?.message;

  const handleDelete = () => {
    onRemove?.();
  };

  return (
    <div className={styles.formInput}>
      <Input {...register(name)} placeholder={placeholderText} isError={isError} {...props} />
      {canDelete && <DeleteButton onClick={handleDelete} />}
    </div>
  );
};

export default FormInput;
