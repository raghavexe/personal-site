import { useState } from "react";
import Panel from "./Parts/Panel"; // adjust this import path to wherever your Panel component lives

// ---------------------------------------------------------------
// EMAIL FORWARDING SETUP
// This form submits via Web3Forms (https://web3forms.com), a free
// service that relays submissions to your inbox without exposing
// your email address anywhere in this component's code.
//
// Setup (2 minutes):
// 1. Go to https://web3forms.com and enter your email to get a
//    free "Access Key" (no account needed).
// 2. Paste that key into WEB3FORMS_ACCESS_KEY below.
// ---------------------------------------------------------------
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  _honeypot: "",
};

function WarpConduit() {
  const embers = Array.from({ length: 9 });
  const glyphs = [
    { top: "18%", left: "30%", size: 10, shape: "diamond", delay: "0s" },
    { top: "62%", left: "70%", size: 12, shape: "triangle", delay: "2.2s" },
    { top: "38%", left: "68%", size: 8, shape: "ring", delay: "4.4s" },
    { top: "75%", left: "28%", size: 9, shape: "diamond", delay: "1.1s" },
    { top: "25%", left: "65%", size: 7, shape: "ring", delay: "5.6s" },
  ];

  return (
    <div className="warp-bar hidden md:flex w-32 lg:w-40 shrink-0 rounded-sm relative">
      <div className="warp-blob warp-blob-a" />
      <div className="warp-blob warp-blob-b" />
      <div className="warp-blob warp-blob-c" />
      <div className="warp-static" />
      <div className="warp-flash" />
      <div className="warp-chroma" />

      {/* expanding ripples from the core */}
      <div className="warp-ripple" style={{ animationDelay: "0s" }} />
      <div className="warp-ripple" style={{ animationDelay: "1.3s" }} />
      <div className="warp-ripple" style={{ animationDelay: "2.6s" }} />

      {/* crackling tendrils */}
      <svg className="warp-tendrils t1" viewBox="0 0 128 300" fill="none">
        <path
          d="M20 30 L45 70 L25 95 L60 140 L35 175 L70 210 L48 250 L64 280"
          stroke="var(--warp-glow)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <svg className="warp-tendrils t2" viewBox="0 0 128 300" fill="none">
        <path
          d="M108 40 L82 80 L104 110 L70 150 L96 190 L62 225 L88 260"
          stroke="var(--brass-bright)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      {/* drifting psychic glyphs */}
      {glyphs.map((g, i) => (
        <svg
          key={i}
          className="warp-glyph"
          width={g.size * 2}
          height={g.size * 2}
          viewBox="0 0 20 20"
          style={{ top: g.top, left: g.left, animationDelay: g.delay }}
        >
          {g.shape === "diamond" && (
            <path
              d="M10 1 L19 10 L10 19 L1 10 Z"
              stroke="var(--warp-glow)"
              strokeWidth="1"
              fill="none"
            />
          )}
          {g.shape === "triangle" && (
            <path
              d="M10 2 L18 17 L2 17 Z"
              stroke="var(--brass-bright)"
              strokeWidth="1"
              fill="none"
            />
          )}
          {g.shape === "ring" && (
            <circle
              cx="10"
              cy="10"
              r="7"
              stroke="var(--warp-glow)"
              strokeWidth="1"
              fill="none"
            />
          )}
        </svg>
      ))}

      {/* rising embers */}
      {embers.map((_, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${10 + i * 9}%`,
            animationDuration: `${4.5 + (i % 5)}s`,
            animationDelay: `${i * 0.55}s`,
            "--drift": `${i % 2 === 0 ? 12 : -12}px` as any,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 w-full">
        <span
          className="warp-label font-rune text-[10px] uppercase"
          style={{ color: "var(--warp-glow)" }}
        >
          Warp Conduit
        </span>

        <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
          <g className="vortex-outer">
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="var(--brass)"
              strokeOpacity="0.15"
              strokeWidth="0.75"
              strokeDasharray="2 4"
            />
          </g>
          <g className="vortex">
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="var(--warp-glow)"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
            <path
              d="M50 6 A44 44 0 0 1 94 50"
              stroke="var(--warp-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M50 94 A44 44 0 0 1 6 50"
              stroke="var(--brass-bright)"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
          <g className="vortex-mid">
            <path
              d="M50 14 A36 36 0 0 1 86 50"
              stroke="var(--brass-bright)"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.4"
            />
          </g>
          <g className="vortex-inner">
            <path
              d="M50 20 A30 30 0 0 1 80 50"
              stroke="var(--warp-glow)"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M50 80 A30 30 0 0 1 20 50"
              stroke="var(--warp-glow)"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
          <circle
            className="warp-core"
            cx="50"
            cy="50"
            r="5"
            fill="var(--warp-glow)"
          />
        </svg>

        <span
          className="warp-label font-rune text-[9px] uppercase"
          style={{ color: "var(--parchment-dim)" }}
        >
          Immaterium
        </span>
      </div>
    </div>
  );
}

function SignalRelay({ sending }: { sending: boolean }) {
  const segments = Array.from({ length: 14 });
  return (
    <div
      className={`signal-bar hidden md:flex w-32 lg:w-40 shrink-0 rounded-sm relative ${sending ? "sending" : ""}`}
    >
      <div className="signal-spine" />
      <div className="signal-pulse-line" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full py-8 w-full">
        <span
          className="signal-label font-rune text-[10px] uppercase"
          style={{ color: "var(--brass-bright)" }}
        >
          Signal Relay
        </span>

        <svg
          className="signal-dish"
          width="30"
          height="30"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle
            cx="20"
            cy="20"
            r="17"
            stroke="var(--brass-bright)"
            strokeWidth="1.5"
          />
          <circle
            cx="20"
            cy="20"
            r="10"
            stroke="var(--brass)"
            strokeWidth="1.2"
          />
          <circle cx="20" cy="20" r="3" fill="var(--brass-bright)" />
        </svg>

        <div className="flex flex-col items-center gap-2.5">
          {segments.map((_, i) => (
            <span
              key={i}
              className="signal-seg"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <svg
          className="signal-dish"
          width="30"
          height="30"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle
            cx="20"
            cy="20"
            r="17"
            stroke="var(--brass-bright)"
            strokeWidth="1.5"
          />
          <circle
            cx="20"
            cy="20"
            r="10"
            stroke="var(--brass)"
            strokeWidth="1.2"
          />
          <circle cx="20" cy="20" r="3" fill="var(--brass-bright)" />
        </svg>

        <span
          className="signal-label font-rune text-[9px] uppercase"
          style={{ color: "var(--parchment-dim)" }}
        >
          Vox-Caster
        </span>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form._honeypot) return; // silently drop bots

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE"
    ) {
      setErrorMsg(
        "Relay Not Bound — add your Web3Forms Access Key in the component code to activate this channel."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: `Astropathic Relay: ${form.subject || "New Transmission"}`,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        throw new Error(data.message || "Unknown failure");
      }
    } catch (err) {
      setErrorMsg(
        "Signal Lost in the Warp — the transmission failed. Try again, sender."
      );
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600&family=IM+Fell+English:ital@0;1&family=Special+Elite&display=swap');

        .relay-root { --void:#0b0906; --void-deep:#050403; --parchment:#cdbb92; --parchment-dim:#a4906a;
          --brass:#b1863a; --brass-bright:#d9ab5c; --seal:#6e1b1b; --seal-bright:#9c2b2b;
          --warp:#5b3a8a; --warp-glow:#8a63c9; }
        .relay-root { font-family: 'IM Fell English', serif; color: var(--parchment); position: relative; }
        .font-display { font-family: 'Cinzel Decorative', serif; }
        .font-rune { font-family: 'Cinzel', serif; }
        .font-transcript { font-family: 'Special Elite', monospace; }

        @keyframes relay-flicker { 0%,100%{opacity:1;} 92%{opacity:1;} 93%{opacity:.82;} 94%{opacity:1;} 96%{opacity:.7;} 97%{opacity:1;} }
        .relay-candle { animation: relay-flicker 6s infinite; }

        @keyframes relay-warp-pulse {
          0%,100%{ box-shadow: 0 0 60px 10px rgba(91,58,138,0.10), inset 0 0 80px rgba(0,0,0,0.6); }
          50%{ box-shadow: 0 0 90px 18px rgba(91,58,138,0.20), inset 0 0 80px rgba(0,0,0,0.6); }
        }
        .relay-panel { animation: relay-warp-pulse 5s ease-in-out infinite;
          background: radial-gradient(ellipse at 20% 10%, rgba(178,140,80,0.08), transparent 45%),
                      radial-gradient(ellipse at 80% 90%, rgba(0,0,0,0.35), transparent 55%),
                      linear-gradient(180deg, #17130e, #100d09 60%, #0c0a07);
          border: 1px solid rgba(177,134,58,0.35);
        }

        .relay-rule { height: 1px; opacity: .6;
          background: linear-gradient(to right, transparent, var(--brass) 20%, var(--brass-bright) 50%, var(--brass) 80%, transparent); }

        .relay-field { background: rgba(0,0,0,0.35); border: 1px solid rgba(164,144,106,0.3);
          border-left: 2px solid var(--brass); transition: border-color .4s ease, box-shadow .4s ease, background .4s ease; }
        .relay-field:focus-within { border-color: var(--warp-glow);
          box-shadow: 0 0 0 1px rgba(138,99,201,0.25), 0 0 24px rgba(138,99,201,0.18);
          background: rgba(20,14,28,0.4); }
        .relay-field input, .relay-field textarea { background: transparent; color: var(--parchment); caret-color: var(--warp-glow); width: 100%; }
        .relay-field input::placeholder, .relay-field textarea::placeholder { color: rgba(164,144,106,0.45); font-style: italic; }
        .relay-field input:focus, .relay-field textarea:focus { outline: none; }

        .relay-seal-btn { background: radial-gradient(circle at 35% 30%, var(--seal-bright), var(--seal) 60%, #4a1010 100%);
          border: 1px solid rgba(217,171,92,0.5);
          box-shadow: 0 4px 18px rgba(110,27,27,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform .25s ease, box-shadow .25s ease, filter .25s ease; }
        .relay-seal-btn:hover:not(:disabled) { transform: translateY(-1px);
          box-shadow: 0 8px 26px rgba(110,27,27,0.55), inset 0 1px 0 rgba(255,255,255,0.12); filter: brightness(1.08); }
        .relay-seal-btn:active:not(:disabled) { transform: translateY(0) scale(.98); }
        .relay-seal-btn:disabled { opacity: .55; cursor: not-allowed; }

        @keyframes relay-turbulence {
          0%{ filter:none; transform:translate(0,0); }
          15%{ filter: blur(.6px) saturate(1.3); transform: translate(1px,-1px); }
          30%{ filter: blur(1.2px) saturate(.7) hue-rotate(8deg); transform: translate(-2px,1px); }
          45%{ filter: blur(.4px); transform: translate(1px,0); }
          60%{ filter: blur(1px) saturate(1.4); transform: translate(-1px,-1px); }
          100%{ filter:none; transform:translate(0,0); }
        }
        .relay-transmitting { animation: relay-turbulence .6s steps(2,end) 3; }

        @keyframes relay-rise { from{ opacity:0; transform: translateY(10px);} to{ opacity:1; transform:translateY(0);} }
        .relay-rise { animation: relay-rise .7s ease both; }

        /* --- Warp Conduit (left bar) --- */
        .warp-bar { position: relative; overflow: hidden; display: flex; flex-direction: column;
          background: linear-gradient(180deg, #0c0a10, #140b20 50%, #0c0a10);
          border: 1px solid rgba(138,99,201,0.35); }
        .warp-bar .warp-blob { content: ""; position: absolute; left: 50%; width: 260%; aspect-ratio: 1/1;
          border-radius: 999px; transform: translateX(-50%); filter: blur(20px); mix-blend-mode: screen; }
        .warp-blob-a { top: -20%; background: radial-gradient(circle, rgba(138,99,201,0.55), transparent 65%);
          animation: warp-drift-a 8s ease-in-out infinite; }
        .warp-blob-b { top: 30%; background: radial-gradient(circle, rgba(91,58,138,0.55), transparent 65%);
          animation: warp-drift-b 10s ease-in-out infinite; }
        .warp-blob-c { bottom: -20%; background: radial-gradient(circle, rgba(180,140,230,0.4), transparent 65%);
          animation: warp-drift-c 11s ease-in-out infinite; }
        @keyframes warp-drift-a { 0%,100%{ transform: translateX(-58%) translateY(0) scale(1); opacity:.55; }
          50%{ transform: translateX(-42%) translateY(15%) scale(1.3); opacity:1; } }
        @keyframes warp-drift-b { 0%,100%{ transform: translateX(-42%) translateY(0) scale(1); opacity:.5; }
          50%{ transform: translateX(-58%) translateY(-12%) scale(1.2); opacity:.9; } }
        @keyframes warp-drift-c { 0%,100%{ transform: translateX(-50%) translateY(0) scale(1.1); opacity:.4; }
          50%{ transform: translateX(-46%) translateY(-18%) scale(1.35); opacity:.8; } }

        .vortex { animation: vortex-spin 14s linear infinite; transform-origin: 50% 50%; }
        @keyframes vortex-spin { from{ transform: rotate(0deg); } to{ transform: rotate(360deg); } }
        .vortex-inner { animation: vortex-spin-rev 9s linear infinite; transform-origin: 50% 50%; }
        @keyframes vortex-spin-rev { from{ transform: rotate(0deg); } to{ transform: rotate(-360deg); } }

        .warp-static { position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent 0 5px, rgba(205,187,146,0.05) 5px 6px);
          animation: warp-scan 4s linear infinite; }
        @keyframes warp-scan { from{ background-position-y: 0; } to{ background-position-y: 200px; } }
        @keyframes warp-flash { 0%,96%,100%{ opacity: 0; } 97%{ opacity: .8; } 98%{ opacity: .1; } 99%{ opacity: .6; } }
        .warp-flash { position: absolute; inset: 0; background: radial-gradient(circle at 50% 45%, rgba(200,180,255,0.5), transparent 60%);
          animation: warp-flash 8s ease-in-out infinite; }
        .warp-label { writing-mode: vertical-rl; letter-spacing: 0.3em; }

        .ember { position: absolute; bottom: -5%; width: 3px; height: 3px; border-radius: 999px;
          background: var(--warp-glow); box-shadow: 0 0 6px 2px rgba(138,99,201,0.8);
          animation: ember-rise linear infinite; }
        @keyframes ember-rise { 0%{ transform: translateY(0) translateX(0); opacity: 0; }
          10%{ opacity: 1; } 90%{ opacity: .6; } 100%{ transform: translateY(-115%) translateX(var(--drift, 8px)); opacity: 0; } }

        /* extra vortex rings, counter-rotating at different speeds */
        .vortex-outer { animation: vortex-spin 22s linear infinite; transform-origin: 50% 50%; }
        .vortex-mid { animation: vortex-spin-rev 16s linear infinite; transform-origin: 50% 50%; }

        .warp-core { animation: core-pulse 3.4s ease-in-out infinite; transform-origin: 50% 50%; }
        @keyframes core-pulse {
          0%,100%{ transform: scale(1); opacity: .7; filter: drop-shadow(0 0 4px rgba(138,99,201,0.6)); }
          50%{ transform: scale(1.35); opacity: 1; filter: drop-shadow(0 0 14px rgba(138,99,201,0.95)); }
        }

        /* expanding ripples radiating from the vortex core */
        .warp-ripple { position: absolute; top: 50%; left: 50%; width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid rgba(138,99,201,0.6); transform: translate(-50%,-50%) scale(0.2); opacity: 0;
          animation: ripple-expand 4s ease-out infinite; }
        @keyframes ripple-expand {
          0%{ transform: translate(-50%,-50%) scale(0.2); opacity: 0; }
          15%{ opacity: .8; }
          100%{ transform: translate(-50%,-50%) scale(3.4); opacity: 0; }
        }

        /* crackling psychic tendrils */
        .warp-tendrils { position: absolute; inset: 0; z-index: 5; opacity: 0; }
        @keyframes tendril-crackle {
          0%,100%{ opacity: 0; }
          2%{ opacity: 1; }
          4%{ opacity: .3; }
          6%{ opacity: .9; }
          9%{ opacity: 0; }
          45%{ opacity: 0; }
          47%{ opacity: .8; }
          50%{ opacity: 0; }
        }
        .warp-tendrils path { stroke-dasharray: 6 4; animation: tendril-dash 1.2s linear infinite; }
        @keyframes tendril-dash { to{ stroke-dashoffset: -40; } }
        .warp-tendrils.t1 { animation: tendril-crackle 6s ease-in-out infinite; }
        .warp-tendrils.t2 { animation: tendril-crackle 7.5s ease-in-out infinite 1.8s; }

        /* drifting psychic glyphs */
        .warp-glyph { position: absolute; opacity: 0; animation: glyph-drift 9s ease-in-out infinite; }
        @keyframes glyph-drift {
          0%{ opacity: 0; transform: translateY(10px) rotate(0deg) scale(0.8); }
          15%{ opacity: .8; }
          50%{ opacity: .5; transform: translateY(-10px) rotate(180deg) scale(1); }
          85%{ opacity: .7; }
          100%{ opacity: 0; transform: translateY(-30px) rotate(360deg) scale(0.8); }
        }

        /* slow chromatic shimmer across the whole bar */
        .warp-chroma { position: absolute; inset: 0; z-index: 6; mix-blend-mode: color-dodge; opacity: 0.15;
          background: linear-gradient(120deg, rgba(138,99,201,0.5), transparent 40%, rgba(217,171,92,0.3) 70%, transparent);
          animation: chroma-shift 12s ease-in-out infinite; }
        @keyframes chroma-shift {
          0%,100%{ transform: translateX(-15%) rotate(0deg); opacity: .1; }
          50%{ transform: translateX(15%) rotate(6deg); opacity: .22; }
        }

        /* --- Signal Relay (right bar) --- */
        .signal-bar { position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center;
          background: linear-gradient(180deg, #15100a, #1c140c 50%, #15100a);
          border: 1px solid rgba(177,134,58,0.35); }
        .signal-spine { position: absolute; left: 50%; top: 8%; bottom: 8%; width: 2px; transform: translateX(-50%);
          background: linear-gradient(to bottom, transparent, rgba(177,134,58,0.5), transparent); }
        .signal-seg { width: 62%; height: 4px; border-radius: 1px; background: rgba(177,134,58,0.2);
          animation: signal-pulse 2.6s ease-in-out infinite; }
        @keyframes signal-pulse { 0%,100%{ background: rgba(177,134,58,0.2); box-shadow: none; transform: scaleX(1); }
          50%{ background: var(--brass-bright); box-shadow: 0 0 10px 1px rgba(217,171,92,0.7); transform: scaleX(1.25); } }
        .signal-pulse-line { position: absolute; left: 50%; top: -12%; width: 3px; height: 16%; transform: translateX(-50%);
          background: linear-gradient(to bottom, transparent, var(--warp-glow), transparent);
          animation: pulse-travel 3.4s linear infinite; opacity: .9; filter: blur(0.3px); }
        @keyframes pulse-travel { 0%{ top: -12%; } 100%{ top: 108%; } }
        .signal-bar.sending .signal-pulse-line { animation-duration: 0.9s; }
        .signal-bar.sending .signal-seg { animation-duration: 0.6s; }
        .signal-label { writing-mode: vertical-rl; letter-spacing: 0.3em; }
        .signal-dish { animation: dish-pulse 3s ease-in-out infinite; transform-origin: 50% 50%; }
        @keyframes dish-pulse { 0%,100%{ opacity: .6; transform: scale(1); } 50%{ opacity: 1; transform: scale(1.08); } }
      `}</style>

      <div className="relay-root max-w-6xl mx-auto px-4 py-10 flex items-stretch justify-center gap-6">
        <WarpConduit />
        <div className="max-w-2xl w-full min-w-0">
          <Panel>
            <div
              className={`relay-panel rounded-sm p-5 sm:p-10 relay-rise ${status === "sending" ? "relay-transmitting" : ""}`}
            >
              {/* Station header */}
              <div className="text-center mb-6 relay-rise">
                <div className="flex items-center justify-center mb-3 relay-candle">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 100 100"
                    fill="none"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(177,134,58,0.45))",
                    }}
                  >
                    <path
                      d="M50 8 L58 30 L50 24 L42 30 Z"
                      fill="var(--brass-bright)"
                    />
                    <path
                      d="M50 24 C 30 30, 6 40, 4 58 C 20 50, 34 47, 46 46 Z"
                      fill="var(--brass)"
                    />
                    <path
                      d="M50 24 C 70 30, 94 40, 96 58 C 80 50, 66 47, 54 46 Z"
                      fill="var(--brass)"
                    />
                    <circle cx="50" cy="40" r="7" fill="var(--brass-bright)" />
                    <path
                      d="M50 47 L54 70 L50 92 L46 70 Z"
                      fill="var(--brass)"
                    />
                  </svg>
                </div>
                <p
                  className="font-rune tracking-[0.35em] text-xs sm:text-sm uppercase"
                  style={{ color: "var(--brass-bright)" }}
                >
                  Adeptus Astra Telepathica
                </p>
                <h1 className="font-display text-3xl sm:text-4xl mt-2 tracking-wide">
                  Astropathic Relay
                </h1>
                <p
                  className="font-transcript text-[10px] sm:text-xs mt-2 tracking-widest uppercase"
                  style={{ color: "var(--parchment-dim)" }}
                >
                  Choir Station · Bound Sanctioned Frequency
                </p>
              </div>

              {/* status bar */}
              <div
                className="flex items-center justify-between mb-6 font-transcript text-[10px] sm:text-xs uppercase tracking-widest"
                style={{ color: "var(--parchment-dim)" }}
              >
                <div className="flex items-center gap-2">
                  {/*change later*/}
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{
                      color: "red",
                      background: "red",
                      boxShadow: "0 0 8px 2px currentColor",
                    }}
                  />
                  <span>Channel Closed</span>
                </div>
                <span>
                  {status === "sending"
                    ? "Warp Turbulence"
                    : status === "success"
                      ? "Channel Closed"
                      : "Vox-Static Nominal"}
                </span>
              </div>

              <div className="relay-rule mb-6" />

              {status === "success" ? (
                <div className="text-center py-10 relay-rise">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, var(--seal-bright), var(--seal) 70%)",
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--parchment)"
                      strokeWidth="2"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2
                    className="font-display text-2xl mb-2"
                    style={{ color: "var(--brass-bright)" }}
                  >
                    Transmission Received
                  </h2>
                  <p
                    className="font-transcript text-xs uppercase tracking-widest"
                    style={{ color: "var(--parchment-dim)" }}
                  >
                    The Choir has spoken your words across the warp.
                  </p>
                  <button
                    className="mt-6 font-rune text-xs uppercase tracking-widest underline"
                    style={{ color: "var(--brass-bright)" }}
                    onClick={() => setStatus("idle")}
                  >
                    Send another transmission
                  </button>
                </div>
              ) : (
                <>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-8 italic"
                    style={{ color: "var(--parchment-dim)" }}
                  >
                    Compose your petition below. It shall be received into the
                    Choir, transcribed by sanctioned astropath, and delivered
                    across the warp to its intended recipient. Speak plainly —
                    the psychic distance forgives no ambiguity.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        className="font-rune text-xs uppercase tracking-[0.2em] block mb-2"
                        style={{ color: "var(--brass-bright)" }}
                      >
                        Sender Designation
                      </label>
                      <div className="relay-field rounded-sm px-4 py-3">
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Name by which you are known"
                          className="font-transcript text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="font-rune text-xs uppercase tracking-[0.2em] block mb-2"
                        style={{ color: "var(--brass-bright)" }}
                      >
                        Return Vox-Frequency
                      </label>
                      <div className="relay-field rounded-sm px-4 py-3">
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@frequency.void"
                          className="font-transcript text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="font-rune text-xs uppercase tracking-[0.2em] block mb-2"
                        style={{ color: "var(--brass-bright)" }}
                      >
                        Nature of Petition
                      </label>
                      <div className="relay-field rounded-sm px-4 py-3">
                        <input
                          type="text"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Subject of the transmission"
                          className="font-transcript text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="font-rune text-xs uppercase tracking-[0.2em] block mb-2"
                        style={{ color: "var(--brass-bright)" }}
                      >
                        Transcribed Message
                      </label>
                      <div className="relay-field rounded-sm px-4 py-3">
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Dictate your message to the Choir..."
                          className="font-transcript text-sm sm:text-base resize-none"
                        />
                      </div>
                    </div>

                    {/* honeypot — hidden from real users, catches bots */}
                    <input
                      type="text"
                      name="_honeypot"
                      value={form._honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />

                    <div className="pt-4 flex flex-col items-center gap-4">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="relay-seal-btn font-rune uppercase tracking-[0.25em] text-sm sm:text-base rounded-full w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center text-center leading-snug"
                        style={{ color: "var(--parchment)" }}
                      >
                        {status === "sending" ? (
                          "Transmitting…"
                        ) : (
                          <span>
                            Commit
                            <br />
                            to the
                            <br />
                            Warp
                          </span>
                        )}
                      </button>
                      <p
                        className="font-transcript text-[10px] text-center max-w-xs uppercase tracking-widest"
                        style={{ color: "var(--parchment-dim)" }}
                      >
                        Transmission is bound by seal. No frequency is exposed.
                      </p>
                    </div>

                    {status === "error" && (
                      <p
                        className="font-transcript text-xs uppercase tracking-widest text-center relay-rise"
                        style={{ color: "var(--seal-bright)" }}
                      >
                        {errorMsg}
                      </p>
                    )}
                  </form>
                </>
              )}

              <p
                className="text-center mt-8 font-transcript text-[10px] uppercase tracking-widest relay-rise"
                style={{ color: "var(--parchment-dim)" }}
              >
                Sanctioned by the Adeptus Terra · Non Est Vox Sine Choiro
              </p>
            </div>
          </Panel>
        </div>
        <SignalRelay sending={status === "sending"} />
      </div>
    </>
  );
}
