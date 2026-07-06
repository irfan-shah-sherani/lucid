import { useRef } from "react";
import { gsap } from "gsap";
import React from "react";
import { 
  FaCode, FaTerminal, FaServer, FaNetworkWired, FaShieldAlt 
} from "react-icons/fa";
import { IconType } from "react-icons";

interface SkillNode {
  id: string;
  title: string;
  Icon: IconType;
  colorClass: string;
}

export default function GeometricOrbitalSkills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const categories: SkillNode[] = [
    {
      id: "frontend",
      title: "Frontend",
      Icon: FaCode,
      colorClass: "text-sky-400 border-sky-500/20",
    },
    {
      id: "backend",
      title: "Backend",
      Icon: FaTerminal,
      colorClass: "text-purple-400 border-purple-500/20",
    },
    {
      id: "devops",
      title: "Devops",
      Icon: FaServer,
      colorClass: "text-orange-400 border-orange-500/20",
    },
    {
      id: "networking",
      title: "Network",
      Icon: FaNetworkWired,
      colorClass: "text-emerald-400 border-emerald-500/20",
    },
    {
      id: "security",
      title: "Security",
      Icon: FaShieldAlt,
      colorClass: "text-amber-400 border-amber-500/20",
    },
  ];

  // Restored exact layout geometry configuration parameters from your original file
  const RADIUS = 220; 
  const CENTER_X = 275; 
  const CENTER_Y = 275; 

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-zinc-1000 flex flex-col justify-center items-center py-25 overflow-hidden select-none"
    >
      <div className="text-center z-10 mb-16 pointer-events-none">
        <h1 className="text-3xl font-light text-slate-100 tracking-tight">Technical Ecosystem</h1>
      </div>

      {/* Restored exact original wrapper frame sizes (w-[550px] h-[550px]) */}
      <div className="relative w-[550px] h-[550px] flex items-center justify-center z-10">
        
        {/* Restored exact SVG structure, dasharray properties, and positioning logic */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <circle 
            cx={CENTER_X} 
            cy={CENTER_Y} 
            r={RADIUS} 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.89)" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
          />
        </svg>

       

        {/* Nodes mapped with the exact trigonometric spacing logic from your source */}
        {categories.map((node, index) => {
          const baseAngle = (index * 2 * Math.PI) / categories.length - Math.PI / 2;
          const leftPos = CENTER_X + RADIUS * Math.cos(baseAngle);
          const topPos = CENTER_Y + RADIUS * Math.sin(baseAngle);

          return (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20"
              style={{ left: `${leftPos}px`, top: `${topPos}px` }}
            >
              <OrbNode node={node} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface OrbNodeProps {
  node: SkillNode;
}

function OrbNode({ node }: OrbNodeProps) {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const NodeIcon = node.Icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbRef.current) return;
    const { left, top, width, height } = orbRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(orbRef.current, {
      x: x * 2, 
      y: y * 2,
      duration: 0.25,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={orbRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-36 h-36 rounded-full border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer `}
    >
      <div className="flex flex-col items-center justify-center text-center p-2 pointer-events-none">
        <NodeIcon className={`text-4xl mb-1.5 `} color="green" />
        <span className="text-[16px] font-mono tracking-widest text-slate-100 uppercase">
          {node.title}
        </span>
      </div>
    </div>
  );
}