import { useState } from "react";
import Panel from "./Parts/Panel"; // adjust this import path to wherever your Panel component lives
import FloatingRunes from "./Parts/ChaosRunes";
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
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  _honeypot: "",
};

function RuneSidebar() {
  return (
    <div
      className="hidden md:flex flex-1 shrink-0 relative overflow-hidden"
      style={{
        border: "1px solid rgba(177,134,58,0.35)",
        background: "#0c0a07",
      }}
    >
      <FloatingRunes count={80} />
    </div>
  );
}
function WarpWindow({ sending }: { sending: boolean }) {
  const embers = Array.from({ length: 9 });

  return (
    <div
      className={`warp-window hidden md:flex flex-1 shrink-0 relative overflow-hidden ${sending ? "sending" : ""}`}
    >
      {/* Riveted metal frame */}
      <div className="warp-window-frame" />
      <span className="warp-rivet" style={{ top: 10, left: 10 }} />
      <span className="warp-rivet" style={{ top: 10, right: 10 }} />
      <span className="warp-rivet" style={{ bottom: 10, left: 10 }} />
      <span className="warp-rivet" style={{ bottom: 10, right: 10 }} />

      {/* Glass viewport */}
      <div className="warp-window-glass absolute inset-3 overflow-hidden">
        <div className="warp-core-bg" />

        {/* concentric vortex rings */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 320"
          style={{ opacity: 0.55 }}
        >
          <g
            className="vortex-outer"
            style={{ transformOrigin: "100px 150px" }}
          >
            <circle
              cx="100"
              cy="150"
              r="120"
              stroke="var(--warp-glow)"
              strokeWidth="0.6"
              fill="none"
              opacity="0.3"
              strokeDasharray="4 11"
            />
          </g>
          <g className="vortex-mid" style={{ transformOrigin: "100px 150px" }}>
            <circle
              cx="100"
              cy="150"
              r="82"
              stroke="var(--warp)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.4"
              strokeDasharray="3 8"
            />
          </g>
          <g className="vortex" style={{ transformOrigin: "100px 150px" }}>
            <circle
              cx="100"
              cy="150"
              r="50"
              stroke="var(--warp-glow)"
              strokeWidth="1"
              fill="none"
              opacity="0.55"
              strokeDasharray="2 6"
            />
          </g>
        </svg>

        {/* ripples pulsing from the core */}
        <div
          className="warp-ripple"
          style={{ top: "47%", left: "50%", animationDelay: "0s" }}
        />
        <div
          className="warp-ripple"
          style={{ top: "47%", left: "50%", animationDelay: "2s" }}
        />

        {/* writhing tentacle silhouettes */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 320"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="tentacleGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(120,80,170,0.55)" />
              <stop offset="100%" stopColor="rgba(8,4,10,0.9)" />
            </linearGradient>
          </defs>
          <path
            className="warp-tentacle t1"
            d="M -20 20 C 20 40 10 90 55 100 C 90 108 80 150 120 160 C 150 168 140 205 178 214"
            fill="none"
            stroke="url(#tentacleGrad)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            className="warp-tentacle t2"
            d="M 222 300 C 182 280 192 230 150 215 C 115 202 125 165 90 150 C 60 138 65 100 28 85"
            fill="none"
            stroke="url(#tentacleGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* embers drifting upward */}
        {embers.map((_, i) => (
          <span
            key={i}
            className="ember"
            style={
              {
                left: `${8 + i * 10}%`,
                animationDuration: `${4.5 + (i % 5)}s`,
                animationDelay: `${i * 0.5}s`,
                "--drift": `${(i % 2 === 0 ? 1 : -1) * (6 + i)}px`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* drifting psychic glyphs */}
        <span
          className="warp-glyph font-rune text-[11px]"
          style={{
            left: "30%",
            top: "60%",
            color: "var(--brass-bright)",
            animationDelay: "0.5s",
          }}
        >
          ⁂
        </span>
        <span
          className="warp-glyph font-rune text-[10px]"
          style={{
            left: "65%",
            top: "35%",
            color: "var(--parchment-dim)",
            animationDelay: "3.2s",
          }}
        >
          ☩
        </span>

        {/* lightning flashes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 320">
          <path
            className="warp-bolt a"
            d="M 45 0 L 58 55 L 40 60 L 62 130"
            stroke="#f2e9ff"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            className="warp-bolt b"
            d="M 168 30 L 148 95 L 170 100 L 142 185"
            stroke="#e4d6ff"
            strokeWidth="1.1"
            fill="none"
          />
        </svg>

        {/* subtle chromatic shimmer, glass streak, vignette */}
        <div className="warp-chroma" />
        <div className="warp-glass-streak" />
        <div className="warp-vignette" />
      </div>

      <span
        className="warp-window-label font-rune text-[8px] uppercase absolute bottom-2 left-1/2 -translate-x-1/2 tracking-[0.25em]"
        style={{ color: "var(--parchment-dim)" }}
      >
        Warp Observed
      </span>
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

    if (!WEB3FORMS_ACCESS_KEY) {
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

        /* --- shared warp motion primitives (used by the viewport windows) --- */
        .vortex { animation: vortex-spin 14s linear infinite; }
        @keyframes vortex-spin { from{ transform: rotate(0deg); } to{ transform: rotate(360deg); } }
        .vortex-mid { animation: vortex-spin-rev 16s linear infinite; }
        @keyframes vortex-spin-rev { from{ transform: rotate(0deg); } to{ transform: rotate(-360deg); } }
        .vortex-outer { animation: vortex-spin 22s linear infinite; }

        .ember { position: absolute; bottom: -5%; width: 3px; height: 3px; border-radius: 999px;
          background: var(--warp-glow); box-shadow: 0 0 6px 2px rgba(138,99,201,0.8);
          animation: ember-rise linear infinite; }
        @keyframes ember-rise { 0%{ transform: translateY(0) translateX(0); opacity: 0; }
          10%{ opacity: 1; } 90%{ opacity: .6; } 100%{ transform: translateY(-115%) translateX(var(--drift, 8px)); opacity: 0; } }

        .warp-ripple { position: absolute; top: 50%; left: 50%; width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid rgba(138,99,201,0.6); transform: translate(-50%,-50%) scale(0.2); opacity: 0;
          animation: ripple-expand 4s ease-out infinite; }
        @keyframes ripple-expand {
          0%{ transform: translate(-50%,-50%) scale(0.2); opacity: 0; }
          15%{ opacity: .8; }
          100%{ transform: translate(-50%,-50%) scale(3.4); opacity: 0; }
        }

        .warp-glyph { position: absolute; opacity: 0; animation: glyph-drift 9s ease-in-out infinite; }
        @keyframes glyph-drift {
          0%{ opacity: 0; transform: translateY(10px) rotate(0deg) scale(0.8); }
          15%{ opacity: .8; }
          50%{ opacity: .5; transform: translateY(-10px) rotate(180deg) scale(1); }
          85%{ opacity: .7; }
          100%{ opacity: 0; transform: translateY(-30px) rotate(360deg) scale(0.8); }
        }

        .warp-chroma { position: absolute; inset: 0; z-index: 6; mix-blend-mode: color-dodge; opacity: 0.15;
          background: linear-gradient(120deg, rgba(138,99,201,0.5), transparent 40%, rgba(217,171,92,0.3) 70%, transparent);
          animation: chroma-shift 12s ease-in-out infinite; }
        @keyframes chroma-shift {
          0%,100%{ transform: translateX(-15%) rotate(0deg); opacity: .1; }
          50%{ transform: translateX(15%) rotate(6deg); opacity: .22; }
        }

        /* --- Warp Window (viewport panels flanking the form) --- */
        .warp-window { border: 1px solid rgba(177,134,58,0.35); background: #0c0a07; }
        .warp-window-frame { position: absolute; inset: 0; pointer-events: none; z-index: 20;
          border: 6px solid; border-image: linear-gradient(180deg, var(--brass-bright), var(--brass) 45%, #2c2010 100%) 1;
          box-shadow: inset 0 0 22px rgba(0,0,0,0.65); }
        .warp-rivet { position: absolute; width: 6px; height: 6px; border-radius: 999px; z-index: 25;
          background: radial-gradient(circle at 35% 30%, var(--brass-bright), var(--brass) 75%);
          box-shadow: 0 1px 2px rgba(0,0,0,0.6); }
        .warp-window-glass { background: #050308; box-shadow: inset 0 0 46px rgba(0,0,0,0.85); }
        .warp-core-bg { position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 42%, rgba(200,150,255,0.35), rgba(150,60,30,0.28) 32%, rgba(10,6,12,0.92) 68%, #030204 100%);
          animation: core-bg-pulse 6s ease-in-out infinite; }
        @keyframes core-bg-pulse { 0%,100%{ filter: brightness(1); } 50%{ filter: brightness(1.3); } }
        .warp-window.sending .warp-core-bg { animation-duration: 1.6s; }

        .warp-tentacle { animation: tentacle-writhe 11s ease-in-out infinite; transform-origin: center; }
        .warp-tentacle.t2 { animation-duration: 14s; animation-direction: reverse; }
        @keyframes tentacle-writhe { 0%,100%{ transform: rotate(0deg) scale(1); } 50%{ transform: rotate(2.5deg) scale(1.03); } }

        .warp-bolt { opacity: 0; }
        .warp-bolt.a { animation: bolt-flash 7s infinite; }
        .warp-bolt.b { animation: bolt-flash 9s infinite 3s; }
        @keyframes bolt-flash { 0%,93%,100%{ opacity:0; } 94%{ opacity:1; } 95%{ opacity:.15; } 96%{ opacity:.85; } 97.5%{ opacity:0; } }
        .warp-window.sending .warp-bolt.a { animation-duration: 2.4s; }
        .warp-window.sending .warp-bolt.b { animation-duration: 3s; animation-delay: 1s; }

        .warp-glass-streak { position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.02) 50%, transparent 65%); }
        .warp-vignette { position: absolute; inset: 0; pointer-events: none;
          box-shadow: inset 0 0 46px 14px rgba(0,0,0,0.9); }
        .warp-window-label { z-index: 25; }
      `}</style>

      <Panel>
        <div className="relay-root w-full flex items-stretch justify-center px-4 py-6 min-h-[38rem] sm:min-h-[44rem]">
          <RuneSidebar />
          <div className="max-w-2xl w-full min-w-0">
            <div
              className={`relay-panel rounded-sm p-5 sm:p-10 relay-rise ${status === "sending" ? "relay-transmitting" : ""}`}
            >
              {/* Station header */}
              <div className="text-center mb-6 relay-rise">
                <div className="flex items-center justify-center mb-3 relay-candle">
                  {/*Imperial Aquilla Logo*/}
                  <svg
                    width="84"
                    height="33"
                    viewBox="-41 211 292 114"
                    fill="none"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(217,171,92,0.55))",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="aquilaGold"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "var(--brass-bright)" }}
                        />
                        <stop
                          offset="55%"
                          style={{ stopColor: "var(--brass)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "var(--brass-bright)" }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#aquilaGold)"
                      d="m -35.934708,216.41937 8.880078,10.12341 86.028339,-3.58479 c 0,0 -2.087983,2.37169 -2.816365,4.55683 l -74.891034,7.22074 7.211962,7.46776 66.313263,-10.96677 c 0,0 -0.725019,1.85443 -0.725019,3.88349 l -56.8828333,14.46577 7.1685546,6.48644 49.5003367,-18.572 c 0,0 0.0067,3.00013 0.6165,4.27623 l -42.051696,21.08035 6.444051,4.69429 36.399845,-22.83012 c 0,0 1.06979,2.69192 1.962671,3.58481 l -28.206547,26.54255 5.675623,3.96824 24.74991,-28.24945 c 0.382665,0.89289 3.286104,2.60347 3.286104,2.60347 L 45.616902,282.1027 c 3.146348,2.12593 7.126697,0.89607 7.126697,0.89607 l 12.545486,-28.93208 c 2.423541,1.02044 4.096909,0.81078 4.096909,0.81078 l -8.662522,25.85943 c 4.081751,-0.6803 6.059062,-3.20032 6.059062,-3.20032 l 5.248775,-22.61672 c 1.913321,0.21259 3.840594,-0.17052 3.840594,-0.17052 -0.127561,2.76368 -2.986898,18.43452 -2.986898,18.43452 0,0 6.406468,-8.02391 7.894609,-8.44909 0,0 -2.30486,-8.37118 -2.43241,-10.32701 0,0 2.095685,-0.13142 3.413744,-1.15189 0,0 1.792404,5.55384 1.877404,7.33962 1.913321,-1.70074 3.115056,-4.26744 3.115056,-4.26744 0,0 -1.154594,-0.99568 -1.877404,-4.86481 0,-3e-5 4.315701,-1.61023 5.051372,0.0915 0.735658,1.70166 0.04766,7.04865 -4.119129,11.6406 0,0 -4.394112,6.87547 -8.050672,9.04391 1.78576,-0.12755 8.421396,2.37675 9.739458,5.6932 l 10.507368,-26.26921 -7.668265,-8.81651 c -12.712941,7.73831 -28.201831,6.05992 -30.229164,-0.11369 -2.02733,-6.17361 -0.422193,-16.12024 5.168162,-20.50469 1.812808,-1.42176 5.625761,-3.00274 5.93607,-5.80895 l -107.145912,0 z m 174.855478,0 c 0.31031,2.80621 4.12326,4.38719 5.93607,5.80895 5.59035,4.38445 7.19549,14.33108 5.16816,20.50469 -2.02733,6.17361 -17.51622,7.852 -30.22916,0.11369 l -7.66827,8.81651 10.50737,26.26921 c 1.31806,-3.31645 7.95369,-5.82075 9.73945,-5.6932 -3.65656,-2.16844 -8.05118,-9.04391 -8.05118,-9.04391 -4.16679,-4.59195 -4.85428,-9.93894 -4.11861,-11.6406 0.73566,-1.7017 5.05137,-0.0915 5.05137,-0.0915 -0.72281,3.86913 -1.87792,4.86481 -1.87792,4.86481 0,0 1.20225,2.5667 3.11557,4.26744 0.085,-1.78578 1.8774,-7.33962 1.8774,-7.33962 1.31806,1.02047 3.41375,1.15189 3.41375,1.15189 -0.12755,1.95583 -2.43241,10.32701 -2.43241,10.32701 1.48814,0.42518 7.89461,8.44909 7.89461,8.44909 0,0 -2.85934,-15.67084 -2.9869,-18.43452 0,0 1.92675,0.38311 3.84007,0.17052 l 5.24878,22.61672 c 0,0 1.97783,2.52002 6.05958,3.20032 l -8.66252,-25.85943 c 0,0 1.67337,0.20966 4.0969,-0.81078 l 12.54549,28.93208 c 0,0 3.98035,1.22986 7.1267,-0.89607 l -17.11214,-28.93208 c 0,0 2.90344,-1.71058 3.28611,-2.60347 l 24.74991,28.24945 5.67562,-3.96824 -28.20655,-26.54255 c 0.8929,-0.89289 1.96268,-3.58481 1.96268,-3.58481 l 36.39984,22.83012 6.44354,-4.69429 -42.05118,-21.08035 c 0.60979,-1.2761 0.6165,-4.27623 0.6165,-4.27623 l 49.49982,18.572 7.16907,-6.48644 -56.88283,-14.46577 c 0,-2.02906 -0.72503,-3.88349 -0.72503,-3.88349 l 66.31327,10.96677 7.21145,-7.46776 -74.89052,-7.22074 c -0.72838,-2.18514 -2.81637,-4.55683 -2.81637,-4.55683 l 86.02834,3.58479 8.88008,-10.12341 -107.14591,0 z m -19.75849,7.5246 -0.87075,1.35186 -9.109,0.21704 11.35228,3.9517 0.79065,5.89163 c 5.4606,-3.0177 2.80206,-4.88585 9.69966,-7.32875 l 0.40205,-2.36523 -3.60805,-0.23255 -0.81907,-0.62632 -7.83777,-0.85938 z m -40.989227,1.13792 0.933793,2.94556 c 6.897611,2.4429 4.239067,4.31105 9.699668,7.32875 l 0.790649,-5.89163 11.352277,-3.9517 -22.776387,-0.43098 z m 7.831563,1.00562 a 2.0836513,2.0836513 0 0 1 2.083594,2.0836 2.0836513,2.0836513 0 0 1 -2.083594,2.08411 2.0836513,2.0836513 0 0 1 -2.083594,-2.08411 2.0836513,2.0836513 0 0 1 2.083594,-2.0836 z m -6.979417,3.53932 c -1.681703,0.0345 -4.30289,0.69358 -6.097302,1.34669 0.19521,2.09548 1.381993,3.46651 1.939933,5.24516 0.199948,0.63741 0.379352,2.39744 0.580842,3.20807 0.201491,0.81063 0.999422,0.52814 0.999422,0.52814 0,0 -0.287237,-2.15585 1.29346,-4.3832 0,0 5.748271,-0.64616 6.538619,-1.79576 -1.939949,-1.22145 -2.446242,-3.15966 -3.952214,-3.95221 -0.286303,-0.15067 -0.742196,-0.20838 -1.30276,-0.19689 z m 52.081571,0 c -0.56056,-0.0115 -1.01697,0.0462 -1.30328,0.19689 -1.50597,0.79255 -2.01174,2.73076 -3.95169,3.95221 0.79035,1.1496 6.53862,1.79576 6.53862,1.79576 1.5807,2.22735 1.29294,4.3832 1.29294,4.3832 0,0 0.79845,0.28249 0.99994,-0.52814 0.20149,-0.81063 0.38089,-2.57066 0.58084,-3.20807 0.55794,-1.77865 1.74473,-3.14968 1.93994,-5.24516 -1.79442,-0.65311 -4.41561,-1.31221 -6.09731,-1.34669 z m -35.251076,0.12971 -3.728453,1.02268 -1.623674,6.37429 8.779825,9.32088 4.449858,-11.06496 -7.877556,-5.65289 z m 18.420586,0 -7.87756,5.65289 4.44986,11.06496 8.77982,-9.32088 -1.62367,-6.37429 -3.72845,-1.02268 z m -9.2103,6.1991 -16.05121,47.99759 7.128245,4.63383 -7.020758,12.33154 3.114021,2.89907 6.335014,-13.95887 1.297078,0.92501 -6.021337,14.64459 3.972882,3.54345 4.294835,-16.8584 c 0.98381,-0.46297 1.28055,0.008 1.39629,0.64442 l -3.22151,18.57613 4.77645,4.93922 4.77646,-4.93922 -3.22151,-18.57613 c 0.11574,-0.63627 0.41248,-1.10739 1.3963,-0.64442 l 4.29482,16.8584 3.97289,-3.54345 -6.02134,-14.64459 1.29708,-0.92501 6.33501,13.95887 3.11403,-2.89907 -7.02077,-12.33154 7.12773,-4.63383 -16.0507,-47.99759 z m 15.20786,50.53129 -4.55269,2.62567 7.82071,10.20093 c 0,0 -0.909,1.07802 -0.86403,1.7172 0.0357,0.50797 0.87126,1.25524 0.87126,1.25524 l -4.08812,4.71701 c 0,0 -2.41939,-0.12083 -3.39307,0.43254 1.01011,0.702 1.42208,0.67871 1.76061,1.30742 0.0484,1.11231 -0.14521,2.31664 -0.14521,2.31664 1.08986,-0.40312 2.13612,-0.81 3.31763,-1.11258 1.88611,0.3869 8.82944,3.99098 8.82944,3.99098 0,0 -5.32048,-6.37823 -5.6963,-7.18355 0.16107,-0.64426 2.04846,-2.70734 2.04846,-2.70734 0.48319,-0.59055 0.87216,-0.64265 1.24798,0.0553 0,0 0.91694,1.21042 1.38441,2.78175 0.0717,0.24093 -1.00169,1.74895 -0.86713,1.98025 0.30491,0.52406 1.68274,-0.12136 2.0743,0.37465 1.89767,2.40382 2.88792,5.81234 2.97036,6.19704 -0.64426,1.2885 -3.17811,4.2199 -3.17811,4.2199 0,0 3.44657,-1.26662 5.18108,-1.75546 0.76104,-0.21447 1.45986,1.96165 1.45986,1.96165 0.32213,-0.42953 0.3219,-5.95125 0.2682,-7.1324 -0.46825,-0.9625 -1.99756,-3.19122 -3.59926,-5.38314 -0.27253,-0.37293 0.61397,-1.80858 0.34572,-2.16937 -0.40199,-0.54062 -1.46534,0.0933 -1.95079,-0.24545 -1.21611,-0.84876 -1.86552,-2.18797 -1.86552,-2.18797 -0.26845,-0.64426 0.0631,-1.03209 0.65371,-1.13948 0,0 1.81971,-0.38479 3.02875,-0.33642 3.2213,4.99303 3.85507,9.69089 3.85507,9.69089 0,0 0.6687,-8.21526 0.0884,-11.31043 0,0 2.46218,-1.75668 2.31304,-2.20917 -0.11909,-0.36131 -2.5709,0.0579 -2.5709,0.0579 l -0.45114,-1.68518 c -0.13821,-0.581 -0.61514,-0.62955 -0.85007,0.0465 l -0.5948,1.95543 -6.13244,1.19891 c -0.38449,0.12816 -0.0414,-1.09736 -0.64492,-1.63555 -0.4078,-0.36364 -1.90089,0.0294 -1.98748,-0.18709 l -6.08697,-10.70321 z m -30.560922,0.0966 -7.102409,12.34705 c -0.214751,0.53684 -0.682276,0.53824 -1.326533,0.32351 l -8.858893,-1.71773 0.322461,12.93876 c 0,0 0.536612,-4.45606 3.757911,-9.44904 l 3.319177,0.57825 c 0.59059,0.10736 0.922158,0.49522 0.653706,1.13948 0,0 -6.925633,7.99949 -7.892023,9.98593 -0.05369,1.18115 0.429762,4.1878 0.751893,4.61729 0,0 1.279154,0 2.040183,0.21498 1.734521,0.48884 4.939234,2.09394 4.939234,2.09394 0,0 -3.114167,-3.2213 -3.758428,-4.5098 0.161071,-0.75163 5.852356,-11.38227 5.852356,-11.38227 0.375822,-0.69794 1.054703,-0.30736 1.537891,0.28319 0,0 1.79075,1.91836 1.95182,2.56264 -0.375819,0.80532 -5.744868,7.08639 -5.744868,7.08639 l 11.489221,-5.58313 -5.691126,-6.54997 c -0.69795,-0.75166 -0.680488,-0.80452 -0.08992,-1.71723 l 8.3044,-10.68512 -4.456057,-2.57712 z"
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
                    className="w-2 h-2 rounded-full inline-block"
                    style={{
                      color: "green",
                      background: "green",
                      boxShadow: "0 0 8px 2px currentColor",
                    }}
                  />
                  <span>Channel Open</span>
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
          </div>
          <RuneSidebar />
        </div>
      </Panel>
    </>
  );
}
