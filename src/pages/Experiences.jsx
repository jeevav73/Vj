// import { useEffect, useRef, useState } from "react";

// /* ---------------- Data — swap in your real roles ---------------- */
// const EXPERIENCES = [
//   {
//     year: "2024 — Present",
//     role: "Senior Frontend Engineer",
//     company: "Nova Interactive",
//     location: "Remote",
//     desc: "Leading the design-system rebuild and owning performance for the flagship product, cutting load time by 42% across core flows.",
//     tags: ["React", "TypeScript", "Design Systems"]
//   },
//   {
//     year: "2022 — 2024",
//     role: "Frontend Engineer",
//     company: "Studio Aperture",
//     location: "Chennai, IN",
//     desc: "Built motion-first marketing sites and interactive product tours for clients across fintech and D2C, shipping 20+ launches.",
//     tags: ["Next.js", "GSAP", "Tailwind"]
//   },
//   {
//     year: "2021 — 2022",
//     role: "UI Developer",
//     company: "Loopwork Labs",
//     location: "Bengaluru, IN",
//     desc: "Owned the component library from zero, reducing duplicate UI code by 60% and onboarding time for new engineers by half.",
//     tags: ["JavaScript", "Storybook", "Figma"]
//   },
//   {
//     year: "2019 — 2021",
//     role: "Junior Web Developer",
//     company: "Freelance",
//     location: "Salem, IN",
//     desc: "Delivered 30+ websites for small businesses, handling everything from client discovery to deployment and handover.",
//     tags: ["HTML/CSS", "WordPress", "PHP"]
//   }
// ];

// /* ---------------- Scroll-reveal hook ---------------- */
// function useReveal(count) {
//   const refs = useRef([]);
//   const [visible, setVisible] = useState(() => Array(count).fill(false));

//   useEffect(() => {
//     const observers = refs.current.map((el, i) => {
//       if (!el) return null;
//       const io = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setVisible((v) => {
//               const next = [...v];
//               next[i] = true;
//               return next;
//             });
//             io.disconnect();
//           }
//         },
//         { threshold: 0.25 }
//       );
//       io.observe(el);
//       return io;
//     });
//     return () => observers.forEach((io) => io && io.disconnect());
//   }, [count]);

//   return [refs, visible];
// }

// export default function Experience() {
//   const [refs, visible] = useReveal(EXPERIENCES.length);
//   const [lineProgress, setLineProgress] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const total = rect.height - window.innerHeight * 0.6;
//       const passed = Math.min(Math.max(-rect.top + window.innerHeight * 0.4, 0), total);
//       setLineProgress(total > 0 ? (passed / total) * 100 : 0);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="exp-page">
//       <main className="exp-main px-4 sm:px-8 md:px-16 pt-28 sm:pt-36 md:pt-48 pb-20 sm:pb-28 md:pb-32 max-w-5xl mx-auto">
//         <p className="exp-eyebrow">Career Path</p>
//         <h1 className="exp-title">Experience</h1>
//         <p className="exp-sub">
//           A timeline of where I've worked, what I built, and what I learned along the way.
//         </p>

//         <div className="exp-timeline" ref={sectionRef}>
//           <div className="exp-line-track">
//             <div className="exp-line-fill" style={{ height: `${lineProgress}%` }} />
//           </div>

//           {EXPERIENCES.map((item, i) => (
//             <div
//               key={item.role}
//               ref={(el) => (refs.current[i] = el)}
//               className={`exp-card ${visible[i] ? "exp-card-visible" : ""}`}
//             >
//               <div className="exp-dot" />
//               <span className="exp-year">{item.year}</span>
//               <h3 className="exp-role">{item.role}</h3>
//               <p className="exp-company">
//                 {item.company} <span className="exp-loc">· {item.location}</span>
//               </p>
//               <p className="exp-desc">{item.desc}</p>
//               <div className="exp-tags">
//                 {item.tags.map((t) => (
//                   <span key={t} className="exp-tag">{t}</span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

//         .exp-page {
//           background: #0A0A0B;
//           min-height: 100vh;
//           color: #F5F5F3;
//         }
//         .header-fade {
//           background: linear-gradient(180deg, rgba(10,10,11,0.9), rgba(10,10,11,0));
//           backdrop-filter: blur(6px);
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           left: 0; bottom: -6px;
//           width: 0%; height: 1px;
//           background: #FFD400;
//           transition: width 0.3s ease;
//         }
//         .nav-link:hover::after { width: 100%; }

//         .exp-eyebrow {
//           font-family: 'Inter', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 3px;
//           font-size: 11px;
//           color: #FFD400;
//           margin-bottom: 16px;
//         }
//         .exp-title {
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 900;
//           font-size: 64px;
//           line-height: 1;
//           margin-bottom: 20px;
//           letter-spacing: -1px;
//         }
//         .exp-sub {
//           font-family: 'Inter', sans-serif;
//           color: #CFCFCF;
//           font-size: 16px;
//           max-width: 480px;
//           margin-bottom: 80px;
//         }

//         .exp-timeline {
//           position: relative;
//           padding-left: 48px;
//         }
//         .exp-line-track {
//           position: absolute;
//           left: 5px;
//           top: 8px;
//           bottom: 8px;
//           width: 2px;
//           background: #232326;
//         }
//         .exp-line-fill {
//           width: 100%;
//           background: linear-gradient(180deg, #FFD400, #8B6F47);
//           transition: height 0.15s linear;
//         }

//         .exp-card {
//           position: relative;
//           margin-bottom: 64px;
//           opacity: 0;
//           transform: translateX(24px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .exp-card-visible {
//           opacity: 1;
//           transform: translateX(0);
//         }
//         .exp-dot {
//           position: absolute;
//           left: -48px;
//           top: 6px;
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           background: #0A0A0B;
//           border: 2px solid #FFD400;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .exp-card-visible .exp-dot {
//           box-shadow: 0 0 0 6px rgba(201,162,109,0.15);
//         }
//         .exp-card:hover .exp-dot {
//           transform: scale(1.3);
//         }

//         .exp-year {
//           font-family: 'Inter', sans-serif;
//           font-size: 11px;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: #FFD400;
//         }
//         .exp-role {
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 800;
//           font-size: 26px;
//           margin: 8px 0 4px;
//         }
//         .exp-company {
//           font-family: 'Inter', sans-serif;
//           font-size: 14px;
//           color: #F5F5F3;
//           margin-bottom: 14px;
//         }
//         .exp-loc { color: #8A8A8E; }
//         .exp-desc {
//           font-family: 'Inter', sans-serif;
//           font-size: 14.5px;
//           line-height: 1.7;
//           color: #CFCFCF;
//           max-width: 560px;
//           margin-bottom: 18px;
//         }
//         .exp-tags {
//           display: flex;
//           gap: 10px;
//           flex-wrap: wrap;
//         }
//         .exp-tag {
//           font-family: 'Inter', sans-serif;
//           font-size: 11px;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           padding: 6px 12px;
//           border: 1px solid #2A2A2D;
//           border-radius: 999px;
//           color: #CFCFCF;
//           transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
//         }
//         .exp-tag:hover {
//           border-color: #FFD400;
//           color: #FFD400;
//           transform: translateY(-2px);
//         }

//         @media (max-width: 768px) {
//           .exp-title { font-size: 36px; margin-bottom: 16px; }
//           .exp-sub { font-size: 14px; margin-bottom: 48px; }
//           .exp-timeline { padding-left: 28px; margin-bottom: 32px; }
//           .exp-line-track { left: 1px; }
//           .exp-card { margin-bottom: 40px; }
//           .exp-dot { left: -28px; width: 10px; height: 10px; }
//           .exp-role { font-size: 18px; }
//           .exp-company { font-size: 13px; }
//           .exp-desc { font-size: 13px; }
//           .exp-eyebrow { font-size: 10px; letter-spacing: 2px; }
//         }
//         @media (max-width: 480px) {
//           .exp-title { font-size: 28px; }
//           .exp-sub { font-size: 13px; margin-bottom: 32px; }
//           .exp-timeline { padding-left: 20px; }
//           .exp-line-track { left: 0px; }
//           .exp-dot { left: -20px; width: 8px; height: 8px; }
//           .exp-card { margin-bottom: 30px; }
//           .exp-role { font-size: 16px; margin: 4px 0 2px; }
//           .exp-company { font-size: 12px; }
//           .exp-desc { font-size: 12px; }
//           .exp-tag { font-size: 10px; padding: 4px 10px; }
//         }
//       `}</style>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";

/* ---------------- Data — swap in your real roles ---------------- */
const EXPERIENCES = [
  {
    year: "Jun 2025 - Apr 2026",
    role: "Web Developement.",
    company: "Azhizen Solutions",
    location: "Tiruchengode, IN",
    desc: "Successfully completed an 11-month Web Development Internship, building responsive and dynamic web applications.",
    tags: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"]
  },
  {
    year: "JAN 2025",
    role: "Python Programming",
    company: "SystemTrone",
    location: "Remote",
    desc: "Implemented key features such as real-time user input handling, dynamic game boardupdates,collision detection, and score tracking.",
    tags: ["Python", "Game Development"]
  },
  {
    year: "Jul 2024 - Aug 2024",
    role: "AI in Cloud",
    company: "Object Automation System Solutions",
    location: " Chennai, IN",
    desc: "Developed and implemented machine learning models on cloud platforms such as Microsoft Azure in conjunction with a team.",
    tags: ["ML", "Microsoft Azure"]
  },

];

/* ---------------- Scroll-reveal hook ---------------- */
function useReveal(count) {
  const refs = useRef([]);
  const [visible, setVisible] = useState(() => Array(count).fill(false));

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((v) => {
              const next = [...v];
              next[i] = true;
              return next;
            });
            io.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io && io.disconnect());
  }, [count]);

  return [refs, visible];
}

export default function Experience() {
  const [refs, visible] = useReveal(EXPERIENCES.length);
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const passed = Math.min(Math.max(-rect.top + window.innerHeight * 0.4, 0), total);
      setLineProgress(total > 0 ? (passed / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0B] min-h-screen text-[#F5F5F3] overflow-x-hidden">
      <main className="px-4 max-[380px]:px-3 sm:px-8 md:px-16 pt-24 max-[380px]:pt-20 sm:pt-36 md:pt-48 pb-16 max-[380px]:pb-12 sm:pb-28 md:pb-32 max-w-5xl mx-auto box-border">
        {/* Eyebrow */}
        <p
          className="uppercase tracking-[3px] text-[10px] md:text-[11px] text-[#FFD400] mb-3 md:mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Career Path
        </p>

        {/* Title */}
        <h1
          className="text-[26px] max-[380px]:text-[22px] md:text-[64px] font-[900] leading-[1.05] md:leading-none tracking-[-0.5px] md:tracking-[-1px] mb-3 md:mb-5 text-white break-words"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Experience
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#CFCFCF] text-[13px] max-[380px]:text-[12px] md:text-[16px] max-w-full sm:max-w-[480px] mb-6 max-[380px]:mb-5 sm:mb-8 md:mb-20"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A timeline of where I've worked, what I built, and what I learned along the way.
        </p>

        {/* Timeline */}
        <div ref={sectionRef} className="relative pl-5 max-[380px]:pl-4 md:pl-12 max-w-full">
          {/* Track + progress fill */}
          <div className="absolute top-2 bottom-2 w-[2px] left-[3px] md:left-[5px] bg-[#232326] overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-[#FFD400] to-[#8B6F47] transition-[height] duration-150 ease-linear"
              style={{ height: `${lineProgress}%` }}
            />
          </div>

          {EXPERIENCES.map((item, i) => (
            <div
              key={item.role}
              ref={(el) => (refs.current[i] = el)}
              className={`group relative mb-6 max-[380px]:mb-5 md:mb-16 max-w-full transition-all duration-700 ease-out ${
                visible[i] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute top-1.5 left-[-20px] max-[380px]:left-[-16px] md:left-[-48px] w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#0A0A0B] border-2 border-[#FFD400] transition-transform duration-300 group-hover:scale-[1.3] ${
                  visible[i] ? "shadow-[0_0_0_6px_rgba(201,162,109,0.15)]" : ""
                }`}
              />

              {/* Year */}
              <span
                className="block text-[10px] max-[380px]:text-[9px] md:text-[11px] tracking-[2px] uppercase text-[#FFD400]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.year}
              </span>

              {/* Role */}
              <h3
                className="font-[800] text-[16px] max-[380px]:text-[15px] md:text-[26px] mt-1 md:mt-2 mb-0.5 md:mb-1 break-words"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.role}
              </h3>

              {/* Company */}
              <p
                className="text-[12px] max-[380px]:text-[11px] md:text-[14px] text-[#F5F5F3] mb-2.5 max-[380px]:mb-2 md:mb-3.5 break-words"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.company} <span className="text-[#8A8A8E]">· {item.location}</span>
              </p>

              {/* Description */}
              <p
                className="text-[12px] max-[380px]:text-[11.5px] md:text-[14.5px] leading-[1.6] md:leading-[1.7] text-[#CFCFCF] max-w-full sm:max-w-[560px] mb-3.5 max-[380px]:mb-3 md:mb-[18px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex gap-2 max-[380px]:gap-1.5 md:gap-2.5 flex-wrap max-w-full">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] max-[380px]:text-[9px] md:text-[11px] tracking-[1px] uppercase px-2.5 max-[380px]:px-2 md:px-3 py-1 md:py-1.5 border border-[#2A2A2D] rounded-full text-[#CFCFCF] whitespace-nowrap transition-colors duration-300 hover:border-[#FFD400] hover:text-[#FFD400] hover:-translate-y-0.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ============================================================
          Kept separate on purpose: font import only.
          All hover/reveal animation now lives inline as Tailwind
          transition/duration/translate/scale utility classes above —
          nothing animation-related is hidden away in here anymore.
         ============================================================ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
}