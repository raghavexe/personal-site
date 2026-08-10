const CHAOS_RUNES = [
  "ᛖ",
  "ᛗ",
  "ᛚ",
  "ᛊ",
  "ᛏ",
  "ᛒ",
  "ᚨ",
  "ᚱ",
  "ᚲ",
  "ᚠ",
  "ᚢ",
  "ᚦ",
  "✻",
];

export default function FloatingRunes({ count = 20 }) {
  const runes = Array.from({ length: count }, (_, i) => {
    const seed = i * 137.5;
    // spread runes across the whole box, not just the bottom edge
    const left = seed % 100;
    const top = (seed * 1.7) % 100;
    // outward drift direction varies per rune — some go up-left, some down-right, etc.
    const angle = (seed * 2.4) % 360;
    const rad = (angle * Math.PI) / 180;
    const driftDist = 18 + (i % 4) * 6; // px of outward drift
    const dx = Math.cos(rad) * driftDist;
    const dy = Math.sin(rad) * driftDist;

    return {
      char: CHAOS_RUNES[i % CHAOS_RUNES.length],
      left,
      top,
      dx,
      dy,
      delay: (i * 1.1) % 8,
      duration: 9 + (i % 5) * 1.5, // slower = more mystical, less "running"
      size: 11 + (i % 3) * 5,
      baseOpacity: 0.3 + (i % 4) * 0.1,
      rotate: (i % 2 === 0 ? 1 : -1) * (10 + (i % 3) * 8),
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes runeEmanate {
          0%   { opacity: 0; transform: translate(0, 0) scale(0.7) rotate(0deg); }
          15%  { opacity: var(--rune-op); transform: translate(calc(var(--dx) * 0.3), calc(var(--dy) * 0.3)) scale(1) rotate(calc(var(--rot) * 0.3)); }
          50%  { opacity: var(--rune-op); transform: translate(var(--dx), var(--dy)) scale(1.15) rotate(var(--rot)); }
          85%  { opacity: calc(var(--rune-op) * 0.6); transform: translate(calc(var(--dx) * 1.4), calc(var(--dy) * 1.4)) scale(0.9) rotate(calc(var(--rot) * 1.4)); }
          100% { opacity: 0; transform: translate(calc(var(--dx) * 1.6), calc(var(--dy) * 1.6)) scale(0.6) rotate(calc(var(--rot) * 1.6)); }
        }
      `}</style>
      {runes.map((r, i) => (
        <span
          key={i}
          className="absolute font-mono text-fuchsia-400 select-none"
          style={
            {
              left: `${r.left}%`,
              top: `${r.top}%`,
              fontSize: `${r.size}px`,
              "--rune-op": r.baseOpacity,
              "--dx": `${r.dx}px`,
              "--dy": `${r.dy}px`,
              "--rot": `${r.rotate}deg`,
              opacity: 0,
              filter: "drop-shadow(0 0 6px rgba(232,121,249,0.85))",
              animation: `runeEmanate ${r.duration}s cubic-bezier(0.37, 0, 0.63, 1) ${r.delay}s infinite`,
            } as React.CSSProperties
          }
        >
          {r.char}
        </span>
      ))}
    </div>
  );
}
