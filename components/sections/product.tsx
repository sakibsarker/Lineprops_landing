"use client";
import React, { useEffect, useState } from "react";

import FeatureCard from "../featureCard";
import { sampleFeatures } from "@/bin/features";
import { motion, useInView } from "framer-motion";
import FAQs from "./faqs";

import BoxCard from "./BoxCard";
import VisitCard from "./VisitCard";
import TailwindCard from "./TailwindCard";
import FeatureCardtwo from "../featureCardtwo";
function ProductsSection() {
  const [backgroundImage, setBackgroundImage] = useState("../background-1.png");

  useEffect(() => {
    const handleResize = () => {
      const imageUrl =
        window.innerWidth <= 768
          ? "../mobile-background-2.png"
          : "../background-2.png";
      setBackgroundImage(`url('${imageUrl}')`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-[#eeeeee] pt-16 overflow-hidden ">
      <div className="max-w-screen-3xl mx-auto px-10">
        <h1 className="text-4xl md:text-7xl font-light font-openSans md:mb-12 text-left">
          <span className="text-4xl md:text-7xl font-bold"> Why </span>
          Linepros?
        </h1>
      </div>
      <div
        className="bg-[length:100%_100%] bg-no-repeat bg-top min-h-screen flex flex-col  pb-14 "
        style={{
          backgroundImage: backgroundImage,
        }}
      >
        <motion.div
          className="mx-auto  h-full "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <TailwindCard />
        </motion.div>

        <div
          className="py-[70px] pt-[4px] md:pt-[54px] md:pb-[127px] md:px-12 px-[17px]"
          id="products"
        >
          <div className="max-w-screen-3xl mx-auto">
            <p className="font-archivo font-thin text-[36px] md:text-[42px] xl:text-[56px] leading-[100%] text-white max-w-[500px] md:max-w-[480px] xl:max-w-[630px]">
              <span className="font-bold">Explore </span>
              our main
              <br /> features.
            </p>
          </div>
        </div>

        {/* <div className="md:px-12 px-[17px]">
          <div className="max-w-screen-3xl mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[40px]">
              {sampleFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div> */}
        <FeatureCardtwo />
        <FAQs />
        <VisitCard />
      </div>
    </div>
  );
}

export default ProductsSection;
