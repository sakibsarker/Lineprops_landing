import Image from "next/image";
import TailwindCard from "./sections/TailwindCard";
import { motion, AnimatePresence } from "framer-motion";

export default function LineProps() {
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
      className="flex flex-col md:flex-row min-h-screen w-full "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariant}
    >
      {/* Right Content */}
      <motion.div
        className="w-full lg:w-2/5 py-16 md:py-20 bg-[#141627]"
        whileHover={{ scale: 1.1 }} // Slightly larger on hover
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
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
      </motion.div>
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
    </motion.div>
  );
}
