import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const HeroSection = () => {
  return (
    <div className='md:grid grid-cols-2 overflow-hidden max-w-5xl py-10 mx-auto'>
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default HeroSection;
