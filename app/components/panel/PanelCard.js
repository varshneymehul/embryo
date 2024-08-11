import Image from "next/image";
import Link from "next/link";
import React from "react";

const PanelCard = ({ src, title, description, link }) => {
  return (
    <div className="flex flex-col justify-between m-2 p-4 bg-stone-800 rounded-lg">
      <Image className="rounded-lg" src={src} alt={title} width={400} height={400} />
      <div className="py-2">
        <p className="text-lg md:text-2xl font-serif">{title}</p>
        <p className="text-sm md:text-xl">{description}</p>
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
