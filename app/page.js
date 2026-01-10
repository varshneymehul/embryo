"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/Hero";
import AboutUsCard from "./components/AboutUsCard";
import TeamCard from "./components/TeamCard";
import AicCard from "./components/AicCard";
import LectureCard from "./components/LectureCard";
import Button from "./components/Button";

import VaidyaSir from "../public/img/team/vaidya_sir.jpeg";

import PanelCard from "./components/panel/PanelCard";
import PanelData from "./components/panel/ImageData/ImageData";

import LogoCarousel from "./components/LogoCarousel";

import partners from "./apogee-innovation-challenge/partner-data";
import teamdata from "../public/data/team-data-23";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import lecturesData from "./lectures/lecture-data";
import { IoIosCall, IoMdMail } from "react-icons/io";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden dark:text-white">
      <ParallaxProvider>
        <AdvancedBannerTop />
      </ParallaxProvider>

      {/* about us */}
      <section id="about-us" className="backdrop-2 m-16">
        <h1 className="text-4xl text-center font-serif md:text-6xl">
          ABOUT US
        </h1>
        <p className="text-md text-center font-sans md:text-lg py-6">
          Embryo, founded in 2006 by 6 BITS Pilani alumni in Silicon Valley,
          offers live interactive lectures to innovate education. Over 200
          sessions have explored diverse topics. Embryo 2.0, launched in 2010,
          enhances BITS curriculum by integrating alumni expertise. Lecturers
          collaborate with faculty, sometimes with evaluative components. Alumni
          contributions have become integral to BITS Pilani&apos;s educational
          framework through Embryo.
        </p>
        <div className="md:flex md:justify-around">
          <AboutUsCard
            title="Vision"
            content="Enriching the learning experience at BITS Pilani involves fostering academic excellence through updated curricula and promoting innovative teaching methods to engage students actively in their education journey."
          />
          <AboutUsCard
            title="Mission"
            content="To make the academic and industrial experience of the BITS alumni accessible to on-campus students through lectures, collaborative research projects, and exposure to current research trends around the world."
          />
          <AboutUsCard
            title="Why Embryo?"
            content="Embryo aims to transcend limitations of on-campus resources by providing online lectures from expert speakers worldwide. It bridges the gap between knowledge seekers and potential speakers, offering borderless classrooms."
          />
        </div>

        <Button text={"Read More"} link={"/about"} />
      </section>
      {/* lectures */}
      <section id="lectures">
        <h1 className="text-4xl text-center font-serif md:text-6xl">
          LECTURES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 m-6 md:m-12">
          {lecturesData.slice(0, 4).map((lecture, idx) => (
            <LectureCard
              key={idx}
              title={lecture.title}
              img={lecture.imgSrc}
              name={lecture.name}
              linkedin={lecture.linkedin}
              description={lecture.description}
            />
          ))}
        </div>

        <Button text={"View All"} link={"/lectures"} />
      </section>
      {/* panels */}
      <section id="panel" className="my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {PanelData.map((data) => (
            <PanelCard key={data.title} {...data} />
          ))}
        </div>
        <Button text="View More" link="/panels" />
      </section>
      {/* aic */}
      <section id="aic">
        <h1 className="text-4xl mx-16 mt-24 mb-4 text-center font-serif md:text-6xl">
          APOGEE INNOVATION CHALLENGE
        </h1>
        <p className="text-md text-center font-sans md:text-lg py-6 mx-4 md:mx-24">
          APOGEE, the ISO 9001:2008 certified technical fest of BITS, Pilani is
          a large scale event that has attracted connoisseurs of engineering and
          technology over the years. It represents the zenith of science and
          engineering in a landscape of future visionaries and scientists.
        </p>

        <div className="w-screen flex flex-col md:flex-row justify-center md:justify-evenly p-12">
          <AicCard
            heading={"What is AIC?"}
            content={[
              "Problem statement released by companies",
              "Students form teams of 1 to 3 members",
              "Teams select problem statements and start working on it. They have to submit the solution before the specified deadline.",
              "Judges from companies select top 5 teams",
              "Winners are usually rewarded in terms of cash prizes, internships or goodies",
            ]}
          />
          <AicCard
            heading={"Why participate?"}
            content={[
              "By associating with APOGEE Innovation Challenge, the company becomes an event partner of APOGEE and would be publicised on the APOGEE website and Facebook page.",
              "The company can use the ingenuity of some of the brightest young minds of the country to get a pool of innovative approaches for solving a particular problem",
              "Being one of the major events of apogee and a unique concept, this event would get wide media coverages from leading media sources in India.",
            ]}
          />
        </div>
        <h2 className="text-2xl uppercase mx-16 mt-24 mb-4 text-center font-serif md:text-4xl">
          Our Previous Partners
        </h2>
        <LogoCarousel images={partners} speed={20000} />
        <Button text={"Read More"} link={"/apogee-innovation-challenge"} />
      </section>
      {/* team */}
      <section id="team" className="my-12 md:m-16">
        <h1 className="text-4xl text-center font-serif md:text-6xl">TEAM</h1>

        <div className="flex justify-center m-4 md:m-12">
          <TeamCard
            imgsrc={VaidyaSir}
            name="DR. RISHIKESH VAIDYA"
            posts={["Faculty-in-Charge"]}
            linkedin="https://www.linkedin.com/in/rishikesh-vaidya-8a61344a/"
            email="mailto:rishikesh@pilani.bits-pilani.ac.in"
          />
        </div>

        <div className="md:grid px-4 md:px-8 w-screen md:grid-cols-2 lg:grid-cols-5">
          {teamdata.map((data) => (
            <TeamCard
              key={data.name}
              imgsrc={data.imgsrc}
              name={data.name}
              posts={data.posts}
              linkedin={data.linkedin}
              email={data.email}
            />
          ))}
        </div>
      </section>
      {/* Contact us */}
      <section id="contact" className="md:w-1/2 m-6 md:m-12">
        <h1 className="text-4xl text-center font-serif md:text-6xl">
          CONTACT US
        </h1>

        <div className="m-8 md:m-16">
          <div className="grid grid-cols-[20%_80%] h-16 mx-auto items-center justify-center">
            <div className="justify-center flex">
              <FaMapMarkerAlt className="text-3xl m-4" />
            </div>
            <div>
              <p className="text-sm md:text-xl">
                BITS Pilani, Pilani, Rajasthan - 333031
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[20%_80%] h-16 mx-auto items-center justify-center">
            <div className="justify-center flex">
              <IoMdMail className="text-3xl m-4" />
            </div>
            <div>
              <a
                className="text-sm md:text-xl"
                href="mailto:f20230335@pilani.bits-pilani.ac.in"
              >
                f20230335@pilani.bits-pilani.ac.in
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[20%_80%] h-16 mx-auto items-center justify-center">
            <div className="justify-center flex">
              <IoIosCall className="text-3xl m-4" />
            </div>
            <div>
              <a className="text-sm md:text-xl" href="tel:+918840101447">
                +91 8840101447
              </a>
            </div>
          </div>
        </div>

        {/* embryo links */}
        <div className="mx-auto flex text-xl md:text-3xl justify-center gap-5">
          <a
            href="https://www.facebook.com/EmbryoClub/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="cursor-pointer  transition-all  hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/bitsembryo/?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram className="cursor-pointer  transition-all  hover:text-pink-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/embryo-bits/mycompany/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer  transition-all  hover:text-blue-800" />
          </a>
        </div>
      </section>
    </main>
  );
}
