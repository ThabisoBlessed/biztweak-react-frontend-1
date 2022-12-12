import React from "react";
import * as constants from "../../constants";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2">
        <div>
        <img data-testid="bgImg" className="md:hidden sm:flex" src="https://biztweak.org.za/public/new/images/hero-main.png" height={500} width={500} />
          <h1 data-testid="homeHeaderText" className="ml-9 tracking-wide m-auto pt-44">
            Take a <span>FREE</span>. BizTweak Assessment.
          </h1>
          <p data-testid="homeSubHeaderText" className="text-gray-800 ml-9 mx-auto text-1xl mt-2">
            {constants.homeSubHeaderText}
          </p>
        </div>

        <div>
          <img data-testid="bgImg" className="hidden md:flex" src="https://biztweak.org.za/public/new/images/hero-main.png" height={800} width={900} />
        </div>
      </div>
      <br></br>
    </div>
  );
};
