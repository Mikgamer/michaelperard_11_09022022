import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./router/Router";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
