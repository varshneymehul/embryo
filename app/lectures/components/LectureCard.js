import Image from "next/image";

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
    <div className="flex flex-col items-center w-full rounded-lg p-12 bg-white bg-opacity-20 backdrop-blur-lg shadow-3xl shadow-zinc-100">
      <Image src={imgSrc} alt="lecturer-image" layout="fill" />
      <h1 className="font-sans text-2xl text-black">{title}</h1>
      <h2 className="font-serif text-lg uppercase">{name}</h2>
      <p className="text-sm">{description}</p>
      <p>{date}</p>
      <a href={linkedin} target="_blank" rel="noreferrer">
        {name} on LinkedIn
      </a>
    </div>
  );
};

export default LectureCard;
