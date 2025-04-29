import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const LectureCard = ({ title, img, linkedin, description, name }) => {
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
    setTimeout(() => setWasManuallyClosed(false), 1000); // re-enable hover after short delay
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative rounded-lg p-4 m-2 bg-slate-800 backdrop-blur-lg shadow-3xl shadow-zinc-100 transform transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 cursor-pointer"
    >
      {/* Card image and title */}
      <div className="flex flex-col items-center">
        <Image
          className="object-cover aspect-square rounded-lg w-full h-auto max-h-64"
          src={img}
          alt="lecturer-image"
          width={300}
          height={300}
        />
        <h1 className="text-2xl py-4 font-sans_heading text-center">{title}</h1>
      </div>

      {/* Popout */}
      {showPopout && (
        <div className="absolute top-0 left-0 z-50 w-full h-full bg-slate-900 text-white rounded-lg overflow-y-auto max-h-[90vh] transition-all duration-1000 ease-in-out">
          <div className="relative w-full h-1/2 mb-2">
            <Image
              src={img}
              alt="lecturer-image"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900 to-transparent rounded-b-lg" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-serif text-xl uppercase">{name}</h2>
              <a
                className="text-blue-500 text-2xl hover:text-blue-200"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureCard;
