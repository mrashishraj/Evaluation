import React from "react";
// import "./styles.css";
import Form from "./Component/FormPage";
import DisplayList from "./Component/DisplayList";
import Filter from "./Component/FilterForm";
import styles from "./Component/list.module.css";

export default function App() {
  return ( <
    div className = "App" >
    <
    h2 > Job Listing < /h2> <
    div className = {
      styles.main
    } >
    <
    div className = {
      styles.flex
    } >
    <
    Form / >
    <
    /div> <
    div className = {
      styles.flex
    }
    style = {
      {
        border: "1px solid red"
      }
    } >
    <
    Filter / >
    <
    /div> <
    /div> <
    div >
    <
    DisplayList / >
    <
    /div> <
    /div>
  );
}