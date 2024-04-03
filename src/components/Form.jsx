import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    password: "",
    phonenumber: "",
    email: "",
    city: "",

    // ! Validation Properties
    emailError: "",
    passError: "",
  };

  // changeData = (e) => {
  //   let val = e.target.name; //! getting input name = username or phonenumber or email
  //   let myvalue = e.target.value; //! getting value from input
  //   console.log(val);
  //   this.setState({ [val]:myvalue });
  // };

  // formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.username,this.state.password);
  // }

  validateForm() {
    if (!this.state.email > 0 && !this.state.password > 0) {
      this.setState({
        emailError: "Email is required",
        passError: "Password is required",
      });
    } else if (!this.state.email > 0) {
      this.setState({ emailError: "Email is required" });
    } else if (!this.state.password > 0) {
      this.setState({ passError: "Password is required" });
    } else {
      this.setState({
        emailError: "",
        passError: "",
      });
      return true;
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Form Submitted");
    }
  };

  render() {
    return (
      <>
        {/* ! this is not dynamic change state */}
        {/* <h1>Hello {this.state.username}</h1>
        <h1>Hello {this.state.phonenumber}</h1>
        <h1>Hello {this.state.email}</h1>
        <h1>Hello {this.state.city}</h1>
        {/* <form onSubmit={this.formSubmit}> */}
        {/* <form>
          <div class="form-group">
            <label for="">Username:</label>
            <input type="text" name="username" onChange={this.changeData} />
            <br/>
            <label for="">Phonenumber:</label>
            <input type="text" name="phonenumber" onChange={this.changeData} />
            <br/>
            <label for="">Email:</label>
            <input type="text" name="email" onChange={this.changeData} />
            <br/>
            <label for="">City:</label>
            <input type="text" name="city" onChange={this.changeData} />
            <br />
            <button type="submit">Submit </button>
          </div>
        </form> */}

        {/* ! this is dynamic change state */}

        {/* <h1>Hello {this.state.username}</h1>
        <h1>Hello {this.state.password}</h1>

        <form onSubmit={this.formSubmit}>
          <div class="form-group">
            <label for="">Username:</label>
            <input type="text" name="username" onChange={(e) => { this.setState({ username: e.target.value })}} />
            <br />
            <label for="">Password:</label>
            <input type="text" name="password" onChange={(e) => { this.setState({ password: e.target.value })}}/>
            <br />
            <button type="submit">Submit </button>
          </div>
        </form> */}

        <h1>Login Page</h1>
        <form action="" onSubmit={this.formSubmit}>
          <div class="form-group">
            <label for="">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <strong style={{ color: "red" }}>{this.state.emailError}</strong>
            <br />
            <label for="">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br />
            <strong style={{ color: "red" }}>{this.state.passError}</strong>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
