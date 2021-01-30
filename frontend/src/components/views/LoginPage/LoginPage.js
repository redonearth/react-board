import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh"
};

const formStyle = {
  display: "flex",
  flexDirection: "column"
};

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailChangeHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let loginForm = {
      email: Email,
      password: Password
    };

    dispatch(loginUser(loginForm)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Login Error.");
      }
    });
  };

  return (
    <div style={style}>
      <form style={formStyle} onSubmit={onSubmitHandler}>
        <label>E-mail</label>
        <input type="email" value={Email} onChange={onEmailChangeHandler} />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordChangeHandler}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
