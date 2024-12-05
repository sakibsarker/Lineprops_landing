"use client";

import React, { useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import plusIcon from "@/public/+.png";
import CustomButton from "../customButton";
import AnimatedComponent from "../AnimatedComponent";
import { inView, useInView } from "framer-motion";
import NumberAnimator from "../NumberAnimator";
import BtnArrow from "@/public/btn-arrow-banner.png";
import ModalImg from "@/public/modal-image.png";
import ModalClose from "@/public/modal-lay.png";
import MyModal from "../MyModal";

function AboutSection() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => {
    setShowMyModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-[#eeeeee] w-full px-24" id="about" ref={ref}>
      <div className="max-w-screen-3xl mx-auto ">
        <AnimatedComponent delay={0}>
          <div className="text-center -pt-8 sm:pt-6 pb-[16px] md:pt-[24px] md:pb-[50px] lg:mt-[50px] xl:-mt-0 xl:py-[50px] xl:pt-[100px] xl:px-[50px] mt-10 2xl:mt-6 2xl:pt-[130px]">
            <p className="font-openSans font-light text-[12px] md:text-[24px] xl:text-[32px] leading-[146%] text-gray-500 tracking-[-0.36px] md:tracking-[-0.96px]">
              The <span className="font-bold text-[#525252]">LinePros</span>{" "}
              team developed products to address gaps in the marketplace and
              build superior solutions. Since our inception in 2010, our
              development has continued to close vulnerabilities and highlight
              opportunities. Our industry knowledge and technological expertise
              make us a necessary strategic partner.
            </p>
          </div>
        </AnimatedComponent>
        <div className="md:grid grid-cols-2 xl:grid-cols-7 justify-between gap-x-[20px] xl:gap-x-[73px] items-center mt-[16px] md:mt-[55px] mb-[17px] md:mb-[39px]">
          <AnimatedComponent
            delay={0.1}
            className="col-span-1 xl:col-span-3 mb-[38px] md:mb-0"
          >
            <div className="flex relative mx-auto md:ml-0 w-[238px] md:w-[520px] h-[144px] md:h-[250px] xl:h-[347px] max-w-full">
              <Image
                src={ModalImg}
                alt="img"
                className="rounded-[30px] object-cover w-full h-full cursor-pointer"
                onClick={() => setShowMyModal(true)}
              />
              <Image
                src={ModalClose}
                alt="img"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer w-[20px] lg:w-auto"
                onClick={() => setShowMyModal(true)}
              />
            </div>
          </AnimatedComponent>
          <div className="col-span-1 xl:col-span-4">
            <AnimatedComponent
              delay={0.5}
              className="flex items-center md:max-w-[625px] mb-[24px] md:mb-[39px]"
            >
              <div className="flex min-w-[100px] xl:min-w-[177px] justify-end">
                <div className="font-archivo font-thin text-[50px] xl:text-[96px] leading-[108%] text-black md:text-[#666666]">
                  <NumberAnimator
                    isInView={isInView}
                    start={0}
                    end={14}
                    intervalSet={100}
                  />
                </div>
                <p className="font-archivo font-semibold text-[48px] md:text-[40px] xl:text-[80px] leading-[108%] text-[#BB1515] ml-[6px] xl:ml-[16px]">
                  +
                </p>
              </div>
              <div className="ml-[20px] xl:ml-[48px]">
                <p className="font-openSans font-light text-[12px] md:text-[16px] xl:text-[24px] leading-[125%] text-[##666]">
                  Years leading the industry with innovation driven by a
                  top-notch team
                </p>
              </div>
            </AnimatedComponent>
            <AnimatedComponent
              delay={0.5}
              className="flex items-center md:max-w-[625px]"
            >
              <div className="flex min-w-[100px] xl:min-w-[177px] justify-end">
                <div className="font-archivo font-thin text-[50px] xl:text-[96px] leading-[108%] text-black md:text-[#666666]">
                  <NumberAnimator
                    isInView={isInView}
                    start={0}
                    end={50}
                    intervalSet={20}
                  />
                </div>
                <p className="font-archivo font-semibold text-[48px] md:text-[40px] xl:text-[80px] leading-[108%] text-[#BB1515] ml-[6px] xl:ml-[16px]">
                  +
                </p>
              </div>
              <div className="ml-[20px] xl:ml-[48px]">
                <p className="font-openSans font-light text-[12px] md:text-[16px] xl:text-[24px] leading-[125%] text-[##666]">
                  Collaborators with extensive industry knowledge and great
                  motivation to develop innovative solutions
                </p>
              </div>
            </AnimatedComponent>
          </div>
        </div>

        <div className="flex flex-col-reverse md:grid grid-cols-2 xl:grid-cols-7 justify-between gap-x-[20px] xl:gap-x-[73px] items-center pt-[17px] md:pt-[39px] pb-[30px] md:pb-[50px]">
          <AnimatedComponent delay={0.6} className="col-span-1 xl:col-span-3">
            <Link
              href="https://linepros.bet/"
              target="_blank"
              className="flex items-center justify-between py-[20px] pl-[10%] md:pl-[15%] pr-[10%] md:pr-[38px] w-[269px] md:w-[326px] xl:w-[520px] h-[43px] md:h-[56px] xl:h-[76px] max-w-full bg-[#F01E2A] rounded-[10px] font-openSans font-bold text-[14px] xl:text-[24px] leading-[108%] text-[#EEEEEE] hover:duration-300"
              onClick={handleClick}
            >
              VISIT OUR LIVE DEMO SITE
              <Image
                src={BtnArrow}
                alt="img"
                className="w-[6px] xl:w-[14px] xl:h-auto"
              />
            </Link>
          </AnimatedComponent>
          <AnimatedComponent delay={1} className="col-span-1 xl:col-span-4">
            <p className="font-openSans font-light text-[12px] md:text-[18px] xl:text-[32px] leading-[146%] text-[##666] tracking-[-0.36px] md:tracking-[-0.96px] xl:max-w-[636px] text-center md:text-left mb-[28px] md:mb-0">
              100% stable, customizable, and integration-friendly.
              <Link
                href="https://linepros.bet/"
                target="_blank"
                className="font-bold hover:duration-300 hover:text-[#F01E2A]"
              >
                Visit our demo website
              </Link>{" "}
              , create a free user account, and explore all the features our
              software offers for your business.
            </p>
          </AnimatedComponent>
        </div>
      </div>
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </div>
  );
}

export default AboutSection;