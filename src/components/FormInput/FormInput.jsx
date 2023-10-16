import styles from "./FormInput.module.css";
import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import { DeleteButton, Input } from "ui";

const FormInput = ({ name, placeholder, canDelete, onRemove, ...props }) => {
  const { register } = useFormContext();
  const { formatMessage } = useIntl();

  const placeholderText = formatMessage({ id: placeholder });

  const handleDelete = () => {
    onRemove?.();
  };

  return (
    <div className={styles.formInput}>
      <Input {...register(name)} placeholder={placeholderText} {...props} />
      {canDelete && <DeleteButton onClick={handleDelete} />}
    </div>
  );
};

export default FormInput;
