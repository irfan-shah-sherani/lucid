'use client';

import { useState, RefObject } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { gsap } from "gsap";

interface NavbarProps {
  navBoxRef: RefObject<HTMLDivElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ navBoxRef, menuRef }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        gsap.fromTo(
          menuRef.current,
          {
            y: -60,
            scale: 0.96,
            transformOrigin: "top center"
          },
          {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out"
          }
        );
      }, 0);
    } else {
      gsap.to(menuRef.current, {
        y: -40,
        scale: 0.96,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1001] opacity-100 flex flex-row justify-center items-center py-5 pointer-events-none">
      <div
        ref={navBoxRef}
        className={`flex gap-40 py-2 px-10  justify-between items-center pointer-events-auto rounded-md transition-all duration-500 ease-in-out text-white
          ${isOpen 
            ? "bg-white/90 backdrop-blur-md shadow-md border border-black" 
            : "bg-transparent border border-transparent shadow-none "
          }`}
      >
        
        {/* Nav Links */}
        <div className="text-2xl flex flex-row gap-6 font-semibold text-center transition-all duration-300">
          <div className="relative cursor-pointer hover:text-amber-500 pb-1 group transition duration-300">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div className="relative cursor-pointer hover:text-amber-500 pb-1 group transition duration-300">
            Portal
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div className="relative cursor-pointer hover:text-amber-500 pb-1 group transition duration-300">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div className="relative cursor-pointer hover:text-amber-500 pb-1 group transition duration-300">
            Blog
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>

        {/* Game Icon Link */}
        <a
          href="/game"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded transition-colors duration-300"
        >
          <IoGameControllerOutline 
            size={30} 
            className="cursor-pointer text-white transition-colors duration-300" 
          />
        </a>
      </div>
    </nav>
  );
}