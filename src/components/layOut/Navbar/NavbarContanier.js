import React, { Component } from "react";
import NavbarView from "./NavbarView";

class NavbarContanier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefLang: props.i18n.languages[0],
      selectedCat: 0,
      productCategory: [
        "navbar.All",
        "navbar.Smartphone",
        "navbar.Kitchen Hardware",
        "navbar.Smartphone",
        "navbar.Book",
      ],
      query: "",
    };
  }

  handleChangeLang = (event) => {
    this.setState({ prefLang: [event.target.value] });
    alert(this.state.prefLang);
    this.props.i18n.changeLanguage(this.state.prefLang);
  };
  handleCatChange = (event, index) => {
    event.preventDefault();
    this.setState({ selectedCat: index });
  };

  handleQuaryChange = (event) => {
    this.setState({ query: [event.target.value] });
  };
  handleSearch = (event) => {
    event.preventDefault();
    console.log("Query: " + this.state.query);
    console.log("Select Category: " + this.state.selectedCat);
  };
  render() {
    return (
      <div>
        <NavbarView
          t={this.props.t}
          i18n={this.props.i18n}
          handleChangeLang={this.handleChangeLang}
          prefLang={this.state.prefLang}
          handleCatChange={this.handleCatChange}
          selectedCat={this.state.selectedCat}
          productCategory={this.state.productCategory}
          handleQuaryChange={this.handleQuaryChange}
          query={this.state.query}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}
export default NavbarContanier;
