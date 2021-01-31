import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const SLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

function LandingPage(props) {
  const onLogoutClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃이 실패했습니다.");
      }
    });
  };

  return (
    <SLayout>
      <h2>시작 페이지</h2>
      <button onClick={onLogoutClickHandler}>로그아웃</button>
    </SLayout>
  );
}

export default withRouter(LandingPage);
