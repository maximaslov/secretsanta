import { useFormContext } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";
import styles from "./ParticipantsFormButtons.module.css";
import { useAppContext } from "contexts";

const ParticipantsFormButtons = ({
 setCurrentStep,
 setEmtyFieldErrorIndexes,
 fieldNames,
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

  for (let i = 0; i < values.length; i++) {
   if (values[i] === "") {
    emptyIndexes.push(i);
   }
  }
  setEmtyFieldErrorIndexes(emptyIndexes);
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
