import { useEffect, useRef, useState } from "react";

const GROUPS = [
  {
    label: "Frontend",
    skills: [
      { name: "React ", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML", level: 95 }
    ]
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "REST APIs", level: 70 }

    ]
  },
  {
    label: "DB",
    skills: [
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 65 },
      { name: "Firebase", level: 70 }
    ]
  },
  {
    label: "Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Co pilot", level: 60 },
      { name: "Claude ai", level: 60 },
      { name: "Lovable ai", level: 75 },
      { name: "Bolt ai", level: 75 },
    ]
  }
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const onMove = (e) => {
    if (isTouchDevice) return; // Skip on touch devices
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`
    });
  };
  const onLeave = () => {
    if (isTouchDevice) return;
    setStyle({ transform: "perspective(600px) rotateX(0) rotateY(0)" });
  };

  return (
    <div ref={ref} className="skl-card" style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

function Bar({ name, level }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="skl-bar-row">
      <div className="skl-bar-top">
        <span className="skl-bar-name">{name}</span>
        <span className="skl-bar-pct">{filled ? level : 0}%</span>
      </div>
      <div className="skl-bar-track">
        <div className="skl-bar-fill" style={{ width: filled ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skl-page">
      <main className="skl-main px-4 sm:px-8 md:px-16 pt-2 sm:pt- md:pt- pb-20 sm:pb-28 md:pb-32 max-w-6xl mx-auto">
        <p className="skl-eyebrow">What I Work With</p>
        <h1 className="skl-title">Skills</h1>
        <p className="skl-sub">
          Tools and technologies I use to turn ideas into fast, considered products.
        </p>

        <div className="skl-grid">
          {GROUPS.map((group) => (
            <TiltCard key={group.label}>
              <h3 className="skl-group-label">{group.label}</h3>
              {group.skills.map((s) => (
                <Bar key={s.name} name={s.name} level={s.level} />
              ))}
            </TiltCard>
          ))}
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        .skl-page {
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

        .skl-eyebrow {
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 11px;
          color: #FFD400;
          margin-bottom: 16px;
        }
        .skl-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 64px;
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .skl-sub {
          font-family: 'Inter', sans-serif;
          color: #CFCFCF;
          font-size: 16px;
          max-width: 480px;
          margin-bottom: 72px;
        }

        .skl-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .skl-card {
          background: #131316;
          border: 1px solid #232326;
          border-radius: 16px;
          padding: 32px;
          transition: transform 0.15s ease, border-color 0.3s ease;
          will-change: transform;
        }
        .skl-card:hover {
          border-color: #3a3a3e;
        }

        .skl-group-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #FFD400;
          margin-bottom: 24px;
        }

        .skl-bar-row { margin-bottom: 20px; }
        .skl-bar-row:last-child { margin-bottom: 0; }
        .skl-bar-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-family: 'Inter', sans-serif;
        }
        .skl-bar-name { font-size: 13.5px; color: #F5F5F3; }
        .skl-bar-pct { font-size: 12px; color: #8A8A8E; transition: color 0.4s ease; }
        .skl-bar-track {
          height: 6px;
          background: #232326;
          border-radius: 999px;
          overflow: hidden;
        }
        .skl-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #8B6F47, #FFD400);
          border-radius: 999px;
          transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 900px) {
          .skl-grid { grid-template-columns: 1fr; }
          .skl-title { font-size: 42px; }
          .skl-sub { font-size: 14px; }
        }
        @media (max-width: 768px) {
          .skl-title { font-size: 36px; }
          .skl-group-label { font-size: 16px; }
          .skl-bar-name { font-size: 12px; }
          .skl-bar-pct { font-size: 11px; }
          .skl-card { padding: 20px; }
        }
        @media (max-width: 480px) {
          .skl-title { font-size: 28px; }
          .skl-sub { font-size: 13px; }
          .skl-group-label { font-size: 14px; margin-bottom: 16px; }
          .skl-bar-row { margin-bottom: 14px; }
          .skl-card { padding: 16px; border-radius: 12px; }
          .skl-eyebrow { font-size: 9px; letter-spacing: 1.5px; }
        }
      `}</style>
    </div>
  );
}