import React from "react";
import { AppContext } from "./AppContext";
import styles from "./homepage.module.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cName: "",
      logo: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, cName, logo } = this.state;
    const value = { title, cName, logo };
    const { getFormData } = this.context;
    getFormData(value);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { title, cName, logo } = this.state;

    return (
      <>
        <div className={styles.mainContainer}>
          <div>
            <form action="" onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="cName"
                  value={cName}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div>
                <label htmlFor="">Role</label>
                <select
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                >
                  <option value="">--Title--</option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                </select>
              </div>
              <br />
              <div>
                <label htmlFor="">Avatar Link</label>
                <input
                  type="text"
                  name="logo"
                  value={logo}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div>
                <input type="submit" value="ADD" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

Form.contextType = AppContext;
