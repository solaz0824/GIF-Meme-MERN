import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(80, "Too long")
    .required("The title is required"),
  category: Yup.string().required("The category is required"),
});

export default FormSchema;
