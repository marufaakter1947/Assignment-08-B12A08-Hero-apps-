import React from "react";
import { PacmanLoader } from "react-spinners";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <PacmanLoader
        className="text-transparent bg-clip-text bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)]"
        loading={true}
        size={50}
      />
    </div>
  );
};

export default LoadingAnimation;
