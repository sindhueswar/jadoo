import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const StepItem = ({ step, description, img }) => {
  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div className='mb-7 max-w-sm mr-auto flex' variants={itemVariant}>
      <div className='mr-5 w-24'>
        <Image src={img} alt={step} className='w-12 h-12 ' loading="lazy"/>
      </div>
      <div className='text-left'>
        <h4 className='text-primaryDark text-sm font-bold font-poppins hover:text-[#DF6951] hover:scale-110 transition duration-200 ease-in-out'>{step}</h4>
        <p className='text-primaryLight font-thin text-sm mb-5 mt-1 inline-block font-poppins '>{description}</p>
      </div>
    </motion.div>
  );
};

export default StepItem;
