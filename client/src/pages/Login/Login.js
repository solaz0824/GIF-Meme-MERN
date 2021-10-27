import React from "react";
import LoginForm from "../../components/LoginForm";
import withLayout from "../../hoc/withLayout";

const Login = () => {
  return (
    <div className="container mt-5 p-4">
      <div className="row">
        <div className="col-md-5 mx-auto border border-secondary rounded p-4">
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Login</h1>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Login);
