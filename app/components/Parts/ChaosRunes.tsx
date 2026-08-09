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

export default function FloatingRunes({ count = 14 }) {
  // Deterministic pseudo-random so it doesn't reshuffle on every re-render
  const runes = Array.from({ length: count }, (_, i) => {
    const seed = i * 137.5;
    return {
      char: CHAOS_RUNES[i % CHAOS_RUNES.length],
      left: seed % 100,
      delay: (i * 0.7) % 6,
      duration: 6 + (i % 5),
      size: 10 + (i % 3) * 4,
      opacity: 0.25 + (i % 4) * 0.12,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {runes.map((r, i) => (
        <span
          key={i}
          className="absolute font-mono text-fuchsia-400 select-none"
          style={{
            left: `${r.left}%`,
            bottom: "-10%",
            fontSize: `${r.size}px`,
            opacity: r.opacity,
            filter: "drop-shadow(0 0 4px rgba(232,121,249,0.7))",
            animation: `runeFloat ${r.duration}s ease-in-out ${r.delay}s infinite`,
          }}
        >
          {r.char}
        </span>
      ))}
    </div>
  );
}
