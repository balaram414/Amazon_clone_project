import React from "react";
import NavbarContanier from "./Navbar/NavbarContanier";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "./../HomePageProduct/HomePageProductContainer";
import Footer from "./Footer";

export default function LandingPage(props) {
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
      </div>
    </React.Fragment>
  );
}
