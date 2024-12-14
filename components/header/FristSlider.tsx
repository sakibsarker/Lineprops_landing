import Image from "next/image";

export default function FirstSlider() {
  return (
    <div className="min-h-screen relative flex items-start justify-start bg-[#EEEEEE]">
      {/* Background image using Tailwind CSS */}
      <div className="absolute inset-0 bg-[url('/hero1bg.png')] bg-cover bg-center h-[85vh]" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-3 items-start">
          {/* Left side - Device mockups */}
          <div className="relative w-[1100px]  -ml-[50px] -mb-16  z-10 col-span-2 ">
            <Image
              src="/slider1image.png"
              alt="Betting software interface on laptop"
              width={3000}
              height={2800}
              className="w-full h-auto  "
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white col-span-1 pt-20 relative z-20">
            <h1 className="text-5xl font-normal leading-tight mb-6">
              We are the{" "}
              <span className="text-white font-bold ">
                #1 online betting software
              </span>{" "}
              solution worldwide
            </h1>
            <button className="mt-8 px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300 text-lg font-medium">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
