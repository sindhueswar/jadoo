import React from "react";
import { motion } from "framer-motion";
// import SectionHeader from "./../../Elements/Logo/SectionHeader/SectionHeader";

const PricingCard = ({ title, price, features }) => {
  const item = {
    show: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <motion.div
      variants={item}
      transition={{ duration: 1 }}
      className="sm:w-[300px] mx-auto  hover:bg-[#FFF1DA] hover:scale-105 shadow-xl rounded-[20px] scale-100 duration-700"
    >
      <div id="DivRoot" className="flex flex-col p-4 gap-2 w-full h-fit content-center justify-center">
        <div className="text-primaryDark text-3xl sm:text-4xl font-bold font-volkhov text-center">
          {title}
        </div>
        <div className="text-primaryLight font-bold text-lg mb-5 inline-block font-poppins text-center ">
          Great for product design
        </div>
        <div id="PerMonth1" className="text-primaryDark text-3xl sm:text-4xl font-bold font-volkhov text-center">
          {price}
          <br />
          <div id="PerMonth" className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins text-center ">
            per month
          </div>
        </div>
        {/* <div id="Hr" className="overflow-hidden bg-black self-stretch h-px shrink-0 mb-6 mx-6" /> */}
        <div className="text-primaryDark text-lg sm:text-2xl font-bold font-volkhov mb-6">
          What’s included :
        </div>
        {features.map((feature, index) => (
          <div key={index} className="text-primaryLight font-bold text-sm mb-1 inline-block font-poppins px-4 ">
            {feature}
          </div>
        ))}
        <div className="flex justify-center my-4">
         <button className=" bg-yellow-500 hover:text-xl hover:bg-yellow-400 font-poppins font-medium text-white text-lg leading-7 text-center cursor-pointer shadow-lg rounded-lg w-fit h-fit p-6 py-2 duration-700">
    Try Free
  </button>
  </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const pricingData = [
    {
      title: "Pro",
      price: "$3,595",
      features: [
        "Everything in Essential",
        "Full UI/UX design and research",
        "Dev ready Figma files",
       
      ],
    },
    {
      title: "Gold",
      price: "$5,595",
      features: [
        "Everything in Essential",
        "Full UI/UX design and research",
        "Dev ready Figma files",
      
      ],
    },
    {
      title: "Normal",
      price: "$595",
      features: [
        "Everything in Essential",
        "Full UI/UX design and research",
        "Dev ready Figma files",
      ],
    },
  
  ];

  return (
    <div className="grid l md:grid-cols-2 gap-y-10 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {pricingData.map((pricing, index) => (
        <PricingCard key={index} {...pricing} />
      ))}
    </div>
  );
};

export default PricingSection;
