import React from "react";
import Card1 from "../../public/Card1.png";
import markInsights from "../../public/MarkInsights.png";
import Card2 from "../../public/Card2.png";
import Card3 from "../../public/Card3.png";
import Card33 from "../../public/Card33.png";
import Card5 from "../../public/Card5.png";
import "animate.css";

const Features = () => {
  return (
    <>
      <div class="flex h-screen w-auto flex-col items-center justify-center md:px-20 back-color relative p-8">
        <h1 className="text-white font-medium text-5xl mb-10">Our Features</h1>
        <div class="grid h-full w-full md:grid-cols-10 md:grid-rows-4 grid-cols-3  grid-rows-12 gap-2 md:absolute md:left-20 md:p-32">
          {/* Grid Card 1 */}
          <div class="md:col-span-3 md:row-span-3 col-span-10 row-span-4 md:rounded-3xl rounded-2xl card-color md:p-10 text-center flex-wrap flex md:flex-col md:justify-around flex-col justify-evenly p-2 about-card animate__animated animate__shakeX ">
            <img
              src={Card1}
              alt="img"
              className="md:ml-32 md:w-24 md:h-24 w-16 h-16 ml-36"
            />
            <h2 class="md:text-xl md:font-bold mb-2 text-gray-50 text-lg">
              Trade Optimizer
            </h2>
            <p className="para-text text-sm p-5">
              Find the right moments to buy or sell, with personalized trade
              suggestions designed to help you make the most of every
              opportunity.
            </p>
          </div>
          {/* Grid Card 2 */}
          <div class="md:col-span-3 md:row-span-1 col-span-10 row-span-2 md:rounded-3xl rounded-2xl card-color md:p-3 flex p-3 about-card animate__animated animate__jello">
            <div>
              <h2 class="md:text-xl md:font-bold mb-1 text-gray-50 text-lg">
                Market Insight
              </h2>
              <p className="para-text text-sm p-1 ">
                Stay ahead of the market. Get real-time updates on market{" "}
                <span>trends, track top traders.</span>
              </p>
            </div>
            <div>
              <img
                src={markInsights}
                alt="img"
                className="md:w-32 hidden md:block"
              />
              <img
                src={Card2}
                alt="img"
                className="w-24 h-32 top-90 absolute right-9 object-fill md:hidden mb-10"
              />
            </div>
          </div>
          {/* Grid Card 3 */}
          <div class="md:col-span-3 md:row-span-3 col-span-10 row-span-3 rounded-2xl md:rounded-3xl card-color flex flex-col justify-center about-card animate__animated animate__shakeX">
            <div className="md:order-1 order-2">
              <img
                src={Card3}
                alt="img"
                className="md:ml-32 md:w-44 md:h-44 w-24 h-24 ml-36 "
              />
            </div>
            <div className="text-center order-1">
              <h2 class="md:text-base text-base font-bold text-gray-50">
                Risk Guard
              </h2>
              <p className="para-text text-sm p-1 md:p-5 md:text-lg">
                Get alerts on market swings and potential risks before they
                impact your portfolio.
                <span className="hidden md:block">
                  This agent helps you navigate volatility and stay prepared for
                  anything.
                </span>
              </p>
            </div>
          </div>
          {/* Grid Card 4 */}
          <div class="md:col-span-3 md:row-span-2 md:rounded-3xl  card-color md:block hidden rounded-2xl about-card animate__animated animate__fadeIn"></div>
          {/* Grid Card 5 */}
          <div class="md:col-span-3 md:row-span-2 md:rounded-3xl  card-color md:block hidden rounded-2xl md:p-4 about-card animate__animated animate__lightSpeedInLeft">
            <h2 class="md:text-base text-base font-bold md:p-1 text-gray-50">
              Portfolio Sync
            </h2>
            <p className="para-text text-sm p-1 md:p-1 md:text-sm">
              Easily manage your portfolio. You’ll always know what you own, how
              it’s performing, and where it’s headed.
            </p>
          </div>
          {/* Grid Card 6 */}
          <div class="md:col-span-6 md:row-span-2 col-span-10 row-span-4 rounded-2xl md:rounded-3xl card-color md:p-4 flex md:flex-row p-2 flex-col about-card animate__animated animate__lightSpeedInRight">
            <div>
              <h2 class="md:text-base text-base font-bold md:p-1 text-gray-50">
                Opportunity Scout
              </h2>
              <p className="para-text text-sm p-1 md:p-1 md:text-sm">
                Find exciting new projects, events, and tokens that others might
                be missing. Identifying promising opportunities early, so you
                never miss out on the next big thing.
              </p>
            </div>
            <div>
              <img
                src={Card5}
                alt="img"
                className="md:w-52 md:h-28 w-28 h-20 ml-60 md:ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
