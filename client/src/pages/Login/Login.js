import React from "react";
import LoginForm from "../../components/LoginForm";
import withLayout from "../../hoc/withLayout";

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default withLayout(Login);
