import React from "react";
import styles from "./homepage.module.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, pass } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className={styles.formContainer}>
        <div>
          <h3>{this.props.type}</h3>
        </div>
        <div>
          <label htmlFor="">{this.props.title1}</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">{this.props.title2}</label>
          <input
            type="text"
            name="pass"
            value={pass}
            onChange={this.handleChange}
          />
        </div>
        <div>
          {" "}
          <p style={{ color: "red" }}>{this.props.error}</p>{" "}
        </div>
        <button
          onClick={() => handleSubmit(email, pass)}
          className={styles.padding}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default LoginForm;
