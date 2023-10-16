import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
const serviceCardVariant = {
  hover: {
    scale: 1,
    borderRadius: "36px",
  },
  initial: {
    borderRadius: 0,
  },
};

const cardHover = {
  hover: {
    height: "100px",
  },
};

const ServiceCard = ({ img, title, details }) => {
  return (
    <motion.div
      className='sm:h-[340px] relative'
      whileHover='hover'
      initial='initial'
    >
      <motion.div
        className='px-5 py-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer min-h-[200px] sm:w-[90%] bg-white ml-auto rounded-[36px]'
        variants={serviceCardVariant}
        whileHover='hover'
        initial='initial'
    
      >
        <div className=' min-h-[154px] flex items-center'>
          <Image src={img} className='mx-auto ' loading="lazy" />
        </div>
        <div className='text-[#1E1D4C] font-bold text-lg font-open-sans'> {title}</div>
        <p className='text-primaryLight font-medium m-3 font-poppins  tracking-tight leading-tight'>{details}</p>
      </motion.div>
      <div className='sm:block hidden'>
        <motion.div
          className='bg-[#DF6951] hidden sm:block  absolute left-[-30px] sm:left-0 bottom-0 w-[100px] -z-10 rounded-tl-[30px] rounded-br-[10px]'
          variants={cardHover}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;


