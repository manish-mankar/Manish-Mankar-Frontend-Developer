import React, { useState } from "react";
import Explore from "./Explore";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "What is EthAi?",
    "How can EthAi help me as a Trader?",
    "Who can use EthAi?",
    "How does EthAi track smart money flow?",
    "How does EthAi ensure data security?",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-cover back-color bg-center min-h-screen flex items-center justify-center flex-col">
      <div className="bg-opacity-90 p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 md:flex md:flex-row md:justify-between items-start about-card">
        <div className="md:p-20">
          <h2 className="text-white text-3xl md:text-3xl mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="md:space-y-5 md:p-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="flex justify-between items-center w-full text-left text-gray-300 py-3 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="text-gray-400 pb-4">
                  <p>I'm a Frontend Developer !: {faq}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default FAQ;
