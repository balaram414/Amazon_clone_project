import React from "react";
import { useTranslation } from "react-i18next";
import LandingPage from "./components/layOut/LandingPage";
import PreviousState from "./components/previousState";
function App() {
  const [t, i18n] = useTranslation("common");
  return (
    <div>
      <LandingPage t={t} i18n={i18n} />

      <h1>Hello World </h1>
    </div>
  );
}

export default App;
