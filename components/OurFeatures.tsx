import React from "react";
import FeaturesCards from "./FeaturesCards";
import Question from "./Question";

export default function OurFeatures() {
  return (
    <>
      <p className="px-5 bg-[#EEEEEE] md:px-16 font-archivo font-thin text-lg md:text-5xl leading-[100%] text-black ">
        <span className="font-bold">Explore </span>
        our main features.
      </p>
      <div className="bg-[length:100%_500%] bg-[url('/background-1.png')] bg-no-repeat bg-top min-h-screen flex flex-col  pb-14 ">
        <FeaturesCards />
        <Question />
      </div>
    </>
  );
}
