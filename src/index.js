import React from "react";
import ReacDOM from "react-dom";
import App from "./app";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_bd from "./translation/bd/common.json";
import common_en from "./translation/en/common.json";
import common_in from "./translation/in/common.json";

i18next.init({
  whitelist: ["in", "en", "bd"],
  interpolation: { escapeValue: false },
  lng: "bd",
  resources: {
    en: {
      common: common_en,
    },
    bd: {
      common: common_bd,
    },
    in: {
      common: common_in,
    },
  },
});
ReacDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
