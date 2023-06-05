import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants/index.js";
import { logo, menu, close } from "../assets/index.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            {" "}
            Amy <span className="sm:block hidden"> | Kim</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
