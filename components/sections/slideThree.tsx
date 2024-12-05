"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BtnArrow from "@/public/btn-arrow-banner.png";
import icon1 from "@/public/Development.svg";
import icon2 from "@/public/Group 2085663662.svg";
import icon3 from "@/public/Group 2085663663.svg";
import icon4 from "@/public/Group 2085663664.svg";
import icon5 from "@/public/Group 2085663665.svg";
import icon6 from "@/public/Group 2085663666.svg";
import icon7 from "@/public/Group 2085663667.svg";
import icon8 from "@/public/Group.svg";
import icon9 from "@/public/Vector-1.svg";
import icon10 from "@/public/Vector-2.svg";
import icon11 from "@/public/Vector-3.svg";
import icon12 from "@/public/Vector.svg";

import { TextGenerateEffect } from "../ui/text-generate-effect";

const SLIDERICONS = [
  { image: icon4, text: "Pre-Match Odds Solution" },
  { image: icon5, text: "Live Betting Solution" },
  { image: icon6, text: "Mobile App Ready to launch" },
  { image: icon7, text: "Multiple Live Casinos & Slots" },
  { image: icon3, text: "Full Control with Back End" },
  { image: icon2, text: "Fully Customizable" },
  { image: icon8, text: "API Custom Integrations" },
  { image: icon9, text: "24/7 Support and guiedence" },
  { image: icon1, text: "Ongoing Impovment" },
  { image: icon12, text: "Marketing Tools Integration" },
  { image: icon10, text: "Payment Solutions" },
  { image: icon11, text: "Live Costumer Support tool" },
];

function SlideThree() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full mx-auto"
    >
      <div className="w-full container px-4  md:px-10 m-auto overflow-hidden md:grid grid-cols-12 md:col-span-4 flex  gap-2 justify-between items-center py-14">
        <div className=" col-span-6 xl:col-span-5 flex relative top-0 md:top-[14%] xl:top-[12%] mt-8 ">
          <div className=" md:text-3xl md:mx-0   lg:text-5xl text-white   md:-mt-20 mt-0 mb-[20px] md:mb-20  w-full max-w-[615px]">
            <div className="w-full">
              <div className="font-openSans text-start font-light text-[20px] md:mx-2 md:text-[36px] xl:text-[42px] leading-[1.2] text-white max-w-[395px] md:max-w-[600px] lg:max-w-[639px]">
                <TextGenerateEffect
                  words="The most advanced and complete betting software solution in the market"
                  className="font-openSans font-light text-[16px] md:mx-2 md:text-[26px] lg:text-[34px] xl:text-[40px] leading-[1.1] text-white max-w-[360px] md:max-w-[600px] lg:max-w-[639px] text-start tracking-[1.2]"
                  duration={1.4}
                  boldWords={[
                    "most",
                    "advanced",
                    "complete",
                    "betting",
                    "software",
                  ]}
                />
              </div>
            </div>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0p2ru5lM5YtnU99yzarfRppt6adUUQN1nLx5L9n_Elv_dX4geExMw23X2WIqJT9BEL2TNGhoct?gv=true"
              target="_blank"
              className="flex justify-between items-center font-openSans font-bold text-[8px] md:text-[16px] xl:text-[20px] leading-[108%] text-[#EEE] py-[7px] md:py-[12px] px-[7px] md:pl-[45px] md:pr-[25px] h-[24px] md:h-[60px] xl:h-[65px] w-[101px] md:w-[240px] xl:w-[283px] border-[1px] md:border-[4px] border-solid border-[#F01E2A] rounded-[5px] md:rounded-[10px] mt-[11px] md:mt-[35px] xl:mt-[32px] hover:duration-300 btn-2 md:ml-4"
            >
              BOOK A DEMO
              <Image
                src={BtnArrow}
                alt="Arrow"
                className="w-[6px] xl:w-auto xl:h-auto "
              />
            </Link>
          </div>
        </div>
        <div className="xl:col-span-7 col-span-6">
          <motion.div
            className=" col-span-12"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="grid gap-y-2 gap-x-1 md:gap-y-6 grid-cols-12">
              {SLIDERICONS.map((item, index) => (
                <div
                  key={index}
                  className=" col-span-3  md:col-span-3 md:mx-4 flex  flex-col items-center cursor-pointer"
                >
                  <Image
                    src={item.image}
                    className={`2xl:w-[55px] xl:w-[50px] lg:w-[45px] md:w-[30px] w-[17px] ${
                      index === 2 &&
                      "-mt-3 md:-mt-6 xl:w-[45px] lg:w-[40px] md:w-[25px]"
                    } ${index === 3 && "-my-1 md:-mt-3 "}`}
                    alt={item.text}
                  />
                  <span className="mt-2 text-center lg:text-[16px] xl:text-[18px] md:text-[10px] text-[6px] text-white">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SlideThree;
