import React from "react";
import FeaturesCards from "./FeaturesCards";
import Question from "./Question";
import LineProps from "./LineProps";
import ServicesSection from "./ServiceSection";
import Newsletter from "./Newsletter";
import NewsSection from "./sections/news";
import SocialConnect from "./SocialConnect";
import ContactsSection from "./sections/contacts-us";
import FooterR from "./layouts/footerR";
import TailwindCard from "./sections/TailwindCard";

const Background = () => {
  return (
    <>
      {/* <div className="relative bg-[#161b29] overflow-hidden h-screen">
     
        <div
          className="absolute inset-0 bg-[url('/Ellipse.png')] bg-no-repeat"
          style={{
            backgroundPosition: "top left", // Set the position to the top-left corner
            backgroundSize: "80%", // Keep the size adjustment
          }}
          aria-hidden="true"
        ></div>

   
        <div className="relative z-10 p-10">
          <h1 className="text-white text-3xl font-bold">Hello</h1>
          <h1 className="text-white text-2xl">Hello Sakib</h1>
        </div>
      </div>

     */}

      <div className="w-full h-full bg-[#161b29] relative">
        {/* Single red glow on the top */}
        <div className="flex justify-center items-center h-screen">
          <div className="w-full h-full bg-gradient-to-b from-[#EEEEEE] to-[#161b29]" />
        </div>

        <div className="flex justify-start items-start">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-end items-end">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-start items-start">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
        </div>

        <div className="flex justify-end items-end">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-start items-start">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-end items-end">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-start items-start">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-start items-start py-60">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px]  semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        {/* mobile */}
        <div className="md:hidden">
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-start items-start">
            <div className=" w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
          <div className="flex justify-end items-end">
            <div className=" w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
          </div>
        </div>
        {/* Content on top of the background */}
        <div className="absolute inset-0">
          <p className="px-5  md:px-16 pb-32 font-archivo font-thin text-lg md:text-5xl leading-[100%] text-black ">
            <span className="font-bold">Explore </span>
            our main features.
          </p>

          <FeaturesCards />
          <Question />
          <LineProps />
          <ServicesSection />
          <Newsletter />
          <NewsSection />
          <SocialConnect />
          <ContactsSection />
          <FooterR />
        </div>
      </div>
    </>
  );
};

export default Background;
