import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import iconDownload from "../assets/Images/icon-downloads.png";
import iconRating from "../assets/Images/icon-ratings.png";
import iconReview from "../assets/Images/icon-review.png";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((item) => String(item.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem("installList")) || [];
    const installed = existingList.some((item) => item.id === app.id);
    if (installed) setIsInstalled(true);
    
  }, [app]);

  if (!app) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl text-gray-500 font-semibold">
          Loading app details...
        </p>
      </div>
    );
  }

  const { image, title, companyName, downloads, ratingAvg, reviews, size } =
    app || {};

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installList")) || [];
    const updatedList = [...existingList, app];
    localStorage.setItem("installList", JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div>
      <div className="flex gap-10">
        <div>
          <img className="w-[350px] h-[350px] rounded object-cover" src={image} alt="" />
        </div>
        <div className="flex-1">
          <div>
            <h1 className="text-[32px] font-bold">{title}</h1>
            <p className="text-[#627382] text-xl font-semibold mt-2 mb-6">
              Developed by{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] ">
                {companyName}
              </span>
            </p>
          </div>
          <div className="border-b-2 border-gray-400 w-full "></div>
          <div className="grid grid-cols-3 gap-10 mt-6 mb-6">
            <div>
              <img src={iconDownload} alt="icon" />
              <p className="text-[#001931] font-medium mt-2">Downloads</p>
              <h1 className="text-[40px] font-extrabold">{downloads}</h1>
            </div>
            <div>
              <img src={iconRating} alt="icon" />
              <p className="text-[#001931] font-medium mt-2">Average Ratings</p>
              <h1 className="text-[40px] font-extrabold">{ratingAvg}</h1>
            </div>
            <div>
              <img src={iconReview} alt="icon" />
              <p className="text-[#001931] font-medium mt-2">Total Reviews</p>
              <h1 className="text-[40px] font-extrabold">{reviews}</h1>
            </div>
          </div>

          <div>
            <button
              onClick={handleAddToInstallation}
              className="bg-[#00d390] text-white text-xl font-semibold px-[20px] py-[14px] rounded cursor-pointer"
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-400 mt-10 "></div>

      {/* Chart */}
      <div className="space-y-3 mt-10 border rounded border-gray-300 mb-10">
        <h2 className="text-xl font-semibold">Ratings</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={app.ratings}>
              <XAxis type="number" dataKey="count" />
              <YAxis type="category" dataKey="name" reversed />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#ff8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-6">Description</h1>
        <p className="text-[#627382] text-xl">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
