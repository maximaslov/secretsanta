import { useFormContext } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";
import styles from "./ParticipantsFormButtons.module.css";
import { useAppContext } from "contexts";

const ParticipantsFormButtons = ({
 setCurrentStep,
 setFieldErrorIndexes,
 fieldNames,
 setIsError,
}) => {
 const { getValues, trigger } = useFormContext();
 const { showError } = useAppContext();

 const handleSetFirstStep = (event) => {
  event.preventDefault();
  setCurrentStep(1);
 };

 const errorBordersSetter = () => {
  const values = fieldNames.map((name) => getValues(name));

  const emptyIndexes = [];
  const duplicateNamesIndexes = [];

  for (let i = 0; i < values.length; i++) {
   if (values[i] === "") {
    emptyIndexes.push(i);
   }
   for (let j = i + 1; j < values.length + 1; j++) {
    if (values[j] === values[i]) {
     duplicateNamesIndexes.push(i, j);
    }
   }
  }

  if (!!emptyIndexes.length || !!duplicateNamesIndexes.length) {
   if (!!emptyIndexes.length) {
    setFieldErrorIndexes(emptyIndexes);
   } else if (!!duplicateNamesIndexes.length) {
    setFieldErrorIndexes(duplicateNamesIndexes);
    showError("error.duplicateNames");
   }
   setIsError(true);
  } else setIsError(false);
 };

 const handleNextStep = async () => {
  const isValid = await trigger();
  if (!isValid) {
   showError("error.emptyField");
  }
  errorBordersSetter();
 };

 return (
  <div className={styles.buttonsWrapper}>
   <Button variant="secondary" onClick={handleSetFirstStep}>
    <FormattedMessage id="createCompany.button.back" />
   </Button>
   <Button type="submit" onClick={handleNextStep}>
    <FormattedMessage id="createCompany.button.next" />
   </Button>
  </div>
 );
};

export default ParticipantsFormButtons;
