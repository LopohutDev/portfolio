import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import photo from "../images/Louie.png";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-200 lg:h-screen">
      <Zoom>
        <h1 className="mt-20 mb-16 text-5xl font-bold lg:text-7xl">
          About Me.
        </h1>
      </Zoom>
      <div className="block max-w-6xl mb-5 lg:hidden">
        <Fade>
          <div className="w-64 h-64 rounded-2xl">
            <img src={photo} alt="louie" />
          </div>
        </Fade>
      </div>
      <div className="flex max-w-6xl">
        <div className="p-5 mx-6 mb-20 bg-white rounded-lg shadow-lg lg:w-2/3">
          <h1 className="mb-2 text-xl font-semibold animate-pulse">
            Hello! I am
          </h1>
          <h2 className="text-4xl font-semibold">Louie Jay Q. Sarraga.</h2>
          <hr className="h-1 mx-5 my-3 border-red-600" />
          <p className="text-lg font-medium">
            I am a freelance junior front end web developer, skillful in using
            HTML, tailwindcss, React Js and React Router. I am also skillful in
            using Git Bash Terminal and I also know Agile and Waterfall
            development cycle. I was taught by ALTEV Global Solutions. It is a
            bootcamp that focuses on giving their student the best practice in
            developing a website and they also teaches in-depth React Lessons.
          </p>
          <div className="flex">
            <Fade left>
              <button className="w-32 h-10 mx-2 mt-5 font-semibold border-2 border-black rounded-xl btn3">
                <Link to="/work">Projects</Link>
              </button>
            </Fade>
            <Fade right>
              <button className="w-32 h-10 mx-2 mt-5 font-semibold border-2 border-black rounded-xl btn3">
                <Link to="/contact">Contact Me</Link>
              </button>
            </Fade>
          </div>
        </div>
        <Fade>
          <div className="hidden w-1/4 h-full mx-6 mt-10 mb-20 lg:block">
            <img src={photo} alt="louie" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
