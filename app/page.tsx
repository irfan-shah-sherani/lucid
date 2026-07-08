'use client';

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonail";
import Footer from "@/components/Footer";
import Project from "../components/Project";

gsap.registerPlugin(ScrollTrigger);

interface PaintBlob {
  id: number;
  cx: number;
  cy: number;
}

export default function Home() {
  const menuRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const navBoxRef = useRef<HTMLDivElement>(null);

  const [blobs, setBlobs] = useState<PaintBlob[]>([]);
  const blobIdCounter = useRef(0);

  // --- IMAGE DIMENSIONS CONFIGURATION ---
  // Modify these values to resize your interactive image element globally.
  const imageSize = 500;

  useGSAP(() => {
    // Entrance Animations
    if (leftRef.current && leftRef.current.children) {
      gsap.from(leftRef.current.children, {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      });
    }

    if (rightRef.current) {
      gsap.from(rightRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }

    // Coordinated Pinned Timeline
    if (heroWrapperRef.current && navBoxRef.current) {
      gsap.set(navBoxRef.current, { scale: 0.92, y: -10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroWrapperRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        }
      });

      tl.to(navBoxRef.current, {
        scale: 1,
        y: 0,
        opacity: 1,
        backgroundColor: "var(--nav-bg, rgba(255, 255, 255, 0.4))",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        ease: "back.out(1.4)",
        duration: 0.3,
      }, "0.75");
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rightRef.current) return;

    const rect = rightRef.current.getBoundingClientRect();
    // Dynamically mapping coordinate space over configured SVG size map
    const x = ((e.clientX - rect.left) / rect.width) * imageSize;
    const y = ((e.clientY - rect.top) / rect.height) * imageSize;

    const newId = blobIdCounter.current++;
    setBlobs((prev) => [...prev, { id: newId, cx: x, cy: y }]);

    // Scoped microtask execution to target the element right after it mounts in the DOM
    setTimeout(() => {
      const element = document.getElementById(`html-blob-${newId}`);
      if (element) {
        gsap.fromTo(element,
          { attr: { r: 0 } },
          {
            attr: { r: 85 },
            duration: 0.4,
            ease: "power1.out",
            onComplete: () => {
              gsap.to(element, {
                attr: { r: 0 },
                duration: 0.8,
                delay: 0.6,
                ease: "power2.in",
                onComplete: () => {
                  setBlobs((prev) => prev.filter((b) => b.id !== newId));
                }
              });
            }
          }
        );
      }
    }, 0);
  };

  return (
    <main>
      <div className="relative min-h-screen  bg-zinc-900 transition-colors duration-300 overflow-x-hidden">


        <Navbar navBoxRef={navBoxRef} menuRef={menuRef} />

        <div ref={heroWrapperRef} className="w-full h-screen z-2 sticky top-0 flex items-center justify-center">
          <section className="flex items-center justify-between px-16 py-24 flex-col md:flex-row h-full w-full max-w-7xl mx-auto gap-8">

            {/* Left Block */}
            <div ref={leftRef} className="text-white flex flex-col gap-2 relative z-10 max-w-xl">
              <h1 className="text-5xl font-bold">
                I am Irfan shah
              </h1>
              <p className="text-xl text-gray-100 font-medium">Full Stack web dev</p>
              <div className="py-6">
                <button className="px-6 py-3 font-semibold rounded-full border border-white/20 cursor-pointer bg-white/100 backdrop-blur-md text-black hover:text-amber-400  transition-all duration-300 shadow-lg">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Block Container */}
            <div
              ref={rightRef}
              onMouseMove={handleMouseMove}
              className="relative flex items-center justify-center select-none overflow-visible group w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[700px] md:h-[700px]"
            >
              {/* Liquid glass floating rim overlay */}
              {/* <div className="absolute i/nset-0 rounded-3xl border border-white/15 border-white/5 bg-white/[0.01] backdrop-blur-[2px] pointer-events-none z-30 shadow-2xl" /> */}

              <svg
                viewBox={`0 0 ${imageSize} ${imageSize}`}
                width={imageSize}
                height={imageSize}
                className="w-full h-full relative z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] overflow-visible"
              >
                <defs>
                  {/* Fixed Gooey Filter: Standard deviation adjusted to 12 for smooth liquid fusion, while color matrix handles sharpening the final edge */}
                  <filter id="gooey-paint-filter" colorInterpolationFilters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="gooey"
                    />
                  </filter>

                  {/* Mask configuration utilizing the crisp isolated gooey group */}
                  <mask id="paint-reveal-mask" maskUnits="userSpaceOnUse">
                    <rect width={imageSize} height={imageSize} fill="#000000" />

                    {/* The filter runs inside the mask layer exclusively, maintaining crisp image composition */}
                    <g fill="#ffffff" filter="url(#gooey-paint-filter)">
                      {blobs.map((blob) => (
                        <circle
                          key={blob.id}
                          id={`html-blob-${blob.id}`}
                          cx={blob.cx}
                          cy={blob.cy}
                          r="0"
                        />
                      ))}
                    </g>
                  </mask>
                </defs>

                {/* LAYER 1: Base Portrait Image - Static Black & White */}
                <image
                  href="/BackB.png"
                  width={imageSize}
                  height={imageSize}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="inset(0% rounded 24px)"
                  className="select-none pointer-events-none"
                />

                {/* LAYER 2: Foreground Portrait Image - Crystal Clear Color reveal */}
                <image
                  href="/BackC.png"
                  width={imageSize}
                  height={imageSize}
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#paint-reveal-mask)"
                  clipPath="inset(0% rounded 24px)"
                  className="select-none pointer-events-none"
                />
              </svg>
            </div>

          </section>
        </div>
      </div>
      <About />
      <Skill />
      <Project />
      <Testimonial />
      <Footer />
    </main>
  );
}