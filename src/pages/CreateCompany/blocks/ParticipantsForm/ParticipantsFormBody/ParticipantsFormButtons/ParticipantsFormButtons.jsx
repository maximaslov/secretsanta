import { useAppContext } from "contexts";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { Button } from "ui";
import styles from "./ParticipantsFormButtons.module.css";

const ParticipantsFormButtons = ({
  setFirstStep,
  setSecondStep,
  setErrorIndexes,
  fieldNames,
}) => {
  

  const handleSetFirstStep = (event) => {
    event.preventDefault();
    setFirstStep(true);
    setSecondStep(false);
  };

  // const handleNextStep = () => {
   
  //   const values = fieldNames.map((name) => getValues(name));

  //   const emptyIndexes = [];
    
  //   for (let i = 0; i < values.length; i++) {
  //     if (values[i] === "") {
  //       emptyIndexes.push(i);
  //     }
  //   }
  //   setErrorIndexes(emptyIndexes);
  // };

  return (
    <div className={styles.buttonsWrapper}>
      <Button variant="secondary" type="submit" onClick={handleSetFirstStep}>
        <FormattedMessage id="createCompany.button.back" />
      </Button>
      <Button type="submit" 
      // onClick={handleNextStep}
      >
        <FormattedMessage id="createCompany.button.next" />
      </Button>
    </div>
  );
};

export default ParticipantsFormButtons;
