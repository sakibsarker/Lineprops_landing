import React from "react";
import FeaturesCards from "./FeaturesCards";
import Question from "./Question";
import LineProps from "./LineProps";
import ServicesSection from "./ServiceSection";
import Newsletter from "./Newsletter";
import SocialConnect from "./SocialConnect";
import ContactsSection from "./sections/contacts-us";
import FooterR from "./layouts/footerR";
import NewsContents from "./NewsContents";

const Background = () => {
  return (
    <>
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
          <div className="md:w-[900px] md:h-[900px] w-[150px] h-[150px] semi-circle_right bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-start items-start">
          <div className="md:w-[900px] md:h-[900px] w-[150px] h-[150px] semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-start items-start py-60">
          <div className="md:w-[900px] md:h-[900px] w-[150px] h-[150px]  semi-circle bg-[#ff0000] blur-[130px] opacity-60" />
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
          <NewsContents />
          <SocialConnect />
          <ContactsSection />
          <FooterR />
        </div>
      </div>
    </>
  );
};

export default Background;
