import * as yup from "yup";

export const participantsFormSchema = yup.object().shape({
  names: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
    })
  ),
});