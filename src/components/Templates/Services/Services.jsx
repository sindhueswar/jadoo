import React from "react";
import SectionHeader from "../../Section/SectionHeader";
import Container from "../../Container/Container";
import { motion } from "framer-motion";
import { opacityVariants } from "./../../../constants/variants.constant";
import { useState } from "react";
import CalculatedWeather from "./../../../assets/services/weather.svg";
import Flights from "./../../../assets/services/flights.svg";
import LocalEvents from "./../../../assets/services/mike.svg";
import Customization from "./../../../assets/services/customize.svg";
import ServiceCard from "./ServiceCard";
import ReactVisibilitySensor from "react-visibility-sensor";
const Services = () => {
  const Images = [CalculatedWeather, Flights, LocalEvents, Customization];
  const [visible, setVisible] = useState(false);
  const services = [
    {
      title: "Calculated Weather",
      details: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      title: "Best Flights",
      details: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      title: "Local Events",
      details:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    },
    {
      title: "Customization",
      details: "We deliver outsource daviation services for military customers",
    },
  ];
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <div className="my-20 scroll-mt-24 sm:scroll-mt-10" id="services">
        <Container>
          <motion.div
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            initial="invisible"
            transition={{ duration: 1 }}
            className="text-center"
          >
            <SectionHeader title="We Offer Best Services" subtitle="Category" />
          </motion.div>
          <motion.div
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            initial="invisible"
            transition={{ duration: 1, delay: 1 }}
            className="text-center "
          >
            <div className="grid  sm:grid-cols-2 md:grid-cols-4  pt-20 py-10 gap-y-10 max-w-7xl mx-auto">
              {services.map((service, i) => (
                <ServiceCard key={service.title} img={Images[i]} {...service} />
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Services;
