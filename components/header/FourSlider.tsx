import { motion } from "framer-motion";
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
                <motion.span
                  className="font-light block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  The <span className="font-bold">most advance </span>and
                </motion.span>
                <motion.span
                  className=" font-bold block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  complete betting
                </motion.span>
                <motion.span
                  className="font-bold block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                  software <span className="font-light">solution in</span>
                </motion.span>
                <motion.span
                  className="font-light block"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  solution in the market
                </motion.span>
              </h1>

              <button className="px-10 py-3.5 border border-white/80 rounded-full text-white text-lg hover:bg-white/10 transition-colors duration-300">
                Book a Demo
              </button>
            </div>

            {/* Right Column - Device Mockups */}

            <div className="relative h-[460px]">
              {/* Landscape Mobile/Tablet - Positioned to extend below */}
              <div className="absolute -bottom-24 right-12 w-full">
                <motion.img
                  src="/slider4image.png"
                  alt="Live dealer interface"
                  width={2000}
                  height={1800}
                  className="w-full h-auto "
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
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
