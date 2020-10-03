import React from "react";
import { AppContext } from "./AppContext";
import List from "./List";
import styles from "./homepage.module.css";
import { Container } from "./Styled-Component/Container";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    const { data } = this.context;
    return (
      <>
        <Container>
          {data.map((item) => (
            <List
              title={item.data.title}
              company={item.data.cName}
              logo={item.data.logo}
              id={item.key}
            />
          ))}
        </Container>
      </>
    );
  }
}

Display.contextType = AppContext;
export default Display;
