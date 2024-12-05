"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sportImg from "@/public/sport.png";
import { motion } from "framer-motion";
import BtnArrow from "@/public/btn-arrow-banner.png";
import MockupIPhone_1 from "@/public/phone_screen_mockup.svg";
import { GiPlainCircle } from "react-icons/gi";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function SlideTwo() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full mx-auto"
    >
      <div className="w-full container px-4 md:px-10 md:grid grid-cols-12 md:col-span-4 flex  justify-between items-start md:items-center  lg:mt-[60px] xl:mt-0 gap-3  md:gap-12  md:h-full md:mx-auto md:pt-6 md:pb-2 ">
        <div className=" col-span-12 md:col-span-6 lg:col-span-6 flex md:justify-start justify-start  items-start    top-0 md:top-[34%] xl:top-0">
          <div className=" md:text-3xl  lg:text-5xl text-white mt-0  md:mb-0 md:hero_section text-start">
            <div className="w-full ">
              <div className="font-openSans font-light text-[16px] md:mx-2 md:text-[26px] xl:text-[38px] leading-[108%] text-white w-full md:max-w-[480px] xl:max-w-[550px] text-start tracking-tighter">
                <TextGenerateEffect
                  words="Maximize your profits with the most popular Live Betting Odds Service in the market"
                  className="font-openSans font-light text-[16px]  md:text-[26px] xl:text-[42px] leading-[1.2] md:leading-[1.1] text-white max-w-[350px] md:max-w-[480px] lg:max-w-[360px] xl:max-w-[510px]  md:text-start md:tracking-normal"
                  duration={1.4}
                  boldWords={[
                    "most",
                    "popular",
                    "Live",
                    "Betting",
                    "Odds",
                    "Service",
                  ]}
                />
              </div>
            </div>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0p2ru5lM5YtnU99yzarfRppt6adUUQN1nLx5L9n_Elv_dX4geExMw23X2WIqJT9BEL2TNGhoct?gv=true"
              target="_blank"
              className="flex justify-between items-center font-openSans font-bold text-[8px] md:text-[16px] xl:text-[20px] leading-[108%] color-[#EEE] py-[7px] md:py-[12px] px-[7px] md:pl-[45px] md:pr-[25px] h-[24px] md:h-[60px] xl:h-[65px] w-[101px] md:w-[240px] xl:w-[283px] border-[1px] md:border-[4px] border-solid border-[#F01E2A] rounded-[5px] md:rounded-[10px] mt-[11px] md:mt-[35px] xl:mt-[65px] hover:duration-300 btn-2 "
              onClick={handleClick}
            >
              BOOK A DEMO{" "}
              <Image
                src={BtnArrow}
                alt="img"
                className="w-[6px] lg:w-auto lg:h-auto"
              />
            </Link>
          </div>
        </div>
        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-6 flex justify-center  relative mt-4 md:mt-4"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={sportImg}
            layout="responsive"
            alt="Background Image"
            className=" md:w-full max-w-[760px] relative"
          />
          <div className="absolute top-4 left-1 md:pl-7 md:top-6 lg:top-8 lg:left-5 md:left-3 xl:left-6 2xl:top-10 text-white md:py-1 px-2 bg-black rounded-r-sm md:rounded-r-md text-center text-[10px] md:text-[12px] lg:text-[16px] flex  items-center ">
            LIVE{" "}
            <GiPlainCircle className="text-red-600 bg-red-600 text-[7px] md:text-sm rounded-full inline ml-1" />
          </div>
          <motion.div
            className="absolute w-full md:w-[90%] max-w-[100%] md:max-w-[95%] top-[45%] right-[56px] md:top-[70%] lg:top-[60%] xl:top-[70%] xl:right-[42%] md:right-[42%] 2xl:top-[60%]"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={MockupIPhone_1}
              alt="Mockup of mobile and laptop"
              className="w-[80%] md:w-[80%] sm:w-auto sm:h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SlideTwo;
