import { useState } from "react";
import Navbar from "../components/Navbar";


const PROJECTS = [
  {
    title: "ERP",
    category: "Web App",
    year: "2026",
    desc: "Contributed to a comprehensive ERP platform designed to streamline business operations and team workflows.",
    stack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    color: "#FFD400"
  },
  {
    title: "Spend Analyzer AI",
    category: "AI",
    year: "2025 - 2026",
    desc: "Implemented machine learning algorithms to forecast future spending patterns by analyzing historical data.",
    stack: ["Python Flask", "HTML", "CSS", "JavaScript", "Ngrok"],
    color: "#8FB3C9"
  },
  {
    title: "AI-Powered Legal Rights Assistant",
    category: "Chat bot ",
    year: "2025",
    desc: "Created a multilingual AI chatbot that simplifies complex legal terminology for everyday users.",
    stack: ["React", "JavaScript", "NOde.js", "Express.js", "MongoDB"],
    color: "#C98F8F"
  }
//   {
//     title: "Pulse Fitness App",
//     category: "Mobile",
//     year: "2023",
//     desc: "Cross-platform workout tracker with offline-first sync and animated progress rings.",
//     stack: ["React Native", "SQLite"],
//     color: "#A8C98F"
//   },
//   {
//     title: "Ledger Fintech Portal",
//     category: "Web App",
//     year: "2023",
//     desc: "Secure client-facing portal for transaction history, statements, and card controls.",
//     stack: ["Next.js", "GraphQL", "Node.js"],
//     color: "#FFD400"
//   },
//   {
//     title: "Salem Freelance Sites",
//     category: "Marketing",
//     year: "2021",
//     desc: "A collection of 30+ small-business websites built end-to-end, from brand to launch.",
//     stack: ["HTML/CSS", "WordPress"],
//     color: "#8FB3C9"
//   }
];

// const FILTERS = ["All", "Web App", "Marketing", "Design System", "Mobile"];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="prj-page">
      <Navbar />

      <main className="prj-main px-4 sm:px-8 md:px-16 pt- sm:pt- md:pt- pb-20 sm:pb-28 md:pb-32 max-w-6xl mx-auto">
        <p className="prj-eyebrow">Selected Work</p>
        <h1 className="prj-title">Projects</h1>
        <p className="prj-sub">
          A mix of products, sites, and systems I've designed and built over the years.
        </p>

        <div className="prj-grid">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="prj-card"
              onMouseEnter={() => setHovered(p.title)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--accent": p.color }}
            >
              <div className="prj-card-top">
                <span className="prj-card-cat">{p.category}</span>
                <span className="prj-card-year">{p.year}</span>
              </div>

              <div className="prj-card-visual">
                <span className="prj-card-glyph">{p.title.charAt(0)}</span>
                <div className={`prj-card-shine ${hovered === p.title ? "prj-shine-active" : ""}`} />
              </div>

              <h3 className="prj-card-title">{p.title}</h3>
              <p className="prj-card-desc">{p.desc}</p>

              <div className="prj-card-stack">
                {p.stack.map((s) => (
                  <span key={s} className="prj-stack-tag">{s}</span>
                ))}
              </div>

              {/* <span className="prj-card-link">
                View project <span className="prj-card-arrow">→</span>
              </span> */}
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        .prj-page {
          background: #0A0A0B;
          min-height: 100vh;
          color: #F5F5F3;
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

        .prj-eyebrow {
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 11px;
          color: #FFD400;
          margin-bottom: 16px;
        }
        .prj-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 64px;
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .prj-sub {
          font-family: 'Inter', sans-serif;
          color: #CFCFCF;
          font-size: 16px;
          max-width: 480px;
          margin-bottom: 48px;
        }

        .prj-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .prj-filter-btn {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid #2A2A2D;
          background: transparent;
          color: #CFCFCF;
          cursor: pointer;
          transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
        }
        .prj-filter-btn:hover {
          border-color: #FFD400;
          color: #F5F5F3;
        }
        .prj-filter-active {
          background: #FFD400;
          border-color: #FFD400;
          color: #0A0A0B;
          font-weight: 600;
        }
        .prj-filter-active:hover { color: #0A0A0B; }

        .prj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .prj-card {
          background: #131316;
          border: 1px solid #232326;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.35s ease, transform 0.35s ease;
          animation: prj-fade-in 0.5s ease both;
        }
        .prj-card:hover {
          border-color: var(--accent);
          transform: translateY(-6px);
        }

        .prj-card-top {
          display: flex;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8A8A8E;
          margin-bottom: 18px;
        }

        .prj-card-visual {
          position: relative;
          height: 120px;
          border-radius: 12px;
          background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--accent) 20%, #101012), #101012 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid #1c1c1f;
        }
        .prj-card-glyph {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 48px;
          color: color-mix(in srgb, var(--accent) 70%, white 10%);
          opacity: 0.85;
        }
        .prj-card-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 60%;
          height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent);
          transform: translateX(-120%) rotate(20deg);
          transition: transform 0.8s ease;
        }
        .prj-shine-active { transform: translateX(180%) rotate(20deg); }

        .prj-card-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 19px;
          margin-bottom: 10px;
        }
        .prj-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #CFCFCF;
          line-height: 1.65;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .prj-card-stack {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .prj-stack-tag {
          font-family: 'Inter', sans-serif;
          font-size: 10.5px;
          letter-spacing: 0.5px;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid #2A2A2D;
          color: #8A8A8E;
        }

        .prj-card-link {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .prj-card-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .prj-card:hover .prj-card-arrow { transform: translateX(4px); }

        .prj-empty {
          font-family: 'Inter', sans-serif;
          color: #8A8A8E;
          font-size: 14px;
        }

        @keyframes prj-fade-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .prj-grid { grid-template-columns: 1fr; }
          .prj-title { font-size: 42px; }
          .prj-sub { font-size: 14px; }
        }
        @media (max-width: 768px) {
          .prj-title { font-size: 36px; }
          .prj-card-top { gap: 8px; }
          .prj-card-cat { font-size: 10px; }
          .prj-card-year { font-size: 10px; }
          .prj-card-title { font-size: 16px; }
          .prj-card-desc { font-size: 13px; }
          .prj-card { padding: 20px; }
        }
        @media (max-width: 480px) {
          .prj-title { font-size: 28px; }
          .prj-sub { font-size: 13px; }
          .prj-card { padding: 16px; }
          .prj-card-glyph { font-size: 36px; }
          .prj-card-title { font-size: 14px; }
          .prj-card-desc { font-size: 12px; line-height: 1.5; }
          .prj-stack-tag { font-size: 10px; padding: 2px 8px; }
          .prj-eyebrow { font-size: 9px; letter-spacing: 1.5px; }
        }
      `}</style>
    </div>
  );
}