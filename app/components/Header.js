"use client";
import Image from "next/image";
import "./header.css";
import logo from "../../public/logo-white.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
function Header(props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    if (offset > 600) {
      setOffset(600);
    }
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

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
      style={{ backdropFilter: `blur(${offset / 50}px)` }}
      className="header flex justify-center"
    >
      <div className="cover flex justify-center">
        <Link href={"/"}>
          <Image
            style={{ opacity: offset / 600 }}
            className={`logo ${props.page === 0 ? "out" : ""}`}
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
