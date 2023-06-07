import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import * as P from "./pages/index";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<P.Main />} />
          {/* <Route path="/student" element={<P.Student />} />
          <Route path="/teacher" element={<P.TeaPher />} />
          <Route path="/club" element={<P.Plub />} />
          <Route path="/major" element={<P.Major />} />
          <Route path="/event" element={<P.Event />} />
          <Route path="/notice" element={<P.NotiPe />} />  */}
          <Route path="/post" element={<P.Post />} />
          <Route path="*" element={<P.NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
