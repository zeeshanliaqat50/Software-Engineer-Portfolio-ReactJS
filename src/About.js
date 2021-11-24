import React from "react";
import "./About.css";
import aboutImg from "./Images/about.JPG";
function About() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} className="about__img"></img>
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a professional software developer having more than 5 years
                of experience in the field of software development and testing.
                I can develop and build all kinds of Java/Python/C#/Web
                development projects. I provide online tutoring and assistance
                services to students and new programming learners from all over
                the world and provide tutoring services in the following areas :
                PYTHON PYTHON-DJANGO DEV JAVA JAVASCRIPT / REACT.JS JAVA-JDBC
                SELENIUM WITH JAVA/PYTHON OpenCV/TESSERACT ALGORITHM DESIGN AND
                ANALYSIS HTML/CSS JQUERY ASP.NET C# I conduct online lessons by
                providing helping and practice material. The primary focus will
                be on the practical implementation of theoretical concepts to
                improve the programming skills of students by hands-on practice.
                I would help you to improve your : -Programming skills -Logical
                thinking skills -Problem-solving skills -Analytical skills
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="">
                  <button className="about btn pointer">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
