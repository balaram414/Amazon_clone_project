import React from "react";
import NavbarContanier from "./Navbar/NavbarContanier";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "./../HomePageProduct/HomePageProductContainer";
import Footer from "./Footer";
export default function LandingPage(props) {
  return (
    <React.Fragment>
      <NavbarContanier t={props.t} i18n={props.i18n} />
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
        <Footer t={props.t} i18n={props.i18n} />
      </div>
    </React.Fragment>
  );
}
