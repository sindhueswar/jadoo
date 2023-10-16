import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Axon from "./../../../assets/companies/axon.svg";
import Expedia from "./../../../assets/companies/Jetstar.svg";
import Jetstar from "./../../../assets/companies/expedia.svg";
import qantas from "./../../../assets/companies/qantas.svg";
import alitalia from "./../../../assets/companies/alitalia.svg";
import Image from "next/image";
import { scaleVariants } from "./../../../constants/variants.constant";
import Container from "../../Container/Container";
const Companies = () => {
  const Images = [Axon, Jetstar, Expedia, qantas, alitalia];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className="my-20 scroll-mt-24 sm:scroll-mt-10" id="flights">
          <Container>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-x-5 max-w-5xl mx-auto my-3 items-center ">
              {Images.map((img, i) => (
                <motion.div
                  key={i}
                  variants={scaleVariants}
                  animate={visible ? "visible" : "invisible"}
                  transition={{ duration: 1 }}
                  className="h-fit flex items-center mx-auto hover:scale-105 hover:shadow-2xl rounded-[20px] duration-700"
                >
                  <Image src={img} loading="lazy" className="rounded" />
                </motion.div>
              ))}
            </div>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Companies;
