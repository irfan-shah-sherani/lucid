import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger explicitly so it works cleanly across page refreshes
gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  // Explicitly type the HTML element references for TypeScript compiler safety
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Left Content Animation Check
    if (leftRef.current && leftRef.current.children) {
      gsap.from(leftRef.current.children, {
        x: -80, 
        duration: 0.4,
        stagger: 0.15,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    }

    // Right Frame Animation Check
    if (rightRef.current) {
      gsap.from(rightRef.current, {
        x: 80,
        duration: 0.4,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    }
  }); // Removed restrictive leftRef scope so rightRef can animate flawlessly

  return (
    <section className="relative w-full min-h-screen bg-zinc-1000 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 md:px-32 px-6 py-20 overflow-hidden">
      
      {/* Ambient background accent lighting */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Text Presentation Block */}
      <div
        ref={leftRef}
        className="w-full md:w-3/5 flex flex-col gap-6"
      >
        <div className="space-y-2">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
            Endorsements
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Client Testimonial
          </h1>
        </div>

        {/* The Quote Block Grid Layout */}
        <div className="flex flex-col sm:flex-row items-start gap-5 pt-2">
          {/* Accent border bar indicator */}
          <div className="w-14 sm:w-20 h-[3px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex-shrink-0 mt-3.5" />

          <div className="flex flex-col gap-5 text-slate-300">
            <p className="text-base md:text-lg leading-relaxed font-medium  text-slate-200">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
               ullam voluptatem quam voluptate soluta in praesentium officia alias
               fuga at. Error expedita officia alias, est explicabo tempore."
            </p>
            
            <div className="space-y-0.5">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Irfan Khan
              </h2>
              <h3 className="text-xs md:text-sm font-mono tracking-wider text-amber-400/90 font-semibold">
                CEO | Founder
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      
      <div
        ref={rightRef}
        className="group relative w-full sm:w-80 md:w-96 h-96 rounded-2xl p-1 bg-zinc-900 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-500 "
      >
        {/* <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 relative"> */}
          <img
            className="object-cover object-top w-full h-full filter grayscale contrast-110 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            src="/BackB.png"
            alt="Profile Portrait"
          />
        </div>
      {/* </div> */}
    </section>
  );
}