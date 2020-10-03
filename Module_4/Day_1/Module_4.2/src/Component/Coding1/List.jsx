import React from "react";
import styles from "./homepage.module.css";
import { ListContainer } from "./Styled-Component/ListContainer";

export default function List(props) {
  return (
    <ListContainer key={props.id} className={styles.container}>
      <div>
        <img className={styles.logo} src={props.logo} alt="Logo" />
      </div>
      <div>
        <h2>{props.company}</h2>
        <p>{props.title}</p>
      </div>
      <div>
        {" "}
        <button style={{ padding: "10px", marginTop: "50px", width: "80px" }}>
          Book
        </button>{" "}
      </div>
    </ListContainer>
  );
}
