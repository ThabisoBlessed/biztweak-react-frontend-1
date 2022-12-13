import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/layout/Footer";
import { LMS } from "./components/lms/LMS";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>

          <Route path="/lms/*" element={<LMS />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
