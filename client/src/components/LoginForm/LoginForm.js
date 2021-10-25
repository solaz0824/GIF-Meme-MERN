import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PasswordRecovery from "../PasswordRecovery";
import { login, loginWithEmailAndPassword } from "../../redux/auth/action";
import google from "../../assets/icons/search.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginForm.scss";
const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [recoverPass, setRecoverPass] = useState({ recover: false });
  const { email, password } = loginForm;
  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    dispatch(login());
  };

  const handleLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    dispatch(loginWithEmailAndPassword(email, password));
  };

  const handleRecover = () => {
    setRecoverPass({ recover: true });
  };
  const recoverOff = () => {
    setRecoverPass({ recover: false });
  };
  return (
    <>
      {recoverPass.recover ? (
        <PasswordRecovery recoverOff={recoverOff} />
      ) : (
        <div className="loginForm">
          <Form onSubmit={handleLoginWithEmailAndPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Login
            </Button>
          </Form>
          <div className="forgotPassword">
            Forgot your password?{" "}
            <span className="recover-link" onClick={handleRecover}>
              Click here
            </span>
          </div>
          <Button
            variant="outline-primary"
            type="submit"
            onClick={handleLoginWithGoogle}
          >
            <img src={google} alt="" /> Google Login
          </Button>
          <Link to="/register" className="registerLink">
            <Button variant="outline-danger" className="register-btn">
              Register
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default LoginForm;
