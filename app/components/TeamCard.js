import React from "react";
import linked from "../../public/linkedin.svg";
import "./TeamCard.css";
import Image from "next/image";
function TeamCard({ imgsrc, posts, name, li, email, stu }) {
  return (
    // <div>
    //   <div className={`${classes.cardteam} ${stu ? "small" : ""}`}>
    //     <button className={classes.mail}>
    //       <a href={email}>
    //         <svg
    //           stroke-linejoin="round"
    //           stroke-linecap="round"
    //           stroke-width="2"
    //           stroke="currentColor"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           height="24"
    //           width="24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <rect rx="2" y="4" x="2" height="16" width="20"></rect>
    //           <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    //         </svg>
    //       </a>
    //     </button>
    //     <div className={`${classes.profile_pic} ${stu ? "smallpic" : ""} `}>
    //       <Image
    //         layout="fill"
    //         className={`${stu ? classes.studentimg : ""}`}
    //         src={imgsrc}
    //         alt="team member"
    //       />
    //     </div>
    //     <div className={classes.bottom}>
    //       <div
    //         className={`${classes.content} ${stu ? classes.smallcontent : ""}`}
    //       >
    //         <span className={`${classes.name} ${stu ? classes.stuname : ""}`}>
    //           {post}
    //         </span>
    //         <span
    //           className={`${classes.about_me} ${stu ? classes.stuabout : ""}`}
    //         >
    //           {name}
    //         </span>
    //       </div>
    //       <div className={classes.bottom_bottom}>
    //         <div className={classes.social_links_container}>
    //           <a href={li}>
    //             <Image src={linked} alt="link" />
    //           </a>
    //         </div>
    //         <button className={classes.button}>Contact links</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={`cardteam ${stu ? "small" : ""}`}>
      <button className="mail">
        <a href={email}>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect rx="2" y="4" x="2" height="16" width="20"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </button>
      <div className={`profile-pic ${stu ? "smallpic" : ""} `}>
        <Image
          fill={true}
          className={`${stu ? "studentimg" : ""}`}
          src={imgsrc}
          alt=""
        />
      </div>
      <div className="bottom">
        <div className={`content ${stu ? "smallcontent" : ""}`}>
          {posts.map((post) => (
            <div key={post}>
              <span className={`${stu ? "stuabout" : "about-me"}`}>{post}</span>
              <br />
            </div>
          ))}
          <span className={`${stu ? "stuname" : "name"}`}>{name}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <a href={li}>
              <Image alt="link" layout="" src={linked}></Image>
            </a>
          </div>
          <button className="button">Contact links</button>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
