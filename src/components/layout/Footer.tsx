import React from "react";
import LogoImg from "../../logo.png";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="mt-16 md:m-14">
        <div className="md:grid md:grid-cols-4">
          <div id="logo" className="justify-items-center">
            <img
              data-testid="logoImg"
              alt="logo"
              src={LogoImg}
              height={160}
              width={160}
            ></img>
            <p className="pl-1 mt-2 sm:ml-2">
              ScaleUp - It’s amazing!<br></br>It’s all you need to know
            </p>
          </div>

          <div id="usefulLinks">
            <p className="text-1xl mb-3 font-medium ml-2 mt-2">Useful Links</p>
            <hr className="md:mr-10"></hr>
            <div className="md:grid md:grid-cols-2 mt-2 text-gray-500">
              <p className="ml-2">About Us</p>
              <p className="ml-2">Dashboard</p>
            </div>
            <div className="md:grid md:grid-cols-2 text-gray-500 mt-2">
              <p className="ml-2">Blog</p>
              <p className="ml-2">Courses</p>
            </div>
          </div>

          <div id="legalAndPrivacy">
            <p className="text-1xl mb-3 font-medium ml-2 mt-2">
              Legal and privacy
            </p>
            <hr className="md:mr-10"></hr>
            <p className="mb-3 mt-3 ml-2 text-gray-500">
              <a
                target="_blank"
                href="https://app.termly.io/document/terms-of-use-for-website/bae18684-68a5-4feb-b722-2396bf9b3d07"
              >
                Terms of service
              </a>
            </p>
            <p className="mb-3 mt-3 ml-2 text-gray-500">
              <a
                target="_blank"
                href="https://app.termly.io/document/privacy-policy/6e538943-b793-48ed-876f-bf66701c8e56"
              >
                Privacy policy
              </a>
            </p>

            <p className="mb-3 mt-3 ml-2 text-gray-500">
              <a
                target="_blank"
                href="https://app.termly.io/document/disclaimer/fe8696d1-0ff3-47d6-bdc0-a8eba5fb0466"
              >
                Disclosures
              </a>
            </p>
          </div>

          <div id="support">
            <p className="text-1xl mb-3 font-medium ml-2 mt-2">Support</p>
            <hr></hr>
            <p className="mb-3 mt-3 ml-2 text-gray-500">
              <a href="mailto:hello@biztweak.org.za">hello@biztweak.org.za</a>
            </p>
            <p className="mb-3 mt-3 ml-2 text-gray-500">
              <a href="tel:0115689980">011 568 9980</a>
            </p>
          </div>
        </div>

        <div id="socialLinks" className="social-links text-center align-middle">
          <p className="text-1xl mb-3 font-medium ml-2 mt-2">Follow Us</p>
          <div className="mx-auto flex align-middle justify-center m-4">
            <a
              className="m-2"
              target="_blank"
              href="https://www.linkedin.com/company/biztweak/"
            >
              <FaLinkedin size={25} />
            </a>
            <a className="m-2" target="_blank" href="https://twitter.com/BizTweak">
              <FaTwitter size={25} />
            </a>
            <a
              className="m-2"
              target="_blank"
              href="https://www.facebook.com/biztweaksouthafrica"
            >
              <FaFacebook size={25} />
            </a>
            <a className="m-2" target="_blank" href="https://instagram.com/biztweaksa">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="m-2" target="_blank" href="https://www.tiktok.com/@biztweakza">
              <FaTiktok size={25} />
            </a>
            <a
              className="m-2"
              target="_blank"
              href="https://www.youtube.com/channel/UC1RIOS5NdMF0ESdFZ0xQSWQ"
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
        <hr />
        <div className="text-center">
          Copyright © {new Date().getFullYear()} Biztweak. All rights reserved.
        </div>
      </div>
    </>
  );
};
