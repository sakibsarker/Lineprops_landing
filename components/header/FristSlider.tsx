import Image from "next/image";

export default function FirstSlider() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-20 md:px-6 lg:px-8">
      {/* Background image using Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src="/hero1bg.png" // Replace with your background image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Device mockups */}
          <div className="relative z-10">
            <Image
              src="/slider1image.png"
              alt="Betting software interface on laptop"
              width={1800}
              height={1600}
              className="w-full h-auto "
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white lg:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We are the{" "}
              <span className="text-white ">#1 online betting software</span>{" "}
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
