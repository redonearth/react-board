import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  cursor: pointer;
  background: ${palette.gray[8]};
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
      background: ${palette.indigo[8]};
      &:hover {
        background: ${palette.indigo[6]};
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
