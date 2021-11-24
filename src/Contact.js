import React from 'react'
import './Contact.css'
import contactImg from "./Images/contact1.jpg";
function Contact() {
    return (
       /* <div className="contact component__space">
            <div className="container">
           <div className="row">
          <div className="col__2">
          <div className="contact_box">
          <div className="contact_meta">
            <h1 className="hire__text">
            <h1 className="about__heading">About Me</h1>
            </h1>
            </div>
          </div>
          </div>
          <div className="col__2">
            <img src={aboutImg} className="about__img"></img>
          </div>
          </div>
          </div>
        </div>*/
        <div className="about component__space">
      <div className="container">
        <div className="row">
         
          <div className="col__2">
            <h1 className="about__heading">Contact Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://www.linkedin.com/in/zeeshan-liaqat-a5905b143/" target="_blank">
                  <button className="about btn pointer">LinkedIn Profile</button>
                </a>
                <a href="https://github.com/zeeshanliaqat50">
                  <button className="about btn pointer" target="_blank">Github Profile</button>
                </a>
                <a href="mailto:zeeshanliaqat90@gmail.com">
                  <button className="about btn pointer" target="_blank">Email me</button>
                </a>
                
              </div>
            </div>
            
          </div>
          <div className="col__2">
            <img src={contactImg} className="about__img"></img>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact
