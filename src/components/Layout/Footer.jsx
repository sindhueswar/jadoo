import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  bounceVariants,
  opacityVariants,
} from "../../constants/variants.constant";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const Footer = () => {
  const variant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const titleVariant = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Mobile"],
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press", "Affilates"],
    },
    {
      title: "More",
      links: ["Airlinefees", "Airline", "Low fare tips"],
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className="py-20">
          <Container>
            <motion.div
              animate={visible ? "visible" : "invisible"}
              variants={opacityVariants}
              initial="invisible"
              whileInView={() => setVisible(true)}
              transition={{ duration: 0.5 }}
              className="text-center max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-y-8  mx-auto"
            >
              <div className="col-span-1">
                <h4 className="text-primary text-4xl font-bold mb-5">Jadoo.</h4>
                <p className="text-primaryLight font-semibold">
                  Book your trip in minute, get full Control for much longer.
                </p>
              </div>
              <div className="grid grid-cols-3 col-span-2">
                {footerLinks.map(({ title, links }) => (
                  <motion.div
                    key={title}
                    variants={variant}
                    animate={visible ? "show" : "hidden"}
                  >
                    <motion.div
                      variants={titleVariant}
                      className="text-[#080809] font-bold text-lg mb-3"
                    >
                      {title}
                    </motion.div>
                    {links.map((link, i) => (
                      <motion.div
                        className="group text-primaryLight font-semibold py-1 w-fit mx-auto cursor-pointer"
                        key={i}
                        variants={{
                          hidden: {
                            y: 200,
                            opacity: 0,
                          },
                          show: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 1,
                            },
                          },
                        }}
                      >
                        {link}
                        <div className="bg-primaryLight w-0 transition-all duration-300 h-[1px] group-hover:w-full"></div>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
              <div className="col-span-1">
                <div className="flex items-start justify-center">
                  <motion.div
                    className="bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2"
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1 }}
                  >
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9544 10.6092L15.7852 7.1936H10.5987V4.98129C10.5987 4.04969 11.3265 3.13746 13.6428 3.13746H16V0.2329C16 0.2329 13.8576 0 11.808 0C7.53418 0 4.74586 1.63675 4.74586 4.59297V7.1936H0V10.6092H4.74586V18.8575C5.69941 18.9543 6.6727 19 7.66717 19C8.66164 19 9.63493 18.9483 10.5885 18.8575V10.6092H14.9544Z"
                        fill="black"
                      />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2"
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50212 4.62864C6.8063 4.62864 4.63185 6.80358 4.63185 9.5C4.63185 12.1964 6.8063 14.3714 9.50212 14.3714C12.1979 14.3714 14.3724 12.1964 14.3724 9.5C14.3724 6.80358 12.1979 4.62864 9.50212 4.62864ZM9.50212 12.667C7.76001 12.667 6.33581 11.2467 6.33581 9.5C6.33581 7.75326 7.75577 6.33298 9.50212 6.33298C11.2485 6.33298 12.6684 7.75326 12.6684 9.5C12.6684 11.2467 11.2442 12.667 9.50212 12.667ZM15.7076 4.42938C15.7076 5.06108 15.1989 5.5656 14.5716 5.5656C13.94 5.5656 13.4356 5.05684 13.4356 4.42938C13.4356 3.80191 13.9443 3.29315 14.5716 3.29315C15.1989 3.29315 15.7076 3.80191 15.7076 4.42938ZM18.9332 5.58256C18.8612 4.06053 18.5136 2.71232 17.3988 1.60153C16.2883 0.49074 14.9404 0.143088 13.4187 0.0667745C11.8504 -0.0222582 7.14964 -0.0222582 5.58132 0.0667745C4.06386 0.138849 2.71595 0.4865 1.60117 1.59729C0.486392 2.70808 0.143056 4.05629 0.0667596 5.57832C-0.0222532 7.14699 -0.0222532 11.8488 0.0667596 13.4174C0.138818 14.9395 0.486392 16.2877 1.60117 17.3985C2.71595 18.5093 4.05962 18.8569 5.58132 18.9332C7.14964 19.0223 11.8504 19.0223 13.4187 18.9332C14.9404 18.8612 16.2883 18.5135 17.3988 17.3985C18.5094 16.2877 18.8569 14.9395 18.9332 13.4174C19.0223 11.8488 19.0223 7.15123 18.9332 5.58256ZM16.9071 15.1006C16.5765 15.9316 15.9365 16.5717 15.1015 16.9067C13.851 17.4027 10.8839 17.2882 9.50212 17.2882C8.1203 17.2882 5.14897 17.3985 3.90279 16.9067C3.072 16.576 2.43196 15.9358 2.0971 15.1006C1.60117 13.8499 1.71562 10.8821 1.71562 9.5C1.71562 8.11787 1.60541 5.14588 2.0971 3.89942C2.42772 3.06845 3.06776 2.42826 3.90279 2.09333C5.15321 1.59729 8.1203 1.71176 9.50212 1.71176C10.8839 1.71176 13.8553 1.60153 15.1015 2.09333C15.9322 2.42402 16.5723 3.06421 16.9071 3.89942C17.4031 5.15012 17.2886 8.11787 17.2886 9.5C17.2886 10.8821 17.4031 13.8541 16.9071 15.1006Z"
                        fill="#080809"
                      />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2"
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#080809"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_5)">
                        <path
                          d="M19.6278 2.28298C18.9399 2.66457 18.201 2.92253 17.4241 3.03848C18.217 2.44499 18.8244 1.50452 19.1112 0.385201C18.358 0.944383 17.5337 1.33805 16.6741 1.54909C15.9746 0.617038 14.9771 0.0351238 13.8734 0.0351238C11.7551 0.0351238 10.0372 2.18171 10.0372 4.83115C10.0372 5.20655 10.071 5.57278 10.136 5.92441C6.94718 5.72408 4.12006 3.81472 2.22773 0.913443C1.8973 1.62202 1.70817 2.44586 1.70817 3.32486C1.70817 4.98858 2.38561 6.45649 3.41498 7.31636C2.80561 7.29275 2.20962 7.08715 1.67682 6.71674V6.77735C1.67682 9.10129 2.99917 11.0391 4.75452 11.4798C4.43207 11.5902 4.09367 11.6479 3.74358 11.6479C3.49605 11.6479 3.25591 11.6186 3.02131 11.5635C3.50957 13.4682 4.92657 14.8547 6.60506 14.8939C5.29192 16.1806 3.6373 16.9477 1.8402 16.9477C1.53067 16.9477 1.22476 16.9246 0.924438 16.8793C2.62269 18.2405 4.63908 19.0351 6.80593 19.0351C13.863 19.0351 17.7225 11.727 17.7225 5.38936C17.7225 5.18129 17.7189 4.97477 17.7109 4.769C18.4628 4.08912 19.1119 3.24731 19.6278 2.28298Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_5">
                          <rect
                            width="19"
                            height="19"
                            fill="white"
                            transform="translate(0.924438 0.0351238)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                <div className="text-primaryLight text-lg font-semibold my-3">
                  Discover our app
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="bg-black flex items-center px-2 py-3 justify-center gap-x-2 rounded-3xl w-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_521)">
                        <path
                          d="M11.5075 10.0018L1.46393 19.673C0.993605 19.3516 0.714365 18.817 0.719303 18.2473V1.75626C0.714365 1.18663 0.993605 0.65199 1.46393 0.330566L11.5075 10.0018Z"
                          fill="#2196F3"
                        />
                        <path
                          d="M15.0217 6.62364L11.5074 10.0018L1.46387 0.330532C1.50171 0.301203 1.54113 0.273918 1.58191 0.248803C2.11272 -0.0729183 2.77574 -0.0833047 3.31639 0.22156L15.0217 6.62364Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M19.2806 10.0017C19.2872 10.6447 18.9377 11.2387 18.3725 11.5454L15.0217 13.3798L11.5073 10.0017L15.0217 6.62354L18.3725 8.45788C18.9377 8.76462 19.2872 9.3586 19.2806 10.0017Z"
                          fill="#F0BB1F"
                        />
                        <path
                          d="M15.0217 13.3801L3.31639 19.7822C2.77455 20.0823 2.11404 20.0719 1.58191 19.7549C1.54113 19.7298 1.50171 19.7025 1.46387 19.6732L11.5074 10.002L15.0217 13.3801Z"
                          fill="#F15A2B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_521">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="text-white ">
                      <div className="text-[12px]">Google Play</div>
                    </div>
                  </div>
                  <div className="bg-black  items-center flex px-2 py-3 justify-center gap-x-2 rounded-3xl w-full">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_8_8)">
                        <path
                          d="M17.2826 10.871C17.2726 9.23767 18.1008 8.00492 19.7772 7.09704C18.8392 5.89989 17.4223 5.24123 15.5513 5.11217C13.7802 4.98756 11.8444 6.0334 11.1359 6.0334C10.3875 6.0334 8.67122 5.15667 7.32413 5.15667C4.54015 5.19673 1.58154 7.13709 1.58154 11.0846C1.58154 12.2506 1.82103 13.4551 2.29999 14.6983C2.93861 16.3316 5.24363 20.3369 7.64843 20.2702C8.90571 20.2435 9.79379 19.4735 11.4303 19.4735C13.0168 19.4735 13.84 20.2702 15.242 20.2702C17.6668 20.239 19.7523 16.5986 20.3609 14.9609C17.108 13.5946 17.2826 10.9555 17.2826 10.871ZM14.4587 3.56344C15.8208 2.12152 15.696 0.808654 15.6561 0.336914C14.4537 0.399219 13.0617 1.06678 12.2684 1.8901C11.3953 2.77127 10.8814 3.86161 10.9912 5.08992C12.2934 5.17893 13.4808 4.58257 14.4587 3.56344Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8_8">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.971252 0.336914)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="text-white ">
                      <div className="text-[12px]">Apple Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </ReactVisibilitySensor>
      <div className="text-center font-poppins text-sm ">
        All rights reserved@jadoo.co
      </div>
    </>
  );
};

export default Footer;
