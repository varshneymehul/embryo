import { FaLinkedin } from "react-icons/fa";
import "./LectureCard.css";
import Image from "next/image";

const LectureCard = ({ title, img, linkedin, description, name }) => {
  return (
    <div className="md:w-1/4 group rounded-lg p-4 m-2 bg-slate-800 backdrop-blur-lg shadow-3xl shadow-zinc-100">
      <div>
        <Image
          className="object-cover rounded-lg mx-auto h-[40vh]"
          src={img}
          alt="lecturer-image"
          width={300}
          height={300}
        />
        <h1 className="font-sans text-2xl py-4 font-sans_heading">{title}</h1>
      </div>

      <div className="hidden p-3 -ml-4 absolute z-50 h-auto w-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-xl group-hover:block  border-zinc-600 border-4">
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
