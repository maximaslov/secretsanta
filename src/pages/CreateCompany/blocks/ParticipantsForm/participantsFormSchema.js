import { object, string } from "yup";

export const participantsFormSchema = object({
  name: string().required('error.emptyField'),
});