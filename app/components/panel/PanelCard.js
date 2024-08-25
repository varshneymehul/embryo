import Image from "next/image";
import Link from "next/link";
import React from "react";

const PanelCard = ({ src, title, description, link }) => {
  return (
    <div className="flex md:w-1/3 flex-col items-center justify-stretch m-4 p-4 bg-stone-800 rounded-lg">
      <Image className="rounded-lg" src={src} alt={title} width={400} height={400} />
      <div className="py-2">
        <p className="text-xl font-bold md:text-3xl font-sans_heading">{title}</p>
        <p className="text-sm md:text-lg">{description}</p>
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-sm md:text-xl"
          href={link}
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default PanelCard;
