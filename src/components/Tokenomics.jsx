import React from "react";
import Donut from "../../public/donut.png";

const Tokenomics = () => {
  return (
    <>
      <section className="min-h-screen back-color text-white p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-20 text-white text-center">
          Tokenomics
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-3/5 max-w-md">
            <img src={Donut} alt="" className="md:ml-4 w-80 md:w-96 ml-16" />
          </div>
          <div className="w-96 md:w-2/5 space-y-4">
            <div className="about-card p-4 md:p-8 rounded-xl md:rounded-3xl">
              <div className="grid grid-cols-2 gap-4">
                <div>Name</div>
                <div>: EthAi</div>
                <div>Token Name</div>
                <div>: $EthAi</div>
                <div>Token standard</div>
                <div>: ERC20</div>
                <div>Blockchain</div>
                <div>: Ethereum</div>
                <div>Total Supply</div>
                <div>: 100 Million</div>
                <div>Tax</div>
                <div>: 5%/5%</div>
              </div>
            </div>
            <div className="about-card p-4 rounded-lg md:p-8 md:rounded-3xl">
              <div className="grid grid-cols-2 gap-3">
                <div>Team</div>
                <div>: 35%</div>
                <div>Marketing</div>
                <div>: 5%</div>
                <div>Liquidity Pool</div>
                <div>: 90%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
