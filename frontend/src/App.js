import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./pages/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PostWritePage from "./pages/PostWritePage/PostWritePage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route component={LandingPage} path={["/@:username", "/"]} exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={PostWritePage} path="/write" />
          <Route component={PostDetailPage} path="/@:username/:postId" />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
