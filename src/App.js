import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/layOut/LandingPage";
import PreviousState from "./components/previousState";
import NavbarContanier from "./components/layOut/Navbar/NavbarContanier";
import Footer from "./components/layOut/Footer";
import LoginContainer from "./components/Login/loginContainer";
import loginContainer from "./components/Login/loginContainer";

function App() {
  const [t, i18n] = useTranslation("common");
  const Login = () => <LoginContainer t={t} i18n={i18n} />;
  const Landing = () => <Route exact path="/" component={LandingPage} />;
  return (
    <Router>
      <div>
        <NavbarContanier t={t} i18n={i18n} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
        <Footer t={t} i18n={i18n} />
      </div>
    </Router>
  );
}

export default App;
