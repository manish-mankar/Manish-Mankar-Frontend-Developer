import React from "react";
import roadmapImg from "../../public/roadmapImg.png";
import completeImg from "../../public/completeImg.png";
import roadmap2 from "../../public/roadmap2.png";
import roadmap3 from "../../public/roadmap3.png";

const Roadmap = () => {
  return (
    <section>
      <div className="text-center back-color relative">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Roadmap</h1>
      </div>
      <div className="flex flex-col md:flex-row min-h-screen back-color text-white justify-center">
        {/* Left side content */}

        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center md:ml-80">
          <div className="mb-8">
            <span className="bg-white text-black px-2 py-1 text-sm font-semibold">
              PHASE 1
            </span>
          </div>
          <h1 className="text-5xl font-medium mb-8">Kicking Off</h1>
          <ul className="space-y-4">
            {[
              "Launch of EthAI: Officially",
              "Development of Core AI Agents",
              "User Onboarding Campaign",
              "Community Engagement Initiatives",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <img src={completeImg} alt="" className="md:p-2 p-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-3/5 hidden md:block">
          <img
            src={roadmapImg}
            alt="Futuristic cityscape"
            className="md:h-96 roadmap-img object-cover brightness-100 md:mt-48 absolute "
          />
        </div>
        <div className="p-5">
          <img src={roadmapImg} alt="" className="md:hidden" />
        </div>
      </div>

      {/* Section 2 */}

      <div className="flex flex-col md:flex-row min-h-screen back-color text-white justify-center md:pb-20">
        <div className="w-full md:w-3/5 p-8  flex-col justify-center md:ml-80 hidden md:block">
          <img
            src={roadmap2}
            alt="Futuristic cityscape"
            className="md:order-1 md:h-96 roadmap-img object-cover brightness-100 md:mt-48 absolute "
          />
        </div>
        <div className="p-5 order-2">
          <img src={roadmap2} alt="" className="md:hidden" />
        </div>

        {/* Left side content */}

        <div className="w-full md:w-3/5 md:p-16 md:mt-1 p-8 flex flex-col justify-center md:ml-50 order-1">
          <div className="mb-8">
            <span className="bg-white text-black px-2 py-1 text-sm font-semibold">
              PHASE 2
            </span>
          </div>
          <h1 className="text-5xl font-medium mb-8">Bigger Insights</h1>
          <ul className="space-y-4">
            {[
              "Launch of EthAI: Officially",
              "Development of Core AI Agents",
              "User Onboarding Campaign",
              "Community Engagement Initiatives",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <img src={completeImg} alt="" className="md:p-2 p-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex flex-col md:flex-row min-h-screen back-color text-white justify-center">
        {/* Left side content */}

        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center md:ml-80">
          <div className="mb-8">
            <span className="bg-white text-black px-2 py-1 text-sm font-semibold">
              PHASE 3
            </span>
          </div>
          <h1 className="text-5xl font-medium mb-8">Full Power</h1>
          <ul className="space-y-4">
            {[
              "Launch of EthAI: Officially",
              "Development of Core AI Agents",
              "User Onboarding Campaign",
              "Community Engagement Initiatives",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <img src={completeImg} alt="" className="md:p-2 p-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-3/5 hidden md:block">
          <img
            src={roadmap3}
            alt="Futuristic cityscape"
            className="md:h-96 roadmap-img object-cover brightness-100 md:mt-48 absolute"
          />
        </div>
        <div className="p-5">
          <img src={roadmap3} alt="" className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
