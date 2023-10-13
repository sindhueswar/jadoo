import React, { useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Container from "../Container/ContainerLayout";

const Header = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");
  const [isRotated, setIsRotated] = useState(false);
  const languages = ["En", "Sp"];
  const Logo = () => {
    return (
      <div>
        <svg
          width="116"
          height="35"
          viewBox="0 0 116 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.9999 29L84.4999 32L92.4999 24L102.5 31L113 29L108.5 14.5L92.4999 19.5L83.4999 14.5L73.9999 16L74.9999 29Z"
            fill="#F1A501"
          />
          <path
            d="M0.919922 24.064V21.902L7.03792 20.798V23.788C7.06859 25.4133 7.48259 26.64 8.27992 27.468C9.10792 28.2653 10.1966 28.664 11.5459 28.664C12.8646 28.664 13.9073 28.2347 14.6739 27.376C15.4713 26.5173 15.8699 25.3673 15.8699 23.926V1.38598H22.2179V23.926C22.2179 26.9313 21.2213 29.4767 19.2279 31.562C17.2346 33.6473 14.6893 34.69 11.5919 34.69C8.37192 34.69 5.78059 33.724 3.81792 31.792C1.88592 29.8293 0.919922 27.2533 0.919922 24.064Z"
            fill="black"
          />
          <path
            d="M23.6766 27.836C23.6766 25.904 24.3053 24.3553 25.5626 23.19C26.82 22.0247 28.4453 21.2887 30.4386 20.982L36.0046 20.154C37.1393 20.0007 37.7066 19.464 37.7066 18.544C37.7066 17.6853 37.3693 16.98 36.6946 16.428C36.0506 15.876 35.1153 15.6 33.8886 15.6C32.6006 15.6 31.5733 15.9527 30.8066 16.658C30.0706 17.3633 29.6566 18.2373 29.5646 19.28L24.1366 18.13C24.3513 16.1673 25.3173 14.4347 27.0346 12.932C28.752 11.4293 31.0213 10.678 33.8426 10.678C37.216 10.678 39.7 11.4907 41.2946 13.116C42.8893 14.7107 43.6866 16.7653 43.6866 19.28V30.412C43.6866 31.7613 43.7786 32.9573 43.9626 34H38.3506C38.1973 33.3253 38.1206 32.4207 38.1206 31.286C36.6793 33.5247 34.456 34.644 31.4506 34.644C29.12 34.644 27.234 33.9693 25.7926 32.62C24.382 31.2707 23.6766 29.676 23.6766 27.836ZM32.7386 30.09C34.18 30.09 35.3606 29.6913 36.2806 28.894C37.2313 28.066 37.7066 26.7167 37.7066 24.846V23.834L32.6006 24.616C30.73 24.892 29.7946 25.8427 29.7946 27.468C29.7946 28.204 30.0553 28.8327 30.5766 29.354C31.098 29.8447 31.8186 30.09 32.7386 30.09Z"
            fill="black"
          />
          <path
            d="M67.6577 0.695984V29.906C67.6577 31.4087 67.719 32.7733 67.8417 34H61.9997C61.8463 33.2333 61.7697 32.3593 61.7697 31.378C61.2483 32.3287 60.4203 33.0953 59.2857 33.678C58.1817 34.2607 56.8937 34.552 55.4217 34.552C52.2017 34.552 49.549 33.4327 47.4637 31.194C45.409 28.9247 44.3817 26.0727 44.3817 22.638C44.3817 19.2953 45.3937 16.4893 47.4177 14.22C49.4723 11.9507 52.079 10.816 55.2377 10.816C58.4883 10.816 60.6197 11.7513 61.6317 13.622V0.695984H67.6577ZM50.5457 22.638C50.5457 24.6313 51.067 26.2107 52.1097 27.376C53.1523 28.5107 54.5017 29.078 56.1577 29.078C57.783 29.078 59.117 28.4953 60.1597 27.33C61.2023 26.1647 61.7237 24.5853 61.7237 22.592C61.7237 20.6293 61.2023 19.096 60.1597 17.992C59.117 16.8573 57.783 16.29 56.1577 16.29C54.5323 16.29 53.183 16.8573 52.1097 17.992C51.067 19.1267 50.5457 20.6753 50.5457 22.638Z"
            fill="black"
          />
          <path
            d="M76.6866 27.422C77.8213 28.5567 79.1859 29.124 80.7806 29.124C82.3753 29.124 83.7246 28.5567 84.8286 27.422C85.9633 26.2873 86.5306 24.708 86.5306 22.684C86.5306 20.66 85.9633 19.0807 84.8286 17.946C83.7246 16.8113 82.3753 16.244 80.7806 16.244C79.1859 16.244 77.8213 16.8113 76.6866 17.946C75.5826 19.0807 75.0306 20.66 75.0306 22.684C75.0306 24.708 75.5826 26.2873 76.6866 27.422ZM72.2706 14.082C74.5399 11.8127 77.3766 10.678 80.7806 10.678C84.1846 10.678 87.0059 11.8127 89.2446 14.082C91.5139 16.3513 92.6486 19.2187 92.6486 22.684C92.6486 26.1493 91.5139 29.0167 89.2446 31.286C87.0059 33.5553 84.1846 34.69 80.7806 34.69C77.3766 34.69 74.5399 33.5553 72.2706 31.286C70.0319 29.0167 68.9126 26.1493 68.9126 22.684C68.9126 19.2187 70.0319 16.3513 72.2706 14.082Z"
            fill="black"
          />
          <path
            d="M99.8699 27.422C101.005 28.5567 102.369 29.124 103.964 29.124C105.559 29.124 106.908 28.5567 108.012 27.422C109.147 26.2873 109.714 24.708 109.714 22.684C109.714 20.66 109.147 19.0807 108.012 17.946C106.908 16.8113 105.559 16.244 103.964 16.244C102.369 16.244 101.005 16.8113 99.8699 17.946C98.7659 19.0807 98.2139 20.66 98.2139 22.684C98.2139 24.708 98.7659 26.2873 99.8699 27.422ZM95.4539 14.082C97.7232 11.8127 100.56 10.678 103.964 10.678C107.368 10.678 110.189 11.8127 112.428 14.082C114.697 16.3513 115.832 19.2187 115.832 22.684C115.832 26.1493 114.697 29.0167 112.428 31.286C110.189 33.5553 107.368 34.69 103.964 34.69C100.56 34.69 97.7232 33.5553 95.4539 31.286C93.2152 29.0167 92.0959 26.1493 92.0959 22.684C92.0959 19.2187 93.2152 16.3513 95.4539 14.082Z"
            fill="black"
          />
        </svg>
      </div>
    );
  };
  const links = [
    {
      href: "#destinations",
      title: "Desitnations",
    },
    {
      href: "#services",
      title: "Hotels",
    },
    {
      href: "#flights",
      title: "Flights",
    },
    {
      href: "#bookings",
      title: "Bookings",
    },
    {
      href: "#",
      title: "Login",
    },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsRotated(!isRotated);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const languageListVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Container >
      <header className="sticky top-0 flex  justify-between 2xl:justify-around xl:pl-24 xl:pr-10 items-center pt-10">
        <Logo />
        <div className="hidden lg:flex justify-between items-center">
          {links.map(({ href, title }) => (
            <NavItems href={href} title={title} key={title} />
          ))}
          <button className="text-secondaryLight font-semibold border-2 border-secondaryLight mx-6 px-9 py-2 rounded-md font-google-sans hover:text-lg duration-700 ">
            Sign Up
          </button>
          <div className="language-dropdown duration-700 ease-in-out font-google-sans text-secondaryLight font-semibold flex items-center px-6">
            {selectedLanguage}
            <button
              className="text-secondaryLight font-semibold border-transparent px-3 py-2 rounded-md"
              onClick={toggleLanguageDropdown}
            >
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div className="dropdown-content absolute flex flex-col z-50 transition ease-in-out mt-24 origin-top duration-700 scale-100">
                {languages.map((language) => (
                  <motion.a
                    href="#"
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className="font-google-sans text-secondaryLight font-semibold"
                    variants={languageListVariants}
                  >
                    {language}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
        <Snackbar />
      </header>
    </Container>
  );
};
const NavItems = ({ href, title }) => {
  const hoverMotion = {
    rest: {
      width: 0,
      backgroundColor: "#5e6282",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="w-fit mx-auto px-6 z-2"
    >
      <motion.a
        href={href}
        className="text-secondaryLight font-google-sans font-semibold"
      >
        {title}
      </motion.a>
      <motion.div className="h-[2px]" variants={hoverMotion}></motion.div>
    </motion.div>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 261px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 261px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const hoverMotion = {
  rest: {
    width: 0,
    backgroundColor: "#5e6282",
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.2,
    },
  },
};
const links = [
  {
    // href: "#",
    title: "Desitnations",
  },
  {
    // href: "#",
    title: "Hotels",
  },
  {
    // href: "#",
    title: "Flights",
  },
  {
    // href: "#",
    title: "Bookings",
  },
  {
    // href: "#",
    title: "Login",
  },
];
const Snackbar = React.memo(() => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      className="lg:hidden block  absolute right-0  z-1000 h-[100vh]  bottom-0  w-[300px] top-0 "
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      ref={containerRef}
    >
      <motion.div
        className=" w-[300px] absolute right-0 h-[100vh] -z-10 top-0  bottom-0"
        variants={sidebarVariants}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
});

const Path = React.memo((props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
));

const MenuToggle = React.memo(({ toggle }) => {
  return (
    <button
      onClick={toggle}
      className="absolute cursor-pointer right-0 w-[50px] h-[50px] top-[28px] rounded-full bg-transparent"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
});

const Navigation = React.memo(() => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <ul className=" flex h-full justify-center flex-col relative top-16">
      {links.map((link, i) => (
        <MenuItem title={link.title} href={link.href} key={i} />
      ))}
    </ul>
  );
});

// const MenuItem = ({ href, title }) => {
const MenuItem = React.memo(({ href, title }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.li
      className="py-3 text-center bg-white"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.a href={href} className="text-secondaryLight font-semibold">
        {title}
      </motion.a>
      <motion.div className="h-[2px]" variants={hoverMotion}></motion.div>
    </motion.li>
  );
});

export default Header;
