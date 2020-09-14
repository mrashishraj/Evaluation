import React from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortMethod: "",
      isRemote: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      e,
      id: uuid(),
      status: false,
    };
    this.setState(
      {
        data: [...this.state.data, item],
      },
      () => console.log(this.state.data)
    );
  };

  handleSort = (method) => {
    this.setState({
      sortMethod: method,
    });
  };

  onCheck = () => {
    this.setState({
      isRemote: !this.state.isRemote,
    });
  };

  render() {
    const { handleSubmit, handleSort } = this;
    const { data, sortMethod } = this.state;

    const value = { handleSubmit, sortMethod, data, handleSort };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
