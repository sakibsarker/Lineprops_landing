"use client";
import { useEffect, useState } from "react";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import NewsSection from "@/components/sections/news";
import ContactsSection from "@/components/sections/contacts-us";
import Header from "@/components/layouts/header";
import FooterR from "@/components/layouts/footerR";
import ProductsSection from "@/components/sections/product";
import CustomSlider from "@/components/ui/customeSlider";

export default function Home() {
  const [screenPoint, setScreenPoint] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Ensure window is defined
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScreenPoint(window.scrollY);
      setIsScrolling(window.scrollY > 50);
    };

    const sendMessage = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      window.parent.postMessage(
        {
          "full-content-height": height,
          "full-content-width": width,
        },
        "*"
      );
    };

    sendMessage(); // Send the message on initial load

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", sendMessage); // Send the message on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", sendMessage);
    };
  }, []);

  return (
    <div>
      {/* <Header scrolled={isScrolling} /> */}
      {/* <HomeSection /> */}
      <CustomSlider />
      <AboutSection />
      <ProductsSection />
      <NewsSection />
      <ContactsSection />
      <FooterR />
    </div>
  );
}
