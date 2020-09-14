import React from "react";
import { AppContext } from "./ContextProvider";
import List from "./ListItem";

class DisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleFilter = () => {};

  render() {
    const { data, sortMethod } = this.context;
    return (
      <div>
        <div>
          {data
            ?.sort((a, b) => {
              if (sortMethod === "none") {
                return 0;
              }
              if (sortMethod === "asc") {
                return a.value.salary - b.value.salary;
              }
              if (sortMethod === "desc") {
                return b.value.salary - a.value.salary;
              }
            })
            .map((item) => (
              <List
                title={item.value.title}
                salary={item.value.salary}
                company={item.value.name}
                location={item.value.location}
                remote={item.value.remote}
                url={item.value.logo}
                key={item.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

DisplayList.contextType = AppContext;
export default DisplayList;
