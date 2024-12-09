"use client";

import { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import MyModal from "./MyModal";

export default function Aboutus() {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => {
    setShowMyModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-[#EEEEEE] px-16 w-full ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Grow Your Business &{" "}
            <span className="block">Ensure High Performance</span>
          </h1>

          <p className="text-lg text-slate-600">
            Our solutions address critical challenges and create growth
            opportunities. Discover how LinePros delivers unmatched expertise to
            optimize your operations.
          </p>

          {/* Video Preview Container */}
          <div className="relative rounded-2xl bg-gray-200 shadow-lg">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
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
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-8">
          <p className="text-lg leading-relaxed text-slate-600">
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
    </div>
  );
}
