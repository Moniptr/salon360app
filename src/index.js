import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Container from "./components/container";
// import Button from "./components/Button";
import Header from "./components/header";
import Aboutus from "./about-us";
// import Tryresponsive from "./Trial";
import Knowmore from "./knowmorecontent";
// import Monthly from "./monthlyinvestment";
// import Business from "./business partner";
import SideBar from "./components/sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      
      
      <SideBar />
  </React.StrictMode>
);

reportWebVitals();
