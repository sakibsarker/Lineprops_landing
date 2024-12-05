"use client"
import React, { FC } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number; // Optional offset property
}

const NavLink: FC<NavLinkProps> = ({ href, children, className, offset = 0 }) => {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={`hover:text-red-500 focus:text-red-500 ${className}`}
      onClick={() => scrollToSection(href)}
    >
      {children}
    </button>
  );
};

export default NavLink;
