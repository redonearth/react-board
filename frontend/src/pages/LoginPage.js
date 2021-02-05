import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../components/auth/LoginForm";
import { withRouter } from "react-router-dom";

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default withRouter(LoginPage);
