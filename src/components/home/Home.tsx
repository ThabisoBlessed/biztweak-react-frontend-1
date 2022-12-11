import React from "react";
import BgImg from "../../homebg.png";
import * as constants from "../../constants";

export const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${BgImg})`, 
      backgroundRepeat: 'no-repeat',
      width: "100%",
      height: "100vh",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      }}>

      <div className="grid place-items-center">
      </div>
      <div className="md:grid md:grid-cols-2 mt-7">
        <div className="md:mt-24">
          <h1 data-testid="homeHeaderText" className="font-bold text-center tracking-wide m-auto text-3xl md:text-6xl text-gray-800">
            {constants.homeHeaderText}
          </h1>
          <p data-testid="homeSubheaderText" className="text-gray-800 text-center mx-auto md:overline text-1xl mt-2">
            {constants.home}
          </p>
        </div>

        <img data-testid="BgImg" className="hidden md:flex" src={BgImg} height={300} width={300} />
      </div>
      <br></br>
    </div>
  );
};
