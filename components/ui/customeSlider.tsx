"use client";
import React, { useEffect, useState, useRef } from "react";

import FirstSlider from "../header/FristSlider";
import SecondSlider from "../header/SecondSlider";
import ThirdSlider from "../header/ThirdSlider";
import FourSlider from "../header/FourSlider";

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
    <div>
      {activeSlide === 0 && <FirstSlider />}
      {activeSlide === 1 && <SecondSlider />}
      {activeSlide === 2 && <ThirdSlider />}
      {activeSlide === 3 && <FourSlider />}
    </div>
  );
};

export default CustomSlider;
