import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormWrapper = styled.div``;

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
    color: ${palette.indigo[8]};
    font-size: 1.125rem;
    font-weight: 500;
    &:hover {
      color: ${palette.indigo[4]};
    }
  }
`;

const AuthForm = () => {
  return (
    <AuthFormWrapper>
      <form>
        <StyledInput autoComplete="email" name="email" placeholder="이메일" />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <ButtonWithMarginTop fullWidth indigo>
          로그인
        </ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormWrapper>
  );
};

export default AuthForm;
