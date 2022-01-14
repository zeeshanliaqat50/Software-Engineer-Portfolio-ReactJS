import React from "react";
import "./About.css";
import aboutImg from "./Images/aboutme.jpg";
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
              <p className="about__text p__color t1">
                I am a <b className="sweet "> "Professional Sofware Engineer, Tech Enthusiast, Programming Tutor, Sports Athelete, Traveller, occasionally photographer and Sustainable Development Goals (SDG) Positive Change Ambassador"</b> having more than 5 years
                of experience in the field of Software Engineering, striving to contribute for Sustainable Development goals through green and efficient software solutions.
                I believe that "Positive and Transformational Change" starts by beliving in the Power of One, so working in my own capacity, to develop 
                sustainable, efficient and quality software products.
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
