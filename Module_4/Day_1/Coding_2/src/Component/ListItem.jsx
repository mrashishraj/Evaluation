import React from "react";
import styles from "./list.module.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className={styles.main} id={this.props.id}>
        <div>
          <img className={styles.img} src={this.props.url} alt="" />
        </div>
        <div className={styles.flex}>{this.props.company}</div>
        <div className={styles.flex}>{this.props.title}</div>
        <div className={styles.flex}>{this.props.salary}</div>
        <div className={styles.flex}>{this.props.location}</div>
        <div className={styles.flex}>
          {this.props.remote ? "Remote : Yes" : "Remote : No"}
        </div>
      </div>
    );
  }
}

export default List;
