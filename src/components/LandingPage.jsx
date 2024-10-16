import React from "react";
import landingBackground from "../../public/landingBackground.png";
import Navbar from "./Navbar";
import "animate.css";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen text-white relative md:bg-[url('../../public/landingBackground.png')] bg-no-repeat bg-cover back-color flex flex-col justify-center flex-wrap">
        <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col min-h-screen">
          {/* Navbar Section*/}
          <Navbar />
          {/* Landing Page Section */}
          <section className="flex-grow flex flex-col justify-center items-center text-center ">
            <div className="mb-7 flex md:flex-col">
              <div className="flex-wrap p-4">
                <h1 className="text-5xl md:text-6xl font-medium mb-4 leading-tight py-1 animate__animated animate__lightSpeedInRight">
                  When Innovation
                  <br />
                </h1>
                <p className="text-5xl font-medium md:text-5xl animate__animated animate__lightSpeedInLeft">
                  Meets
                  <span className="p-3 rounded-full bg-cyan-300 text-cyan-950 hidden md:inline-block ">
                    Investment
                  </span>
                  <br className="md:hidden" />
                  <span className=" p-3 rounded-full bg-cyan-300 text-cyan-950 md:hidden absolute mt-3 left-14 right-18">
                    Innovation
                  </span>
                </p>
              </div>
            </div>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 md:mt-0 mt-16 animate__animated animate__zoomIn ">
              Empowering Trading Through Advanced Technology
            </p>
            <button className="md:bg-cyan-950 rounded-xl bg-cyan-200 text-cyan-950 md:text-white font-bold py-3 px-6 text-md transition-colors duration-300 border-cyan-300 animate__animated animate__slideInUp">
              Open dApp
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
