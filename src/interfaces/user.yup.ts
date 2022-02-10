import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
