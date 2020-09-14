import React from "react";
import ReactDOM from "react-dom";
import AppContextProvider from "./Component/ContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  rootElement
);
