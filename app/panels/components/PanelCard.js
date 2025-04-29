import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./PanelCard.module.css";
const PanelCard = ({ src, title, description, link, speakers, date }) => {
  return (
    <div
      className={`${classes.card} flex flex-col md:flex-row md:w-full items-center justify-stretch md:m-4 p-4 rounded-lg`}
    >
      <div className="md:w-1/3">
        <Image
          className="rounded-lg"
          src={src}
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <div className="py-6 px-4 md:w-2/3">
        <p className="text-xl font-bold md:text-3xl font-sans_heading">
          {title}
        </p>
        <p className="text-sm md:text-lg py-4">{description}</p>
        <p className="text-sm md:text-lg py-2">{date}</p>
        Speakers:{" "}
        <div className="text-sm md:text-lg grid grid-cols-2 sm:grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="text-sm md:text-lg bg-slate-700 text-center rounded-lg p-4 m-2"
            >
              <Image
                src={speaker.imgSrc}
                alt={speaker.name}
                className="rounded-xl h-32 object-cover mx-auto my-4"
                width={120}
                height={120}
              />
              <Link href={speaker.linkedin} target="_blank" rel="noreferrer">
                {speaker.name}
              </Link>
              <p className="text-sm">{speaker.description}</p>
            </div>
          ))}
        </div>
        {link && (
          <p className="text-sm md:text-lg text-blue-400 hover:text-white transition-all">
            <Link href={link} alt={link}>
              Watch here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default PanelCard;
