import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Marketing Services",
      description:
        "Unlock your brand's potential with our comprehensive marketing services. We create strategies designed to drive growth and increase visibility.",
      imageSrc: "/blog1.png",
    },
    {
      title: "Live Betting",
      description:
        "LinePros leads the industry with cutting-edge live betting solutions. Trusted by sportsbooks worldwide, we deliver unmatched performance and reliability.",
      imageSrc: "/blog2.png",
    },
    {
      title: "Software Demo",
      description:
        "Try our software with a personalized demo. Discover its intuitive interface, advanced tools, and features built to enhance efficiency.",
      buttonText: "Book Now",
      imageSrc: "/blog3.png",
    },
  ];

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
      className="min-h-screen py-10 md:py-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariant}
    >
      <div className="mx-5 md:mx-16">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-white text-lg max-w-3xl">
            We offer a complete range of services designed to elevate your
            business. From marketing strategies to live betting solutions, our
            expertise drives success across the gaming industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden mb-6"
                whileHover={{ scale: 1.1 }} // Slightly larger on hover
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              >
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-3xl text-white font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-white mb-6 flex-grow">{service.description}</p>
              <button className="flex items-center text-[#EE1D52] hover:text-[#ff2d64] transition-colors group">
                <span className="mr-2">{service.buttonText || "See More"}</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
