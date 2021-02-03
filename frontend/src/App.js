import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./views/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import PostWritePage from "./views/PostWritePage/PostWritePage";
import PostDetailPage from "./views/PostDetailPage/PostDetailPage";
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
          <Route
            exact
            path="/posts/:postId"
            component={Auth(PostDetailPage, null)}
          />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
