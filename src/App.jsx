import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import "animate.css";

const App = () => {
  return (
    <>
      <LandingPage />
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
