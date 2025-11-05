import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white px-4">
      {/* 404 Text */}
      <h1 className="text-[120px] sm:text-[160px] font-extrabold tracking-wider text-yellow-400">
        404
      </h1>

      {/* Message */}
      <p className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        Oops! The page you are looking for doesn’t exist.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-400 text-black rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Floating Stickers */}
      <div className="absolute top-36 left-8 rotate-[-8deg] bg-green-500 text-black font-bold px-3 py-1 rounded-lg">
        UI/UX
      </div>
      <div className="absolute bottom-20 right-12 rotate-[10deg] bg-pink-500 text-black font-bold px-3 py-1 rounded-lg">
        DESIGN
      </div>
      <div className="absolute bottom-32 left-16 rotate-[5deg] bg-blue-500 text-black font-bold px-3 py-1 rounded-lg">
        BRANDING
      </div>
    </div>
  );
}

export default PageNotFound;
