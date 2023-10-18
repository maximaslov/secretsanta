import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ children, onSubmit, schema, ...props }) => {
  const resolver = yupResolver(schema);

  const methods = useForm({ resolver, ...props });

  return (
    <FormProvider {...methods}>
      <form
        style={{ display: "flex", width: "100%", justifyContent: "center" }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
export default Form;
