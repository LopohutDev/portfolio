import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/custom.css";
import Logo from "../../images/Logo.png";
// import Expand from "../../images/expand-button.png";
// import { RiHeavyShowersFill } from "react-icons/ri";

function Navbar() {
  const [click, setClick] = useState(false);
  const clickStyle = (click) => {
    let clicked = click ? "flex" : "hidden";
    console.log(clicked);
    return (
      clicked +
      " flex-col items-center justify-end w-full h-32 p-2 text-white bg-black"
    );
  };
  return (
    <div>
      <div className="fixed z-20 w-full h-16 bg-black">
        <nav className="flex items-center justify-between w-full h-16 bg-black ">
          <Link to="/" className="mx-2 lg:mx-6">
            <div className="">
              <img src={Logo} alt="none" className="w-24 lg:w-48 opacity-90" />
            </div>
          </Link>
          <div
            className="block w-6 h-6 mx-5 lg:hidden"
            onClick={() => setClick(!click)}
          >
            <svg
              className="w-full h-full text-white fill-current"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="306px"
              height="306px"
              viewBox="0 0 306 306"
            >
              <g>
                <g id="expand-more">
                  <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35 		" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <div className="hidden mx-8 lg:mx-20 lg:block">
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
            <Link to="/about">
              <button className="btn">About</button>
            </Link>
            <Link to="/work">
              <button className="btn">Work</button>
            </Link>
            <Link to="/contact">
              <button className="btn">Contact</button>
            </Link>
          </div>
        </nav>
        <div className={clickStyle(click)}>
          <button
            className="w-full h-10 my-2 text-xs"
            onClick={clickStyle(click)}
          >
            <Link to="/">Home</Link>
          </button>
          <button
            className="w-full h-10 my-2 text-xs"
            onClick={clickStyle(click)}
          >
            <Link to="/about">About</Link>
          </button>
          <button
            className="w-full h-10 my-2 text-xs"
            onClick={clickStyle(click)}
          >
            <Link to="/work">Work</Link>
          </button>
          <button
            className="w-full h-10 my-2 text-xs"
            onClick={clickStyle(click)}
          >
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
