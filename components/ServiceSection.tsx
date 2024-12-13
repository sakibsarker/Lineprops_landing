import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
}

const ServiceBlog = ({
  title,
  description,
  imageSrc,
  buttonText = "See More",
}: ServiceCardProps) => (
  <div className="flex flex-col">
    <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </div>
    <h3 className="text-3xl text-white font-medium mb-4">{title}</h3>
    <p className="text-white mb-6 flex-grow">{description}</p>
    <button className="flex items-center text-[#EE1D52] hover:text-[#ff2d64] transition-colors group">
      <span className="mr-2">{buttonText}</span>
      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

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
      imageSrc: "/blog3.png",
      buttonText: "Book Now",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
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
            <ServiceBlog
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
