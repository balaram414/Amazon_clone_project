import React from "react";
import NavbarContanier from "./Navbar/NavbarContanier";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "./../HomePageProduct/HomePageProductContainer";
import Footer from "./Footer";
export default function LandingPage() {
  return (
    <React.Fragment>
      <NavbarContanier />
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
        <Footer/>
      </div>
    </React.Fragment>
  );
}
