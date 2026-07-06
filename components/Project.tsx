'use client';

import Image from "next/image";
import Pic1 from '@/public/1.jpg';
import Pic2 from '@/public/2.jpeg';
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    // 400vh matches 4 sections exactly
    <main ref={container} className="relative bg-zinc-1000 h-[400vh]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
      <Section3 scrollYProgress={scrollYProgress}/>
      <Section4 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

// SECTION 1
const Section1: React.FC<SectionProps> = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, -5]);
  
return (
  <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-stone-400 text-[3.5vw] flex flex-col items-center justify-center text-white">
    
    {/* Layout Wrapper: Maintained at your specific 80vh and 80vw dimensions */}
    <div className="relative h-[70vh] w-[70vw]">
      
      {/* --- DECORATIONS: Anchored exactly to the frame's top-right corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      
      {/* --- DECORATIONS: Anchored exactly to the frame's bottom-left corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>

      {/* Live Website Container */}
      <div className="w-full h-full overflow-hidden  bg-white">
        <iframe 
          src="https://asdf.international/.com"
          title="Embedded Live Website"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
      
      {/* Description Text: Absolutely positioned right below the live frame */}
      <p className="absolute top-[102%] left-1/2 -translate-x-1/2 w-full text-[2vw] text-center font-medium pointer-events-none drop-shadow-md">
        Live Demo
      </p>
      
    </div>

  </motion.div>
);
}

// SECTION 2
const Section2: React.FC<SectionProps> = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5], [5, 0, -5]);

  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-stone-600 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]" >
      <div className="relative h-[70vh] w-[70vw]">
      
      {/* --- DECORATIONS: Anchored exactly to the frame's top-right corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      
      {/* --- DECORATIONS: Anchored exactly to the frame's bottom-left corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>

      {/* Live Website Container */}
      <div className="w-full h-full overflow-hidden  bg-white">
        <iframe 
          src="https://asdf.international/.com"
          title="Embedded Live Website"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
      
      {/* Description Text: Absolutely positioned right below the live frame */}
      <p className="absolute top-[102%] left-1/2 -translate-x-1/2 w-full text-[2vw] text-center font-medium pointer-events-none drop-shadow-md">
        Live Demo
      </p>
      
    </div>
    </motion.div>
  );
}

// SECTION 3
const Section3: React.FC<SectionProps> = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [5, 0, -5]);
  
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-zinc-600 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <div className="relative h-[70vh] w-[70vw]">
      
      {/* --- DECORATIONS: Anchored exactly to the frame's top-right corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      
      {/* --- DECORATIONS: Anchored exactly to the frame's bottom-left corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>

      {/* Live Website Container */}
      <div className="w-full h-full overflow-hidden  bg-white">
        <iframe 
          src="http://localhost:3000/"
          title="Embedded Live Website"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
      
      {/* Description Text: Absolutely positioned right below the live frame */}
      <p className="absolute top-[102%] left-1/2 -translate-x-1/2 w-full text-[2vw] text-center font-medium pointer-events-none drop-shadow-md">
        Live Demo
      </p>
      
    </div>
    </motion.div>
  );
}

// SECTION 4: Reached at 75% scroll (0.75) and locks into place fully at 100% scroll (1.0)
const Section4: React.FC<SectionProps> = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0.5, 0.75, 1], [0.8, 0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.5, 0.75, 1], [5, 5, 0]);

  return (
    <motion.div style={{scale, rotate}} className="relative h-screen bg-neutral-700 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh">
     <div className="relative h-[70vh] w-[70vw]">
      
      {/* --- DECORATIONS: Anchored exactly to the frame's top-right corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -top-3 -right-3 z-10 pointer-events-none" ></div>
      
      {/* --- DECORATIONS: Anchored exactly to the frame's bottom-left corner --- */}
      <div className="absolute h-[80px] w-[12px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>
      <div className="absolute h-[12px] w-[80px] bg-black -bottom-3 -left-3 z-10 pointer-events-none" ></div>

      {/* Live Website Container */}
      <div className="w-full h-full overflow-hidden  bg-white">
        <iframe 
          src="https://www.shasab.com"
          title="Embedded Live Website"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
      
      {/* Description Text: Absolutely positioned right below the live frame */}
      <p className="absolute top-[102%] left-1/2 -translate-x-1/2 w-full text-[2vw] text-center font-medium pointer-events-none drop-shadow-md">
        Live Demo
      </p>
      
    </div>
    </motion.div>
  );
}