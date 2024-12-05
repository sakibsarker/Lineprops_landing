"use client";
import Image from "next/image";
import Link from "next/link";
import BtnArrow from "@/public/btn-arrow-banner.png";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/public/--1.png";
import img2 from "@/public/--2.png";
import img3 from "@/public/--3.png";
import img4 from "@/public/--4.png";
import img5 from "@/public/img5.svg";
import img6 from "@/public/--6.png";
import img7 from "@/public/--7.png";
import img8 from "@/public/--8.png";
import img9 from "@/public/--9.png";
import img10 from "@/public/--10.png";
import img11 from "@/public/--11.png";
import img12 from "@/public/--12.png";
import img13 from "@/public/--13.png";
import img14 from "@/public/--14.png";
import img15 from "@/public/--15.png";
import img16 from "@/public/img16.svg";
import img17 from "@/public/img17.svg";
import img18 from "@/public/--18.png";
import img19 from "@/public/--19.png";
import img20 from "@/public/--20.png";
import img21 from "@/public/--21.png";
import { useEffect, useState } from "react";

const Images1 = [img1, img2, img3, img4];
const Images2 = [img5, img6, img7, img8];
const Images3 = [img9, img10, img11, img12];
const Images4 = [img13, img14, img15, img16];
const Images5 = [img17, img18, img19, img20];

const ImagesBox = [Images1, Images2, Images3, Images4, Images5];

function SliderFour() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const num = isMobile ? 2 : 3;
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: num,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  return (
    <div id="home" className="w-full mx-auto overflow-hidden ">
      <div className="w-full container h-full px-4 md:px-10 m-auto overflow-hidden md:grid grid-cols-12 md:col-span-4 flex gap-2 justify-between items-center ">
        <div className="col-span-6 xl:col-span-5 flex  top-0 md:top-[14%] xl:top-[12%]  items-center ">
          <div className="md:text-3xl md:mx-0 lg:text-5xl text-white xl:-mt-20  w-full max-w-[615px]">
            <div className="w-full flex items-center ">
              <div className="font-openSans text-start font-light text-[20px] md:mx-2 md:text-[36px] xl:text-[42px] leading-[1.2] text-white max-w-[286px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[460px]">
                <TextGenerateEffect
                  words="Seamlessly integrated with the world's leading casino and gaming platforms"
                  className="font-openSans font-light text-[16px] md:mx-2 md:text-[26px] lg:text-[34px] xl:text-[40px] leading-[1.1] text-white max-w-[286px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[460px] text-start tracking-[1.2]"
                  duration={1.4}
                  boldWords={["world's", "leading", "casino", " and", "gaming"]}
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
                className="w-[6px] xl:w-auto xl:h-auto"
              />
            </Link>
          </div>
        </div>
        <div className="xl:col-span-7 col-span-6 overflow-hidden w-full">
          <div className="col-span-12 overflow-hidden w-full h-full">
            <Slider {...settings} className="overflow-hidden w-full h-full ">
              {ImagesBox.map((imgBox, index) => (
                <div key={index} className="w-full  xl:-mt-4">
                  <div className="grid grid-cols-4 xl:-gap-10 w-full">
                    {imgBox.map((img, i) => (
                      <div key={i} className="w-auto ">
                        <Image
                          src={img}
                          className="w-auto h-auto "
                          alt={`Image ${index + 1}-${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderFour;
