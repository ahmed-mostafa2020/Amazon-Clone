import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/sass/_global.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
