import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedComponent from "../AnimatedComponent";
import CustomButton from "../customButton";
import BtnArrowRed from "@/public/btn-arrow-red.png";

function NewsSection() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="md:px-12 px-[17px] bg-white" id="news">
      <div className="max-w-screen-3xl mx-auto pt-[40px] pb-[50px] lg:pt-[86px] lg:pb-[150px]">
        <AnimatedComponent delay={0}>
          <div className="tracking-widest text-md md:text-[25px] lg:text-[30px] xl:text-[36px] text-[#333333] font-openSans">
            NEWS
          </div>
        </AnimatedComponent>
        <AnimatedComponent delay={0.1}>
          <div className="text-4xl md:text-8xl leading-[107%] py-[20px] sm:py-[30px] lg:py-[40px] font-openSans font-light text-[#666]">
            Lorem Ipsum is <br /> simply dummy text of
            <br /> the printing and.
          </div>
        </AnimatedComponent>
        <div className=" lg:grid grid-cols-12 items-end">
          <AnimatedComponent
            delay={0.2}
            className="sm:col-span-5 lg:col-span-6 justify-center max-w-[620px]"
          >
            <Image
              src="/news-article.png"
              height="800"
              width="1200"
              quality={100}
              className="rounded-[24px]"
              alt="Background Image"
            />
          </AnimatedComponent>
          <div className="col-span-5 lg:col-span-6 lg:ms-24 xl:mt-32 mt-8 text-[#666]">
            <AnimatedComponent delay={0.4} className="mt-8">
              <div className="font-openSans font-regular text-[13px] md:text-[20px] leading-[185%] md:leading-[150%] text-[#666] xl:max-w-[400px] xl:text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div>
            </AnimatedComponent>
            <AnimatedComponent delay={0.5} className="mt-8">
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
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
