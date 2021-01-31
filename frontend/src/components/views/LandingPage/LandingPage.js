import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const SLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

function LandingPage() {
  return (
    <SLayout>
      <h2>시작 페이지</h2>
    </SLayout>
  );
}

export default withRouter(LandingPage);
