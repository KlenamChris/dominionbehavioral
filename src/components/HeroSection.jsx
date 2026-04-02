import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-center bg-cover text-white"
      style={{
        backgroundImage: "url(home/3.jpg)",
      }}
      id="home"
    >
      <div className="h-screen w-auto flex items-center justify-end md:mr-55 md:pr-28 md:pb-52 text-5xl md:text-6xl font-bold">
        <div className="flex">
          <h2>Your Health</h2>
          <hr className="border-t-2 w-18 my-8 mx-2" />
        </div>
        <div className="absolute mt-32 mr-10">
          <h2>Matters to Us</h2>
        </div>
      </div>
      <div className="absolute text-white bottom-8 left-0 w-full flex justify-center">
        <button className="flex items-center animate-bounce px-3 py-3 bg-white/15  rounded-full duration-300 hover:bg-white/60 transition-all">
          <ArrowDown className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
