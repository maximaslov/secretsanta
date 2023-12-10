import { useIntl } from "react-intl";
import { DeleteButton, Input } from "ui";
import styles from "./FormInput.module.css";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppContext } from "contexts";

const FormInput = ({
 name,
 placeholder,
 canDelete,
 onRemove,
 isError,
 index,
 fieldNames,
 ...props
}) => {
 const { getValues, register } = useFormContext();
 const { showError } = useAppContext();
 const { formatMessage } = useIntl();

 const placeholderText = formatMessage({ id: placeholder });

 const [currenValue, setCurrentValue] = useState("");
 const [error, setError] = useState(isError);
 const [wasChanged, setWasChanged] = useState(false);
 const [duplicateValues, setDuplicateValues] = useState([]);

 const values = fieldNames.map((name) => getValues(name));

 const isDuplicateValue = duplicateValues.includes(index);

 const duplicateValuesValidation = (values, setFunction) => {
  const result = [];
  for (let i = 0; i < values.length; i++) {
   for (let j = i + 1; j < values.length; j++) {
    if (values[j] === values[i]) {
     result.push(j, i);
    }
   }
  }
  setFunction(result);
 };

 useEffect(() => {
  duplicateValuesValidation(values, setDuplicateValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [currenValue]);

 useEffect(() => {
  setError(isError);
 }, [isError, setError]);

 useEffect(() => {
  if (wasChanged && !currenValue) {
   setError(isError);
  }

  if (isDuplicateValue) {
   setError(isError);
  }
  if (currenValue && !isDuplicateValue) {
   setError(false);
  }
 }, [
  wasChanged,
  currenValue,
  isError,
  duplicateValues,
  index,
  isDuplicateValue,
 ]);
 const handleDelete = () => {
  onRemove?.();
 };

 const { onChange, onBlur, ...registerAttrs } = register(name);

 const handleChange = (event) => {
  if (event.target.value.length < 30) {
   setError(false);
   setCurrentValue(event.target.value);
   setWasChanged(true);
   onChange(event);
  } else {
   showError("error.createCompany.nameField.maxLength");
   setError(true);
  }
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
    value={currenValue}
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
