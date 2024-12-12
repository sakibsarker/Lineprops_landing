import React from "react";

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

  return (
    <div className="bg-[#EEEEEE] px-5 md:px-16 w-full">
      <div className="py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 text-center md:text-start rounded-3xl ${
                service.isDark ? "bg-[#141627]" : "bg-white"
              }`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
