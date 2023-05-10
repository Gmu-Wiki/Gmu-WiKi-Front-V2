import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import * as C from "./pages/index";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* <Route path="/main" element={<C.Main />} />
          <Route path="/student" element={<C.Student />} />
          <Route path="/teacher" element={<C.Teacher />} />
          <Route path="/club" element={<C.Club />} />
          <Route path="/major" element={<C.Major />} />
          <Route path="/event" element={<C.Event />} />
          <Route path="/notice" element={<C.Notice />} /> */}
          <Route path="*" element={<C.NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
