import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
const DestinationCard = ({ img, title, price, duration }) => {
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
      className='sm:w-[300px] mx-auto bg-white shadow-xl rounded-[20px] scale-100 '
    >
      <div className='h-[300px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px] '>
        <Image src={img} alt={title} loading="lazy" className="h-full w-full hover:scale-110 transition duration-300 ease-in-out"/>
      </div>

      <div className='py-5 px-4'>
        <div className='flex justify-between items-center'>
          <span className='text-primaryLight font-semibold text-lg'>
            {title}
          </span>
          <span className='text-primaryLight font-semibold'>{price}</span>
        </div>
        <div className='flex items-center text-primaryLight mt-4'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z" fill="#080809"/>
</svg>

          <span className='ml-2 font-semibold'>{duration} Days Trip</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
