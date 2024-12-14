import Image from "next/image";

export default function SecondSlider() {
  return (
    <div className="relative min-h-screen bg-[#EEEEEE] ">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-[85vh] z-0">
        <Image
          src="/hero2bg.png" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="relative z-10 h-[85vh] w-full ">
        <div className="container mx-auto px-6 pt-20 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              <h1 className="text-[2.75rem] leading-[1.2] tracking-tight">
                <span className="font-light">Maximize your profits with</span>
                <br />
                <span className="font-bold">
                  the most popular Live Betting Odds Service
                </span>{" "}
                <span className="font-light">in the market</span>
              </h1>
              <button className="px-10 py-3.5 border border-white/80 rounded-full text-white text-lg hover:bg-white/10 transition-colors duration-300">
                Book a Demo
              </button>
            </div>

            {/* Right Column - Device Mockups */}
            <div className="relative h-[460px]">
              {/* Tablet/Monitor Device */}
              <div className="absolute right-0 top-0 w-[90%]">
                <div className="relative overflow-hidden shadow-2xl">
                  <Image
                    src="/slider2image.png"
                    alt="Stadium view with crowd"
                    width={1800}
                    height={1600}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Live indicator */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                </div>
              </div>

              {/* Mobile Device */}
              <div className="absolute -bottom-32 left-[2%] w-[280px]">
                <div className="relative">
                  <Image
                    src="/slider2imagephn.png"
                    alt="Betting interface on mobile"
                    width={1800}
                    height={1600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gray section below */}
      <div className="h-[15vh] bg-[#f5f5f5]"></div>
    </div>
  );
}
