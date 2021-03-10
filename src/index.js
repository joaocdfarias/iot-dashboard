import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./globals.css";

ReactDOM.render(
  <React.StrictMode>
    <App className={styles.body} />
  </React.StrictMode>,
  document.getElementById("root")
);
