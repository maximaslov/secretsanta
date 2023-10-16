import { FormProvider, useForm } from "react-hook-form";

const Form = ({ children, defaultValues, onSubmit }) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
export default Form;
