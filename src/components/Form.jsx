import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
  };
  changeData = (e) => {
    let val = e.target.name;
    let myvalue = e.target.value;
    this.setState({ [val]:myvalue });
  };

  render() {
    return (
      <>
        <h1>Hello {this.state.username}</h1>
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
