import React from "react";
import graph from "../../public/graph.png";
import wallet from "../../public/wallet.png";
import Tools from "../../public/tools.png";
import FutureTechnology from "../../public/FutureTechnology.png";

const About = () => {
  return (
    <>
      <section className="min-h-screen back-color text-white py-16 px-4 md:px-96">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About EthAi</h2>
          <p className="text-sm md:text-lg max-w-4xl mx-auto para-text">
            At EthAi, we're all about making crypto trading easier and more
            intuitive. We provide tools that help traders keep up with all new
            market trends, track top traders' movements.
          </p>
          <button className="md:bg-cyan-400 rounded-xl bg-cyan-200 text-cyan-950 md:text-cyan-950 font-bold py-3 px-6 text-md transition-colors duration-300 border-cyan-300 md:mt-5 mt-5">
              Read More
            </button>
        </div>
        <div className="flex md:flex-wrap flex-wrap gap-6 md:gap-x-6 justify-center about-card md:rounded-xl md:p-16 rounded-xl p-12">
          {/* Part 1 */}
          <div className="flex md:flex-row flex-wrap">
            <div className="p-6 rounded-lg text-left flex-1 md:min-w-[250px] md:max-w-[500px] max-w-[300px] min-w-[250px]">
              <img src={graph} alt="" className="md:mb-5 mb-5" />
              <h3 className="text-xl font-semibold mb-2">Stay Ahead</h3>
              <p>No more guesswork—get clear, trustable insights.</p>
            </div>
            <div className="p-6 rounded-lg text-left flex-1 min-w-[250px] md:max-w-[500px] max-w-[300px]">
              <img src={wallet} alt="" className="md:mb-5 mb-5" />
              <h3 className="text-xl font-semibold mb-2">Know Your Assets</h3>
              <p>Always stay on top of how your investments are performing.</p>
            </div>
          </div>
          {/* Part 2 */}
          <div className="flex md:flex-row flex-wrap">
            <div className="p-6 rounded-lg text-left flex-1 min-w-[250px] md:max-w-[500px]max-w-[300px]">
              <img src={Tools} alt="" className="md:mb-5 mb-5" />
              <h3 className="text-xl font-semibold mb-2">
                Simple, Not Overwhelming
              </h3>
              <p>
                Our tools are designed to make complex market analysis easy to
                understand and act on.
              </p>
            </div>
            <div className="p-6 rounded-lg text-left flex-1 min-w-[250px] md:max-w-[500px]max-w-[300px]">
              <img src={FutureTechnology} alt="" className="md:mb-5 mb-5" />
              <h3 className="text-xl font-semibold mb-2">Future-Proof</h3>
              <p>
                We're constantly improving, adding new features to help you make
                the most informed decisions possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
