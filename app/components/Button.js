import Link from "next/link";
import React from "react";

const Button = ({ text, link }) => {
  return (
    <div className="w-fit ml-auto px-4">
      <Link href={link}>
        <span className="relative z-10 block px-3 md:px-5 py-2 md:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-3 md:px-5 py-2 md:py-3 rounded-lg bg-gray-50"></span>
          <span className="relative text-sm md:text-md uppercase">{text}</span>
        </span>
       
      </Link>
    </div>
  );
};

export default Button;
