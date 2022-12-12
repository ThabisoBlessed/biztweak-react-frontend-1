import React from "react";
import { Input } from "../shared/Input";
import { PrimaryButton } from "../shared/PrimaryButton";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
      <div className="w-[100%] p-0 m-0" id="newsletter">
        <div className="row justify-content-center">
          <div className="text-center">
            <br></br><br></br><br></br><br></br>
            <small className="text-sm text-[#fd9f00]">NEWSLETTER</small>
            <h2 className="my-3">Let's Get in touch!</h2>
            <p>
              Enter your email and become part of our entrepreneurial community.<br></br>
              We want to engage with you about your business and opportunities.
            </p>
            <form action="#" id="newsletter-form">
              <div className="input-group mt-3">
                <Input id={"input"} className="border w-44 md:w-80 border-gray-400" placeholder="Enter your email"/>
                <PrimaryButton className="hover:bg-[#5bf0b4] hover:border-[#34bc85] border-[#34bc85] bg-[#34bc85] text-white text-center" label="Subscribe"/>
              </div>
            </form>
            <br></br><br></br><br></br><br></br>
          </div>
        </div>
      </div>
  );
};
