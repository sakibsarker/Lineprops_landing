"use client";
import { Feature } from "@/types/feature";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

export const sampleFeatures: Feature[] = [
  {
    title: "Pre-Match Odds",
    Image: "/1.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Automated and real-time updating of competitive odds based on market movements",
      "Wide variety of betting types. Pre-match and futures, with a user friendly interface",
      "Our competitive odds attract more bettors but also assure users of the value they receive",
    ],
  },
  {
    title: "Live Betting",
    Image: "/2.png",
    GIF: "/gif.gif",
    PreMatches: [
      " LinePros Live Betting Odds Service is the most popular in-play trading service in the gambling industry",
      "Providing full live betting pricing, and covering all profitable top-line markets and scores of derivative markets",
      "Supplemental Delay: Ensures fairness and transparency during rapid game developments",
    ],
  },
  {
    title: "Mobile App",
    Image: "/3.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Providing dedicated mobile applications for iOS and Android devices.",
      "User-friendly interface for attracting and retaining users.",
      "Integration capabilities via API",
    ],
  },
  {
    title: "Live Casino",
    Image: "/product-item-new-img-4.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Integration of popular casino games like slots, poker, and roulette.",
      "Full integrated with platforms like Pragmatic Play, Ortiz Gaming and others.",
    ],
  },
  {
    title: "Back End",
    Image: "/5.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Complete management tool with custom setup and reporting for tracking performance, user behavior, and financials.",
      "Your product, your rules. Control every aspect of the configuration, what you offer and how you offer it.",
      "Multiple users in roles and ability to create agents for referrals.",
    ],
  },
  {
    title: "Fully Customizable",
    Image: "/6.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Take your own brand and graphics to live and control your whole promotional communication.",
      "Pricing Flexibility: Set your own pricing on sports or individual games.",
      "Available and tailored to multiple jurisdictions. Robust and scalable platform ready for global user access.",
    ],
  },
  {
    title: "24/7 Support",
    Image: "/7.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Always available and attentive to your needs, with a fully trained team to ensure the proper functioning of our products.",
    ],
  },
  {
    title: "API Integration",
    Image: "/8.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Facilitates integration with other platforms, ensuring consistent performance.",
      "Strong security measures to protect user information and financial transactions.",
    ],
  },
  {
    title: "Ongoing improvements",
    Image: "/9.png",
    GIF: "/gif.gif",
    PreMatches: [
      "Our software is and will always be a product in continuous development, constantly improving to stay at the forefront of the market.",
    ],
  },
];

export default function FeaturesCards() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 px-5 md:px-16">
      {sampleFeatures.map((feature, index) => (
        <div
          key={index}
          className="cursor-pointer mb-2 md:mb-2 transition-all duration-500 ease-in-out"
        >
          <div className="mb-2 mb:mb-2 transition-all duration-500 ease-in-out">
            <div
              className={
                expandedIndex === index
                  ? "md:h-[240px] h-[240px] relative transition-all duration-500 ease-in-out"
                  : "relative transition-all duration-500 ease-in-out"
              }
            >
              <div className="flex justify-end items-end absolute top-[14px] z-20 right-[14px]">
                <Button
                  variant={"ghost"}
                  className="w-10 h-10 p-0 rounded-full text-white border-[1px] border-solid border-[#808080] cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIndex === index ? <Minus /> : <Plus />}
                </Button>
              </div>
              <div>
                <div
                  className={
                    expandedIndex === index
                      ? "h-60 w-auto flex justify-center mx-auto relative transition-all duration-500 ease-in-out"
                      : "h-[250px] md:h-[550px] relative transition-all duration-500 !ease-in-out"
                  }
                >
                  <Image
                    src={feature.Image}
                    alt={
                      expandedIndex === index ? "Feature GIF" : "Feature Image"
                    }
                    width={
                      expandedIndex === index
                        ? isMobile
                          ? 150
                          : 300
                        : isMobile
                        ? 300
                        : 600
                    }
                    height={
                      expandedIndex === index
                        ? isMobile
                          ? 100
                          : 200
                        : isMobile
                        ? 200
                        : 400
                    }
                    className={
                      expandedIndex === index
                        ? "w-full h-full object-cover rounded-3xl object-top tran-height"
                        : "w-full aspect-[0.77/1] object-cover h-full rounded-3xl tran-height"
                    }
                  />
                </div>
              </div>
            </div>
            {expandedIndex === index ? (
              <div className="transition-all duration-500 !ease-in-out">
                <div className="my-[8px] sm:my-[24px] font-openSans font-thin sm:font-light text-[20px] md:text-[30px] leading-[1.2] sm:leading-[140%] text-white pl-1">
                  {feature.title}
                </div>
                <ul className="ml-[35px]">
                  {feature.PreMatches.map((preMatch, i) => (
                    <li key={i} className="list-disc text-white">
                      <p className="font-openSans font-regular text-[10px] sm:text-[18px] leading-[1.2] sm:leading-[155%] text-white">
                        {preMatch}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-[8px] sm:mt-[24px] transition-all duration-500 !ease-in-out">
                <p className="font-openSans font-thin sm:font-light text-[20px] md:text-[30px] leading-[140%] text-white">
                  {feature.title}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
