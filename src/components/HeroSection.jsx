import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-center bg-cover text-white"
      style={{ backgroundImage: "url(home/3.jpg)" }}
      id="home"
    >
      <div className="h-screen flex items-center justify-end mr-55 pr-28 pb-52 text-6xl font-bold">
        <div className="flex">
        <h2>
          Your Health 
        </h2>
          <hr className="border-t-2 w-18 my-8 mx-2"/>
        </div>
        <div className="absolute mt-32 mr-8">
        <h2>
          Matters to Us 
        </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
