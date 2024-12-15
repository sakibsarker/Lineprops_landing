import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SecondSlider() {
  const ref = useRef(null); // Create a ref to track the element
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Track visibility

  const slideVariant = {
    hidden: { x: -200, y: -100 }, // Initial position (no movement)
    visible: {
      x: -100,
      y: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    }, // Moves left
  };

  return (
    <div className="relative min-h-screen ">
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
                <motion.span
                  className="font-light block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Maximize your profits with
                </motion.span>
                <motion.span
                  className="font-bold block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="font-light">the</span> most popular Live
                </motion.span>
                <motion.span
                  className="font-bold block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                  Betting Odds Service <span className="font-light">in</span>
                </motion.span>
                <motion.span
                  className="font-light block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  the market
                </motion.span>
              </h1>
              <button className="px-10 py-3.5 border border-white/80 rounded-full text-white text-lg hover:bg-white/10 transition-colors duration-300">
                Book a Demo
              </button>
            </div>

            {/* Right Column - Device Mockups */}
            <div className="relative h-[460px] ">
              {/* Tablet/Monitor Device */}
              <div className="absolute right-0 top-0 w-[90%]">
                <motion.div
                  className="relative overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.1 }} // Slightly larger on hover
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                  <Image
                    src="/slider2image.png"
                    alt="Stadium view with crowd"
                    width={1800}
                    height={1600}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Live indicator */}
                  <div className="absolute top-4 left-4 bg-black text-white text-sm px-4 py-1 rounded-md flex items-center gap-2">
                    LIVE
                    <div className="w-4 h-4 bg-red-700 rounded-full animate-blink"></div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Device */}
              <motion.div
                ref={ref}
                className="absolute -bottom-32 left-[2%] w-[280px]"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={slideVariant}
              >
                <div className="relative">
                  <Image
                    src="/slider2imagephn.png"
                    alt="Betting interface on mobile"
                    width={1800}
                    height={1600}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Gray section below */}
      <div className="h-[15vh] bg-[#EEEEEE]"></div>
    </div>
  );
}
