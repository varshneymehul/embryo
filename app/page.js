"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/Hero";
import AboutUsCard from "./components/AboutUsCard";
import TeamCard from "./components/TeamCard";
import AicCard from "./components/AicCard";
import LectureCard from "./components/LectureCard";
import Button from "./components/Button";

import PanelCard from "./components/panel/PanelCard";
import PanelData from "./components/panel/ImageData/ImageData";

import LogoCarousel from "./components/LogoCarousel";
import partners from "./apogee-innovation-challenge/partner-data";
import teamdata from "../public/data/team-data";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between dark:text-white">
      <ParallaxProvider>
        <AdvancedBannerTop />
      </ParallaxProvider>

      {/* SORT */}
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

        <Button text={"Read More"} link={"/"} />
      </section>

      {/* SORT */}
      <section id="lectures">
        <h1 className="text-4xl text-center font-serif md:text-6xl">
          LECTURES
        </h1>

        <div className="md:flex gap-3 m-6 md:m-12">
          <LectureCard
            title="YIN AND YANG OF PRODUCT INNOVATION"
            img="http://embryo.bits-pilani.ac.in/img/lec/Piyush-Malik.jpg"
            name="Dr. Piyush Malik"
            linkedin="https://www.linkedin.com/in/"
            description="Piyush Malik is a trailblazing startup executive,entrepreneur, board advisor in the domain of emerging technologies. As Chief Data Officer, his expertise lies in leveraging data-driven innovations to craft immersive customer experiences and optimize operations."
          />
          <LectureCard
            title="HARNESSING GENAI & ML"
            img="http://embryo.bits-pilani.ac.in/img/lec/anupam_purwar.jpg"
            name="Anupam Purwar"
            linkedin="https://www.linkedin.com/in/"
            description="Anupam is a BITS alumnus with an MBA from ISB. He is a senior research scientist at Amazon Development Center (India). With an expertise in ML, IoT and computational design, he has more than 20 peer reviewed articles with over 200 citations. For more information, visit Anupam's Profile"
          />
          <LectureCard
            title="MYTH TO MATH"
            img="http://embryo.bits-pilani.ac.in/img/lec/AditiDe.jpg"
            name="DR. ADITI SEN DE"
            linkedin="https://www.linkedin.com/in/"
            description="Prof Aditi Sen De is known for her research on quantum information and computation, quantum communication including quantum cryptography, quantum optics and many-body physics. She is the first female physicist to be awarded the Shanti Swarup Bhatnagar Prize for Science and Technology for her contributions to physical sciences in 2018."
          />
          <LectureCard
            title="AMA ON INVESTMENT BANKING"
            img="http://embryo.bits-pilani.ac.in/img/lec/alokmisra.jpeg"
            name="ALOK MISRA"
            linkedin="https://www.linkedin.com/in/"
            description="Alok Misra is the COO and Operating Partner of General Atlantic, the world's 9th biggest private equity firm. He was Group Chief Financial Officer of MphasiS BFL Group (now part of the Hewlett-Packard Company) and served in a number of accounting and finance roles at other firms, including I.T.C. Limited and PwC. He is a Fellow Member of the Institute of Chartered Accountants of India."
          />
        </div>

        <Button text={"View All"} link={"/lectures"} />
      </section>

      <section id="panel" className="my-16">
        <div className="md:flex gap-2">
          {PanelData.map((data) => (
            <PanelCard key={data.title} {...data} />
          ))}
        </div>
        <Button text="View More" link="/panels" />
      </section>

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

      <section id="team" className="my-12 mx-4 md:m-16">
        <h1 className="text-4xl text-center font-serif md:text-6xl">TEAM</h1>

        <div className="flex justify-center m-4 md:m-12">
          <TeamCard
            imgsrc="http://embryo.bits-pilani.ac.in/img/team/prof.jpeg"
            name="DR. RISHIKESH VAIDYA"
            posts={["Teacher-In-Charge"]}
            li="https://www.linkedin.com/in/rishikesh-vaidya-8a61344a/"
            email="mailto:rishikesh@pilani.bits-pilani.ac.in"
          />
        </div>

        <div className="grid w-screen grid-cols-2 md:grid-cols-4 md:gap-4">
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
                href="mailto:f20220919@pilani.bits-pilani.ac.in"
              >
                f20220919@pilani.bits-pilani.ac.in
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[20%_80%] h-16 mx-auto items-center justify-center">
            <div className="justify-center flex">
              <IoIosCall className="text-3xl m-4" />
            </div>
            <div>
              <a className="text-sm md:text-xl" href="tel:+917696024085">
                +91 7696024085
              </a>
            </div>
          </div>
        </div>

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
