import React from "react";
class previousState extends React.Component {
  state = {
    randomNumm: "",
    previousNum: "",
  };

  componentDidMount() {
    console.log("componentDidmount");
    this.getNewRandomNum();
  }
  getNewRandomNum = () => {
    let randomNum = Math.floor(Math.random() * 15);
    this.setState((state /* this is the current state*/) => ({
      previousNum: state.randomNum, // this will be the previous randomNumber
      randomNum,
    }));
    console.log(randomNum, ".....");
  };

  prevNum = () => {
    alert(this.state.previousNum); // put whatever code you need here
  };

  render() {
    return (
      <div>
        <h1>{this.state.randomNum}</h1>
        <button onClick={this.getNewRandomNum}>New Number</button>
        <button onClick={this.prevNum}>Previous Number</button>
      </div>
    );
  }
}
export default previousState;
