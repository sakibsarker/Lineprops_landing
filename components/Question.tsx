"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BtnArrow from "@/public/btn-arrow-banner.png";
export default function Question() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "How does LinePros handle large volumes of traffic, especially during major events?",
      answer:
        "LinePros is designed to handle high volumes of traffic without compromising performance, which is crucial during peak betting times such as major sports events. Our platform uses a scalable infrastructure that dynamically adjusts to increasing user demands. We also employ load-balancing techniques to ensure that your site remains responsive and stable, even when thousands of users are placing bets simultaneously.",
    },
    {
      question:
        "What types of promotions and bonuses can I offer through the LinePros platform?",
      answer:
        "LinePros allows you to create and manage a wide variety of promotions and bonuses, including welcome bonuses, deposit matches, free bets, and loyalty programs. The platform provides the flexibility to tailor these offers to specific user segments or events. You can also track the performance of each promotion to optimize your marketing strategies and increase customer engagement.",
    },
    {
      question:
        "How does LinePros ensure regulatory compliance for different jurisdictions?",
      answer:
        "LinePros is built with compliance in mind, supporting multiple regulatory frameworks across different jurisdictions. Whether you operate in Europe, North America, or other regions, our platform adheres to local laws and industry standards. We regularly update the software to reflect changes in regulations, ensuring that your platform remains compliant with licensing requirements, responsible gaming practices, and data protection laws.",
    },
    {
      question: "How customizable is the reporting and analytics on LinePros?",
      answer:
        "LinePros offers robust reporting and analytics tools that can be fully customized to meet your business needs. You can generate detailed reports on user activity, financial performance, bet patterns, and more. The platform allows you to set up automated reports and custom dashboards to monitor key performance indicators (KPIs) in real time, giving you the insights needed to make data-driven decisions.",
    },
    {
      question:
        "Can LinePros support multi-language and multi-currency options?",
      answer:
        "Yes, LinePros is designed to support a global audience, providing multi-language and multi-currency capabilities. You can configure the platform to offer localized content, payment options, and user interfaces for different regions. This feature is particularly beneficial for operators looking to expand into new markets or cater to diverse customer bases.",
    },
    {
      question:
        "What is the onboarding process for new users on the LinePros platform?",
      answer:
        "LinePros offers a seamless onboarding process for new users, designed to be quick and intuitive. From account creation to the first deposit and bet placement, the platform provides step-by-step guidance to ensure that users can start betting with ease. You can also customize the onboarding experience to include welcome messages, tutorials, and promotional offers tailored to first-time users.",
    },
    {
      question:
        "What kind of ongoing support and updates can I expect from LinePros?",
      answer:
        "At LinePros, we provide ongoing technical support and regular software updates to ensure your platform remains cutting-edge and fully operational. Our team monitors the platform 24/7 to proactively address any technical issues that may arise. Additionally, we offer continuous updates that include new features, security enhancements, and performance improvements, ensuring that your betting platform stays competitive and secure.",
    },
  ];

  return (
    <div className="container mx-auto py-10 md:py-48">
      <div className="flex flex-col-reverse items-start justify-between md:flex-row gap-10">
        <div className="lg:w-7/12 w-full">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  className={`border rounded-lg ${
                    activeIndex === index ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <button
                    className={`rounded-lg flex justify-between items-center w-full p-4 text-left focus:outline-none ${
                      activeIndex === index
                        ? "red_transparent"
                        : "bg-transparent"
                    } `}
                    onClick={() => toggleAnswer(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-lg tracking-wide text-white">
                      {faq.question}
                    </span>
                    <motion.span
                      className="text-xl text-white"
                      initial={false}
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeIndex === index ? (
                        <FaMinus className="font-light" />
                      ) : (
                        <FaPlus className="font-light" />
                      )}
                    </motion.span>
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key={`answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="p-4 py-10 mt-2 text-white border-[1px] border-gray-300 rounded-lg"
                        id={`faq-answer-${index}`}
                      >
                        <p className="font-light tracking-wide text-lg text-white">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-4/12 w-full flex flex-col text-center md:text-start justify-center mt-3 lg:mt-0 lg:pl-6">
          <h1 className="font-archivo text-3xl md:text-4xl leading-[1.2] text-white max-w-[500px] md:max-w-[480px] xl:max-w-[630px] font-bold">
            Frequently Asked Questions
          </h1>
          <p className="my-5 text-md md:text-lg leading-[1.3] font-thin text-[#FFFFFF]">
            Our solution is built to deliver reliability, scalability, and
            customization, with features that support the seamless operation of
            your betting business.
          </p>

          <Link
            href=""
            target="_blank"
            className="w-[50%] md:w-[70%] mx-auto md:mx-0 flex justify-center tracking-wider font-openSans font-bold text-sm md:text-lg text-white py-3 md:py-3 rounded-lg border-[2px] md:border-[2px] border-solid border-white hover:duration-300 btn-2"
          >
            Book a Demo Now!
          </Link>
        </div>
      </div>
    </div>
  );
}
