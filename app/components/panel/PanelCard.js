import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PanelCard = ({ src, title, description, link }) => {
  const [showPopout, setShowPopout] = useState(false);
  const [wasManuallyClosed, setWasManuallyClosed] = useState(false);

  const handleMouseEnter = () => {
    if (!wasManuallyClosed) setShowPopout(true);
  };

  const handleMouseLeave = () => {
    setShowPopout(false);
    setWasManuallyClosed(false);
  };

  const handleClick = () => {
    setShowPopout(false);
    setWasManuallyClosed(true);
    setTimeout(() => setWasManuallyClosed(false), 1000); // enable hover again
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative w-auto h-auto rounded-lg p-4 m-4 bg-stone-800 backdrop-blur-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 cursor-pointer"
    >
      {/* Base card image + title */}
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
      {showPopout && (
        <div
          className="absolute top-0 left-0 z-50 w-full h-full max-h-[32rem] bg-stone-900 text-white rounded-lg overflow-y-auto transition-all duration-500 ease-in-out
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <div className="relative w-full h-4/5 mb-2">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
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
      )}
    </div>
  );
};

export default PanelCard;
