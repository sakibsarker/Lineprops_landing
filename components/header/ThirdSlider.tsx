import Image from "next/image";

export default function ThirdSlider() {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      {/* <div className="absolute top-0 left-0 w-full h-[85vh] z-0">
        <Image
          src="/hero2bg.png" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div> */}
      {/* <div className="h-[85vh] w-full bg-gradient-to-r from-[#ff0033] via-[#cc0033] to-[#660033]"> */}
      <div className="absolute top-0 left-0 w-full h-[85vh] z-0">
        <Image
          src="/hero1bg.png" // Replace with your background image path
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
                <span className="font-light">
                  Seamlessly integrated with the
                </span>
                <br />
                <span className="font-bold">
                  world's leading casino and gaming
                </span>{" "}
                <span className="font-light">platforms</span>
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
                  src="/slider3image.png"
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
