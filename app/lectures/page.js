import LectureCard from "./components/LectureCard";
import lecturesData from "./lecture-data";
export default function Lectures() {
  return (
    <main className="flex flex-col px-4 md:px-16 items-center justify-between dark:text-white lecturesBg">
      <h1 className="text-4xl md:text-7xl p-12 text-center font-serif z-40">
        LECTURES
      </h1>
      <p className="text-md py-4 text-justify md:text-lg w-5/6 z-40">
        BITS Embryo offers a wide range of talks covering diverse topics
        presented by experts in their respective fields. These talks encompass
        various aspects of technology, business, entrepreneurship, public
        policy, and geopolitics. The platform provides insights into data
        science, AI, quantum computing, investment banking, marketing
        strategies, entrepreneurship, global business, and foreign policy. By
        featuring speakers with expertise in these different domains, Embryo
        ensures a comprehensive learning experience for its participants,
        fostering a holistic understanding of contemporary issues and
        developments.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12  md:m-12">
        {lecturesData.map((lecture) => (
          <LectureCard key={lecture.name} {...lecture} />
        ))}
      </div>
    </main>
  );
}
