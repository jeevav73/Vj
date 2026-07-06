// import { useEffect, useRef } from "react";
// import vj from "../assets/vj.png";
// import "../animations.css";

// export default function HeroSection() {
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
//     const handleMouseMove = () => {
//       // Mouse tracking disabled for circle
//     };

//     const hero = heroRef.current;
//     if (hero) {
//       hero.addEventListener("mousemove", handleMouseMove);
//       return () => hero.removeEventListener("mousemove", handleMouseMove);
//     }
//   }, []);

//   return (
//     <div className="relative w-screen h-screen bg-[#0A0A0A] text-white font-inter overflow-hidden">
//       {/* HERO */}
//       <section ref={heroRef} className="hero relative w-screen h-screen overflow-hidden bg-[#0A0A0A]">

//         {/* Yellow Circle */}
//         <div
//           ref={circleRef}
//           className="circle absolute w-[40vw] sm:w-[46vw] md:w-[52vw] h-[40vw] sm:h-[46vw] md:h-[52vw] max-w-[700px] max-h-[700px] rounded-full bg-[#FFD400] left-1/2 top-1/2 z-10 circle-scale"
//           style={{ transform: "translate(-50%, -50%) scale(0)" }}
//         />

//         {/* Model */}
//         <div
//           ref={modelRef}
//           className="model absolute left-1/2 top-0 w-[50vw] sm:w-[48vw] md:w-[44vw] max-w-[700px] h-screen z-30 model-fade model-transition"
//           style={{ transform: "translateX(-50%) translateY(20px)" }}
//         >
//           <img
//             src={vj}
//             alt="Model"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "center top",
//               filter: "grayscale(100%) contrast(1.05)",
//               display: "block",
//             }}
//           />
//         </div>

//         {/* Editorial Typography */}
//         <div
//           className="editorial absolute right-[3%] sm:right-[4%] md:right-[5%] top-1/2 z-20 text-right pointer-events-none md:block hidden"
//           style={{ transform: "translateY(-50%)", lineHeight: 0.85 }}
//         >
//           {[
//             { text: "Jeeva", cls: "editorial-fade-up1" },
//             { text: "Developer", cls: "editorial-fade-up2" },
//           ].map(({ text, cls }) => (
//             <span
//               key={text}
//               className={`editorial-line ${cls}`}
//               style={{
//                 display: "block",
//                 fontFamily: "'Montserrat', sans-serif",
//                 fontWeight: 900,
//                 fontSize: "clamp(48px, 11vw, 190px)",
//                 color: "#FFFFFF",
//                 letterSpacing: "-3px",
//               }}
//             >
//               {text}
//             </span>
//           ))}
//         </div>

//         {/* Left Block */}
//         <div
//           className="leftblock absolute left-4 sm:left-8 md:left-16 bottom-20 md:top-1/2 z-10 max-w-xs md:max-w-sm md:bottom-auto"
//           style={{ transform: "md:translateY(-50%)" }}
//         >
//           <p className="text-xs sm:text-sm leading-relaxed text-[#CFCFCF] font-semibold mb-3 sm:mb-5 tracking-wider">
//             Creating Modern Web Experiences.
//           </p>
//           <a
//             href="#about"
//             className="readmore inline-block text-xs font-bold tracking-wider text-white no-underline pb-1 border-b-2 border-white transition-colors duration-300 hover:text-[#FFD400] hover:border-[#FFD400]"
//           >
//             Read More
//           </a>
//         </div>

//         {/* Location */}
//         <div className="location absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-8 md:right-16 z-10 location-fade-in">
//           <span className="text-[10px] sm:text-[11px] tracking-wider text-[#CFCFCF] font-normal">
//             Arlington Heights, IL
//           </span>
//         </div>

//       </section>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import vj from "../assets/vj.png";
import CV from "../assets/Jeeva - web CV.pdf";
import "../animations.css";

export default function HeroSection() {
  const modelRef = useRef(null);
  const circleRef = useRef(null);
  const heroRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [showCVModal, setShowCVModal] = useState(false);

  // Desktop parallax should only run at md (768px) and up.
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    let raf = false;
    const handleScroll = () => {
      if (!isDesktop) return;
      if (!raf) {
        requestAnimationFrame(() => {
          const sy = window.scrollY;
          if (modelRef.current) {
            modelRef.current.style.transform = `translateX(-50%) translateY(${sy * 0.2}px)`;
          }
          if (circleRef.current) {
            circleRef.current.style.transform = `translate(-50%, calc(-50% + ${sy * 0.1}px)) scale(1)`;
          }
          raf = false;
        });
        raf = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  useEffect(() => {
    const handleMouseMove = () => {
      // Mouse tracking disabled for circle
    };
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className="relative w-screen min-h-screen md:h-screen bg-[#0A0A0A] text-white font-inter overflow-x-hidden md:overflow-hidden ">
      {/* ============================================================
          DESKTOP HERO (md and up) — UNCHANGED original design.
          Hidden below md so nothing overlaps on mobile.
         ============================================================ */}
      <section
        ref={heroRef}
        className="hero hidden md:block relative w-screen h-screen overflow-hidden bg-[#0A0A0A]"
      >
        {/* Yellow Circle */}
        <div
          ref={circleRef}
          className="circle absolute w-[52vw] h-[52vw] max-w-[700px] max-h-[700px] rounded-full bg-[#FFD400] left-1/2 top-1/2 z-10 circle-scale"
          style={{ transform: "translate(-50%, -50%) scale(0)" }}
        />

        {/* Model */}
        <div
          ref={modelRef}
          className="model absolute left-1/2 top-0 w-[44vw] max-w-[700px] h-screen z-30 model-fade model-transition"
          style={{ transform: "translateX(-50%) translateY(20px)" }}
        >
          <img
            src={vj}
            alt="Model"
            className="w-full h-full object-cover object-top block grayscale contrast-[1.05]"
          />
        </div>

        {/* Editorial Typography */}
        <div
          className="editorial absolute right-[3%] top-1/2 z-20 text-right pointer-events-none block leading-[0.85]"
          style={{ transform: "translateY(-50%)" }}
        >
          {[
            { text: "Jeeva", cls: "editorial-fade-up1" },
            { text: "Developer", cls: "editorial-fade-up2" },
          ].map(({ text, cls }) => (
            <span
              key={text}
              className={`editorial-line ${cls} block font-[900] text-white tracking-[-3px]`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(48px, 11vw, 190px)",
              }}
            >
              {text}
            </span>
          ))}
        </div>

        {/* Left Block */}
        <div
          className="leftblock absolute left-4 md:left-16 top-1/2 z-20 max-w-[42vw] md:max-w-sm"
          style={{ transform: "translateY(-50%)" }}
        >
          <p className="text-[11px] sm:text-sm leading-relaxed text-[#CFCFCF] font-semibold mb-3 sm:mb-5 tracking-wider">
            Creating Modern Web Experiences.
          </p>
          <div className="flex flex-col gap-3">
            {/* <a
              href="#about"
              className="readmore inline-block text-xs font-bold tracking-wider text-white no-underline pb-1 border-b-2 border-white transition-colors duration-300 hover:text-[#FFD400] hover:border-[#FFD400] w-fit"
            >
              Read More
            </a> */}
            <button
              onClick={() => setShowCVModal(true)}
              className="cv-link inline-block text-xs font-bold tracking-wider text-white no-underline pb-1 border-b-2 border-white transition-colors duration-300 hover:text-[#FFD400] hover:border-[#FFD400] w-fit bg-transparent border-0 cursor-pointer"
            >
              See my CV
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="location absolute bottom-8 md:bottom-16 right-4 md:right-16 z-20 location-fade-in">
          <span className="text-[10px] sm:text-[11px] tracking-wider text-[#CFCFCF] font-normal whitespace-nowrap">
            Namakkal, In
          </span>
        </div>
      </section>

      {/* ============================================================
          MOBILE HERO (below 768px) — stacked, centered, no overlap.
          Pure Tailwind, no custom CSS file needed.
         ============================================================ */}
      <section className="hero-mobile md:hidden relative w-full max-w-full flex flex-col items-center text-center px-5 gap-2 pb-[-5] overflow-x-hidden box-border">
        {/* Circle + Model — centered with the same reliable
            left:50% + translateX(-50%) technique used on desktop,
            instead of margin:auto (which was drifting to one side). */}
        <div
          className="relative w-full mx-auto"
          style={{ maxWidth: "420px", height: "min(78vh, 460px)" }}
        >
          <div
            className="circle-mobile circle-scale absolute rounded-full bg-[#FFD400]"
            style={{
              width: "min(80vw, 380px)",
              height: "min(80vw, 380px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) scale(0)",
            }}
          />
          <img
            src={vj}
            alt="Model"
            className="absolute z-10 block grayscale contrast-[1.05] model-fade model-transition"
            style={{
              width: "min(70vw, 260px)",
              height: "90%",
              left: "50%",
              top: 0,
              objectFit: "cover",
              objectPosition: "center top",
              transform: "translateX(-50%) translateY(20px)",
            }}
          />
        </div>

        {/* Editorial Typography */}
        <div className="editorial-mobile w-full max-w-full mb-[-5] leading-[0.95]">
          {[
            { text: "Jeeva", cls: "editorial-fade-up1" },
            { text: "Developer", cls: "editorial-fade-up2" },
          ].map(({ text, cls }) => (
            <span
              key={text}
              className={`editorial-line ${cls} block font-[900] text-white tracking-[-1px] break-words`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(36px, 13vw, 64px)",
              }}
            >
              {text}
            </span>
          ))}
        </div>


        {/* Left Block content, centered on mobile */}
        <div className="leftblock-mobile w-full max-w-[320px] flex flex-col items-center gap-">
          <p className="text-[13px] leading-relaxed text-[#CFCFCF] font-semibold tracking-wider">
            Creating Modern Web Experiences.
          </p>
          <div className="flex flex-col items-center gap-3">
            {/* <a
              href="#about"
              className="readmore inline-block text-xs font-bold tracking-wider text-white no-underline pb-1 border-b-2 border-white transition-colors duration-300 hover:text-[#FFD400] hover:border-[#FFD400]"
            >
              Read More
            </a> */}
            <button
              onClick={() => setShowCVModal(true)}
              className="cv-link inline-block text-xs font-bold tracking-wider text-white no-underline pb-1 border-b-2 border-white transition-colors duration-300 hover:text-[#FFD400] hover:border-[#FFD400] bg-transparent border-0 cursor-pointer"
            >
              See my CV
            </button>
          </div>
        </div>


      </section>

      {/* ============================================================
          CV MODAL — shows an inline PDF preview of the CV, with a
          download button fixed to the right side of the preview.
         ============================================================ */}
      {showCVModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <div className="  w-full max-w-4xl h-[90vh] max-h-[90vh] overflow-hidden flex flex-col">
            {/* Body: preview (left) + fixed close/download column (right) */}
            <div className="flex flex-1 min-h-0 flex-col sm:flex-row">
              {/* PDF Preview */}
              <div className="flex-1 min-h-0 bg-[#1a1a1d] relative overflow-hidden">
                <iframe
                  src={`${CV}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  title="Jeeva CV Preview"
                  className="border-0 w-full h-full"
                />
              </div>

              {/* Right column — Close (top) + Download (below), stays fixed alongside the preview */}
              <div className="sm:w-48 w-full flex-shrink-0 flex sm:flex-col items-center justify-center gap-3 p-5 border-t sm:border-t-0 sm:border-l  sticky top-0 sm:self-stretch">
                <button
                  onClick={() => setShowCVModal(false)}
                  className="text-white hover:text-[#FFD400] transition-colors duration-300 text-sm font-semibold px-6 py-2 border border-white rounded-lg hover:border-[#FFD400] w-full sm:w-auto whitespace-nowrap"
                >
                  Close
                </button>
                <a
                  href={CV}
                  download="jeevaCV.pdf"
                  className="bg-[#FFD400] text-black px-6 py-2 rounded-lg font-bold text-sm text-center transition-all duration-300 hover:bg-[#E8C200] inline-block w-full sm:w-auto whitespace-nowrap"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}