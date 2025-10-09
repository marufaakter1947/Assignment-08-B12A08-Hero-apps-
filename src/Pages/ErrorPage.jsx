// import React from 'react';
// import { useRouteError } from 'react-router';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const ErrorPage = () => {
//     const error = useRouteError();
//     return (
//          <div>
//             <Navbar></Navbar>
//             <h1>{error.message}</h1>
//             <Footer></Footer>
//          </div>

//     );
// };

// export default ErrorPage;

import React from "react";
import { Link, useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorImage from "../assets/Images/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  const isNotFound = error?.status === 404;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-center bg-gray-50 px-4">
        <img className="w-[420px] h-[365px]" src={errorImage} alt="" />
        <h2 className="text-2xl font-semibold mb-2">Oops! Page not found!</h2>
        <p className="text-gray-500 mb-4">
          {isNotFound
            ? "The page you are looking for is not available"
            : error?.message || "An unexpected error occurred"}
        </p>
        <Link
          to="/"
          className="btn bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] text-white font-semibold mb-4"
        >
          Go Back Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
