import Link from "next/link";
import React from "react";
import bgGradient from "../../public/img/bg-gradient.jpg";
import Image from "next/image";
const Sidebar = ({ toggle, handleClick }) => {
  return (
    <div
      className={`h-screen top-0 opacity-90 backdrop-blur-xl delay-75 transform transition-all duration-300 ease-in-out fixed w-screen ${
        toggle ? "translate-x-2/3 md:translate-x-3/4" : "translate-x-full"
      }`}
    >
      <Image
        className="w-2/3 md:w-1/4 h-full absolute object-cover z-0"
        width={1000}
        height={1000}
        src={bgGradient}
        alt="bg-gradient"
      />
      <div className="p-4 md:pl-8 absolute">
        <div className="hidden md:block"></div>
        <div className="z-20 pt-12">
          <ul className="list-none text-2xl md:text-7xl">
            <li
              onClick={handleClick}
              className={`${
                toggle ? "opacity-100" : "opacity-0"
              }  hover:text-transparent hover:bg-clip-text hover:from-blue-200 hover:to-fuchsia-300 hover:background-animate hover:bg-gradient-to-br text-white py-2 delay-500 transition-opacity`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                toggle ? "opacity-100" : "opacity-0"
              }  hover:text-transparent hover:bg-clip-text hover:from-blue-200 hover:to-fuchsia-300 hover:background-animate hover:bg-gradient-to-br text-white py-2 delay-500 transition-opacity`}
            >
              <Link href={"/lectures"}>Lectures</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                toggle ? "opacity-100" : "opacity-0"
              }  hover:text-transparent hover:bg-clip-text hover:from-blue-200 hover:to-fuchsia-300 hover:background-animate hover:bg-gradient-to-br text-white py-2 delay-500 transition-opacity`}
            >
              <Link href={"/panels"}>Panels</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                toggle ? "opacity-100" : "opacity-0"
              }  hover:text-transparent hover:bg-clip-text hover:from-blue-200 hover:to-fuchsia-300 hover:background-animate hover:bg-gradient-to-br text-white py-2 delay-500 transition-opacity`}
            >
              <Link href={"/apogee-innovation-challenge"}>AIC</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                toggle ? "opacity-100" : "opacity-0"
              }  hover:text-transparent hover:bg-clip-text hover:from-blue-200 hover:to-fuchsia-300 hover:background-animate hover:bg-gradient-to-br text-white py-2 delay-500 transition-opacity`}
            >
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
