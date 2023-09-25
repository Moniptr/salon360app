import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Container from "./components/container";
import Button from "./components/Button";
import Header from "./components/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container padding="0  50px 50px 50px">
      {/*<App />*/}
      <Header/>
    </Container>
  </React.StrictMode>
);

reportWebVitals();
