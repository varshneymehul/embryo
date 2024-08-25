"use client";
import Image from "next/image";
import "./Header.css";
import logo from "../../public/logo-white.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
function Header(props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newOffset = window.scrollY;
      if (newOffset > 600) {
        setOffset(600);
      } else {
        setOffset(newOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [toggle, setToggle] = useState(false);
  const handleToggle = (checked) => {
    setToggle(!toggle);
    var elm = document.getElementById("hamburger");
    if (checked != elm.checked) {
      elm.click();
    }
  };
  return (
    <header
      style={{
        WebkitBackdropFilter: `blur(${offset / 50}px)`,
        backdropFilter: `blur(${offset / 50}px)`,
      }}
      className="header flex justify-center"
    >
      <div className="cover flex justify-center">
        <Link href={"/"}>
          <Image
            style={{ opacity: offset / 600 }}
            className={`logo ${props.page === 0 ? "out" : ""} w-20 md:w-24`}
            width={200}
            src={logo}
            alt="logo"
          />
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
    </header>
  );
}

export default Header;
