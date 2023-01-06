import React, { useEffect } from "react";
import { Dashboard } from "./Dashboard";
import "./CMP.css";
import { useNavigate } from "react-router-dom";

export const CMP = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", document.URL);
    window.addEventListener("popstate", function (event) {
      navigate(-1);
    });
  });

  return (
    <div className="w-full">
      <Dashboard />
    </div>
  );
};
