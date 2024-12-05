"use client";
import React, { useEffect, useState, useRef } from "react";
import HomeSection from "../sections/home";
import SlideTwo from "../sections/slideTwo";
import SlideThree from "../sections/slideThree";
import SlideFour from "../sections/sliderFour";

const CustomSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("/background-1.png");
  const intervalIdRef = useRef<number | null>(null);

  const startSlideInterval = () => {
    const slideDuration = 8000;
    intervalIdRef.current = window.setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    }, slideDuration);
  };

  useEffect(() => {
    startSlideInterval();

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const imageUrl =
        window.innerWidth <= 768
          ? "/mobile-background-1.png"
          : "/background-1.png";
      setBackgroundImage(imageUrl);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full ">
        <div className="justify-start flex w-full">
          <div className="flex lg:h-[600px] w-full">
            {activeSlide === 0 && (
              <div
                className={`w-full transition-opacity duration-1000 relative  ${activeSlide === 0 ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-cover bg-top flex flex-col items-center  md:pt-[43px]  xl:pt-[10px] pt-4 ">
                  <HomeSection />
                </div>
              </div>
            )}
            {activeSlide === 1 && (
              <div
                className={`w-full transition-opacity duration-1000 max-h-[600px]  ${activeSlide === 1 ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  backgroundImage: `url(/background_slide_2.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-cover bg-top flex flex-col items-center pt-[40px] md:pt-[73px] lg:pt-[50px] md:pb-10 pb-3 ">
                  <SlideTwo />
                </div>
              </div>
            )}
            {activeSlide === 2 && (
              <div
                className={`w-full transition-opacity duration-1000 overflow-hidden  ${activeSlide === 2 ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  backgroundImage: `url(/background_Slide_3.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full h-full bg-cover bg-top flex flex-col items-center  ">
                  <SlideFour />
                </div>
              </div>
            )}
            {activeSlide === 3 && (
              <div
                className={`w-full transition-opacity duration-1000 ${activeSlide === 3 ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  backgroundImage: `url(/Background_Slide_4.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-cover bg-top flex flex-col items-center pt-[0px] md:pt-[43px] xl:pt-[57px] md:pb-4">
                  <SlideThree />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
