import React, { useEffect } from "react";
import { Dashboard } from "./Dashboard";
import "./CMP.css";
import { useNavigate } from "react-router-dom";
import { getLocalStorageValue, LOCALSTORAGE_KEYS, setLocalStorageValue } from "../../config";

export const CMP = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // const selected = getLocalStorageValue(LOCALSTORAGE_KEYS.selectedMenuPrev);
    // if(selected) {
    //   window.history.pushState(null, "", document.URL);
    //   window.addEventListener('popstate', function(event) {
    //         // window.location.replace(
    //         //   `YOUR URL`
    //         // );
    //         console.log("hello");
    //         navigate(selected);
    //   });
    // }
    localStorage.setItem(
      LOCALSTORAGE_KEYS.selectedMenuPrev,
      "/cmp/manage-courses/product-overview"
    );
  })

  return (
    <div className="w-full">
      <Dashboard />
    </div>
  );
};
