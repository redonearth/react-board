import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const AuthTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.indigo[4]};
`;

const StyledBox = styled.div`
  .logo-area {
    display: block;
    color: ${palette.indigo[6]};
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    padding-bottom: 3.5rem;
  }
  background: ${palette.gray[0]};
  border-radius: 12px;
  width: 580px;
  padding: 2.75rem 4.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <StyledBox>
        <div className="logo-area">
          <Link to="/">React Board</Link>
        </div>
        {children}
      </StyledBox>
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;
