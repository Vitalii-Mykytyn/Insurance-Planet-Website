import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#141E30] to-[#243B55] text-white px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#FFB347] drop-shadow-lg mb-6">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-center max-w-md text-white/80 mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300"
      >
        🏡 Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
