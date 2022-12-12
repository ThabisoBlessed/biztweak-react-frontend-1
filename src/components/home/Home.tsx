import React from "react";
import { FaBook } from "react-icons/fa";
import * as constants from "../../constants";
import { PrimaryButton } from "../shared/PrimaryButton";
import "./Home.css";

export const Home = () => {
  const handleClick = (event: any) => {

  }

  return (
    <div>
      <div className="md:grid md:grid-cols-2">
        <div>
        <img data-testid="bgImg" className="md:hidden sm:flex" src="https://biztweak.org.za/public/new/images/hero-main.png" height={500} width={500} />
          <h1 data-testid="homeHeaderText" className="ml-10 tracking-wide m-auto pt-36">
            Take a <span>FREE</span>. BizTweak Assessment.
          </h1>
          <p data-testid="homeSubHeaderText" className="text-gray-800 ml-9 mx-auto text-1xl mt-2">
            {constants.homeSubHeaderText}
          </p>
          <PrimaryButton
            id={"click"}
            data-testid={"addToCartBtn"}
            label={constants.takeFreeAssessment}
            className="hover:bg-[#2becf6] hover:border-[#00a9b1] pt-1 ml-8 capitalize shadow-lg border-[#00c2cb] bg-[#00c2cb] text-white mb-4 mt-2 text-center rounded-sm"
            onClick={(event: any) => handleClick(event)}
            disabled={false}
          />
        </div>

        <div>
          <img data-testid="bgImg" className="hidden md:flex" src="https://biztweak.org.za/public/new/images/hero-main.png" height={800} width={900} />
        </div>
      </div>
      <br></br>
    </div>
  );
};
