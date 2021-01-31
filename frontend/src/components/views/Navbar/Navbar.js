import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { USER_SERVER } from "../../../Config";
import axios from "axios";

const Nav = styled.nav`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Navbar({ props, location: { pathname } }) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    try {
      const response = axios.get(`${USER_SERVER}/logout`);
      if (response.data.success) {
        props.history.push("/login");
      }
    } catch {
      alert("로그아웃 에러가 발생했습니다.");
    }
  };

  return (
    <Nav>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        {user.userData && !user.userData.isAuth ? (
          <>
            <Item current={pathname === "/login"}>
              <SLink to="/login">Login</SLink>
            </Item>
            <Item current={pathname === "/register"}>
              <SLink to="/register">Register</SLink>
            </Item>
          </>
        ) : (
          <Item>
            <button onClick={logoutHandler}>로그아웃</button>
          </Item>
        )}
      </List>
    </Nav>
  );
}

export default withRouter(Navbar);
