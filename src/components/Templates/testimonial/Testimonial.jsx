import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dp1 from "./../../../assets/testimonials/profile1.Webp"
import dp2 from "./../../../assets/testimonials/profile2.Webp"
import dp3 from "./../../../assets/testimonials/profile3.Webp"
import ReactVisibilitySensor from "react-visibility-sensor";
const Testimonies = [
  {
    name: "Mike Taylor",
    city: "Lahore, Pakistan",
    testimony:
      "On the Windows talking painted pasture yet its express parties use.Sure last upon he same as knew next. Of believed or diverted no.",
    img: dp1,
  },
  {
    name: "John Ross",
    city: "London, UK",
    testimony:
      "On the Windows talking painted pasture yet its express parties use.Sure last upon he same as knew next. Of believed or diverted no.",
    img: dp2,
  },
  {
    name: "Sydney Wills",
    city: "Washighton, DC",
    testimony:
      "On the Windows talking painted pasture yet its express parties use.Sure last upon he same as knew next. Of believed or diverted no.",
    img: dp3,
  },
];
function getNextNo(no) {
  if (no === Testimonies.length - 1) {
    return 0;
  }
  return no + 1;
}
function getPrevNo(no) {
  if (no === 0) {
    return Testimonies.length - 1;
  }
  return no - 1;
}
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(0);
  const [increased, setIncreased] = useState(false);
  const TestimonyCards = Testimonies.map((test, i) => {
    return <TestimonyCard index={i} increased={increased} key={i} />;
  });
  return (
    
    <ReactVisibilitySensor>
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-5 mx-auto container justify-between max-w-5xl mb-20 scroll-mt-24 sm:scroll-mt-0">
      <Section
        title={"TESTIMONIALS"}
        headText="What People Say About Us."
        className="text-center lg:text-left px-2 lg:col-span-2 lg:px-0 "
        textAlign="left"
      >
        <Loader index={testimonials} className="   pt-10 justify-center lg:justify-start lg:pt-14 "/>
      </Section>

      <div className="p-10 pl-12 col-span-2  lg:col-span-3 lg:pt-6 lg:pl-6 flex flex-col md:flex-row my-auto ">
        <div className="lg:flex-1">
            {TestimonyCards[testimonials]}
        </div>
        <div className="flex justify-center items-center gap-4  md:block md:space-y-4 md:my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              " h-6 w-6  -rotate-90 md:rotate-0" 
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              setTestimonials((testimonials) => {
                setIncreased(false);
                return getPrevNo(testimonials);
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
          "h-6 w-6 -rotate-90 md:rotate-0"
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              setTestimonials((testimonials) => {
                setIncreased(true);
                return getNextNo(testimonials);
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
    </ReactVisibilitySensor>
  );
};

function TestimonyCard({ index, increased }) {
  if (increased) {
    return (
      <div className="w-[85%] -mb-24 md:h-full" key={index}>
        <motion.div
          className="filter rounded-[10px] bg-white px-3 md:px-8 w-full  max-w-[600px] pb-2 md:pb-9 border  z-10 relative "
          initial={{ x: 50, y: 80,zIndex:1 }}
          animate={{ x: 0, y: 0 ,zIndex:10}}
          exit={{ x: -226, opacity: 0 }}
        >
          <Avatar
            img={Testimonies[index].img}
            className="-ml-14 -mt-6 w-14 h-14"
          />         
          <div className="flex flex-col justify-center gap-6 w-fit">
        <p className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins ">
        &quot;{Testimonies[index].testimony}&quot;
        </p>
        <div className="flex flex-col gap-2">
          <h4 className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].name}
          </h4>
          <p className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].city}
          </p>
        </div>
      </div>
        </motion.div>
        <motion.div
          className=" rounded-[10px] bg-white px-3 md:px-8 w-full max-w-[600px] pb-2 md:pb-9 border  relative lead"
          initial={{ x: 0, y: -200,zIndex:10 }}
          animate={{ x: 50, y: -146,zIndex:1 }}        >
          <Avatar
            img={Testimonies[getNextNo(index)].img}
            className="-ml-14 -mt-6 w-14 h-14"
          />
           <div className="flex flex-col justify-center gap-6 w-fit">
        <p className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins ">
        &quot;{Testimonies[index].testimony}&quot;
        </p>
        <div className="flex flex-col gap-2">
          <h4 className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].name}
          </h4>
          <p className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].city}
          </p>
        </div>
      </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="w-[85%] -mb-24"key={index}>
      <motion.div
        className="filter rounded-[10px] bg-white px-3 md:px-8 max-w-[600px] pb-2 md:pb-9 border  z-10 relative lead "
        initial={{ x: 10, y: 10,zIndex:0 }}
        animate={{ x: 0, y: 0 ,zIndex:10}}
      >
        <Avatar
          img={Testimonies[index].img}
          className="-ml-14 -mt-6 w-14 h-14"
        />
         <div className="flex flex-col justify-center gap-6 w-fit">
        <p className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins ">
        &quot;{Testimonies[index].testimony}&quot;
        </p>
        <div className="flex flex-col gap-2">
          <h4 className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].name}
          </h4>
          <p className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].city}
          </p>
        </div>
      </div>
      </motion.div>
      <motion.div
        className=" rounded-[10px] bg-white px-3 md:px-8 max-w-[600px] pb-2 md:pb-9 border relative trail"
        initial={{ x: 0, y: -226 ,zIndex:10}}
        animate={{ x: 50, y: -146,zIndex:0 }}      
      >
        <Avatar
          img={Testimonies[getNextNo(index)].img}
          className="-ml-14 -mt-6 w-14 h-14"
        />       
          <div className="flex flex-col justify-center gap-6 w-fit">
        <p className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins ">
        &quot;{Testimonies[index].testimony}&quot;
        </p>
        <div className="flex flex-col gap-2">
          <h4 className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].name}
          </h4>
          <p className="text-primaryDark text-sm font-bold font-volkhov">
          {Testimonies[index].city}
          </p>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

function Loader({ index ,className=''}) {
  return (
    <motion.div className={"flex gap-4 items-center justify-items-start "+className } layout>
      {Testimonies.map((_, i) => {
        if (i === index) {
          return (            
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gray-900"
                layout
              />
          );
        }
        return (
          <motion.div
            className="bg-gray-300 h-2.5 w-2.5 rounded-full"
            key={i}
            layout
          ></motion.div>
        );
      })}
    </motion.div>
  );
}
const Section = ({title,headText,children,className='',textAlign='center'}) => {
  let align=`text-${textAlign}`
  return (
    <section className={className}>
        <h3 className={'text-primaryLight font-bold text-xl mb-5 inline-block font-poppins  lg:' +align}>{title}</h3>
        <h1 className={'text-primaryDark text-4xl  sm:text-5xl font-bold font-volkhov md:leading-[4rem] lg:' +align}>{headText}</h1>
        {children}
    </section>
  )
}


export function Avatar({ img ,className=""}) {
  return <Image src={img} alt="" className={"w-12 h-12 rounded-full "+className} />;
}
export default Testimonials;