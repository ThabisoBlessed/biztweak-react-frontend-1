import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#ffd740] border-t-2 w-full text-black h-[20vh] text-center flex items-center justify-center">
      Smart shopping. <br />
      Snapshopper by Afrogeek @ {new Date().getFullYear()}
    </div>
  );
};
