import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/views/Navbar/Navbar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import PostWritePage from "./components/views/PostWritePage/PostWritePage";
import Auth from "./hoc/Auth";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/posts/write"
            component={Auth(PostWritePage, true)}
          />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
