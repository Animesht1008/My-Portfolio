const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(220,38,38,0.9)]">
              ANIMESH<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </div>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase">
              // DEVELOPER SERIES &bull; SEASON 2026
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-red-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Direct Contact Strip */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-white/60 -mt-4">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:animeshtiwari1875@gmail.com" className="hover:text-red-500 transition-colors tracking-wider">
              animeshtiwari1875@gmail.com
            </a>
            <a href="tel:+919691433656" className="hover:text-red-500 transition-colors tracking-wider">
              +91 96914 33656
            </a>
          </div>
          <a
            href="/Animesh_Tiwari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest font-bold"
          >
            Download Resume &rarr;
          </a>
        </div>

        {/* Middle Section: Socials & External Profiles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Animesht1008" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              GitHub //
            </a>
            <a 
              href="https://www.linkedin.com/in/animesh-tiwari-50731a1b3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              LinkedIn //
            </a>
            <a 
              href="https://leetcode.com/u/AnimeshT1008/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              LeetCode //
            </a>
            <a 
              href="https://codeforces.com/profile/AnimeshT1008" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              Codeforces //
            </a>
            <a 
              href="https://www.codechef.com/users/animesh1008" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              CodeChef //
            </a>
          </div>

          <div className="text-white/40 tracking-widest uppercase">
            LOCATION: INDIA
          </div>
        </div>

        {/* Bottom Copyright & Cinematic Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Animesh Tiwari. All Rights Reserved.</p>
          <p className="text-red-500/80">STREAMING WORLDWIDE &bull; BUILT WITH REACT & GSAP</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;