// import { useEffect, useRef, useState } from "react";
// import jeevaPhoto from "../assets/jeeva-photo.jpg";
// const VALUES = [
//   { title: "Clean Code", desc: "I write clean, readable, and maintainable code that makes projects easier to scale and manage." },
//   { title: " Responsive Design", desc: "Build responsive websites that provide a smooth experience across mobile, tablet, and desktop devices." },
//   { title: "Problem Solving", desc: "I enjoy solving real-world problems through logical thinking, debugging, and efficient development practices." },
//   { title: "Continuous Learning", desc: "Continuously learn new technologies, frameworks, and AI tools to improve my development skills." }
// ];

// export default function About() {
//   const portraitRef = useRef(null);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [isTouchDevice, setIsTouchDevice] = useState(false);

//   useEffect(() => {
//     // Detect if device supports touch
//     setIsTouchDevice(window.matchMedia("(hover: none)").matches);
//   }, []);

//   const onMove = (e) => {
//     if (isTouchDevice) return; // Skip on touch devices
//     const el = portraitRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setTilt({ x, y });
//   };
//   const onLeave = () => {
//     if (isTouchDevice) return;
//     setTilt({ x: 0, y: 0 });
//   };

//   return (
//     <div className="abt-page">
//       <main className="abt-main px-4 sm:px-8 md:px-16 pt-28 sm:pt-36 md:pt-48 pb-20 sm:pb-28 md:pb-32 max-w-6xl mx-auto">
//         <div className="abt-hero">
//           <div>
//             <p className="abt-eyebrow">Get To Know Me</p>
//             <h1 className="abt-title">About Us</h1>
//             <p className="abt-lede">
//               Hi, I'm Jeeva, a passionate Developer from Tamil Nadu. I enjoy building modern, responsive, and 
//               user-friendly web applications using React.js, JavaScript, Node.js, Express.js, and MongoDB.
//             </p>
//             <p className="abt-body">
//               I completed my Bachelor's degree and gained practical experience through internships 
//               where I worked on real-world web development projects. I enjoy turning ideas into functional 
//               websites while writing clean, maintainable code and continuously learning new technologies.
//             </p>
//             <p className="abt-body">
//               I'm currently looking for opportunities as a Frontend or Full Stack Developer, where I can
//               contribute to meaningful projects, grow my technical skills, and collaborate with experienced teams.
//               When I'm not coding, I spend my time learning new web technologies, improving my problem-solving
//               skills, practicing DSA, and exploring AI tools to enhance my development workflow.
//             </p>
//           </div>

//           <div
//             ref={portraitRef}
//             className="abt-portrait group"
//             onMouseMove={onMove}
//             onMouseLeave={onLeave}
//             style={{
//                 transform: `perspective(800px) rotateX(${-tilt.y * 8}deg) rotateY(${tilt.x * 10}deg)`
//             }}
//             >
//             <div
//                 className="abt-portrait-glow"
//                 style={{ transform: `translate(${tilt.x * 30}px, ${tilt.y * 30}px)` }}
//             />

//             <span className="abt-portrait-initial transition-opacity duration-500 ease-out group-hover:opacity-0">
//                 Vj.
//             </span>

//             <img
//                 src={jeevaPhoto}
//                 alt="Jeeva V"
//                 className="absolute inset-0 w-full h-full object-cover object-top rounded-[inherit] grayscale opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:grayscale-0 pointer-events-none"
//             />
//             </div>
//         </div>

//         <div className="abt-marquee-wrap">
//           <div className="abt-marquee">
//             {Array(2).fill(0).map((_, r) => (
//               <div className="abt-marquee-track" key={r}>
//                 {["Frontend Development", "Backend Development", "Full Stack Development", "Database Management", "Performance Optimization"].map((w) => (
//                   <span key={w} className="abt-marquee-item">
//                     {w} <span className="abt-marquee-dot">●</span>
//                   </span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="abt-values">
//           {VALUES.map((v, i) => (
//             <div className="abt-value-card" key={v.title} style={{ transitionDelay: `${i * 80}ms` }}>
//               <span className="abt-value-num">{String(i + 1).padStart(2, "0")}</span>
//               <h4 className="abt-value-title">{v.title}</h4>
//               <p className="abt-value-desc">{v.desc}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

//         .abt-page {
//           background: #0A0A0B;
//           min-height: 100vh;
//           color: #F5F5F3;
//           overflow-x: hidden;
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

//         .abt-eyebrow {
//           font-family: 'Inter', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 3px;
//           font-size: 11px;
//           color: #FFD400;
//           margin-bottom: 16px;
//         }
//         .abt-title {
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 900;
//           font-size: 56px;
//           line-height: 1;
//           margin-bottom: 24px;
//           letter-spacing: -1px;
//         }
//         .abt-lede {
//           font-family: 'Inter', sans-serif;
//           font-size: 17px;
//           color: #F5F5F3;
//           line-height: 1.6;
//           margin-bottom: 20px;
//         }
//         .abt-body {
//           font-family: 'Inter', sans-serif;
//           font-size: 14.5px;
//           color: #CFCFCF;
//           line-height: 1.8;
//           margin-bottom: 16px;
//           max-width: 460px;
//         }

//         .abt-hero {
//           display: grid;
//           grid-template-columns: 1.1fr 0.9fr;
//           gap: 60px;
//           align-items: center;
//           margin-bottom: 100px;
//         }

//         .abt-portrait {
//           position: relative;
//           aspect-ratio: 4 / 5;
//           border-radius: 20px;
//           background: linear-gradient(160deg, #17171a, #0d0d0e);
//           border: 1px solid #232326;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           transition: transform 0.15s ease;
//         }
//         .abt-portrait-glow {
//           position: absolute;
//           width: 260px;
//           height: 260px;
//           background: radial-gradient(circle, rgba(201,162,109,0.35), transparent 70%);
//           border-radius: 50%;
//           transition: transform 0.15s ease;
//         }
//         .abt-portrait-initial {
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 900;
//           font-size: 140px;
//           color: rgba(245,245,243,0.08);
//           position: relative;
//         }

//         .abt-marquee-wrap {
//           border-top: 1px solid #232326;
//           border-bottom: 1px solid #232326;
//           padding: 28px 0;
//           margin-bottom: 100px;
//         }
//         .abt-marquee { overflow: hidden; white-space: nowrap; }
//         .abt-marquee-track {
//           display: inline-flex;
//           animation: abt-scroll 18s linear infinite;
//         }
//         .abt-marquee-item {
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 800;
//           font-size: 34px;
//           color: #CFCFCF;
//           padding: 0 28px;
//           display: inline-flex;
//           align-items: center;
//           gap: 28px;
//         }
//         .abt-marquee-dot { color: #FFD400; font-size: 12px; }
//         @keyframes abt-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-100%); }
//         }

//         .abt-values {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 24px;
//         }
//         .abt-value-card {
//           border: 1px solid #232326;
//           border-radius: 14px;
//           padding: 28px 22px;
//           background: #101012;
//           transition: border-color 0.3s ease, transform 0.3s ease;
//         }
//         .abt-value-card:hover {
//           border-color: #FFD400;
//           transform: translateY(-6px);
//         }
//         .abt-value-num {
//           font-family: 'Inter', sans-serif;
//           font-size: 12px;
//           color: #FFD400;
//           letter-spacing: 1px;
//         }
//         .abt-value-title {
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 800;
//           font-size: 17px;
//           margin: 10px 0 8px;
//         }
//         .abt-value-desc {
//           font-family: 'Inter', sans-serif;
//           font-size: 13px;
//           color: #CFCFCF;
//           line-height: 1.6;
//         }

//         @media (max-width: 900px) {
//           .abt-hero { grid-template-columns: 1fr; }
//           .abt-values { grid-template-columns: repeat(2, 1fr); }
//           .abt-title { font-size: 38px; }
//         }
//         @media (max-width: 768px) {
//           .abt-hero { gap: 32px; }
//           .abt-title { font-size: 36px; }
//           .abt-lede { font-size: 15px; }
//           .abt-body { font-size: 13px; }
//           .abt-portrait { width: 200px; height: 200px; }
//           .abt-portrait-initial { font-size: 64px; }
//           .abt-values { grid-template-columns: 1fr; gap: 20px; }
//         }
//         @media (max-width: 480px) {
//           .abt-title { font-size: 28px; }
//           .abt-eyebrow { font-size: 9px; }
//           .abt-lede { font-size: 13px; }
//           .abt-body { font-size: 12px; line-height: 1.6; }
//           .abt-portrait { width: 160px; height: 160px; }
//           .abt-portrait-initial { font-size: 48px; }
//           .abt-marquee-item { font-size: 14px; }
//           .abt-value-card { padding: 20px; }
//         }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import jeevaPhoto from "../assets/jeeva-photo.jpg";

const VALUES = [
  { title: "Clean Code", desc: "I write clean, readable, and maintainable code that makes projects easier to scale and manage." },
  { title: " Responsive Design", desc: "Build responsive websites that provide a smooth experience across mobile, tablet, and desktop devices." },
  { title: "Problem Solving", desc: "I enjoy solving real-world problems through logical thinking, debugging, and efficient development practices." },
  { title: "Continuous Learning", desc: "Continuously learn new technologies, frameworks, and AI tools to improve my development skills." }
];

export default function About() {
  const portraitRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mobilePortraitRef = useRef(null);

  useEffect(() => {
    // Detect if device supports touch
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const onMove = (e) => {
    if (isTouchDevice) return; // Skip on touch devices
    const el = portraitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };
  const onLeave = () => {
    if (isTouchDevice) return;
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="abt-page">
      <main className="abt-main px-4 sm:px-8 md:px-16 pt-2 sm:pt-3 md:pt-4 pb-20 sm:pb-28 md:pb-32 max-w-6xl mx-auto">

        {/* ============================================================
            DESKTOP HERO (md and up) — UNCHANGED original design.
            Hidden below md so mobile gets its own dedicated markup.
           ============================================================ */}
        <div className="abt-hero">
          <div>
            <p className="abt-eyebrow">Get To Know Me</p>
            <h1 className="abt-title">About Us</h1>
            <p className="abt-lede">
              Hi, I'm Jeeva, a passionate Developer from Tamil Nadu. I enjoy building modern, responsive, and 
              user-friendly web applications using React.js, JavaScript, Node.js, Express.js, and MongoDB.
            </p>
            <p className="abt-body">
              I completed my Bachelor's degree and gained practical experience through internships 
              where I worked on real-world web development projects. I enjoy turning ideas into functional 
              websites while writing clean, maintainable code and continuously learning new technologies.
            </p>
            <p className="abt-body">
              I'm currently looking for opportunities as a Frontend or Full Stack Developer, where I can
              contribute to meaningful projects, grow my technical skills, and collaborate with experienced teams.
              When I'm not coding, I spend my time learning new web technologies, improving my problem-solving
              skills, practicing DSA, and exploring AI tools to enhance my development workflow.
            </p>
          </div>

          <div
            ref={portraitRef}
            className="abt-portrait group"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
              transform: `perspective(800px) rotateX(${-tilt.y * 8}deg) rotateY(${tilt.x * 10}deg)`
            }}
          >
            <div
              className="abt-portrait-glow"
              style={{ transform: `translate(${tilt.x * 30}px, ${tilt.y * 30}px)` }}
            />

            <span className="abt-portrait-initial transition-opacity duration-500 ease-out group-hover:opacity-0">
              Vj.
            </span>

            <img
              src={jeevaPhoto}
              alt="Jeeva V"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-[inherit] grayscale opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:grayscale-0 pointer-events-none"
            />
          </div>
        </div>

        {/* ============================================================
            MOBILE HERO (below md) — image first, then text, centered.
            Dedicated markup, no CSS order tricks.
           ============================================================ */}
        <div className="abt-hero-mobile flex flex-col items-center text-center gap-6 mb-16">
          <div
            ref={mobilePortraitRef}
            className="abt-portrait-mobile group relative w-[200px] h-[250px] max-[380px]:w-[160px] max-[380px]:h-[200px] rounded-[20px] border border-[#232326] overflow-hidden bg-gradient-to-br from-[#17171a] to-[#0d0d0e]"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
              transform: `perspective(800px) rotateX(${-tilt.y * 8}deg) rotateY(${tilt.x * 10}deg)`
            }}
          >
            <div className="abt-portrait-glow-mobile" />

            <span className="abt-portrait-initial transition-opacity duration-500 ease-out group-hover:opacity-0">
              Vj.
            </span>

            <img
              src={jeevaPhoto}
              alt="Jeeva V"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:grayscale-0"
            />
          </div>

          <div>
            <p className="abt-eyebrow">Get To Know Me</p>
            <h1 className="abt-title">About Us</h1>
            <p className="abt-lede">
              Hi, I'm Jeeva, a passionate Developer from Tamil Nadu. I enjoy building modern, responsive, and 
              user-friendly web applications using React.js, JavaScript, Node.js, Express.js, and MongoDB.
            </p>
            <p className="abt-body mx-auto">
              I completed my Bachelor's degree and gained practical experience through internships 
              where I worked on real-world web development projects. I enjoy turning ideas into functional 
              websites while writing clean, maintainable code and continuously learning new technologies.
            </p>
            <p className="abt-body mx-auto">
              I'm currently looking for opportunities as a Frontend or Full Stack Developer, where I can
              contribute to meaningful projects, grow my technical skills, and collaborate with experienced teams.
              When I'm not coding, I spend my time learning new web technologies, improving my problem-solving
              skills, practicing DSA, and exploring AI tools to enhance my development workflow.
            </p>
          </div>
        </div>

        <div className="abt-marquee-wrap">
          <div className="abt-marquee">
            {Array(2).fill(0).map((_, r) => (
              <div className="abt-marquee-track" key={r}>
                {["Frontend Development", "Backend Development", "Full Stack Development", "Database Management", "Performance Optimization"].map((w) => (
                  <span key={w} className="abt-marquee-item">
                    {w} <span className="abt-marquee-dot">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="abt-values">
          {VALUES.map((v, i) => (
            <div className="abt-value-card" key={v.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="abt-value-num">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="abt-value-title">{v.title}</h4>
              <p className="abt-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        .abt-page {
          background: #0A0A0B;
          min-height: 100vh;
          color: #F5F5F3;
          overflow-x: hidden;
        }
        .header-fade {
          background: linear-gradient(180deg, rgba(10,10,11,0.9), rgba(10,10,11,0));
          backdrop-filter: blur(6px);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -6px;
          width: 0%; height: 1px;
          background: #FFD400;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .abt-eyebrow {
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 11px;
          color: #FFD400;
          margin-bottom: 16px;
        }
        .abt-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 56px;
          line-height: 1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }
        .abt-lede {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: #F5F5F3;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .abt-body {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #CFCFCF;
          line-height: 1.8;
          margin-bottom: 16px;
          max-width: 460px;
        }

        .abt-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
        }
        .abt-hero-mobile {
          display: none;
        }

        .abt-portrait {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 20px;
          background: linear-gradient(160deg, #17171a, #0d0d0e);
          border: 1px solid #232326;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.15s ease;
        }
        .abt-portrait-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(201,162,109,0.35), transparent 70%);
          border-radius: 50%;
          transition: transform 0.15s ease;
        }
        .abt-portrait-initial {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 140px;
          color: rgba(245,245,243,0.08);
          position: relative;
        }

        .abt-portrait-glow-mobile {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(201,162,109,0.35), transparent 70%);
          border-radius: 50%;
          animation: abt-glow-pulse 3.5s ease-in-out infinite;
        }
        @keyframes abt-glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .abt-marquee-wrap {
          border-top: 1px solid #232326;
          border-bottom: 1px solid #232326;
          padding: 28px 0;
          margin-bottom: 100px;
        }
        .abt-marquee { overflow: hidden; white-space: nowrap; }
        .abt-marquee-track {
          display: inline-flex;
          animation: abt-scroll 18s linear infinite;
        }
        .abt-marquee-item {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 34px;
          color: #CFCFCF;
          padding: 0 28px;
          display: inline-flex;
          align-items: center;
          gap: 28px;
        }
        .abt-marquee-dot { color: #FFD400; font-size: 12px; }
        @keyframes abt-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }

        .abt-values {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .abt-value-card {
          border: 1px solid #232326;
          border-radius: 14px;
          padding: 28px 22px;
          background: #101012;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .abt-value-card:hover {
          border-color: #FFD400;
          transform: translateY(-6px);
        }
        .abt-value-num {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #FFD400;
          letter-spacing: 1px;
        }
        .abt-value-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 17px;
          margin: 10px 0 8px;
        }
        .abt-value-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #CFCFCF;
          line-height: 1.6;
        }

        /* Mobile hero text tweaks — desktop .abt-hero itself no longer
           needs to collapse since it's hidden entirely below md now. */
        .abt-hero-mobile .abt-lede,
        .abt-hero-mobile .abt-body {
          max-width: 100%;
        }

        @media (max-width: 900px) {
          .abt-values { grid-template-columns: repeat(2, 1fr); }
          .abt-title { font-size: 38px; }
        }
        @media (max-width: 768px) {
          .abt-hero { display: none; }
          .abt-hero-mobile { display: flex; }
          .abt-title { font-size: 36px; }
          .abt-lede { font-size: 15px; }
          .abt-body { font-size: 13px; }
          .abt-values { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 480px) {
          .abt-title { font-size: 28px; }
          .abt-eyebrow { font-size: 9px; }
          .abt-lede { font-size: 13px; }
          .abt-body { font-size: 12px; line-height: 1.6; }
          .abt-marquee-item { font-size: 14px; }
          .abt-value-card { padding: 20px; }
        }
      `}</style>
    </div>
  );
}