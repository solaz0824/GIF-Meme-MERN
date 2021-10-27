import React from "react";
import withLayout from "../../hoc/withLayout";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div className="container mt-5 p-4">
      <div className="row">
        <div className="col-md-5 mx-auto border border-secondary rounded p-4">
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Register</h1>
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Register);
