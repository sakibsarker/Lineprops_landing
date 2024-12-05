"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import FeatureCard from "../featureCard";
import { sampleFeatures } from "@/bin/features";
import BtnArrow from "@/public/btn-arrow-banner.png";
import FAQs from "./faqs";
import { FaPlus } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
function ProductsSection() {
  const [alignSetting, setAlignSetting] = useState("center");
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const cardItems = [
    {
      title: "Comprehensive and Scalable Solution",
      content:
        "LinePros offers a complete software solution that is highly scalable, making it suitable for both new businesses and established operators. The platform can be tailored to the specific needs of any betting house, ensuring that it grows alongside the business and adapts to market demands.",
      image: "graph.svg",
    },
    {
      title: "Advanced Live Betting Capabilities",
      content:
        "LinePros excels in live betting features, offering real-time data integration, live event monitoring, and instant bet settlements. This capability is essential for modern bettors, and the platforms reliability ensures a smooth betting experience even during high-traffic events.",
      image: "RFID-Signal.svg",
    },
    {
      title: "Seamless Integration and Customization",
      content:
        "The software is built to integrate easily with third-party services such as payment gateways, casino products, and other digital solutions. Additionally, its customizable interface allows operators to brand and design their betting platform according to their vision and target market, creating a unique user experience.",
      image: "query-inner-join.svg",
    },
    {
      title: "Robust Security and Compliance",
      content:
        "LinePros prioritizes the security of both operators and bettors, offering cutting-edge encryption and compliance with regulatory standards in different jurisdictions. This ensures that all transactions and data are protected, giving operators peace of mind and building trust with customers.",
      image: "security-lock.svg",
    },
  ];
  const [backgroundImage, setBackgroundImage] = useState("../background-1.png");
  const handleClick = () => {
    console.log("Button clicked");
  };

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setAlignSetting("start");
      } else {
        setAlignSetting("center");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div className="mx-auto  h-full">
          <div className="justify-start flex md:-mt-16 overflow-hidden  w-full h-full">
            <div className="py-[40px] w-full h-full pl-4 2xl:pl-0 md:mt-8">
              <Swiper
                spaceBetween={24}
                slidesPerView={3}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                speed={4000}
                className="w-full py-10 "
              >
                {cardItems.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className={`flex justify-center items-center  3xl:w-[600px] max-w-[220px] sm:max-w-[320px] lg:max-w-[370px] xl:max-w-[500px] 2xl:max-w-[500px] h-full max-h-[640px] mx-2 md:mx-4 2xl:mx-14 my-4`}
                  >
                    {/* <div className="flex-none "> */}
                    <div
                      className={`cardContainer ${
                        flippedCardIndex === index ? "flip" : ""
                      }`}
                    >
                      <div className="cardFlipper">
                        {/* Front Side */}
                        <div className="side sideA border-[2px] border-[rgba(255,0,0,0.2)] flex flex-col justify-center items-center lg:gap-[16px]">
                          <Image
                            src={`/why-linepros/${item.image}`}
                            alt="Background Image"
                            width={100}
                            height={100}
                            className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                          />
                          <h3 className="text-white font-archivo font-[700] text-[16px] md:text-[26px] lg:text-[32px] leading-[110.6%] text-center md:px-[58px] px-[20px]">
                            {item.title}
                          </h3>
                          <button
                            onClick={() => handleFlip(index)}
                            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full border-white flex justify-center items-center outline-none border-[1px] font-openSans"
                          >
                            <FaPlus />
                          </button>
                        </div>

                        {/* Back Side */}
                        <div className="side sideB lg:gap-6">
                          <p className="text-[11px] md:text-[13px] lg:text-[16px] text-white px-4 text-center font-openSans">
                            {item.content}
                          </p>
                          <div
                            onClick={() => handleFlip(index)}
                            className="w-7 h-7 rounded-full border-[1px] border-white flex justify-center items-center text-center font-openSans"
                          >
                            <HiMinus />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
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

        <div className="md:px-12 px-[17px]">
          <div className="max-w-screen-3xl mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[40px]">
              {sampleFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
        <FAQs />
        <div className="w-full md:px-12 px-[17px] pb-[103px] md:pb-[110px] pt-[38px] md:pt-0">
          <div className="max-w-screen-3xl mx-auto md:grid grid-cols-6 xl:grid-cols-5 items-center">
            <div className="col-span-3 xl:col-span-2 mr-[30px]">
              <div className="mb-[26px] md:mb-[41px]">
                <p className="font-archivo font-thin text-[48px] md:text-[60px] xl:text-[80px] leading-[100%] text-white">
                  Ready for <br /> more?
                </p>
              </div>
              <Link
                href="#contacts"
                className="hidden md:flex items-center justify-between py-[20px] pl-[10%] md:pl-[10%] pr-[10%] md:pr-[38px] w-[269px] md:w-[326px] xl:w-[486px] h-[43px] md:h-[56px] xl:h-[76px] max-w-full bg-[#F01E2A] rounded-[10px] font-openSans font-bold text-[14px] xl:text-[24px] leading-[108%] text-[#EEEEEE] hover:duration-300"
                onClick={handleClick}
              >
                CONTACT OUR SALES TEAM
                <Image
                  src={BtnArrow}
                  alt="img"
                  className="w-[6px] xl:w-[14px] xl:h-auto"
                />
              </Link>
              <Link
                href="https://linepros.bet/"
                target="_blank"
                className="hidden md:flex items-center justify-between py-[20px] pl-[10%] md:pl-[10%] pr-[10%] md:pr-[38px] w-[269px] md:w-[326px] xl:w-[486px] h-[43px] md:h-[56px] xl:h-[76px] max-w-full rounded-[10px] font-openSans font-bold text-[14px] xl:text-[24px] leading-[108%] text-[#EEEEEE] hover:duration-300 border-[3px] border-solid border-[#F01E2A] mt-[16px] btn-2"
                onClick={handleClick}
              >
                VISIT OUR LIVE DEMO SITE
                <Image
                  src={BtnArrow}
                  alt="img"
                  className="w-[6px] xl:w-[14px] xl:h-auto"
                />
              </Link>
            </div>
            <div className="col-span-3 xl:col-span-3 flex justify-end">
              <Image
                src="/product-items-1.png"
                height="300"
                width="1000"
                quality={100}
                alt="Background Image"
                className="w-[797px] max-w-full object-cover shadow-lap-screen-box"
              />
            </div>
            <Link
              href="#contacts"
              className="flex md:hidden items-center justify-between py-[20px] pl-[15px] md:pl-[10%] pr-[15px] md:pr-[38px] w-[257px] md:w-[326px] xl:w-[486px] h-[55px] md:h-[56px] xl:h-[76px] max-w-full bg-[#F01E2A] rounded-[10px] font-openSans font-bold text-[14px] xl:text-[24px] leading-[108%] text-[#EEEEEE] hover:duration-300 mx-auto mt-[40px]"
              onClick={handleClick}
            >
              CONTACT OUR SALES TEAM
              <Image
                src={BtnArrow}
                alt="img"
                className="w-[10px] xl:w-[14px] xl:h-auto"
              />
            </Link>
            <Link
              href="https://linepros.bet/"
              target="_blank"
              className="flex md:hidden items-center justify-between py-[20px] pl-[15px] md:pl-[10%] pr-[15px] md:pr-[38px] w-[257px] md:w-[326px] xl:w-[486px] h-[55px] md:h-[56px] xl:h-[76px] max-w-full rounded-[10px] font-openSans font-bold text-[14px] xl:text-[24px] leading-[108%] text-[#EEEEEE] hover:duration-300 border-[3px] border-solid border-[#F01E2A] mt-[16px] mx-auto btn-2"
              onClick={handleClick}
            >
              VISIT OUR LIVE DEMO SITE
              <Image
                src={BtnArrow}
                alt="img"
                className="w-[10px] xl:w-[14px] xl:h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
