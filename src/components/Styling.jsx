import React, { Component } from "react";
import "./Styling.css";

class Styling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { name: "Manggo", weight: "120gr" },
        { name: "Apple", weight: "120gr" },
        { name: "Orage", weight: "120gr" },
      ],
    };
  }

  clickHandler = () => {
    //! this change nothing in the state
    // this.state.fruits[0].name = "Samsung";
    //! this is state manipulation
    this.setState({
      fruits: [
        { name: "Nokia", weight: "120gr" },
        { name: "Xiaomi", weight: "120gr" },
        { name: "Vivo", weight: "120gr" },
      ],
    });
  };
  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click Me</button>
        <h1 className="card">Hello World {this.state.fruits[0].name}</h1>
        <h1 className="card">Hello World {this.state.fruits[1].name}</h1>
        <h1 className="card">Hello World {this.state.fruits[2].name}</h1>
      </>
    );
  }
}

export default Styling;
