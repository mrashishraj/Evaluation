import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Homepage from "./Coding_1/Component/HomePage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Homepage>
    <App />
  </Homepage>,
  rootElement
);
