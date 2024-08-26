import React from "react";
import partnerData from "./partner-data";
import Image from "next/image";
const ApogeeInnovationChallenge = () => {
  return (
    <main className="flex flex-col py-4 px-8 md:px-12 items-center justify-between dark:text-white">
      <h1 className="text-4xl md:text-7xl md:p-12 text-center uppercase font-serif z-40">
        APOGEE Innovation Challenge
      </h1>

      <section className="md:px-28">
        <h1 className="text-2xl md:text-4xl font-sans_heading py-4">
          What is APOGEE Innovation Challenge?
        </h1>
        <p className="text-md py-4 text-justify md:text-lg w-5/6 z-40">
          The Apogee Innovation Challenge (AIC) is a kernel event of Apogee,
          BITS Pilani&apos;s annual technical festival, offering a platform for
          students nationwide to tackle real-world problems posed by companies.
          Students form teams of 1-3 members, develop solutions to these
          industry challenges, and submit them for evaluation by company judges.
          <br />
        </p>
        <ul className="list-disc">
          <li>
            The best solutions are rewarded with cash prizes, internships, or
            other goodies.
          </li>
          <li>
            Over the years, AIC has attracted participation from leading
            companies across various sectors, providing students with exposure
            to real-world industry challenges and expectations.
          </li>
        </ul>

        <h1 className="text-2xl md:text-4xl font-sans_heading py-4">
          Why should you participate?
        </h1>
        <p className="text-md py-4 text-justify md:text-lg w-5/6 z-40">
          AIC benefits companies by offering them innovative solutions from some
          of the brightest young minds in the country and providing valuable
          publicity as event partners.
        </p>
        <ul className="list-disc">
          <li>
            For students, participating in AIC offers hands-on experience,
            career preparation, and valuable networking opportunities.
          </li>
          <li>
            It also opens doors to potential internships with leading companies,
            enhancing their resumes and job readiness.
          </li>
          <li>
            The challenge not only rewards students with cash prizes but also
            helps them build confidence and develop critical problem-solving
            skills, making it a transformative experience.
          </li>
        </ul>
        <h1 className="text-2xl md:text-4xl font-sans_heading py-4">
          Our Partners
        </h1>
      </section>
      <section className="m-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 ">
        {partnerData.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center justify-between p-4 rounded-2xl shadow-md shadow-gray-800"
          >
            <Image
              src={partner.logoSrc}
              alt={partner.name}
              width={150}
              height={150}
              className="object-contain my-auto"
            />
            <p className="text-center py-2">{partner.name}</p>
          </div>
        ))}
        <p className="text-right mt-auto mr-auto">and many more...</p>
      </section>
    </main>
  );
};

export default ApogeeInnovationChallenge;
