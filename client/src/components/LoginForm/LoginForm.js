import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, loginWithEmailAndPassword } from "../../redux/auth/action";
import google from "../../assets/icons/search.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginForm.scss";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
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

  return (
    <>
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
          <Form.Group className="text-center">
            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>
          </Form.Group>
        </Form>
        <p className="text-center m-3">OR</p>
        <div className="text-center">
          <Button
            variant="outline-primary"
            type="submit"
            onClick={handleLoginWithGoogle}
            className="w-100"
          >
            <img src={google} alt="" /> Google Login
          </Button>
        </div>
        <Link to="/register" className="registerLink">
          <Button variant="danger" className="register-btn w-100 mt-3">
            Register
          </Button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
