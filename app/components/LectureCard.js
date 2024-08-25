import { FaLinkedin } from "react-icons/fa";
import "./LectureCard.css";
import Image from "next/image";

const LectureCard = ({ title, img, linkedin, description, name }) => {
  return (
    <div className="md:w-1/4 group rounded-lg p-4 m-2 bg-slate-800 backdrop-blur-lg shadow-3xl shadow-zinc-100 transition-all">
      {/* hidden at first */}

      <div className="group-hover:flex group-hover:items-center group-hover:p-2">
        <Image
          className="object-cover aspect-square rounded-lg mx-auto md:h-[20vw] group-hover:w-2/4 group-hover:h-auto group-hover:mx-0 group-hover:rounded-full duration-300 transition-all"
          src={img}
          alt="lecturer-image"
          width={300}
          height={300}
        />
        <h1 className="font-sans group-hover:text-base group-hover:p-2 text-2xl py-4 font-sans_heading text-center">
          {title}
        </h1>
      </div>
      <div className="hidden p-3 h-full w-full group-hover:block">
        <div className="flex justify-between">
          <h2 className="font-serif text-xl uppercase">{name}</h2>
          <p className="text-sm text-gray-400">
            <a
              className="text-blue-500 text-2xl hover:text-blue-200 transition-all"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </p>
        </div>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default LectureCard;
