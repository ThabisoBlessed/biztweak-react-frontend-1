import React from "react";
import { LMSMenu } from "./LMSMenu";
import "./LMS";
import { CourseDashboard } from "./CourseDashboard";

export const LMS = () => {
  return (
    <div className="w-full">
      <CourseDashboard />
    </div>
  );
};
