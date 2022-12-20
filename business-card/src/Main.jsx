import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Info from "./Info";
import About from "./About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Info />
    <About />
  </React.StrictMode>
);
