// pawsnap\src\App.jsx pawsnap\src\pages\Home.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PawsnapNavbar from "./components/Navbar";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <PawsnapNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
