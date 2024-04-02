import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
  };
  changeData = (e) => {
    let val = e.target.value;
    this.setState({ name: val });
  };

  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>
        <form>
          <div class="form-group">
            <label for="">Username:</label>
            <br />
            <input type="text" name="username" onChange={this.changeData} />
            <br />
            <button type="submit">Submit </button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
