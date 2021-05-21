import React, { Component } from "react";
import LoinView from "./loginView";

export default class loginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handalSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <LoinView
        handleChange={this.handleChange}
        {...this.state}
        handalSubmit={this.handalSubmit}
      />
    );
  }
}
