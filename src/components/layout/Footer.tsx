import React from "react";
import LogoImg from "../../logo.png";

export const Footer = () => {
  return (
    <div className="w-full mt-16 md:m-14">
      <div className="md:grid md:grid-cols-4">
        <div id="logo" className="justify-items-center">
          <img
            data-testid="logoImg"
            alt="logo"
            src={LogoImg}
            height={160}
            width={160}
          ></img>
          <p className="pl-1 mt-2">
            ScaleUp - It’s amazing!<br></br>It’s all you need to know
          </p>
        </div>

        <div id="usefulLinks">
          <p className="text-1xl mb-3 font-medium">Useful Links</p>
          <hr className="md:mr-10"></hr>
          <div className="md:grid md:grid-cols-2 mt-2 text-gray-500">
            <p>About Us</p>
            <p>Dashboard</p>
          </div>
          <div className="md:grid md:grid-cols-2 text-gray-500 mt-2">
            <p>Blog</p>
            <p>Courses</p>
          </div>
        </div>

        <div id="legalAndPrivacy">
          <p className="text-1xl mb-3 font-medium">Legal and privacy</p>
          <hr className="md:mr-10"></hr>
          <p className="mb-3 mt-3 text-gray-500">
            <a
              target="_blank"
              href="https://app.termly.io/document/terms-of-use-for-website/bae18684-68a5-4feb-b722-2396bf9b3d07"
            >
              Terms of service
            </a>
          </p>
          <p className="mb-3 mt-3 text-gray-500">
            <a
              target="_blank"
              href="https://app.termly.io/document/privacy-policy/6e538943-b793-48ed-876f-bf66701c8e56"
            >
              Privacy policy
            </a>
          </p>

          <p className="mb-3 mt-3 text-gray-500">
            <a
              target="_blank"
              href="https://app.termly.io/document/disclaimer/fe8696d1-0ff3-47d6-bdc0-a8eba5fb0466"
            >
              Disclosures
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
