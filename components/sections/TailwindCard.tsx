import React, { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { motion } from "framer-motion";

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

function TailwindCard() {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-5 px-12 w-screen h-full">
      {/* Container with Grid layout to show 2 cards per row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row gap-4 justify-center items-center">
        {cardItems.map((item, index) => (
          <motion.div
            key={index}
            className={`cardContainer ${
              flippedCardIndex === index ? "flip" : ""
            }`}
            whileHover={{ scale: 1.06 }} // Adds hover scaling
            transition={{ type: "spring", stiffness: 200, damping: 20 }} // Smooth spring effect
          >
            <div className="cardFlipper ">
              {/* Front Side */}
              <div className="side sideA border-[2px] border-[rgba(255,0,0,0.2)] flex flex-col justify-center items-center lg:gap-[16px]">
                <Image
                  src={`/why-linepros/${item.image}`}
                  alt="Background Image"
                  width={100}
                  height={100}
                  className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                />
                <h3 className="text-white font-archivo font-[700] text-md md:text-lg  leading-[110.6%] text-center md:px-[58px] px-[20px]">
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
                <p className="text-[7px] md:text-lg  text-white px-4 text-center font-openSans">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TailwindCard;
