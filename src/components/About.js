import React from "react";
import aboutImage from "../images/about.jpg"
import SkillBar from "react-skillbars";
import "./About.css";
import $ from "jquery";

const skills = [
  { type: "C++", level: 90 },
  { type: "JavaScript", level: 80 },
  { type: "React", level: 70 },
  { type: "Nodejs", level: 80 },
  { type: "MongoDb", level: 75 },
  { type: "HTML", level: 90 },
  { type: "CSS", level: 85 },
];
const color = {
  bar: "#1ea0d4",
  title: {
    text: "#111",
    background: "#1389b4",
    fontSize: "18px",
  },
};
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $(".up_to_top_btn").addClass("activebtn");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".up_to_top_btn").removeClass("activebtn");
    }
  });
});
function About() {
  const resumeFilePath= "https://drive.google.com/file/d/1z37_BsZJZ2drx8NGc03YWm7--IEQh74m/view?usp=sharing"
  return (
    <div className="about  component__space" id="ABOUT">
      <div className="container about_cont">
        <div className="col1">
          <div className="row1">
            <div className="image__">
              <img src={aboutImage} alt="" className="about__img" />
            </div>
            <div className="about__data">
              <p>
              <strong>Name:</strong>Shubham Kumar Singh
                         </p>
              <p>
                <strong>Profile:</strong> Student, Web Developer
              </p>
              <p>
                <strong>Email:</strong> shubhamsingh05116@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +917814039240
              </p>
              <p>
              <a href={resumeFilePath} download="Resume.pdf">
                <button>Resume</button>
              </a>  
              </p>

            </div>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="bars">
              <SkillBar
                skills={skills}
                animationDelay={300}
                animationDuration={2000}
                offset={`25px`}
                animationThreshold={0.8}
                height={25}
                colors={color}
              />
            </div>
          </div>
        </div>
        <div className="col2">
          <h2>About me</h2>
          <div className="me_cont">
            <p>
              I’m Shubham Kumar Singh; I'm a Student and Web Developer. I'm
              currently in Final Year B.Tech in CSE from Chandigarh Group of Colleges ,Punjab.
            </p>
            <p>
              I have experience in HTML, CSS, JavaScript, React.js and
              open-source framework Nodejs. In addition to my development work,
              I also have interest in regularly solving Data Structure And
              Algorithms Problems.
            </p>
            <p>
              I am looking for opportunities learning new things and getting
              involved with new projects.
            </p>
          </div>
        </div>
      </div>
      <div id="PROJECTS"></div>
      {/*UP TO TOP*/}
      <div className="up_to_top_btn">
        <a href="#">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
