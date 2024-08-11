import AboutUsCard from "./components/AboutUsCard";
const About = () => {
  return (
    <main className="mx-12 pb-4 md:mx-16 items-center justify-between dark:text-white">
      <h1 className="text-4xl md:text-7xl p-12 text-center font-serif">
        ABOUT
      </h1>
      <p className="dark:text-white  my-4 text-xs md:text-lg text-justify">
        Embryo is a forum for on-line, live and interactive lectures, run by
        students and faculties of BITS-Pilani. It was conceived and initiated by
        a group of 6 BITS Pilani Alumni in the Silicon Valley in 2006 with an
        aim to transform classroom education. Since February, 2006, more than
        200 lectures have been successfully conducted in areas as wide ranging
        as Entrepreneurship, Black Holes, Solar Cells, Science of Smell,
        Naxalism, Rain water harvesting,Storage Networks, PSOCs, Process
        Control. In August 2010, Embryo 2.0 was launched. Since then we have
        conducted a series of lectures. The lecturer works closely with the
        course faculty and in a few cases, the lecture content is subject to
        evaluative components. The knowledge of the alumni has thus become an
        integral part of the BITS curriculum.
      </p>
      <AboutUsCard
        title={"VISION"}
        content={"Enrich the learning experience at BITS Pilani."}
      />
      <AboutUsCard
        title={"MISSION"}
        content={
          "To make the academic and industrial experience of the BITS alumni accessible to on-campus students through lectures, collaborative research projects, and exposure to current research trends around the world."
        }
      />
      <AboutUsCard
        title={"WHY EMBRYO?"}
        content={
          "Although there is no alternative to 'in person' classroom teaching, any University in the world is limited by its on-campus human resources and available expertise. Often, a lecture or two in the right area by the right person can change the course of one's career. Embryo proposes to free education from the barriers of distance, time and human resources. Leveraging web-based technologies, Embryo acts as a bridge between the knowledge seekers (students), and the potential speakers. Such a powerful method truly realizes the dream of border less classrooms and bottomless learning resources."
        }
      />

      <AboutUsCard
        title={"AVAILABLE INFRASTRUCTURE"}
        content={
          "With the advent of BITS Connect2.0 , we now have state of the art telepresence solutions across all campuses thus making the experience even richer."
        }
      />
      <AboutUsCard
        title={"ABOUT BITS PILANI"}
        content={
          "Birla Institute of Technology and Science (BITS), Pilani is a Leading University in India offering degrees in Engineering, Management, Pharmacy, Sciences, Engineering Technology, Information Systems, General Studies, Finance etc presently at Pilani, Dubai, Goa and Hyderabad campuses. BITS Pilani also offers an array of work integrated learning programmes for HRD of a vast spectrum of Indian corporates."
        }
      />
      <AboutUsCard
        title={"ABOUT BITSAA"}
        content={
          "BITSAA International Inc. is a not-for-profit organization. The primary purpose of BITSAA International is to engage in charitable and educational activities by raising funds for setting up endowments, creating scholarships, rewarding teaching and research and generally promoting the development of resources at Birla Institute of Technology & Science at Pilani. BITSAA International also aims to strengthen the ties, friendship and communications amongst former students, current students, faculty and friends of the Institute. BITSAA International provides a number of channels for people to stay connected with each other and the Birla Institute of Technology & Science."
        }
      />
    </main>
  );
};

export default About;
