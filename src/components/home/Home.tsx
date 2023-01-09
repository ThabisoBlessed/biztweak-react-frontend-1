import React from "react";
import * as constants from "../../constants";
import { PrimaryButton } from "../shared/PrimaryButton";
import "./Home.css";
import { Newsletter } from "../Newsletter/Newsletter";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGE_KEYS, removeLocalStorageValue, setLocalStorageValue } from "../../config";

export const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = (event: any) => {
    setLocalStorageValue(LOCALSTORAGE_KEYS.newUserMode, "true");
    removeLocalStorageValue(LOCALSTORAGE_KEYS.newUserMode);
    navigate("/business");
  };

  return (
    <div className="w-full">
      <div className="md:grid md:grid-cols-2 m-5">
        <div>
          <img
            data-testid="bgImg"
            className="md:hidden sm:flex"
            src="https://biztweak.org.za/public/new/images/hero-main.png"
            height={500}
            width={500}
          />
          <h1
            data-testid="homeHeaderText"
            className="md:ml-10 ml-2 md:text-[80px] text-[40px] tracking-wide m-auto md:pt-36"
          >
            Take a <span>FREE</span> BizTweak Assessment.
          </h1>
          <p
            data-testid="homeSubHeaderText"
            className="text-gray-800 ml-2 md:ml-9 mx-auto text-1xl mt-2"
          >
            {constants.homeSubHeaderText}
          </p>
          <PrimaryButton
            id={"click"}
            data-testid={"addToCartBtn"}
            label={constants.takeFreeAssessment}
            className="hover:bg-[#2becf6] hover:border-[#00a9b1] text-sm capitalize shadow-lg border-[#00c2cb] bg-[#00c2cb] text-white mb-4 mt-2 text-center rounded-sm"
            onClick={(event: any) => handleClick(event)}
            disabled={false}
          />
        </div>

        <div>
          <img
            data-testid="bgImg"
            className="hidden md:flex"
            src="https://biztweak.org.za/public/new/images/hero-main.png"
            height={800}
            width={900}
          />
        </div>
      </div>
      <br></br>
      <Newsletter />
    </div>
  );
};
