import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Container from "./components/container";
import Button from "./components/Button";
import Header from "./components/header";
import Aboutus from "./about-us";
// import Tryresponsive from "./Trial";
import Knowmore from "./knowmorecontent";
import Monthly from "./monthlyinvestment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Header />
      <Aboutus />
      <Monthly/>
      {/* <Tryresponsive/> */}
      <Knowmore/>
  </React.StrictMode>
);

reportWebVitals();
