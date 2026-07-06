import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  // Automatically pull the current calendar year to keep your footer up to date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full h-full border-t border-white/10   bg-zinc-1000 text-slate-400 pt-20 pb-8 overflow-hidden">
      

      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-12">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight capitalize">
              Irfan
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Building premium, full-stack digital products and scalable cloud infrastructure with meticulous design.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono tracking-widest text-white uppercase font-bold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Insights links */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono tracking-widest text-white uppercase font-bold">
              Insights
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Service</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Geolocation Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono tracking-widest text-white uppercase font-bold">
              Location
            </h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Irfan Khan Sherani<br />
              Islamabad, Pakistan
            </p>
          </div>

        </div>

        {/* Middle Row: Unified Contact Info Block */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Get In Touch</h4>
            <a 
              href="mailto:mrirfanshahsherani@gmail.com" 
              className="text-base text-slate-200 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              mrirfanshahsherani@gmail.com
            </a>
          </div>

          {/* Social Network Icon Array */}
          <div className="flex gap-4 text-xl text-slate-400">
            <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-amber-400  transition-all duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-amber-400  transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-amber-400  transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="mailto:mrirfanshahsherani@gmail.com" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-amber-400  transition-all duration-300">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Metadata Layer */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {currentYear} Irfan Khan. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">Refund & Cancellation</a>
          </div>
        </div>

      </div>
    </footer>
  );
}