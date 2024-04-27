import Link from "next/link";
import React from "react";

const Sidebar = ({ toggle, handleClick }) => {
  return (
    <div
      className={`h-screen p-24 top-0 bg-black bg-opacity-85 backdrop-blur-2xl delay-75 transform transition-all duration-300 ease-in-out fixed w-screen ${
        toggle ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="hidden md:block"></div>
      <div>
        <ul className="list-none text-4xl md:text-7xl">
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
  );
};

export default Sidebar;
