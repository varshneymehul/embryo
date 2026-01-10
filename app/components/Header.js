"use client";
import Image from "next/image";
import "./Header.css";
import logo from "../../public/logo-white.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { motion, useScroll, useTransform } from "framer-motion";

function Header(props) {
  const { scrollY } = useScroll();
  
  // Transform scrollY to blur and opacity values directly without re-rendering
  const backdropBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(12px)"]);
  const logoOpacity = useTransform(scrollY, [0, 600], [0, 1]);
  
  // We still need a small state for the hamburger menu, but it won't be triggered by scroll
  const [toggle, setToggle] = useState(false);
  const handleToggle = (checked) => {
    setToggle(!toggle);
    var elm = document.getElementById("hamburger");
    if (checked != elm.checked) {
      elm.click();
    }
  };

  return (
    <motion.header
      style={{
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className="header flex justify-center"
    >
      <div className="cover flex justify-center">
        <Link href={"/"}>
          <motion.div style={{ opacity: logoOpacity }}>
            <Image
              className={`logo ${props.page === 0 ? "out" : ""} w-20 md:w-24`}
              width={200}
              src={logo}
              alt="logo"
            />
          </motion.div>
        </Link>
      </div>
      <div className="mx-4 fixed right-0 z-10 menu-hamburger">
        <input onClick={handleToggle} type="checkbox" id="hamburger" />
        <label htmlFor="hamburger" className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </label>
      </div>
      <Sidebar toggle={toggle} handleClick={handleToggle} />
    </motion.header>
  );
}

export default Header;
