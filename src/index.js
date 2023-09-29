import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Container from "./components/container";
import Button from "./components/Button";
import Header from "./components/header";
import Aboutus from "./about-us";
import Monthly from "./monthlyinvestment";
import Tryresponsive from "./Trial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Header />
      <Aboutus />
      <Monthly />
      <Tryresponsive/>
  </React.StrictMode>
);

reportWebVitals();
