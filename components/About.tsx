'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const parRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Standard GSAP Context protects React from weird memory leaks or double renders
    const ctx = gsap.context(() => {
      
      // 1. Animate Heading
      if (aboutRef.current) {
        gsap.from(aboutRef.current, {
          opacity: 0,
          x: -100,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // 2. Animate Paragraph Text (SplitType)
      if (parRef.current) {
        // Setup initial split
        const split = new SplitType(parRef.current, { types: "chars" });

        if (split.chars && split.chars.length > 0) {
          // Set a clear starting baseline state so the opacity doesn't jump or drop out
          gsap.set(split.chars, { opacity: 0.2 });

          gsap.to(split.chars, {
            scrollTrigger: {
              trigger: parRef.current,
              start: "top 85%",
              end: "bottom 60%",
              scrub: 0.1,
            },
            opacity: 100,
            stagger: 0.02,
            ease: "power1.out",
          });
        }
      }
    }, containerRef); // Scope bindings are maintained safely here

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="flex relative w-full bg-zinc-950 z-[110] border border-amber-400 md:px-48 px-10 min-h-screen flex-col gap-6 text-white py-20 justify-center"
    >
      <h1 ref={aboutRef} className="text-4xl font-bold">
        About
      </h1>
      <div className="flex flex-col md:flex-row justify-around gap-6 items-baseline break-words">
        <div className="w-12 bg-amber-400 h-1 shrink-0"></div>
        <p ref={parRef} className="text-3xl text-slate-300 font-medium leading-relaxed">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          quae! Enim ex quis voluptatum soluta repudiandae iure? Illum recusandae
          quibusdam harum incidunt, ipsa asperiores exercitationem Enim ex quis
          voluptatum soluta repudiandae iure? Illum recusandae quibusdam harum
          incidunt, ipsa asperiores exercitationem
        </p>
      </div>
    </section>
  );
}