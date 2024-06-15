import React from "react";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div id="home" className="home">
      <div className="home-img-div flex justify-center pt-20 md:pt-16 lg:pt-16 xl:pt-20 2xl:pt-24">
        <img className="homeImg" src="/Mom's wedding pic.jpg" />
      </div>
      <div className="icons-div">
        <ul className="icon-list flex justify-center">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img className="icons" src="jsIcon.png" alt="JavaScript" />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
              <img className="icons" src="reacticon.png" alt="React" />
            </a>
          </li>
          <li>
            <a href="https://react-bootstrap.netlify.app/">
              <img
                className="icons"
                src="bootstrapicon.png"
                alt="React-Bootstrap"
              />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <img className="icons" src="htmlicon.png" alt="HTML" />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img className="icons" src="cssicon.png" alt="CSS" />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL">
              <img className="icons" src="sqlicon.png" alt="SQL" />
            </a>
          </li>
          <li>
            <a href="https://www.postgresql.org/docs/current/index.html">
              <img
                className="icons"
                src="postgresqlicon.png"
                alt="PostgreSQL"
              />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">
              <img className="icons" src="nodeicon.svg" alt="Node" />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">
              <img className="icons" src="expressicon.png" alt="Express" />
            </a>
          </li>
        </ul>
        <div className="home-description flex justify-center relative bottom-80 xl:bottom-72 2xl:bottom-48 text-center md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
          <p>My name is Matthew and I am a Software Developer</p>
        </div>
      </div>
      <About />
      <Projects />
    </div>
  );
}
