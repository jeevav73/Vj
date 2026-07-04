import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
const EMAILJS_SERVICE_ID = "service_nn7ronl";
const EMAILJS_TEMPLATE_ID = "template_hbcq8y4";
const EMAILJS_PUBLIC_KEY = "W2pQ9n0kqRUGrGNTl";
// const SOCIALS = [
//   { label: "Email", value: "hello@vj.dev" },
//   { label: "LinkedIn", value: "linkedin.com/in/vj" },
//   { label: "GitHub", value: "github.com/vj" },
//   { label: "Twitter / X", value: "@vj_dev" }
// ];

function MagneticButton({ children, ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
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
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };
  const onLeave = () => {
    if (isTouchDevice) return;
    setPos({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="cta-btn"
      {...props}
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false); 
  const [error, setError] = useState(""); 
  const [copied, setCopied] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    setError("");

    try {
      console.log("before send");
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
          title: "New message from portfolio",
        },
        EMAILJS_PUBLIC_KEY
      );
      console.log("send success", res);
      setSent(true);
    } catch (err) {
      console.error("send failed:", err);   // 👈 real error ippo console la varum
      setError("Couldn't send right now — please try emailing me directly.");
    } finally {
      setSending(false);
    }
};

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@vj.dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available — silently ignore */
    }
  };

  return (
    <div className="cnt-page">
      <main className="cnt-main px-4 sm:px-8 md:px-16 pt-2 sm:pt-3 md:pt-4 pb-20 sm:pb-28 md:pb-3 max-w-5xl mx-auto">
        <p className="cnt-eyebrow">Let's Talk</p>
        <h1 className="cnt-title">
          Have a project in mind?
          <br />
          <span className="cnt-title-accent">Let's build it.</span>
        </h1>

        <div className="cnt-grid">
          <form className="cnt-form" onSubmit={submit}>
            {sent ? (
              <div className="cnt-success">
                <span className="cnt-success-dot" />
                <h3>Message sent</h3>
                <p>Thanks {form.name.split(" ")[0] || "there"} — I'll reply within a day or two.</p>
              </div>
            ) : (
              <>
                <label className="cnt-field">
                  <span>Name</span>
                  <input value={form.name} onChange={update("name")} type="text" placeholder="Your name" required />
                </label>
                <label className="cnt-field">
                  <span>Email</span>
                  <input value={form.email} onChange={update("email")} type="email" placeholder="you@email.com" required />
                </label>
                <label className="cnt-field">
                  <span>Message</span>
                  <textarea value={form.message} onChange={update("message")} rows={5} placeholder="Tell me about your project..." required />
                </label>
                <MagneticButton onClick={submit}>Send Message →</MagneticButton>
              </>
            )}
          </form>

          <div className="cnt-side">
            <div className="cnt-email-block" onClick={copyEmail}>
              <span className="cnt-email-label">Prefer email?</span>
              <span className="cnt-email-value">jeevav7305@gmail.com</span>
              <span className="cnt-copy-tag">{copied ? "Copied!" : "Click to copy"}</span>
            </div>

            {/* <ul className="cnt-social-list">
              {SOCIALS.map((s) => (
                <li key={s.label} className="cnt-social-item">
                  <span className="cnt-social-label">{s.label}</span>
                  <span className="cnt-social-value">{s.value} <span className="cnt-arrow">→</span></span>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        .cnt-page {
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

        .cnt-eyebrow {
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 11px;
          color: #FFD400;
          margin-bottom: 16px;
        }
        .cnt-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 54px;
          line-height: 1.1;
          margin-bottom: 64px;
          letter-spacing: -1px;
        }
        .cnt-title-accent { color: #FFD400; }

        .cnt-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 56px;
        }

        .cnt-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .cnt-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: 'Inter', sans-serif;
        }
        .cnt-field span {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #8A8A8E;
        }
        .cnt-field input, .cnt-field textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid #2A2A2D;
          padding: 10px 2px;
          color: #F5F5F3;
          font-size: 15px;
          font-family: 'Inter', sans-serif;
          outline: none;
          resize: none;
          transition: border-color 0.3s ease;
        }
        .cnt-field input::placeholder, .cnt-field textarea::placeholder { color: #55555a; }
        .cnt-field input:focus, .cnt-field textarea:focus { border-color: #FFD400; }

        .cta-btn {
          margin-top: 12px;
          align-self: flex-start;
          background: #FFD400;
          color: #0A0A0B;
          border: none;
          padding: 14px 30px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.3s ease;
        }
        .cta-btn:hover { background: #E0BD8A; }

        .cnt-success {
          padding: 20px 0;
          animation: cnt-fade-in 0.5s ease;
        }
        .cnt-success-dot {
          display: inline-block;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #FFD400;
          margin-bottom: 14px;
          box-shadow: 0 0 0 6px rgba(201,162,109,0.15);
        }
        .cnt-success h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 22px;
          margin-bottom: 8px;
        }
        .cnt-success p {
          font-family: 'Inter', sans-serif;
          color: #CFCFCF;
          font-size: 14px;
        }
        @keyframes cnt-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cnt-side { display: flex; flex-direction: column; gap: 40px; }

        .cnt-email-block {
          border: 1px solid #232326;
          border-radius: 14px;
          padding: 24px;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cnt-email-block:hover { border-color: #FFD400; background: #101012; }
        .cnt-email-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #8A8A8E;
        }
        .cnt-email-value {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 18px;
        }
        .cnt-copy-tag {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #FFD400;
        }

        .cnt-social-list { list-style: none; padding: 0; margin: 0; }
        .cnt-social-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-top: 1px solid #1c1c1f;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: padding-left 0.3s ease;
        }
        .cnt-social-item:hover { padding-left: 8px; }
        .cnt-social-label { font-size: 12px; color: #8A8A8E; text-transform: uppercase; letter-spacing: 1px; }
        .cnt-social-value {
          font-size: 14px;
          color: #F5F5F3;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cnt-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          color: #FFD400;
        }
        .cnt-social-item:hover .cnt-arrow { opacity: 1; transform: translateX(0); }

        @media (max-width: 900px) {
          .cnt-grid { grid-template-columns: 1fr; }
          .cnt-title { font-size: 36px; }
        }
        @media (max-width: 768px) {
          .cnt-title { font-size: 32px; line-height: 1.2; }
          .cnt-title-accent { display: block; }
          .cnt-form { max-width: 100%; }
          .cnt-input, .cnt-textarea { font-size: 14px; }
          .cnt-form-group { margin-bottom: 16px; }
          .cnt-socials { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .cnt-title { font-size: 24px; }
          .cnt-eyebrow { font-size: 9px; }
          .cnt-success { padding: 20px; }
          .cnt-success h3 { font-size: 16px; }
          .cnt-success p { font-size: 12px; }
          .cnt-input, .cnt-textarea { font-size: 16px; padding: 12px; }
          .cta-btn { font-size: 14px; padding: 10px 20px; }
          .cnt-social-item { padding: 12px; }
        }
      `}</style>
    </div>
  );
}