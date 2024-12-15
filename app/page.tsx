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
import CustomSlider from "@/components/ui/customeSlider";

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

  return (
    <div className="bg-[#EEEEEE]">
      <div className="relative w-full overflow-hidden ">
        {/* <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((Slide, index) => (
            <motion.div key={index} className="w-full flex-shrink-0">
              {Slide}
            </motion.div>
          ))}
        </div> */}

        <FirstSlider />
        <SecondSlider />
      </div>

      <div className="relative z-10">
        <Aboutus />
        <ServiceCard />
      </div>

      <Background />
    </div>
  );
}
