import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-toastify";
import useApps from "../Hooks/useApps";
import LoadingAnimation from "../Components/LoadingAnimation";

const Installation = () => {
  const { loading } = useApps();
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installList"));
    if (installedList) setInstallList(installedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "size-desc") {
      return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installList;
    }
  })();

  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installList"));
    let updatedList = existingList.filter((item) => item.id !== id);
    const uninstalledApp = existingList.find((item) => item.id === id);

    setInstallList((prev) => prev.filter((item) => item.id !== id));
    localStorage.setItem("installList", JSON.stringify(updatedList));
    if (uninstalledApp) {
      toast.success(`${uninstalledApp.title} uninstalled!`);
    }
  };

  if (loading) {
    return (
      <div>
        <LoadingAnimation></LoadingAnimation>
      </div>
    );
  } else {
    return (
      <div>
        <div className="text-center">
          <h1 className=" text-[30px] md:text-[48px] font-bold">
            My Installed Apps
          </h1>
          <p className="text-[#627382] text-[20px]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center mt-10 mb-4">
          <div>
            <h2 className="text-[24px] font-semibold">
              {sortedItem.length} Apps Found
            </h2>
          </div>
          <div>
            <label className="form-control  max-w-xs">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort By Downloads</option>
                <option value="size-asc">Low-&gt;High</option>
                <option value="size-desc">High-&gt;Low</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          {sortedItem.map((item) => (
            <div key={item.id} className="">
              <div className="flex justify-between items-center bg-[#FFFFFF]  p-4 rounded mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div>
                    <img
                      className="w-20 h-20 rounded-lg object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[20px] font-medium mb-4">
                      {item.title}
                    </h1>
                    <div className="flex gap-4">
                      <div className="text-[#00D390] text-[16px] font-medium flex items-center gap-1">
                        <FiDownload />
                        <span>{item.downloads}</span>
                      </div>
                      <div className="text-[#FF8811] text-[16px] font-medium flex items-center gap-1">
                        <FaStar />
                        <span>{item.ratingAvg}</span>
                      </div>
                      <div>
                        <span className="text-[16px] text[#627382] font-medium">
                          {item.size} MB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleUninstall(item.id)}
                    className="btn bg-[#00D390] text-white text-[16px] font-semibold"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Installation;
