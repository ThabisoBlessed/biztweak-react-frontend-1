import React, { useEffect } from "react";
import { Dashboard } from "./Dashboard";
import "./CMP.css";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageValue,
  LOCALSTORAGE_KEYS,
  setLocalStorageValue,
} from "../../config";

export const CMP = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", document.URL);
    window.addEventListener("popstate", function (event) {
      navigate(-1);
    });
    // const menuCount = getLocalStorageValue(LOCALSTORAGE_KEYS.menuCount);
    // if (menuCount) {
    //   const total = 0;
    //   localStorage.setItem(
    //     LOCALSTORAGE_KEYS.menuCount,
    //     String(total)
    //   );
    // }
  });

  return (
    <div className="w-full">
      <Dashboard />
    </div>
  );
};
