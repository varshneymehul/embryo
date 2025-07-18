import Image from "next/image";
import Link from "next/link";

const LectureCard = ({
  title,
  name,
  description,
  imgSrc,
  date,
  linkedin,
  recordingUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full rounded-lg p-6 md:p-0 bg-zinc-800 backdrop-blur-lg shadow-3xl shadow-zinc-100 hover:ring-2 hover:ring-stone-100 transition-all">
      <div className="end-0">
        <Image
          className="object-cover w-full aspect-square p-2 m-2 h-60 md:h-auto md:w-48 rounded-full"
          src={imgSrc}
          alt="lecturer-image"
          height={3000}
          width={3000}
        />
      </div>
      <div className="min-h-fit px-2 py-6 md:w-3/4">
        <h1 className="font-sans text-2xl font-sans_heading">{title}</h1>
        <h2 className="font-serif text-xl uppercase">{name}</h2>
        <p className="text-md">{description}</p>
        <p className="text-sm text-gray-400">{date}</p>
        <a
          className="text-green-200 hover:text-blue-200 transition-all"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {name} on LinkedIn
        </a>
        {recordingUrl && (
          <p className="text-blue-500 hover:text-white transition-all">
            <Link href={recordingUrl}></Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LectureCard;
