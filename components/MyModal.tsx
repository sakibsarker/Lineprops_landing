"use client";

import React, { FC, MouseEventHandler } from "react";
import Image from "next/image";
import Close from "@/public/xmark-solid.svg";
import { motion } from "framer-motion";

interface MyModalProps {
  visible: boolean;
  onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

const MyModal: FC<MyModalProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  if (visible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-[999] flex justify-center items-center"
        onClick={onClose}
      >
        <motion.div
          className="relative w-screen max-w-screen-lg mx-auto bg-gray-900 rounded-md p-9"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button onClick={onClose} className="absolute top-[5px] right-[5px]">
            <Image
              src={Close}
              alt="img"
              className="w-[20px] md:w-[30px] aspect-square"
            />
          </button>

          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/aVQTZHNjAac`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </>
  );
};

export default MyModal;
