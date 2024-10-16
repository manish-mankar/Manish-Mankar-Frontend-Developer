import React from 'react';

const Explore = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen back-color">
      <div className="m-12 about-card text-white  flex md:flex-wrap flex-wrap gap-6 md:gap-x-6 md:m-48 justify-center about-card md:rounded-2xl md:p-32 rounded-xl p-4 ">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Explore Our <span className="text-cyan-400">dApp</span></h2>
        <p className="text-center mb-6 md:text-base para-text text-sm">
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.
          By tracking smart money flows, monitoring key wallets, and providing real-time market insights,
          EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset
          recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for
          both novice and experienced traders.
        </p>
        <div className="flex justify-center">
        <button className="md:bg-cyan-400 rounded-xl bg-cyan-200 text-cyan-950 md:text-cyan-950 font-bold py-3 px-6 text-md transition-colors duration-300 border-cyan-300 md:mt-5 mt-5">
              Open dApp
            </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
