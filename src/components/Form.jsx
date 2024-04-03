import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
  };
  changeData = (e) => {
    let val = e.target.name; //! getting input name = username
    let myvalue = e.target.value; //! getting value from input
    this.setState({ [val]:myvalue });
  };

  formSubmit = (e) => { 
    e.preventDefault();
    console.log(this.state.username);
  }

  render() {
    return (
      <>
        <h1>Hello {this.state.username}</h1>
        <form onSubmit={this.formSubmit}>
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
