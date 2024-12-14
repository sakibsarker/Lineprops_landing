import Image from "next/image";

export default function FourSlider() {
  return (
    <div className="relative min-h-screen bg-[#EEEEEE]">
      <div className="absolute top-0 left-0 w-full h-[85vh] z-0">
        <Image
          src="/hero2bg.png" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />

        <div className="relative mx-auto px-6 pt-20 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              <h1 className="text-[2.75rem] leading-[1.2] tracking-tight">
                <span className="font-light">The</span>{" "}
                <span className="font-bold">most advance</span>{" "}
                <span className="font-light">and</span>
                <br />
                <span className="font-bold">
                  complete betting software
                </span>{" "}
                <span className="font-light">solution in the market</span>
              </h1>
              <button className="px-10 py-3.5 border border-white/80 rounded-full text-white text-lg hover:bg-white/10 transition-colors duration-300">
                Book a Demo
              </button>
            </div>

            {/* Right Column - Device Mockups */}
            <div className="relative h-[460px]">
              {/* Landscape Mobile/Tablet - Positioned to extend below */}
              <div className="absolute -bottom-24 right-12 w-full">
                <Image
                  src="/slider4image.png"
                  alt="Live dealer interface"
                  width={1800}
                  height={1200}
                  className="w-full h-auto "
                />
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
