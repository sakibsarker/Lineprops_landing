"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBar from "@/public/header-bar.svg";
import HeaderClose from "@/public/header-close.png";
import NavLink1 from "./NavLink1";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children, className }) => (
  <Link href={href} className= {` hover:text-red-500 focus:text-red-500 ${className}`}>
    {children}
  </Link>
);

interface HeaderProps {
  scrolled: boolean;
}

const Header: FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset the overflow when the component is unmounted or isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <motion.div
      className={` fixed z-40 w-full py-[13px] md:py-5 px-[13px] md:px-0 ${
        scrolled ? "bg-[#121722e1]" : "bg-transparent"
      } transition-colors duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between md:p-4 lg:py-4 lg:pl-[72px] lg:pr-[107px]">
        <motion.div
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavLink href="/">
            <Image
              src="/Linepros.svg"
              height="80"
              width="166"
              quality={100}
              alt="Background Image"
            />
          </NavLink>
        </motion.div>
        <motion.div
          className="hidden md:flex gap-x-[25px] text-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavLink1 href="#home" offset={102}>Home</NavLink1>
          <NavLink1 href="#about" offset={102}>About</NavLink1>
          <NavLink1 href="#products" offset={50}>Products</NavLink1>
          <NavLink1 href="#news" offset={102}>News</NavLink1>
          <NavLink1 href="#contacts" offset={102}>Contact</NavLink1>
          <NavLink1 href="/" className="inline-flex justify-center items-center font-openSans font-bold text-[16px] leading-[100%] text-white px-[12px] py-[5px] w-[88px] h-[35px] rounded-[6px] bg-[#F01E2A] hover:duration-300 hover:text-white">SIGN IN</NavLink1>
        </motion.div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Image src={HeaderBar} alt="img" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
          <motion.div
            className=" bg-cover bg-top min-h-full md:hidden fixed inset-0 bg-[#121722e1] pt-[13px] pb-[42px] px-[20px] flex flex-col overflow-auto"
            id='home'
            style={{
              backgroundImage: "url('../background-menu-mobile.png')",
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <div className="flex justify-between items-center pb-[8px]">
              <NavLink href="/">
                <Image
                  src="/Linepros.svg"
                  height="80"
                  width="166"
                  quality={100}
                  alt="Background Image"
                />
              </NavLink>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {/* <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
                <Image src={HeaderClose} alt="img" className="w-[24px] aspect-square" />
              </button>
            </div>
            <div className="nav-open-bar-flex flex flex-col justify-between pt-[40px] height-minus-64">
              <div className="nav-open-bar-above">
                <nav className="flex flex-col gap-y-[8px] items-start ">
                  <button onClick={toggleMenu}>
                  <NavLink1 href="#home" className="font-archivo font-thin text-[40px] leading-[140%] text-white focus:outline-none focus:border-none" offset={30}>Home</NavLink1>
                  </button>
                  <button onClick={toggleMenu}>
                    <NavLink1 href="#about" className="font-archivo font-thin text-[40px] leading-[140%] text-white focus:outline-none focus:border-none" offset={30}>About</NavLink1>
                  </button>
                  <button onClick={toggleMenu}>
                    <NavLink1 href="#products" className="font-archivo font-thin text-[40px] leading-[140%] text-white focus:outline-none focus:border-none" offset={30}>Products</NavLink1>
                  </button>
                  <button onClick={toggleMenu}>
                    <NavLink1 href="#news" className="font-archivo font-thin text-[40px] leading-[140%] text-white focus:outline-none focus:border-none" offset={30}>News</NavLink1>
                  </button>
                  <button onClick={toggleMenu}>
                    <NavLink1 href="#contacts" className="font-archivo font-thin text-[40px] leading-[140%] text-white focus:outline-none focus:border-none" offset={30}>Contact</NavLink1>
                  </button>
                  <button onClick={toggleMenu}>
                    <NavLink1 href="/" className="font-archivo font-normal text-[40px] leading-[140%] text-white focus:outline-none focus:border-none">Sign in</NavLink1>
                  </button>
                </nav>
              </div>
              <div className="nav-open-bar-below">
                {/* <div className="font-openSans font-regular text-[18px] leading-[155%] text-[#999999] mt-[48px] space-y-2">
                  <div>56185 Oral Plaza, Derrickport, <br/> Maryland, 94901</div>
                  <p>(786) 292-8467 239979</p>
                  <p>hello@sight.com</p>
                </div> */}
                <div className="text-white text-sm mt-[72px] mb-[42px]">
                  <h3 className="mb-[24px] font-archivo font-medium text-[16px] leading-[140%] text-[#AC2020] tracking-[2.4px]">FOLLOW US</h3>
                  <div className="grid grid-cols-2 gap-4 ">
                    <div className="col-span-1 space-y-4">
                      <div>
                        <button  className="font-archivo font-medium text-[16px] leading-[140%] text-white hover:text-red-500">LinkedIn</button>
                      </div>
                      <div>
                      <button  className="font-archivo font-medium text-[16px] leading-[140%] text-white hover:text-red-500">Instagram</button>
                      </div>
                    </div>
                    <div className="col-span-1  space-y-4">
                      <div>

                    <button  className="font-archivo font-medium text-[16px] leading-[140%] text-white hover:text-red-500">Facebook</button>
                      </div>
                      <div>
                    <button  className="font-archivo font-medium text-[16px] leading-[140%] text-white hover:text-red-500">Youtube</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
