import React from "react";

const BannerCard = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw]  bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] w-screen mb-15">
      <div className="banner-card py-15  text-white">
        <h1 className="text-5xl font-bold mb-10 text-center">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center">
          <div className=" text-center ">
            <p className="text-[16px] text-[#DED0F9]">Total Downloads</p>
            <h1 className="text-[50px] md:text-[64px] font-extrabold ">
              29.6M
            </h1>
            <p className="text-[16px] text-[#DED0F9]">
              21% more than last month
            </p>
          </div>
          <div className=" text-center ">
            <p className="text-[16px] text-[#DED0F9]">Total Reviews</p>
            <h1 className="text-[50px] md:text-[64px] font-extrabold ">906K</h1>
            <p className="text-[16px] text-[#DED0F9]">
              46% more than last month
            </p>
          </div>
          <div className=" text-center ">
            <p className="text-[16px] text-[#DED0F9]">Active Apps</p>
            <h1 className="text-[50px] md:text-[64px] font-extrabold ">132+</h1>
            <p className="text-[16px] text-[#DED0F9]">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
