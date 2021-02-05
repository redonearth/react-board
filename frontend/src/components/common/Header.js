import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "./Button";
import Responsive from "./Responsive";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.indigo[4]};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .right {
    display: flex;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1.25rem;
  background: ${palette.indigo[8]};
  &:hover {
    background: ${palette.indigo[6]};
  }
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Link to="/" className="logo">
            React Board
          </Link>
          <div className="right">
            <StyledButton to="/login">로그인</StyledButton>
          </div>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
