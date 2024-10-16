import React from "react";
import navLogo from "../../public/navLogo.png";
import socialIcons from "../../public/socialIcons.png";
import label from "../../public/label.png";

const Footer = () => {
  return (
    <footer className="footer-color shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-between md:flex md:flex-row md:justify-between">
         <div>
         <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center"
          >
            <img
              src={navLogo}
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             EthAi
            </span>
          </a>
         </div>
         <div className="flex justify-center md:w-60 ">
          <img src={socialIcons} alt="" className="w-72"/>
         </div>
         <div className="md:mt-10">
         <span className="md:flex flex-wrap items-center mb-6 font-normal text-white sm:mb-0  md:text-2xl hidden md:mt-10">
            "Designed for traders of today, <br />  just like you".
          </span>
          <img src={label} alt="" className="md:block md:h-12 md:mt-10 hidden"/>
         </div>
         
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 hidden" />
        <span class=" text-sm text-gray-500 sm:text-center dark:text-gray-400 hidden">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
