import React from "react";
import { AppContext } from "./ContextProvider";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  render() {
    const { handleSort } = this.context;
    return (
      <>
        <div>
          <label htmlFor="">Sort Salery By :- </label>
          {[" Asc ", "Desc", "None"].map((order) => (
            <button
              key={order}
              style={{ margin: "5px" }}
              onClick={() => handleSort(order)}
            >
              {order}
            </button>
          ))}
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="">Show remote only :- </label>
          <input type="checkbox" onChange={() => this.onCheck} />
        </div>
      </>
    );
  }
}

Filter.contextType = AppContext;
export default Filter;
