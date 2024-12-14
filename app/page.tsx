"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Aboutus from "@/components/Aboutus";
import FirstSlider from "@/components/header/FristSlider";
import SecondSlider from "@/components/header/SecondSlider";
import ThirdSlider from "@/components/header/ThirdSlider";
import FourSlider from "@/components/header/FourSlider";
import Background from "@/components/Background";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <FirstSlider />,
    <SecondSlider />,
    <ThirdSlider />,
    <FourSlider />,
  ];

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const [screenPoint, setScreenPoint] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Ensure window is defined
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScreenPoint(window.scrollY);
      setIsScrolling(window.scrollY > 50);
    };

    const sendMessage = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      window.parent.postMessage(
        {
          "full-content-height": height,
          "full-content-width": width,
        },
        "*"
      );
    };

    sendMessage(); // Send the message on initial load

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", sendMessage); // Send the message on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", sendMessage);
    };
  }, []);

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((Slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {Slide}
            </div>
          ))}
        </div>
      </div>
      {/* <Header scrolled={isScrolling} /> */}
      {/* <CustomSlider /> */}
      {/* <FirstSlider />
      <SecondSlider />
      <ThirdSlider />
      <FourSlider /> */}
      <div className="relative z-10">
        <Aboutus />
        <ServiceCard />
      </div>

      <Background />
    </div>
  );
}
