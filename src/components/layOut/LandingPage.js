import React from "react";
import NavbarContanier from "./Navbar/NavbarContanier";
import ImageSlider from "./ImageSlider";

export default function LandingPage() {
  return (
    <React.Fragment>
      <NavbarContanier />
      <div className="container-fluid px-0">
        <ImageSlider />
      </div>
    </React.Fragment>
  );
}
