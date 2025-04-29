import Image from "next/image";
import Link from "next/link";
import React from "react";

const PanelCard = ({ src, title, description, link }) => {
  return (
    <div className="group relative w-auto h-auto rounded-lg p-4 m-4 bg-stone-800 backdrop-blur-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 ">
      {/* Card image and title */}
      <div className="flex flex-col items-center transition-all duration-500 ease-in-out">
        <Image
          className="object-cover aspect-square rounded-lg w-full h-auto transition-all duration-500 ease-in-out"
          src={src}
          alt={title}
          width={400}
          height={400}
        />
        <p className="text-xl md:text-2xl font-bold font-sans_heading text-center pt-4">
          {title}
        </p>
      </div>

      {/* Popout overlay */}
      <div
        className="absolute top-0 left-0 z-50 w-full min-h-[30rem] max-h-[32rem] scale-0 group-hover:scale-100 group-hover:opacity-100 opacity-0 transform transition-all duration-500 ease-in-out bg-stone-900 text-white rounded-lg overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <div className="relative w-full h-1/2 mb-2">
          <Image src={src} alt={title} className="object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-stone-900 to-transparent rounded-b-lg" />
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold pb-1">{title}</p>
          <p className="text-sm pb-2">{description}</p>
          <Link
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-200 underline text-sm"
            href={link}
          >
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PanelCard;
