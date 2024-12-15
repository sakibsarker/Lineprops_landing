import Image from "next/image";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function SocialConnect() {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "#",
      bgColor: "bg-[#0077B5]",
      hoverColor: "hover:bg-[#006396]",
      textColor: "text-white",
    },
    {
      icon: FaYoutube,
      href: "#",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-200",
      textColor: "text-[#FF0000]",
    },
    {
      icon: FaFacebookF,
      href: "#",
      bgColor: "bg-[#4C76BE]",
      hoverColor: "hover:bg-[#0E5FC1]",
      textColor: "text-white",
    },
    {
      icon: FaInstagram,
      href: "#",
      bgColor: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      hoverColor: "hover:opacity-90",
      textColor: "text-white",
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
      className="min-h-screen flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariant}
    >
      <div className="w-full mx-5 md:mx-16  rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <motion.div
            className="bg-[#f01e2a] p-12 md:p-16"
            whileHover={{ scale: 1.1 }} // Slightly larger on hover
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Stay Connected with
              <br />
              LinePros Online
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-12">
              Follow us on social media to get the latest updates, insights, and
              exclusive content. Join our community and stay ahead in the
              betting industry.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-xl ${social.bgColor} ${social.hoverColor} flex items-center justify-center transition-all duration-200 shadow-lg`}
                >
                  <social.icon className={`w-7 h-7 ${social.textColor}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 "
              whileHover={{ scale: 1.1 }} // Slightly larger on hover
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <Image
                src="/Placeholder-2.png"
                alt="LinePros Mobile App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
