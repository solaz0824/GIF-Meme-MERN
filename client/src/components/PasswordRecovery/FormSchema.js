import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("Please Enter your Email"),
});

export default FormSchema;
