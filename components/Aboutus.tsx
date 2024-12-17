"use client";

import { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import MyModal from "./MyModal";
import { motion, useInView } from "framer-motion";

export default function Aboutus() {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => {
    setShowMyModal(false);
    document.body.style.overflow = "unset";
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
    <motion.div
      className="bg-[#EEEEEE] px-5 text-center pt-20 md:text-start md:px-16 lg:px-20 w-full "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariant}
    >
      <div className="grid grid-cols-1 gap-0 md:gap-16 lg:gap-20 md:grid-cols-2 lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col space-y-5 md:space-y-8 lg:space-y-16">
          <h1 className="text-xl md:text-5xl font-bold tracking-wide text-black ">
            Grow Your Business & <br />
            Ensure High Performance
          </h1>

          <p className="text-sm md:text-[17px] tracking-wide text-slate-700">
            Our solutions address critical challenges and create growth
            opportunities. Discover how LinePros delivers unmatched expertise to
            optimize your operations.
          </p>

          {/* Video Preview Container */}
          <div className="relative rounded-2xl bg-gray-200 shadow-lg">
            <motion.div
              className="relative aspect-[16/10] overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.1 }} // Slightly larger on hover
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <img
                src="/aboutvideoimg.png"
                alt="Platform Preview"
                className="h-full w-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <IoIosPlay
                  onClick={() => setShowMyModal(true)}
                  className="h-40 w-40 text-red-600"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-5 md:space-y-8 ">
          <p className="text-sm md:text-[17px] leading-relaxed text-slate-700 pt-5 md:pt-[30%]">
            The LinePros team developed products to address gaps in the
            marketplace and build superior solutions. Since our inception in
            2010, our development has continued to close vulnerabilities and
            highlight opportunities. Our industry knowledge and technological
            expertise make us a necessary strategic partner.
          </p>

          <div>
            <button className="rounded-full border-2 border-red-500 px-8 py-3 font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white">
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </motion.div>
  );
}
