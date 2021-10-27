import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
// import "./style/RegisterForm.scss";
import { registerWithEmailAndPassword } from "../../redux/auth/action";

import { Link } from "react-router-dom";

const RegisterFrom = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.auth.registerSuccess);
  useEffect(() => {
    if (registerState) {
      history.push("/login");
    }
  }, [registerState, history]);
  return (
    <Formik
      onSubmit={(values) => {
        dispatch(
          registerWithEmailAndPassword(values.email, values.password, {
            firstName: values.name,
            lastName: values.surname,
          })
        );
      }}
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
      }}
      validationSchema={FormSchema}
    >
      {({
        errors,
        values,
        touched,
        isValidating,
        isValid,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="register-box">
            <Input
              className="register-inputs name w-100 mt-2 p-1"
              type="text"
              name="name"
              label=""
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.name}
              errorMessage={errors.name}
            />
            <Input
              className="register-inputs surname w-100 mt-2 p-1"
              type="text"
              name="surname"
              label=""
              value={values.surname}
              placeholder="Surname"
              handleChange={(e) => {
                handleChange(e);
              }}
              handleBlur={handleBlur}
              hasErrorMessage={touched.surname}
              errorMessage={errors.surname}
            />
            <Input
              className="register-inputs password w-100 mt-2 p-1"
              type="password"
              name="password"
              label=""
              autoComplete="on"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.password}
              errorMessage={errors.password}
            />

            <Input
              className="register-inputs cpassword w-100 mt-2 p-1"
              name="confirm"
              label=""
              autoComplete="on"
              placeholder="Confirm password"
              type="password"
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              hasErrorMessage={touched.confirm}
              errorMessage={errors.confirm}
            />
            <Input
              className="register-inputs email w-100 mt-2 p-1"
              name="email"
              placeholder="Email"
              label=""
              type="email"
              value={values.email}
              handleChange={(e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
              hasErrorMessage={touched.email}
              errorMessage={errors.email}
            />
            <Button type="submit" className="mt-3 w-100">
              Register
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterFrom;
