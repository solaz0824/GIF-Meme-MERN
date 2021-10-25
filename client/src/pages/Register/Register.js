import React from "react";
import withLayout from "../../hoc/withLayout";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default withLayout(Register);
