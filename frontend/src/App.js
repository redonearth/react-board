import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostWritePage from "./pages/PostWritePage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <>
      <Router>
        <Route component={LandingPage} path={["/@:username", "/"]} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={PostWritePage} path="/write" />
        <Route component={PostDetailPage} path="/@:username/:postId" />
        <Redirect from="*" to="/" />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
