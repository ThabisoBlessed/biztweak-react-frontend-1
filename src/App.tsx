import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/layout/Footer";
import { LMS } from "./components/lms/LMS";
import { Courses } from "./components/lms/Courses";
import { Dashboard } from "./components/lms/Dashboard";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { ResetPassword } from "./components/auth/ResetPassword";
import { Profile } from "./components/auth/Profile";
import { ManageBusiness } from "./components/business/ManageBusiness";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          
          <Route path="/auth/*" element={<Home />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/reset-password" element={<ResetPassword />}></Route>
          <Route path="/auth/profile" element={<Profile />}></Route>

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
