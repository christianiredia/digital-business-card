import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Footer />
  </React.StrictMode>
);
