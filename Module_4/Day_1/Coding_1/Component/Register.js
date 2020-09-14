
import React from "react";
import { AppContext } from "../Component/HomePage";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { handleSubmit } = this.context;
    const { email, pass } = this.state;
    return (
      <div>
        <form onSubmit={() => handleSubmit(email, pass)}>
          <div>
            <label htmlFor="">Email :- </label>
            <input type="text" name="email" onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="">Password :- </label>
            <input type="text" name="pass" onChange={this.handleChange} />
          </div>
          <br />
          <input type="submit" value="Register / Login" />
        </form>
      </div>
    );
  }
}

Register.contextType = AppContext;
