import GlobalStyle from "./styles/GlobalStyle";
import React from "react";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
