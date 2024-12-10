import Image from "next/image";
import TailwindCard from "./sections/TailwindCard";

export default function FeaturesSection() {
  return (
    <div className="flex min-h-screen w-full bg-[#141627]">
      {/* Right Content with 40% width */}
      <div className="w-2/5 p-8">
        {/* Overlay Content */}
        <div className="relative z-10 px-16 text-center">
          <h2 className="items-center text-4xl font-semibold text-white">
            Why LinePros?{" "}
            <span className="font-normal">Trusted Solutions for Success</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            At LinePros, we redefine excellence with cutting-edge solutions
            tailored for your business. From scalability to unmatched expertise,
            we empower your success at every step.
          </p>
        </div>
      </div>
      {/* Left Content with 60% width and Background Image */}
      <div className="relative w-3/5 flex items-center justify-center">
        {/* Background Image */}
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
