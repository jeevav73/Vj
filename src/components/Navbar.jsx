import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="header fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <a
        href="#hero"
        onClick={(e) => handleScroll(e, "hero")}
        className="font-black text-lg sm:text-2xl tracking-tight text-white no-underline"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Vj.
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 w-6 h-6"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-full h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`w-full h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <div className={`w-full h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Desktop Navigation */}
      <nav className="nav hidden md:flex gap-4 lg:gap-10 items-center">
        {[
          { label: "Home", sectionId: "hero" },
          { label: "Experiences", sectionId: "experiences" },
          { label: "Skills", sectionId: "skills" },
          { label: "Projects", sectionId: "projects" },
          { label: "About Us", sectionId: "about" },
          { label: "Contact", sectionId: "contact" }
        ].map((item) => (
          <a
            key={item.label}
            href={`#${item.sectionId}`}
            onClick={(e) => handleScroll(e, item.sectionId)}
            className="nav-link relative text-[10px] lg:text-[11px] font-medium uppercase text-white no-underline transition-colors duration-300 hover:text-white"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "1px" }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-[#2A2A2A] flex flex-col gap-0">
          {[
            { label: "Home", sectionId: "hero" },
            { label: "Experiences", sectionId: "experiences" },
            { label: "Skills", sectionId: "skills" },
            { label: "Projects", sectionId: "projects" },
            { label: "About Us", sectionId: "about" },
            { label: "Contact", sectionId: "contact" }
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.sectionId}`}
              onClick={(e) => handleScroll(e, item.sectionId)}
              className="px-4 py-3 text-sm font-medium text-[#CFCFCF] no-underline transition-colors duration-300 hover:text-white hover:bg-[#1A1A1A] border-b border-[#1A1A1A] last:border-b-0"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.5px" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
