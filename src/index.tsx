import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { RoutesApplication } from "./routes";
import "./styles/dist/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ContextUserProvider } from "./context/CreateUser/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextUserProvider>
        <RoutesApplication />
      </ContextUserProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
