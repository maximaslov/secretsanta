import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";

const Form = ({ children, defaultValues, onSubmit, preventSubmitByEvents }) => {
  const methods = useForm({ defaultValues });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  );
};

Form.defaultProps = {
  preventSubmitByEvents: true,
};
export default Form;
