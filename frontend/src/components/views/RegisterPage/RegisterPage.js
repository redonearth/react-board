import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import styled from "styled-components";

const SLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailChangeHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameChangeHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호를 똑같이 입력해 주세요.");
    }

    let loginForm = {
      email: Email,
      name: Name,
      password: Password
    };

    dispatch(registerUser(loginForm)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Failed to sign up.");
      }
    });
  };

  return (
    <SLayout>
      <SForm onSubmit={onSubmitHandler}>
        <label>E-mail</label>
        <input type="email" value={Email} onChange={onEmailChangeHandler} />
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameChangeHandler} />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordChangeHandler}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordChangeHandler}
        />
        <button>Register</button>
      </SForm>
    </SLayout>
  );
}

export default withRouter(RegisterPage);
