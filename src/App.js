import GlobalStyle from "./styles/GlobalStyle";
import React from "react";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
