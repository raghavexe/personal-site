export default function AquilaSVG({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flipped ? "scaleX(-1)" : undefined,
        filter: "drop-shadow(0 0 5px rgba(180,120,20,0.35))",
      }}
    >
      <circle
        cx="40"
        cy="40"
        r="36"
        fill="none"
        stroke="#5a4010"
        strokeWidth="1"
      />
      <circle
        cx="40"
        cy="40"
        r="30"
        fill="none"
        stroke="#3a2a08"
        strokeWidth="0.5"
      />
      <polygon points="40,10 44,30 38,30" fill="#c09030" />
      <polygon points="40,70 44,50 38,50" fill="#c09030" />
      <ellipse
        cx="25"
        cy="32"
        rx="14"
        ry="9"
        fill="#c09030"
        transform="rotate(-20 25 32)"
      />
      <ellipse
        cx="55"
        cy="32"
        rx="14"
        ry="9"
        fill="#c09030"
        transform="rotate(20 55 32)"
      />
      <ellipse
        cx="18"
        cy="24"
        rx="10"
        ry="6"
        fill="#a07820"
        transform="rotate(-35 18 24)"
      />
      <ellipse
        cx="62"
        cy="24"
        rx="10"
        ry="6"
        fill="#a07820"
        transform="rotate(35 62 24)"
      />
      <circle
        cx="40"
        cy="40"
        r="7"
        fill="#1a1208"
        stroke="#c09030"
        strokeWidth="1"
      />
      <polygon points="40,34 42,39 40,37 38,39" fill="#c09030" />
      <rect x="37" y="39" width="6" height="7" fill="#c09030" />
      <rect x="36" y="44" width="8" height="2" fill="#c09030" />
      <text
        x="40"
        y="58"
        textAnchor="middle"
        fontSize="5"
        fill="#6a5020"
        letterSpacing="2"
        fontFamily="monospace"
      >
        XI·I·MMIV
      </text>
    </svg>
  );
}
