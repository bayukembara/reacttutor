import React, { Component } from "react";

class Check extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     men: [{ name: "Bayu Kembara" }],
  //   };
  // }

  state = {
    name: "Bayu Kembara",
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.changeName} value={this.state.name} />
        <h1>Hello {this.state.name}</h1>
      </>
    );
  }
}

export default Check;
