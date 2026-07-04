export default function Footer() {
  return (
    <footer className="footer w-full bg-[#0A0A0A] text-white py-8 sm:py-12 md:py-16 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
        <a
        href="#hero"
        onClick={(e) => handleScroll(e, "hero")}
        className="font-black text-lg sm:text-2xl tracking-tight text-white no-underline"
        nstyle={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Vj.
        </a>
          <p className="text-[10px] sm:text-[11px] text-[#CFCFCF] mt-2 tracking-wider uppercase">
            Developer
          </p>
        </div>

        {/* Center - Social Links */}
        <div className="socials flex gap-4 sm:gap-6 md:gap-8 items-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jeeva-v-123000264"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5 transition-all duration-300 hover:text-[#FFD400]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jeevav73"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5 transition-all duration-300 hover:text-[#FFD400]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" stroke="none">
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.67 5.33-5.21 5.62.41.36.77 1.06.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* Gmail */}
          <a
            href="mailto:jeevav7305@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5 transition-all duration-300 hover:text-[#FFD400]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 6 10 7 10-7" />
            </svg>
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-center md:text-right">
          <p className="text-[10px] sm:text-[11px] text-[#CFCFCF] tracking-wider">
            © 2026 Vj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}