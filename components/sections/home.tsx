"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../customButton";
import { motion } from "framer-motion";
import LaptopDesktop from "@/public/Multi-Device-STNS1.png";
import BtnArrow from "@/public/btn-arrow-banner.png";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function HomeSection() {
  const [backgroundImage, setBackgroundImage] = useState("../background-1.png");

  useEffect(() => {
    const handleResize = () => {
      const imageUrl =
        window.innerWidth <= 768
          ? "../mobile-background-1.png"
          : "../background-1.png";
      setBackgroundImage(`url('${imageUrl}')`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="bg-cover w-full md:bg-[length:100%_130%]  xl:bg-[length:100%_110%] bg-top "
      id="home"
      style={
        {
          // backgroundImage: backgroundImage,
        }
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="mx-auto flex flex-col justify-center items-center pt-[55px]  md:pt-[33px] lg:pt-[0px]  xl:pt-[97px] 2xl:pt-[10px] max-w-[1400px]">
        <div className="w-full grid grid-cols-12 gap-2 md:gap-7 xl:gap-16 ">
          <motion.div
            className=" md:col-span-9 col-span-8"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={LaptopDesktop}
              layout="responsive"
              height={100}
              width={100}
              quality={100}
              alt="Background Image"
              // className=''
              className=" ml-[-10px] -mb-[20%]  md:ml-[-30px] md:-mb-[9%] lg:mt-[9%]  xl:mt-[0px] xl:-mb-[50px] 2xl:mt-[70px] 2xl:-mb-[30px] 3xl:-mt-[20%] 3xl:mb-[10%] w-auto   "
            />
          </motion.div>
          <div className=" col-span-4 md:col-span-3 flex relative top-0 md:top-[34%] xl:top-[22%] ">
            <div
              className="text-sm md:text-3xl lg:text-5xl  text-white -ms-[50px] md:-ms-[9rem] xl:-ms-60 md:-mt-20 mt-0 mb-[20px] md:mb-0 "
              // initial={{ y: 200 }}
              // animate={{ y: 0 }}
              // transition={{ duration: 1.5}}
            >
              <div className="text-white">
                <div className="font-openSans font-light text-[16px] md:text-[26px] xl:text-[46px] text-white max-w-[181px] md:max-w-[400px] xl:max-w-[539px] leading-tight lg:mt-[26%] xl:mt-8">
                  <TextGenerateEffect
                    words="We are the #1 online betting software solution worldwide"
                    className="font-openSans text-[16px] md:text-[32px] xl:text-[46px] leading-[1.1] text-white max-w-[181px] md:max-w-[500px] xl:max-w-[539px] font-light tracking-tight"
                    duration={1.3}
                    boldWords={["#1", "online", "betting", "software"]} // Bold specific words
                  />
                </div>
              </div>
              {/* <CustomButton
              text="BOOK A DEMO"
              width="w-full md:w-fit"
              isBackgroundRed={false}
              border="border-4 border-[#f01f2b]"
              textColor="text-white"
              iconColor="white"
              textSize="text-sm md:text-lg"
              className="sm:mt-16 mt-2"
              onClick={handleClick}
              iconName="chevronRight"
            /> */}
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0p2ru5lM5YtnU99yzarfRppt6adUUQN1nLx5L9n_Elv_dX4geExMw23X2WIqJT9BEL2TNGhoct?gv=true
"
                target="_blank"
                className="flex justify-between items-center font-openSans font-bold text-[8px] md:text-[16px] xl:text-[20px] leading-[108%] color-[#EEE] py-[7px] md:py-[12px] px-[7px] md:pl-[45px] md:pr-[25px] h-[24px] md:h-[60px] xl:h-[65px] w-[101px] md:w-[240px] xl:w-[283px] border-[1px] md:border-[4px] border-solid border-[#F01E2A] rounded-[5px] md:rounded-[10px] mt-[11px] md:mt-[35px] xl:mt-[65px] hover:duration-300 btn-2"
              >
                BOOK A DEMO{" "}
                <Image
                  src={BtnArrow}
                  alt="img"
                  className="w-[6px] xl:w-auto xl:h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeSection;
