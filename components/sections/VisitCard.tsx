import React from "react";
import Image from "next/image";
import Link from "next/link";
import BtnArrow from "@/public/btn-arrow-banner.png";
const handleClick = () => {
  console.log("Button clicked");
};
function VisitCard() {
  return (
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
  );
}

export default VisitCard;
