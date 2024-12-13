import Image from "next/image";
import TailwindCard from "./sections/TailwindCard";

export default function LineProps() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full ">
      {/* Right Content */}
      <div className="w-full lg:w-2/5 py-16 md:py-20 bg-[#141627]">
        <div className="relative z-10 px-16 text-center">
          <h2 className="items-center text-2xl md:text-4xl font-semibold text-white">
            Why LinePros?{" "}
            <span className="font-normal">Trusted Solutions for Success</span>
          </h2>
          <p className="mt-6 text-md md:text-md leading-relaxed text-white">
            At LinePros, we redefine excellence with cutting-edge solutions
            tailored for your business. From scalability to unmatched expertise,
            we empower your success at every step.
          </p>
        </div>
      </div>
      {/* Left Content */}
      <div className="relative py-5 md:py-20 px-5 md:px-20 w-screen md:w-3/5 flex items-center justify-center">
        <Image
          src="/whyprops.png"
          alt="Background"
          fill
          className="absolute object-cover"
          priority
        />
        <TailwindCard />
      </div>
    </div>
  );
}
