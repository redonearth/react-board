import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const buttonStyle = css`
  outline: none;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  cursor: pointer;
  background: ${palette.gray[8]};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.indigo &&
    css`
      background: ${palette.indigo[6]};
      &:hover {
        background: ${palette.indigo[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
