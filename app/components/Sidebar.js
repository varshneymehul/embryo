import Link from "next/link";
import React from "react";
import bgGradient from "../../public/img/bg-gradient.jpg";
import Image from "next/image";
const Sidebar = ({ toggle, handleClick }) => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Lectures",
      link: "/lectures",
    },
    {
      name: "Panels",
      link: "/panels",
    },
    {
      name: "AIC",
      link: "/apogee-innovation-challenge",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div
      className={`h-screen top-0 opacity-100 backdrop-blur-3xl delay-75 transform transition-all duration-300 ease-in-out fixed w-screen ${
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
          <ul className="list-none text-xl md:text-3xl">
            {links.map((link) => (
              <li
                key={link.name}
                onClick={handleClick}
                className={`${
                  toggle ? "opacity-100" : "opacity-0"
                }  hover:text-transparent hover:bg-clip-text hover:from-blue-200 hover:to-fuchsia-300 hover:background-animate hover:bg-gradient-to-br uppercase font-serif text-white py-2 delay-500 transition-opacity`}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
