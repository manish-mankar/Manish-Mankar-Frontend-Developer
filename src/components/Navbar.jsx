import React from "react";
import navLogo from "../../public/navLogo.png";
import navMenuIcon from "../../public/navMenuIcon.png";

const Navbar = () => {
  return (
    <>
      <nav className="min-w-screen navbar bg-base-100 flex flex-row justify-between text-center relative md:bg-inherit bg-cyan-900 rounded-full md:p-0 p-4">
        <div className="flex flex-row md:flex-row md:mt-2 justify-center">
          <img
            src={navLogo}
            alt="Navbar"
            className="w-7 h-7 ml-5 cursor-pointer animate__animated animate__bounce"
          />
          <span className="animate__animated animate__bounce md:ml-1 text-xl font-semibold md:block hidden">
            EthAi
          </span>
          <img
            src={navMenuIcon}
            alt="Navbar"
            className="md:hidden absolute left-80 bottom-2 w-18 h-18 right-0 cursor-pointer animate__animated animate__bounce"
          />
        </div>
        <div className="flex flex-row md:ml-24">
          <ul
            className="flex md:flex-1 flex-row justify-between 
         gap-x-5 md:bg-cyan-950 md:px-4 md:py-3 text-cyan-600 rounded-full cursor-pointer md:border-cyan-400 animate__animated animate__bounce"
          >
            <li className="hover:underline md:block hidden p-1">
              <a>Features</a>
            </li>
            <li className="hover:underline md:block hidden p-1">
              <a>Why Us</a>
            </li>
            <li className="hover:underline md:block hidden p-1">
              <a>Tokenomics</a>
            </li>
            <li className="hover:underline md:block hidden p-1">
              <a>Roadmap</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between md:gap-x-5">
          <button className="bg-inherit md:block hidden animate__animated animate__bounce">Login</button>
          <button className="md:bg-cyan-200  md:text-cyan-950 text-sm border-cyan-300 md:block hidden rounded-xl px-3 animate__animated animate__bounce">
            Whitepaper
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
