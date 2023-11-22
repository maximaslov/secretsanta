import { useIntl } from "react-intl";
import { DeleteButton, Input } from "ui";
import styles from "./FormInput.module.css";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

const FormInput = ({
 name,
 placeholder,
 canDelete,
 onRemove,
 isError,
 index,
 currentValues,
 ...props
}) => {
 const { register } = useFormContext();
 const { formatMessage } = useIntl();
 const placeholderText = formatMessage({ id: placeholder });

 const [currenValue, setCurrentValue] = useState("");
 const [error, setError] = useState(isError);
 const [wasChanged, setWasChanged] = useState(false);

 useEffect(() => {
  setError(isError);
 }, [isError, setError]);

 useEffect(() => {
  if (wasChanged && !currenValue) {
   setError(isError);
  }

  if (currenValue) { //вся проблема тут
   setError(false);
  }
//   if (currenValue && !currentValues.includes(currenValue)) { //вся проблема тут
//    setError(false);
//   }

 }, [wasChanged, currenValue, isError, currentValues]);

 const handleDelete = () => {
  onRemove?.();
 };

 const { onChange, onBlur, ...registerAttrs } = register(name);

 const handleChange = (event) => {
  setCurrentValue(event.target.value);
  setWasChanged(true);
  onChange(event);
 };

 const handleBlur = (event) => {
  onBlur(event);
  if (!currenValue) {
   setError(true);
  }
 };

 return (
  <div className={styles.formInput}>
   <Input
    {...registerAttrs}
    placeholder={placeholderText}
    onChange={handleChange}
    onBlur={handleBlur}
    isError={error}
    {...props}
   />
   {canDelete && <DeleteButton onClick={handleDelete} />}
  </div>
 );
};

export default FormInput;
