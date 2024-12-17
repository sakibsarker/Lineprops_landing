import React from "react";
import { motion, useInView } from "framer-motion";

interface Service {
  title: string;
  description: string;
  isDark?: boolean;
}

const ServiceCard: React.FC = () => {
  const services: Service[] = [
    {
      title: "Innovative Software",
      description:
        "Leverage our cutting-edge software designed to optimize betting operations. Built for performance, reliability, and seamless scalability.",
      isDark: true,
    },
    {
      title: "Enterprise Service",
      description:
        "Empower your business with tailored enterprise solutions. From integration to customization, we meet the unique demands of your sportsbook.",
    },
    {
      title: "Custom Request",
      description:
        "Get personalized solutions crafted to fit your needs. At LinePros, we adapt to your requirements, ensuring your success in a competitive market.",
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
      className="bg-[#EEEEEE] px-5 md:px-2 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariant}
    >
      <div className="pt-10 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 h-[300px] md:h-[400px] lg:h-[300px] text-center md:text-start rounded-3xl ${
                service.isDark ? "bg-[#141627]" : "bg-white"
              }`}
              whileHover={{ scale: 1.1 }} // Slightly larger on hover
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <h2
                className={`text-[32px] font-medium mb-4 ${
                  service.isDark ? "text-white" : "text-[#14162E]"
                }`}
              >
                {service.title}
              </h2>
              <p
                className={`text-lg leading-relaxed mb-8 ${
                  service.isDark ? "text-white" : "text-gray-700"
                }`}
              >
                {service.description}
              </p>
              <button className="bg-[#F01E2A] text-white px-6 py-3 rounded-full hover:bg-[#D91847] transition-colors duration-200">
                Book a Demo
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
