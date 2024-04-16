import { Parallax } from "react-scroll-parallax";
import { FaLinkedin } from "react-icons/fa";
import "./LectureCard.css";
import Image from "next/image";

const LectureCard = ({ title, img, linkedin, description, name }) => {
  return (
    <section className="prevmain mx-auto">
      <div className="box">
        <Parallax translateX={[-25, -10]}>
          <h2>{title}</h2>
        </Parallax>

        <div className="container">
          <div className="imgBx jarallax">
            <Image
              fill={true}
              alt="lecturer-img"
              className="jarallax-img"
              src={img}
            />
          </div>
          <Parallax translateY={[50, -100]}>
            <div className="content" data-jarallax-element="-200 0">
              <div className="card">
                <p className="card-title">{name}</p>
                <p className="card-des">{description}</p>
                <section>
                  <FaLinkedin className="linked-in" />
                </section>
                <p className="card-text">
                  <span>View More</span>
                  <svg
                    className="arrow-icon"
                    stroke="currentColor"
                    fillRule="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default LectureCard;
