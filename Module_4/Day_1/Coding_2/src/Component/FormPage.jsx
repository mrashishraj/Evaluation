import React from "react";
import { AppContext } from "./ContextProvider";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: "",
      name: "",
      location: "",
      remote: false,
      logo: "",
      date: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCheck = () => {
    this.setState({
      remote: !this.state.remote
    });
  };

  render() {
    const { title, salary, name, location, remote, logo } = this.state;
    const value = { title, salary, name, location, remote, logo };
    const { handleSubmit } = this.context;
    return (
      <div>
        <form onSubmit={() => handleSubmit(value)}>
          <div>
            <label htmlFor="">Title :- </label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Salary :- </label>
            <input
              type="text"
              name="salary"
              onChange={this.handleChange}
              value={this.state.salary}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Company Name :- </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Location of Job/Company </label>
            <select
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
            >
              <option value="">Null</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Channai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="">Remote :- </label>
            <input
              type="checkbox"
              name="remote"
              onClick={this.handleCheck}
              value={this.state.remote}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Company Logo :- </label>
            <input
              type="text"
              name="logo"
              onChange={this.handleChange}
              value={this.state.logo}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Created Date :- </label>
            <input
              type="date"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </div>
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

Form.contextType = AppContext;

export default Form;
