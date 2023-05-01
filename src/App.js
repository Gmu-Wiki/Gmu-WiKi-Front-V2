import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import * as C from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* \<Route path="/main" element={<C.Main />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/club" element={<Club />} />
        <Route path="/major" element={<Major />} />
        <Route path="/event" element={<Event />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
