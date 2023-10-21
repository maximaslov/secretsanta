import { FormattedMessage } from "react-intl";
import { Heading, Wrapper } from "ui";
import ParticipantsFormFields from "./ParticipantsFormFields";
import ParticipantsFormButtons from "./ParticipantsFormButtons";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppContext } from "contexts";

export const ParticipamtsFormBody = (props) => {
  const { control, formState, getValues } = useFormContext();
  const { showError } = useAppContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "names",
  });
 

  const [errorIndexes, setErrorIndexes] = useState([]);
  const fieldNames = fields.map((field, index) => `names[${index}].name`);

  // useEffect(() => {
  //   if(!!Object.keys(formState.errors).length) {
  //     showError("error.emptyField")
  //   }
  //   // eslint-disable-next-line
  // },[formState]); вже не підходить бо стейт оновлюється постійно

  const fieldParams = {
    fields,
    append,
    remove,
    errorIndexes,
  };

  console.log(formState.errors?.names[2])

  useEffect(() => {
    if (errorIndexes.length) {
      showError("error.emptyField")
    }
  }, [errorIndexes]);

  return (
    <Wrapper maxHeight="60vh" paddingRight="0">
      <div style={{ paddingRight: "24px" }}>
        <Heading>
          <FormattedMessage id="participantsForm.title" />
        </Heading>
      </div>
      <ParticipantsFormFields {...fieldParams} />
      <ParticipantsFormButtons
        {...props}
        setErrorIndexes={setErrorIndexes}
        fieldNames={fieldNames}
      />
    </Wrapper>
  );
};

export default ParticipamtsFormBody;
