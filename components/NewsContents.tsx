import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./customButton";
import BtnArrowRed from "@/public/btn-arrow-red.png";
import { motion, useInView } from "framer-motion";

export default function NewsContents() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  const fadeInVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="md:px-16 px-5 bg-white" id="news">
      <motion.div
        className="max-w-screen-3xl mx-auto pt-[40px] pb-[50px] lg:pt-[86px] lg:pb-[150px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <div className="tracking-widest text-md md:text-[25px] lg:text-[30px] xl:text-[36px] text-[#333333] font-openSans">
          NEWS
        </div>

        <div className="text-4xl md:text-8xl leading-[107%] py-[20px] sm:py-[30px] lg:py-[40px] font-openSans font-light text-[#666]">
          The Growth of Online
          <br /> Gambling Industry:
          <br /> A Comparative Overview
        </div>

        <div className=" lg:grid grid-cols-12 items-end">
          <div className="sm:col-span-5 lg:col-span-6 justify-center max-w-[620px]">
            <motion.img
              src="/news-article.png"
              height={1800}
              width={1200}
              className="rounded-3xl"
              alt="Background Image"
              whileHover={{ scale: 1.1 }} // Slightly larger on hover
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            />
          </div>
          <div className="col-span-5 lg:col-span-6 lg:ms-24 xl:mt-32 mt-8 text-[#666]">
            <div className="mt-8">
              <div className="font-openSans font-regular text-[13px] md:text-[20px] leading-[185%] md:leading-[150%] text-[#666] xl:max-w-[400px] xl:text-justify">
                The online gambling industry has grown significantly, driven by
                technology, the expansion of mobile device use, and legalization
                in various regions. In 2023, the global market reached $79.8
                billion, projecting to grow to $161.32 billion by 2030 with a
                compound annual growth rate (CAGR) of 10.57%. Europe leads the
                market with favorable regulations and high internet penetration,
                while the Asia-Pacific region experiences rapid growth due to
                increased connectivity and smartphone use. North America also
                shows notable growth, especially in the U.S., where several
                states have legalized online gambling.
              </div>
            </div>
            <div className="mt-8">
              <div className="read-more-btn hidden md:flex">
                <CustomButton
                  text="Read More"
                  width="w-[139px] md:w-[217px] h-[42px] md:h-[50px] sm:w-[35%] w-[60%] text-[14px]"
                  isBackgroundRed={false}
                  textColor="text-black"
                  iconColor="red-200"
                  textSize="text-lg"
                  onClick={handleClick}
                  iconName="chevronRight"
                  border="border-2 border-[#F01E2A] flex justify-between items-center"
                />
              </div>
              <Link
                href="/"
                className="flex md:hidden items-center justify-between py-[20px] pl-[15px] md:pl-[10%] pr-[15px] md:pr-[38px] w-[139px] md:w-[326px] xl:w-[486px] h-[42px] md:h-[56px] xl:h-[76px] max-w-full rounded-[10px] font-openSans font-bold text-[14px] xl:text-[24px] leading-[108%] text-[#606060] hover:duration-300 hover:opacity-50 border-[3px] border-solid border-[#F01E2A] mt-[16px]"
                onClick={handleClick}
              >
                Read More
                <Image
                  src={BtnArrowRed}
                  alt="img"
                  className="w-[10px] xl:w-[14px] xl:h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
