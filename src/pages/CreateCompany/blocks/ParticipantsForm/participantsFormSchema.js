import * as yup from "yup";

export const participantsFormSchema = yup.object().shape({
  names: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Имя обязательно для заполнения"),
    })
  )
  // .test(
  //   'is-unique',
  //   'Имена не должны повторяться',
  //   function (value) {
  //     const namesArray = value.map(item => item.name);
  //     return namesArray.length === new Set(namesArray).size;
  //   }
  // ),
});

