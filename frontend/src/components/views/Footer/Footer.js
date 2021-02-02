import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(60, 60, 60, 0.4);
`;

function Footer() {
  return <Container>Footer</Container>;
}

export default withRouter(Footer);
