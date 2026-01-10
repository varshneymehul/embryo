import React from "react";

import "./TeamCard.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function TeamCard({ imgsrc, posts, name, linkedin, email }) {
  return (
    <div className="bg-slate-800 shadow-sm shadow-zinc-200 p-2 rounded-md h-full">
      <div className="grid md:p-4 grid-cols-[40%_60%] md:flex md:flex-col h-auto mx-auto items-center justify-center">
        <div className="justify-center flex">
          <Image
            className="object-cover rounded-l-md md:rounded-md h-48 md:h-64 "
            src={ imgsrc }
            alt={ name }
            width={ 200 }
            height={ 200 }
          />
        </div>
        <div className="py-4 w-full flex flex-col text-center">
          <h1 className="text-2xl font-serif">{ name }</h1>

          { posts.map((post) => (
            <p key={ post } className="text-sm">
              { post }
            </p>
          )) }

          <div className="flex justify-center">
            <a href={ linkedin } target="_blank" rel="noreferrer">
              <FaLinkedin className="text-3xl m-4 transition-all hover:text-blue-600" />
            </a>
            <a href={ email }>
              <IoMdMail className="text-3xl m-4 hover:text-red-600 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
