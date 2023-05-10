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
          <Route path="/" element={<Header />} />
<<<<<<< HEAD
          <Route path="/main" element={<C.Main />} />
          {/* <Route path="/student" element={<Student />} />
=======
          {/* <Route path="/main" element={<C.Main />} />
          <Route path="/student" element={<Student />} />
>>>>>>> de7a7c9cf87c7344a699bae816afa160c972665f
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/club" element={<Club />} />
          <Route path="/major" element={<Major />} />
          <Route path="/event" element={<Event />} />
<<<<<<< HEAD
          <Route path="/notice" element={<Notice />} />
          <Route path="/*" element={<NotFound />} /> */}
=======
          <Route path="/notice" element={<Notice />} /> */}
          <Route path="*" element={<C.NotFound />} />
>>>>>>> de7a7c9cf87c7344a699bae816afa160c972665f
        </Routes>
      </Router>
    </>
  );
}

export default App;
