import Image from "next/image";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function SocialConnect() {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "#",
      bgColor: "bg-[#0077B5]",
      hoverColor: "hover:bg-[#006396]",
    },
    {
      icon: FaYoutube,
      href: "#",
      bgColor: "bg-[#FF0000]",
      hoverColor: "hover:bg-[#CC0000]",
    },
    {
      icon: FaFacebookF,
      href: "#",
      bgColor: "bg-[#4C76BE]",
      hoverColor: "hover:bg-[#0E5FC1]",
    },
    {
      icon: FaInstagram,
      href: "#",
      bgColor: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      hoverColor: "hover:opacity-90",
    },
  ];

  return (
    <div className="min-h-screen bg-[#14162E] p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-[#F01E2A] p-12 md:p-16">
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
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            <div className="absolute inset-0">
              <Image
                src="/socailcontent.png"
                alt="LinePros Mobile App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
