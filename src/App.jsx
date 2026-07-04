// import { useEffect, useRef } from "react";
// import vj from "./assets/vj.png";
// import "./animations.css";

// // NOTE: Add this to your index.html <head> for Google Fonts:
// // <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,900&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

// export default function MnmlstHero() {
//   const modelRef = useRef(null);
//   const circleRef = useRef(null);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     let raf = false;
//     const handleScroll = () => {
//       if (!raf) {
//         requestAnimationFrame(() => {
//           const sy = window.scrollY;
//           if (modelRef.current) {
//             modelRef.current.style.transform = `translateX(-50%) translateY(${sy * 0.2}px)`;
//           }
//           if (circleRef.current) {
//             circleRef.current.style.transform = `translate(-50%, calc(-50% + ${sy * 0.1}px)) scale(1)`;
//           }
//           raf = false;
//         });
//         raf = true;
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!heroRef.current) return;
      
//       // Mouse tracking disabled for circle
//     };

//     const hero = heroRef.current;
//     if (hero) {
//       hero.addEventListener("mousemove", handleMouseMove);
//       return () => hero.removeEventListener("mousemove", handleMouseMove);
//     }
//   }, []);

//   return (
//     <>
//       {/* Root */}
//       <div className="relative w-screen h-screen bg-[#0A0A0A] text-white font-inter overflow-hidden">

//         {/* HEADER */}
//         <header className="header fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-7 header-fade" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//           <a href="#" className="font-bold text-xl tracking-tight text-white no-underline" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//             Vj.
//           </a>
//           <nav className="nav flex gap-10 items-center">
//             {[
//               { label: "Home", href: "#" },
//               { label: "Product", href: "#product" },
//               { label: "Store", href: "#store" },
//               { label: "About Us", href: "#about" }
//             ].map((item) => (
//               <a key={item.label} href={item.href} className="nav-link"
//                 style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "#CFCFCF" }}>
//                 {item.label}
//               </a>
//             ))}
//           </nav>
//         </header>

//         {/* HERO */}
//         <section ref={heroRef} className="hero relative w-screen h-screen overflow-hidden bg-[#0A0A0A]">

//           {/* Yellow Circle */}
//           <div ref={circleRef} className="circle absolute w-[52vw] h-[52vw] max-w-[700px] max-h-[700px] rounded-full bg-[#FFD400] left-1/2 top-1/2 z-10 circle-scale" style={{ transform: "translate(-50%, -50%) scale(0)" }} />

//           {/* Model */}
//           <div ref={modelRef} className="model absolute left-1/2 top-0 w-[44vw] max-w-[700px] h-screen z-30 model-fade model-transition" style={{ transform: "translateX(-50%) translateY(20px)" }}>
//             <img src={vj} alt="Model"
//               style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(100%) contrast(1.05)", display: "block" }} />
//           </div>

//           {/* Editorial Typography */}
//           <div className="editorial absolute right-[5%] top-1/2 z-20 text-right pointer-events-none" style={{ transform: "translateY(-50%)", lineHeight: 0.85 }}>
//             {[
//               { text: "Jeeva",     cls: "editorial-fade-up1" },
//               { text: "Developer", cls: "editorial-fade-up2" },
//             ].map(({ text, cls }) => (
//               <span key={text} className={`editorial-line ${cls}`}
//                 style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(90px, 12.5vw, 190px)", color: "#FFFFFF", letterSpacing: "-5px" }}>
//                 {text}
//               </span>
//             ))}
//           </div>

//           {/* Left Block */}
//           <div className="leftblock absolute left-16 top-1/2 z-10 max-w-sm left-fade-in" style={{ transform: "translateY(-50%)" }}>
//             <p className="text-sm leading-relaxed text-[#CFCFCF] font-semibold mb-5 tracking-wider">
//               Creating Modern Web Experiences.
//             </p>
//             <a href="#" className="readmore text-xs font-bold tracking-wider text-white no-underline pb-1">
//               Read More
//             </a>
//           </div>

//           {/* Socials */}
//           <div className="position-absolute bottom-16 left-16 z-10 flex gap-6 items-center social-fade-in">

//             {/* Facebook */}
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5">
//               <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//               </svg>
//             </a>

//             {/* Instagram */}
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5">
//               <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                 <circle cx="12" cy="12" r="4" />
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//               </svg>
//             </a>

//             {/* X / Twitter */}
//             <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5">
//               <svg viewBox="0 0 24 24" width="18" height="18" className="fill-current stroke-none">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//               </svg>
//             </a>

//             {/* LinkedIn */}
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link flex items-center justify-center text-[#CFCFCF] no-underline w-5 h-5">
//               <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                 <rect x="2" y="9" width="4" height="12" />
//                 <circle cx="4" cy="4" r="2" />
//               </svg>
//             </a>
//           </div>

//           {/* Location */}
//           <div className="location absolute bottom-16 right-16 z-10 location-fade-in">
//             <span className="text-[11px] tracking-wider text-[#CFCFCF] font-normal">
//               Arlington Heights, IL
//             </span>
//           </div>

//         </section>
//       </div>
//     </>
//   );
// }

import Index from "./pages/Index";

export default function App() {
  return <Index />;
}