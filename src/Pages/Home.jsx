import React from "react";
import AppCard from "../Components/AppCard";
import Banner from "../Components/Banner";
import BannerCard from "../Components/BannerCard";
import useApps from "../Hooks/useApps";
import { NavLink } from "react-router";
import LoadingAnimation from "../Components/LoadingAnimation";

const Home = () => {
  const { apps, loading } = useApps();

  const trendingApps = apps.slice(0, 8);
  if (loading) {
    return (
      <div>
        <LoadingAnimation></LoadingAnimation>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Banner></Banner>
        </div>
        <div>
          <BannerCard></BannerCard>
        </div>
        <h1 className="text-[48px] font-bold text-center mb-4 ">
          Trending Apps
        </h1>
        <p className="text-xl text-[#627382] text-center mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button className="btn text-[16px] font-semibold bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] text-white mt-10  mb-4 ">
            <NavLink to="/apps">Show All</NavLink>
          </button>
        </div>
      </div>
    );
  }
};

export default Home;
