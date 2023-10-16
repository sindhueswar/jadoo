import React from "react";
import SectionHeader from "../../Section/SectionHeader";
import Container from "../../Container/Container";
import { motion } from "framer-motion";
import { opacityVariants } from "./../../../constants/variants.constant";
import { useState } from "react";
import Italy from "./../../../assets/destinations/italy.Webp";
import Europe from "./../../../assets/destinations/europe.Webp";
import UK from "./../../../assets/destinations/uk.Webp";

import DestinationCard from "./DestinationCard";
import ReactVisibilitySensor from "react-visibility-sensor";

const Destinations = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 500 }}
      >
        <div className="mb-20  sm:scroll-mt-10" id="destinations">
          <Container>
            <motion.div
              animate={visible ? "visible" : "invisible"}
              variants={opacityVariants}
              initial="invisible"
              whileInView={() => setVisible(true)}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <SectionHeader title="Top Destinations" subtitle="Top Selling " />
            </motion.div>
            <DestinationCardSection />
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Destinations;

const DestinationCardSection = () => {
  const Images = [Italy, UK, Europe];
  const [visible, setVisible] = useState(false);
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };
  const destinations = [
    {
      title: "Rome, Italy",
      price: "$5,42k",
      duration: "10",
    },
    {
      title: "London, UK",
      price: "$4.2k",
      duration: "12",
    },
    {
      title: "Full Europe",
      price: "$15k",
      duration: "28",
    },
  ];
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        variants={container}
        animate={visible ? "show" : "hidden"}
        className=" grid  md:grid-cols-2 gap-y-10 lg:grid-cols-3 pt-20 py-10 max-w-5xl mx-auto relative "
      >
        <svg width="98" height="254" viewBox="0 0 98 254" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 -right-10 top-1/3">
<path d="M8.95816 14.2344C15.985 5.71795 33.7527 -7.37604 48.6094 8.37933C63.4661 24.1347 43.423 53.6228 31.5443 66.3974C25.6886 69.9459 13.4754 75.9784 11.4677 71.7202C8.95816 66.3974 7.45241 55.2196 28.0309 45.6387C41.248 39.961 69.7902 33.9286 78.2224 55.2196C82.0704 64.4457 82.7396 85.8787 54.6324 97.8017L19.4984 113.238M19.4984 113.238C6.11398 113.774 -13.1261 107.392 16.9888 77.5752C26.5252 72.9621 49.6133 63.6296 65.6746 63.2038C74.8763 65.1554 92.5772 74.8074 89.7665 97.8017C90.1011 102.415 83.8439 113.876 56.1382 122.819C49.7806 124.238 35.5597 127.183 29.5367 127.609L7.95439 130.803L19.4984 113.238ZM19.4984 113.238C28.2808 110.754 49.0085 106.531 61.6592 109.512C77.4727 113.238 83.7435 110.044 96.2913 130.803C98.4663 141.448 96.8936 163.272 73.2033 165.401C49.5129 167.53 34.2212 163.449 29.5367 161.143V141.448M29.5367 141.448C46.7691 143.045 83.7435 141.874 93.7818 124.415C98.6336 111.996 99.0017 86.6239 61.6592 84.4948C52.6248 84.8496 33.3513 85.9852 28.5329 87.6884L29.5367 125.48C47.1037 127.077 84.0446 134.635 91.2722 152.094C95.1202 162.207 96.3917 183.498 70.6937 187.756C61.1573 188.111 39.575 186.798 29.5367 178.708M29.5367 141.448V178.708M29.5367 141.448C40.4115 144.11 64.3696 151.455 73.2033 159.546C83.9108 168.417 99.604 190.418 76.7167 207.45C69.5225 210.112 50.4163 212.241 31.5443 199.466M29.5367 178.708L31.5443 199.466M29.5367 178.708C41.5827 187.224 66.1765 207.876 68.1841 222.354C69.0207 231.225 66.7788 249.713 51.119 252.694C47.1037 253.404 37.1658 253.333 29.5367 247.371L31.5443 199.466" stroke="#84829A"/>
</svg>

        {destinations.map((destination, i) => (
          <DestinationCard
            key={destination.title}
            img={Images[i]}
            {...destination}
          />
        ))}
      </motion.div>
    </ReactVisibilitySensor>
  );
};
