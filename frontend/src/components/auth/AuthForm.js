import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormWrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${palette.gray[6]};
    margin-bottom: 3rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: ${palette.gray[0]};
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
  &:focus {
    color: ${palette.gray[8]};
    border-bottom: 1px solid ${palette.indigo[8]};
  }
  & + & {
    margin-top: 2rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
`;

const Footer = styled.div`
  margin-top: 1.5rem;
  text-align: right;
  a {
    color: ${palette.indigo[6]};
    font-size: 1.125rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      color: ${palette.indigo[4]};
    }
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입"
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <h1>{text}</h1>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <ButtonWithMarginTop fullWidth indigo>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormWrapper>
  );
};

export default AuthForm;
