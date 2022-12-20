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
import { ReportSummary } from "./components/business/ReportSummary";
import { BusinessHealthReport } from "./components/business/BusinessHealthReport";
import { Assessment } from "./components/business/Assessment";
import { AddCompany } from "./components/business/AddCompany";
import { BusinessProfile } from "./components/business/BusinessProfile";
import { CourseProgress } from "./components/lms/CourseProgress";
import { Messages } from "./components/lms/Messages";
import { Course } from "./components/lms/Course";
import { InstructorProfile } from "./components/lms/InstructorProfile";

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

          <Route path="/business/*" element={<AddCompany />}></Route>
          <Route path="/business/manage-business/add-company" element={<AddCompany />}></Route>
          <Route path="/business/manage-business/assessment" element={<Assessment />}></Route>
          <Route path="/business/manage-business/company-profile" element={<BusinessProfile />}></Route>
          <Route path="/business/manage-business/report-summary" element={<ReportSummary />}></Route>
          <Route path="/business/manage-business/business-health-report" element={<BusinessHealthReport />}></Route>

          <Route path="/lms/*" element={<LMS />}></Route>
          <Route path="/lms/course" element={<Course />}></Route>
          <Route path="/lms/courses" element={<Courses />}></Route>
          <Route path="/lms/course-progress" element={<CourseProgress />}></Route>
          <Route path="/lms/dashboard" element={<Dashboard />}></Route>
          <Route path="/lms/messages" element={<Messages />}></Route>
          <Route path="/lms/instructor-profile" element={<InstructorProfile />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
