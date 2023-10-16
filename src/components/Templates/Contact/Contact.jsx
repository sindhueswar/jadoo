import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import Container from "../../Container/Container";
import { motion } from "framer-motion";
import { opacityVariants } from "./../../../constants/variants.constant";
import Image from "next/image";
const Contact = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className="my-20 relative">
          <motion.div
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            style={{
              // backgroundImage: `url(${BG})`,
              borderRadius: "5",
              borderTopLeftRadius: "150px",
              background: "#DFD7F9",
            }}
            initial="invisible"
            whileInView={() => setVisible(true)}
            transition={{ duration: 0.5 }}
            className="relative text-center py-20 rounded-xl max-w-5xl mx-auto bg-no-repeat bg-cover"
          >
            <Container>
              <h4 className="text-primaryLight text-3xl font-semibold leading-relaxed max-w-3xl mx-auto font-poppins">
                Subscribe to get information, latest news and other interesting
                offers about Cobham
              </h4>
              <div className="flex flex-col sm:flex-row  items-center max-w-2xl gap-y-8 mx-auto justify-center gap-x-7 pt-20 ">
                <div className="relative w-full sm:w-[400px]  rounded-lg mb-2  bg-white  flex items-center z-10">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute m-auto left-0 ml-3"
                  >
                    <g id="Group 46">
                      <path
                        id="Vector 5"
                        d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                        stroke="#39425D"
                      />
                      <rect
                        id="Rectangle 22"
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="17"
                        rx="4.5"
                        stroke="#39425D"
                      />
                    </g>
                  </svg>
                  <input
                    className="text-[#39425D] w-full  bg-white py-5  outline-none rounded-lg pl-10 font-montserrat opacity-1 transition-all ease-in-out duration-[.15s]   focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]"
                    placeholder="Your email"
                    type="email"
                  />
                </div>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-t from-[#FF946D] to-[#FF7D68] w-full inline-block sm:w-fit px-10 py-5 text-white rounded-xl font-open-sans mb-2
                    "
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
              <div className="absolute right-0 top-0   sm:block hidden">
              
                <svg
                  width="203"
                  height="274"
                  viewBox="0 0 203 274"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-10"
                >
                  <circle
                    cx="178.015"
                    cy="178.32"
                    r="91.8033"
                    stroke="#6246E5"
                  />
                  <circle
                    cx="170.728"
                    cy="168.604"
                    r="102.734"
                    stroke="#6246E5"
                  />
                  <circle
                    cx="164.655"
                    cy="160.71"
                    r="112.45"
                    stroke="#6246E5"
                  />
                  <circle
                    cx="158.583"
                    cy="149.171"
                    r="120.952"
                    stroke="#6246E5"
                  />
                  <circle
                    cx="152.814"
                    cy="137.937"
                    r="129.15"
                    stroke="#6246E5"
                  />
                  <circle
                    cx="143.098"
                    cy="125.185"
                    r="141.902"
                    stroke="#6246E5"
                  />
                </svg>
              </div>
              <motion.div className="absolute bottom-0 left-0  grayscale">
                {/* <img src={BottomDecor} className="h-full" loading="lazy" /> */}
                <svg
                  width="374"
                  height="276"
                  viewBox="0 0 374 276"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-10 z-0"
                >
                  <path
                    d="M130.505 368.92C61.1724 368.92 4.9658 312.635 4.9658 243.202C4.9658 173.769 61.1724 117.484 130.505 117.484C199.838 117.484 256.045 173.769 256.045 243.202C256.045 312.635 199.838 368.92 130.505 368.92Z"
                    stroke="#6246E5"
                  />
                  <path
                    d="M143.773 373.902C66.1965 373.902 3.30749 310.925 3.30749 233.237C3.30749 155.55 66.1965 92.5727 143.773 92.5727C221.349 92.5728 284.238 155.55 284.238 233.237C284.238 310.925 221.349 373.902 143.773 373.902Z"
                    stroke="#6246E5"
                  />
                  <path
                    d="M154.552 378.885C69.6488 378.885 0.819753 309.959 0.819756 224.934C0.81976 139.909 69.6488 70.9831 154.552 70.9831C239.456 70.9832 308.285 139.909 308.285 224.934C308.285 309.959 239.456 378.885 154.552 378.885Z"
                    stroke="#6246E5"
                  />
                  <path
                    d="M170.308 382.206C78.9927 382.206 4.96621 308.076 4.96621 216.63C4.96621 125.184 78.9927 51.0542 170.308 51.0542C261.622 51.0542 335.649 125.184 335.649 216.63C335.649 308.076 261.622 382.206 170.308 382.206Z"
                    stroke="#6246E5"
                  />
                  <path
                    d="M185.648 385.528C88.1504 385.528 9.11205 306.378 9.11205 208.742C9.11206 111.105 88.1504 31.9553 185.648 31.9553C283.145 31.9553 362.183 111.105 362.183 208.742C362.183 306.379 283.145 385.528 185.648 385.528Z"
                    stroke="#6246E5"
                  />
                  <path
                    d="M203.061 389.68C95.9466 389.68 9.11205 302.723 9.11205 195.456C9.11206 88.1879 95.9466 1.23143 203.061 1.23144C310.175 1.23144 397.01 88.1879 397.01 195.456C397.01 302.723 310.175 389.68 203.061 389.68Z"
                    stroke="#6246E5"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="bg-gradient-to-t  rounded-full flex items-center justify-center from-[#747DEF] to-[#5E3BE1] absolute -top-6 sm:-right-6  -right-0"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                }}
              >
                {/* <RiSendPlaneFill className="text-white text-3xl m-5 font-bold" /> */}
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="35"
                    fill="url(#paint0_linear_1_489)"
                  />
                  <path
                    d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
                    fill="white"
                  />
                  <path
                    d="M25.2636 40.9555L27.997 50.6841C28.3427 51.9157 29.3386 52.8313 30.5948 53.0729C31.8776 53.3192 33.1321 52.8124 33.8939 51.8182L52.3677 27.7111C53.2092 26.6137 53.3018 25.1879 52.6105 23.9905L24.9789 39.9436L25.2636 40.9555Z"
                    fill="white"
                  />
                  <path
                    d="M36.2231 33.4515C36.5043 33.9385 36.3379 34.5616 35.8503 34.8431L25.2636 40.9553L24.9789 39.9434L24.2449 39.1909L34.8316 33.0787C35.3192 32.7973 35.942 32.9646 36.2231 33.4515Z"
                    fill="url(#paint1_linear_1_489)"
                  />
                  <path
                    d="M25.2637 40.9554L35.8504 34.8432C36.338 34.5617 36.5045 33.9387 36.2233 33.4517L24.979 39.9435L25.2637 40.9554Z"
                    fill="url(#paint2_linear_1_489)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_489"
                      x1="49.6467"
                      y1="1.96393"
                      x2="19.564"
                      y2="77.7643"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#747DEF" />
                      <stop offset="1" stopColor="#5E3BE1" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_489"
                      x1="32.4077"
                      y1="34.5441"
                      x2="33.5452"
                      y2="36.8251"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#747DEF" />
                      <stop offset="1" stopColor="#5E3BE1" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_489"
                      x1="32.9029"
                      y1="35.4017"
                      x2="33.507"
                      y2="36.5259"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#747DEF" />
                      <stop offset="1" stopColor="#5E3BE1" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </Container>
          </motion.div>
          <svg width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-20" >
<path d="M7.19727 152.61H11.5586V154.49H7.19727V159.432H5.19922V154.49H0.837891V152.61H5.19922V148.045H7.19727V152.61Z" fill="#E5E5E5"/>
<path d="M42.1973 117.61H46.5586V119.49H42.1973V124.432H40.1992V119.49H35.8379V117.61H40.1992V113.045H42.1973V117.61Z" fill="#E5E5E5"/>
<path d="M77.1973 12.6104H81.5586V14.4902H77.1973V19.4316H75.1992V14.4902H70.8379V12.6104H75.1992V8.04492H77.1973V12.6104Z" fill="#E5E5E5"/>
<path d="M77.1973 47.6104H81.5586V49.4902H77.1973V54.4316H75.1992V49.4902H70.8379V47.6104H75.1992V43.0449H77.1973V47.6104Z" fill="#E5E5E5"/>
<path d="M77.1973 82.6104H81.5586V84.4902H77.1973V89.4316H75.1992V84.4902H70.8379V82.6104H75.1992V78.0449H77.1973V82.6104Z" fill="#6246E5"/>
<path d="M77.1973 117.61H81.5586V119.49H77.1973V124.432H75.1992V119.49H70.8379V117.61H75.1992V113.045H77.1973V117.61Z" fill="#E5E5E5"/>
<path d="M77.1973 152.61H81.5586V154.49H77.1973V159.432H75.1992V154.49H70.8379V152.61H75.1992V148.045H77.1973V152.61Z" fill="#E5E5E5"/>
<path d="M112.197 12.6104H116.559V14.4902H112.197V19.4316H110.199V14.4902H105.838V12.6104H110.199V8.04492H112.197V12.6104Z" fill="#E5E5E5"/>
<path d="M112.197 47.6104H116.559V49.4902H112.197V54.4316H110.199V49.4902H105.838V47.6104H110.199V43.0449H112.197V47.6104Z" fill="#E5E5E5"/>
<path d="M112.197 82.6104H116.559V84.4902H112.197V89.4316H110.199V84.4902H105.838V82.6104H110.199V78.0449H112.197V82.6104Z" fill="#E5E5E5"/>
<path d="M112.197 117.61H116.559V119.49H112.197V124.432H110.199V119.49H105.838V117.61H110.199V113.045H112.197V117.61Z" fill="#E5E5E5"/>
<path d="M112.197 152.61H116.559V154.49H112.197V159.432H110.199V154.49H105.838V152.61H110.199V148.045H112.197V152.61Z" fill="#E5E5E5"/>
<path d="M147.197 12.6104H151.559V14.4902H147.197V19.4316H145.199V14.4902H140.838V12.6104H145.199V8.04492H147.197V12.6104Z" fill="#FF7152"/>
<path d="M147.197 47.6104H151.559V49.4902H147.197V54.4316H145.199V49.4902H140.838V47.6104H145.199V43.0449H147.197V47.6104Z" fill="#E5E5E5"/>
<path d="M147.197 82.6104H151.559V84.4902H147.197V89.4316H145.199V84.4902H140.838V82.6104H145.199V78.0449H147.197V82.6104Z" fill="#E5E5E5"/>
<path d="M147.197 117.61H151.559V119.49H147.197V124.432H145.199V119.49H140.838V117.61H145.199V113.045H147.197V117.61Z" fill="#E5E5E5"/>
<path d="M147.197 152.61H151.559V154.49H147.197V159.432H145.199V154.49H140.838V152.61H145.199V148.045H147.197V152.61Z" fill="#E5E5E5"/>
</svg>

        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Contact;
