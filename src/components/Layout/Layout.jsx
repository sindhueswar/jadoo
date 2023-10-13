import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="relative ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="704"
        height="724"
        viewBox="0 0 704 724"
        fill="none"
        className="-z-10 absolute right-0 top-0 h-auto overflow-hidden "
      >
        <path
          d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
          fill="#FFF1DA"
        />
      </svg>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
