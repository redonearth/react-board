import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../components/auth/RegisterForm";
import { withRouter } from "react-router-dom";

function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default withRouter(RegisterPage);
