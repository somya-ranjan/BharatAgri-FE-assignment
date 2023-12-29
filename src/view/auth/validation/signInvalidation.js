import * as Yup from "yup";
const signInValidationSchema = Yup.object({
  userName: Yup.string().required("Please enter user name"),
  password: Yup.string().required("Please enter password"),
});
export default signInValidationSchema;
