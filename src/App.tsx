import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/layout/Footer";
import { LMS } from "./components/lms/LMS";
import { Courses } from "./components/lms/Courses";
import { Dashboard } from "./components/lms/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>

          <Route path="/lms/*" element={<LMS />}></Route>
          <Route path="/lms/courses" element={<Courses />}></Route>
          <Route path="/lms/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
