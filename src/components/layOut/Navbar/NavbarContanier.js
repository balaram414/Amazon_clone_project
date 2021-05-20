import React, { Component } from "react";
import NavbarView from "./NavbarView";

class NavbarContanier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavbarView t={this.props.t} i18n={this.props.i18n} />
      </div>
    );
  }
}
export default NavbarContanier;
