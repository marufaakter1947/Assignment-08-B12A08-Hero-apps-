import React from "react";
import { NavLink } from "react-router";
import playStoreLogo from "../assets/Images/Play-store-logo.png";
import appStoreLogo from "../assets/Images/App-store-logo.png";
import bannerImage from "../assets/Images/hero.png";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-[50px] md:text-[72px] font-bold text-center mb-4 ">
          We Build <br />{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] ">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-xl text-[#627382] text-center mb-10">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex justify-center items-center mb-10 ">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="text-xl font-semibold border border-[#d2d2d2] px-6 py-3 rounded ">
              <NavLink
                to="https://play.google.com/store/games?hl=en"
                target="_blank"
              >
                <div className="flex gap-1 items-center">
                  <img className="h-" src={playStoreLogo} alt="logo" />
                  <span>Google Play</span>
                </div>
              </NavLink>
            </button>
            <button className="text-xl font-semibold border border-[#d2d2d2] px-6 py-3 rounded  ">
              <NavLink to="https://www.apple.com/app-store/" target="_blank">
                <div className="flex gap-1 items-center">
                  <img className="h-" src={appStoreLogo} alt="logo" />
                  <span>App Store</span>
                </div>
              </NavLink>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={bannerImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
