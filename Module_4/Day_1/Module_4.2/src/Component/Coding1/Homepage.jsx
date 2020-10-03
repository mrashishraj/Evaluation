import React from "react";
import styles from "./homepage.module.css";
import LoginForm from "./LoginForm";
import axios from "axios";
import { AppContext } from "./AppContext";
import Display from "./Display";
import DataForm from "./DataForm";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: "",
      isAuth: false,
      error: "",
      isLoading: false,
    };
  }

  handleSubmit = (email, pass) => {
    const { getData } = this.context;
    this.setState({
      isLoading: true,
    });
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: pass,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            isAuth: true,
            isLoading: false,
          });
          console.log(res);
          getData(res.data.token, email);
        }
      })
      .catch((err) => {
        this.setState({
          error: "Id & pass not matched",
          isLoading: false,
        });
      });
  };

  handleLogout = () => {
    this.setState({
      isAuth: false,
      error: "",
    });
  };

  render() {
    const { isAuth, error, isLoading } = this.state;
    const { token, email, data } = this.context;
    console.log(data);
    if (isLoading) {
      return (
        <div>
          {" "}
          <h3>Loading...</h3>{" "}
        </div>
      );
    }
    if (isAuth) {
      return (
        <>
          <div className={styles.border}>
            <h1> Token is :- {token}</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          <div>
            <DataForm />
          </div>
          <div>
            <Display />
          </div>
        </>
      );
    }

    return (
      <>
        <div className={styles.formMainContainer}>
          <div className={styles.heading}>
            <button
              onClick={this.toggleLogin}
              style={{ flex: "1", border: "1px solid black" }}
            >
              Login
            </button>
            <button
              onClick={this.toggleRegister}
              style={{ padding: "5px", flex: "1", border: "1px solid black" }}
            >
              Register
            </button>
          </div>
          <div>
            <div>
              <LoginForm
                type="Login Form"
                value="Login"
                title1="Login Id :- "
                title2="Password :- "
                error={error}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Homepage.contextType = AppContext;
export default Homepage;
