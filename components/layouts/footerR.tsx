import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterR = () => {
  return (
    <div className="bg-black text-white py-[30px] xl:py-10 px-6 md:px-6 lg:px-16 xl:px-20">
        <div className="relative z-10 max-w-screen-2xl mx-auto">
      <div className="relative mb-10">
        <Image
          src="/Linepros.svg" // Path to your image
          height="80"
          width="150"
          quality={100} // Optional: define the quality of the image
          alt="Background Image" // Optional: define a meaningful alt attribute
        />
      </div>

      <div className="grid md:grid-cols-12 md:gap-10 mb-6 sm:mb-8 md:mb-12 lg:mb-[62px]">
        <div className="relative md:col-span-7 lg:col-span-7 xl:col-span-6">
          <div className="grid max-[369px]:grid-cols-3 grid-cols-12 max-[369px]:gap-[5px] gap-[10px] md:gap-3 xl:gap-5">
            <div className="relative max-[369px]:col-span-1 col-span-3 lg:col-span-3 xl:col-span-3">
              <h2 className="text-xs md:text-sm lg:text-base xl:text-xl font-bold mb-[21px] md:mb-[12px] font-openSans">
                Navigation
              </h2>
              <ul>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Promotions
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Sports
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Live Betting
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Casino
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative max-[369px]:col-span-1 col-span-5 lg:col-span-4 xl:col-span-4">
              <h2 className="text-xs md:text-sm lg:text-base xl:text-xl font-bold mb-[21px] md:mb-[12px] font-openSans">
                Legal
              </h2>
              <ul>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Responsible Gambling
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    General Rules
                  </a>
                </li>
                <li className="mb-1 leading-[108%]">
                  <a
                    href="#"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base hover:text-red-600 leading-[108%]"
                  >
                    Betting Rules
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative max-[369px]:col-span-1 col-span-4 lg:col-span-4 xl:col-span-4">
              <h2 className="text-xs md:text-sm lg:text-base xl:text-xl  font-bold mb-[21px] md:mb-[12px] font-openSans">
                Contact us
              </h2>
              <ul className="">
                <li className="leading-[108%]">
                  <a
                    href="mailto:sales@linepros.com"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base  hover:text-red-600 leading-[108%]"
                  >
                    sales@linepros.com
                  </a>
                </li>
                <li className="leading-[108% break-a-word]">
                  <a
                    href="mailto:pedro.aybar@linepros.com"
                    className="font-openSans text-[10px] sm:text-sm lg:text-base  hover:text-red-600 leading-[108%] break-a-word"
                  >
                    pedro.aybar@linepros.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative max-md:mt-8 md:col-span-5 lg:col-span-5 xl:col-span-6 md:ml-auto">
          <div className="block w-full md:w-fit md:max-w-[521px] ml-auto">
            <div className="font-openSans text-xs md:text-sm lg:text-base xl:text-xl font-bold hidden md:block">
              Newsletter
            </div>
            <div className="md:mt-5 xl:mt-8">
              <div className="font-openSans mb-4 font-light text-xs md:text-[15px] leading-[107%] opacity-[0.9]">
                <span className="font-black opacity-[1]">Subscribe</span> and stay informed about updates, and relevant news.
              </div>
              <div className="w-full max-w-[491px] rounded-lg p-2 border-2 border-white flex">
                <input className="w-full bg-transparent outline-none text-sm md:text-base" />
                <div className="hidden md:flex">
                  <button className="font-openSans text-white text-xs pl-4 pr-2">
                    Subscribe
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:flex max-md:flex-col-reverse max-md:gap-6 md:grid md:grid-cols-12 md:gap-10 mb:mb-[48px] place-items-center lg:mb-[60px] xl:mb-[97px]">
        <div className="w-full md:col-span-7 lg:col-span-7 xl:col-span-6">
          <p className="font-openSans text-[10px] sm:text-xs md:text-[15px] text-start text-white font-light block max-md:opacity-[0.7]">
          Copyright © 2024 - All Rights Reserved. Only 18+ individuals allowed to register.
          </p>
        </div>
        <div className="w-full md:col-span-5 lg:col-span-5 xl:col-span-6">
          <div className="flex items-center justify-between gap-8 w-full md:max-w-[519px] md:ml-auto">
            <div className="flex items-center gap-4">
              <div className="font-openSans font-bold text-xs md:text-sm lg:text-base xl:text-xl">
                Follow us
              </div>
              <div className="hidden md:flex gap-3">
                <Link href="#" className="inline-flex justify-center items-center">
                  <Image
                    src="./facebook.svg"
                    height="20"
                    width="20"
                    alt="facebook icon"
                  />
                </Link>
                <Link href="#" className="inline-flex justify-center items-center">
                  <Image
                    src="./instra.svg"
                    height="36"
                    width="36"
                    alt="facebook icon"
                  />
                </Link>
                <Link href="#" className="inline-flex justify-center items-center">
                  <Image
                    src="./youtube.svg"
                    height="36"
                    width="56"
                    alt="facebook icon"
                  />
                </Link>
                <Link href="#" className="inline-flex justify-center items-center">
                  <Image
                    src="./linkedin.svg"
                    height="36"
                    width="36"
                    alt="facebook icon"
                  />
                </Link>
              </div>
            </div>
            <div className="relaive">
                <Image src="/18.png" width={60} height={40} alt="18" className="w-[60px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default FooterR;
