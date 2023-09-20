import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./dashboard";
import Button from "./button";
import Textheading from "./Textheading";
import Descriptiontext from "./description";
import Subhead from "./subHead";
import Aboutus from "./about-us";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <Dashboard /> */}
    <Button/>
    <Button label= "click me now"/>
    <Textheading/>
    <Textheading Text="Know more about our Features"/>
    <Descriptiontext/>
    <Subhead/>
    <Subhead subheading="Money and investment"/>
    <Aboutus/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
