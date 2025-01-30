"use client";

import React from "react";
import { Sparkles, Lock, Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import smartox from "@/app/images/Smartox-Logo-01.png";

interface HeaderProps {
  scrolled: boolean;
}

const menuItems = [
  {
    label: "Features",
    href: "#features",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    label: "How it Works",
    href: "#how-it-works",
    icon: <Play className="w-4 h-4" />,
  },
  {
    label: "Pricing",
    href: "#pricing",
    icon: <Lock className="w-4 h-4" />,
  },
];

export function Header({ scrolled }: HeaderProps) {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="flex items-center gap-2 text-xl font-bold">
          <Phone
            className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`}
          />
          <span className={scrolled ? "text-black" : "text-white"}>
            SmartOX
          </span>
        </div> */}
        <Image src={smartox} alt="SmartOX" width={150} height={60} className={scrolled ? "invert-0" : "invert"} />

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`group flex items-center gap-2 py-2 px-4 rounded-full relative
                ${
                  scrolled
                    ? "text-black hover:bg-black/5"
                    : "text-white hover:bg-white/10"
                } 
                transition-all duration-300 hover:scale-105`}
            >
              <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                {item.icon}
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className={`${
              scrolled ? "text-black" : "text-white"
            } hover:opacity-80 transition-opacity hidden md:flex items-center gap-1`}
          >
            Contact Us
          </a>
          <a
            href="#get-started"
            onClick={(e) => handleScroll(e, "#get-started")}
            className={`${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-opacity-90"
            } px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group cursor-pointer`}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>
    </header>
  );
}
