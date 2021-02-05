import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../_actions/user_action";
import styled from "styled-components";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호를 똑같이 입력해 주세요.");
    }

    let loginForm = {
      email,
      name,
      password
    };

    dispatch(registerUser(loginForm)).then((response) => {
      if (response.payload.success) {
        history.push("/login");
      } else {
        alert("Failed to sign up.");
      }
    });
  };

  return (
    <Container>
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
      {/* <Form onSubmit={onSubmit}>
        <label>E-mail</label>
        <input type="email" value={email} onChange={onEmailChange} />
        <label>Name</label>
        <input type="text" value={name} onChange={onNameChange} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordChange} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
        <button>Register</button>
      </Form> */}
    </Container>
  );
}

export default withRouter(RegisterPage);
