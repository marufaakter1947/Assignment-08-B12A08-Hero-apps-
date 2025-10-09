import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import errorApp from "../assets/Images/App-Error.png";
import { NavLink } from "react-router";
import LoadingAnimation from "../Components/LoadingAnimation";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-2  md:justify-between mb-6 items-center">
        <p className="text-xl md:text-2xl font-semibold mt-2">
          ({searchedApps.length}) Apps Found
        </p>
        <div>
          <label className="input relative">
            <svg
              className="h-[1em] opacity-50 absolute left-2 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="pl-8"
              value={search}
              onChange={(e) => {
                setSearchLoading(true);
                setSearch(e.target.value);
                setTimeout(() => setSearchLoading(false), 300);
              }}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      {searchLoading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <LoadingAnimation />
        </div>
      ) : searchedApps.length === 0 ? (
        <div className="text-center mt-6">
          <div className="flex justify-center items-center">
            <img className="h-[200px]" src={errorApp} alt="Error image" />
          </div>
          <h1 className="font-bold text-2xl mb-2">OPPS!! APP NOT FOUND</h1>
          <p className="font-semibold text-gray-400">
            The App you are requesting is not found on our system. Please try
            another Apps.
          </p>
          <div className="flex justify-center items-center mt-6">
            <button className="btn text-[16px] font-semibold bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] text-white">
              <NavLink to="/">Go Back!</NavLink>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-[30px] md:text-[48px] font-bold text-center mb-4">
            Our All Applications
          </h1>
          <p className="text-xl text-[#627382] text-center mb-10">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
