import React from "react";

import "./TeamCard.css";
import Image from "next/image";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
function TeamCard({ imgsrc, posts, name, linkedin, email }) {
  return (
    <div className="bg-white mx-4 bg-opacity-20 backdrop-blur-lg shadow-3xl shadow-zinc-100 rounded-md">
      <div className="m-4 md:m-6">
        <div className="grid grid-cols-[40%_60%] md:flex md:flex-col h-auto mx-auto items-center justify-center">
          <div className="justify-center flex">
            <Image
              className="object-cover rounded-md h-48 md:h-72 "
              src={imgsrc}
              alt={name}
              width={200}
              height={200}
            />
          </div>
          <div className="py-4 w-full flex flex-col text-center">
            <h1 className="text-2xl font-serif">{name}</h1>

            {posts.map((post) => (
              <p key={post} className="text-sm">
                {post}
              </p>
            ))}

            <div className="flex justify-between">
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl m-4 transition-all hover:text-blue-600" />
              </a>
              <a href="mailto:f20220919@pilani.bits-pilani.ac.in">
                <FaMailBulk className="text-3xl m-4 hover:text-red-600 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
