import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    let loginForm = {
      email: Email,
      password: Password
    };

    dispatch(loginUser(loginForm)).then((response) => {
      if (response.payload.loginSuccess) {
        history.push("/");
      } else {
        alert("Login Error.");
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label>E-mail</label>
        <input type="email" value={Email} onChange={onEmailChange} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordChange} />
        <button>Login</button>
      </Form>
    </Container>
  );
}

export default withRouter(LoginPage);
