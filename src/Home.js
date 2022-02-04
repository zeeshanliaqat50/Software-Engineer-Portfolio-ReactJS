import React from "react";
import "./Home.css";
import logo from "./Images/logo.png";
function Home() {
  document.title="Zeeshan Liaqat";
  return (
    <div className="home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        {/*  Home content  */}
        <div className="container">
        <div className="home__content">
        <div className="home__meta">
            <h1 className="home__text pz__10">
                Hello Folks!
            </h1>
            <h2 className="home__text pz__10">
                I'm Zeeshan Liaqat
            </h2> 
            <h3 className="home__text sweet pz__10">
             Software Engineer,
            </h3>
            <h4 className="home__text sweet pz__10">
           SDG Positive Change Ambassador,
            </h4>
            <h4 className="home__text pz__10">
             Programming & Tech Mentor
            </h4>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
