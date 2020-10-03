import React from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: "",
      isAuth: false,
      data: [],
    };
  }

  getFormData = (data) => {
    let value = {
      data,
      key: uuid(),
      status: false,
    };
    this.setState({
      data: [...this.state.data, value],
    });
    console.log(this.state.data);
  };

  getData = (token, email) => {
    this.setState({
      token: token,
      email: email,
    });
  };

  render() {
    const { getData, getFormData } = this;
    const { token, email, data } = this.state;
    var value = { getData, getFormData, token, email, data };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
