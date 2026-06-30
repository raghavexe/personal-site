import Panel from "./Parts/Panel";
import MyPhoto from "../assets/my-photo.jpeg";
import { useState, useEffect } from "react";
import GrimdarkFrame from "./Parts/PhotoFrame";
import AquilaSVG from "~/assets/Aquilla";

const FULL_TEXT = [
  { text: "problem solving", accent: true },
  { text: ", ", accent: false },
  { text: "continuous learning", accent: true },
  { text: ", and ", accent: false },
  { text: "adapting to new technologies and challenges.", accent: true },
];

const FULL_STRING = FULL_TEXT.map((t) => t.text).join("");

function SkullDivider() {
  return (
    <div className="flex items-center gap-2 my-3">
      <div className="flex-1 h-px bg-linear-to-r from-transparent to-zinc-700" />
      <span className="text-zinc-500 text-xs tracking-widest font-mono">☩</span>
      <span className="text-zinc-600 text-[10px] tracking-[0.3em] font-mono">
        ⅧⅧⅧ
      </span>
      <span className="text-zinc-500 text-xs tracking-widest font-mono">☩</span>
      <div className="flex-1 h-px bg-linear-to-l from-transparent to-zinc-700" />
    </div>
  );
}

export default function HomePanel() {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [headingDone, setHeadingDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const [barWidths, setBarWidths] = useState([0, 0, 0, 0]);

  const HEADING = "Hello, I'm Raghav";
  const SUBTITLE =
    "22 · Software Engineering Graduate, University of Gothenburg";

  const [headingChars, setHeadingChars] = useState(0);
  const [subtitleChars, setSubtitleChars] = useState(0);

  useEffect(() => {
    if (headingChars < HEADING.length) {
      const t = setTimeout(() => setHeadingChars((c) => c + 1), 40);
      return () => clearTimeout(t);
    } else setHeadingDone(true);
  }, [headingChars]);

  useEffect(() => {
    if (!headingDone) return;
    if (subtitleChars < SUBTITLE.length) {
      const t = setTimeout(() => setSubtitleChars((c) => c + 1), 25);
      return () => clearTimeout(t);
    } else setSubtitleDone(true);
  }, [headingDone, subtitleChars]);

  useEffect(() => {
    if (!subtitleDone) return;
    if (displayedChars < FULL_STRING.length) {
      const t = setTimeout(() => setDisplayedChars((c) => c + 1), 20);
      return () => clearTimeout(t);
    } else setAllDone(true);
  }, [subtitleDone, displayedChars]);

  useEffect(() => {
    if (!allDone) return;
    const targets = [92, 88, 71, 75];
    const timers = targets.map((target, i) =>
      setTimeout(() => {
        setBarWidths((prev) => {
          const next = [...prev];
          next[i] = target;
          return next;
        });
      }, i * 150)
    );
    return () => timers.forEach(clearTimeout);
  }, [allDone]);

  const renderPassion = () => {
    let charsLeft = displayedChars;
    return FULL_TEXT.map((segment, i) => {
      if (charsLeft <= 0) return null;
      const visible = segment.text.slice(0, charsLeft);
      charsLeft -= segment.text.length;
      return segment.accent ? (
        <span key={i} className="text-(--imperial-red)">
          {visible}
        </span>
      ) : (
        <span key={i}>{visible}</span>
      );
    });
  };

  const bars = [
    {
      label: "PROBLEM SOLVING",
      value: 92,
      color: "bg-green-800",
      width: barWidths[0],
    },
    {
      label: "ADAPTABILITY",
      value: 88,
      color: "bg-green-800",
      width: barWidths[1],
    },
    {
      label: "WARP RESISTANCE",
      value: 71,
      color: "bg-yellow-800",
      width: barWidths[2],
    },
    {
      label: "HERESY LEVEL",
      value: 75,
      color: "bg-red-900",
      width: barWidths[3],
    },
  ];

  return (
    <Panel>
      {/* Corner runes */}
      <div className="absolute top-2 left-3 text-[10px] text-zinc-700 font-mono pointer-events-none select-none">
        ᚠᚢᚦ
      </div>
      <div className="absolute top-2 right-3 text-[10px] text-zinc-700 font-mono pointer-events-none select-none">
        ᚨᚱᚲ
      </div>
      <div className="absolute bottom-2 left-3 text-[10px] text-zinc-700 font-mono pointer-events-none select-none">
        ᛊᛏᛒ
      </div>
      <div className="absolute bottom-2 right-3 text-[10px] text-zinc-700 font-mono pointer-events-none select-none">
        ᛖᛗᛚ
      </div>

      {/* Main two-column layout */}
      <div
        className="grid gap-8 items-center"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        {/* Text column */}
        <div className="flex flex-col gap-2">
          {/* Inquisition header tag */}
          <div className="text-[9px] font-mono text-zinc-400 tracking-[0.25em] mb-1">
            ⬡ INQUISITION DATA-SLATE · CLASS: PERSONNEL · CLEARANCE: VERMILLION
          </div>

          {/* Heading */}
          <h1 className="leading-tight min-h-[1.2em]">
            <span className="text-4xl font-bold text-zinc-200 font-mono tracking-wide">
              {HEADING.slice(
                0,
                Math.min(headingChars, HEADING.indexOf("Raghav"))
              ).trimEnd()}
            </span>
            {headingChars > HEADING.indexOf("Raghav") && (
              <>
                {" "}
                <span
                  className="text-5xl font-bold text-(--imperial-red)"
                  style={{ fontFamily: "'UnifrakturMaguntia', serif" }}
                >
                  {"Raghav".slice(
                    0,
                    Math.max(0, headingChars - HEADING.indexOf("Raghav"))
                  )}
                </span>
              </>
            )}
            {headingChars < HEADING.length && (
              <span className="animate-pulse text-zinc-400">█</span>
            )}
          </h1>

          {/* Subtitle */}
          <div className="text-[11px] font-mono text-zinc-400 tracking-wider min-h-[1.2em]">
            {"[ "}
            {SUBTITLE.slice(0, subtitleChars)}
            {headingDone && !subtitleDone && (
              <span className="animate-pulse">█</span>
            )}
            {subtitleDone && " ]"}
          </div>

          <SkullDivider />

          {subtitleDone && (
            <div>
              <div className="text-[9px] font-mono text-zinc-500 tracking-widest mb-1">
                ◈ PSYCH-PROFILE · MOTIVATIONAL DOCTRINES
              </div>
              <p className="text-lg font-bold leading-snug font-mono text-zinc-200">
                <span className="text-zinc-400">DRIVEN BY </span>
                {renderPassion()}
                {displayedChars < FULL_STRING.length && (
                  <span className="animate-pulse text-zinc-400">█</span>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Photo with frame */}
        <GrimdarkFrame>
          <img
            src={MyPhoto}
            alt="Raghav"
            className="absolute object-cover"
            style={{
              top: "12%",
              left: "11%",
              width: "78%",
              height: "74%",
              zIndex: 0,
            }}
          />
        </GrimdarkFrame>
      </div>

      {/* AUSPEX HUD */}
      <div className="mt-5 border border-zinc-800 bg-[#0d0d0d] p-4 font-mono text-xs">
        <div
          className="text-[10px] text-green-500 tracking-widest mb-3 pb-2 border-b border-zinc-900 flex justify-between"
          style={{ animation: "flicker 2.6s infinite" }}
        >
          <span> AUSPEX — PERSONNEL DOSSIER [INQUISITION REF: Ω-7734]</span>
          <span className="text-zinc-400">
            SCAN:{" "}
            {allDone ? (
              <span className="text-green-400">COMPLETE</span>
            ) : (
              <span className="animate-pulse text-zinc-200">RUNNING...</span>
            )}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-4">
          {[
            {
              label: "IMPERIAL ORIGIN",
              value: "German",
              sub: "TERRA",
              gold: false,
            },
            {
              label: "YEARS OF SERVICE",
              value: "22",
              sub: "TERRAN STANDARD",
              gold: false,
            },
            {
              label: "PURITY RATING",
              value: "94%",
              sub: "INQUISITION SEAL",
              gold: true,
            },
            {
              label: "THREAT LEVEL",
              value: "HIGH",
              sub: "HERETEK",
              gold: false,
            },
            {
              label: "COGITATION INDEX",
              value: "847",
              sub: "MECHANICUS SCALE",
              gold: false,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-zinc-900 bg-black p-2 text-center"
            >
              <span className="block text-[8px] text-green-400 tracking-wider mb-1">
                {stat.label}
              </span>
              <span
                className={`block text-lg font-bold ${stat.gold ? "text-yellow-600" : "text-green-500"}`}
              >
                {stat.value}
              </span>
              <span className="block text-[8px] text-green-400 mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {bars.map((bar) => (
          <div key={bar.label} className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] text-green-400 tracking-wide w-36 shrink-0">
              {bar.label}
            </span>
            <div className="flex-1 h-1.5 bg-zinc-950 border border-zinc-900 relative overflow-hidden">
              <div
                className={`h-full ${bar.color} absolute left-0 top-0 transition-all duration-700 ease-out`}
                style={{ width: `${bar.width}%` }}
              />
            </div>
            <span className="text-[9px] text-green-400 w-12 text-right shrink-0">
              {bar.value}/100
            </span>
          </div>
        ))}

        <div className="mt-3 pt-2 border-t border-zinc-900 flex justify-between text-[9px] text-zinc-200">
          <span>
            BIOMETRIC SCAN: <span className="text-green-400">VERIFIED</span>
          </span>
          <span>
            SOUL <span className="text-green-400">UNTAINTED</span>
          </span>
          <span>
            WARP SIGNATURE: <span className="text-green-400">STABLE</span>
          </span>
        </div>
      </div>

      {/* CHAPTER HERALDRY */}
      <div className="mt-3 border border-zinc-900 bg-[#0a080a] p-4 font-mono">
        <div
          className="text-[9px] text-red-600 tracking-widest mb-3 pb-2 border-b border-zinc-900"
          style={{ animation: "flicker 2.0s infinite" }}
        >
          ⬡ ADEPTUS MECHANICUS ORDO LOGI
        </div>
        <div className="flex items-center justify-center gap-10">
          <AquilaSVG />
          <div className="text-center">
            <span
              className="block text-3xl text-red-600 mb-1"
              style={{ fontFamily: "'UnifrakturMaguntia', serif" }}
            >
              Raghav
            </span>
            <span className="block text-[9px] text-red-600 tracking-widest">
              INITIATE OF THE OMNISSIAH · ADEPTUS MECHANICUS
            </span>
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-px bg-white" />
              <span className="text-red-600 text-[8px]">☩</span>
              <div className="flex-1 h-px bg-white" />
            </div>
            <span className="block text-[10px] text-red-600 tracking-wider italic">
              "Per Scientiam ad Victoriam"
            </span>
            <span className="block text-[8px] text-red-600 tracking-widest mt-1">
              FOR THE EMPEROR · FOR THE OMNISSIAH
            </span>
          </div>
          <AquilaSVG flipped />
        </div>
      </div>
    </Panel>
  );
}
