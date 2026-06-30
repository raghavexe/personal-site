export default function GrimdarkFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative" style={{ width: "330px", height: "400px" }}>
      {/* Photo sits behind the SVG frame  */}
      <div
        className="absolute"
        style={{
          top: "13%",
          left: "12%",
          width: "76%",
          height: "74%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {children}
      </div>

      {/* SVG Frame on top */}
      <svg
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        {/* Outer border */}
        <rect
          x="4"
          y="4"
          width="312"
          height="312"
          fill="none"
          stroke="#2a2010"
          strokeWidth="3"
          rx="2"
        />

        {/* Frame body — dark metal plates */}
        {/* Top plate */}
        <rect
          x="0"
          y="0"
          width="320"
          height="44"
          fill="#1a1510"
          stroke="#3a2e14"
          strokeWidth="1"
        />
        {/* Bottom plate */}
        <rect
          x="0"
          y="276"
          width="320"
          height="44"
          fill="#1a1510"
          stroke="#3a2e14"
          strokeWidth="1"
        />
        {/* Left plate */}
        <rect
          x="0"
          y="44"
          width="40"
          height="232"
          fill="#181410"
          stroke="#3a2e14"
          strokeWidth="1"
        />
        {/* Right plate */}
        <rect
          x="280"
          y="44"
          width="40"
          height="232"
          fill="#181410"
          stroke="#3a2e14"
          strokeWidth="1"
        />

        {/* Inner bevel — top */}
        <rect
          x="40"
          y="40"
          width="240"
          height="4"
          fill="#2a2216"
          stroke="#4a3820"
          strokeWidth="0.5"
        />
        {/* Inner bevel — bottom */}
        <rect
          x="40"
          y="276"
          width="240"
          height="4"
          fill="#2a2216"
          stroke="#4a3820"
          strokeWidth="0.5"
        />
        {/* Inner bevel — left */}
        <rect
          x="40"
          y="44"
          width="4"
          height="232"
          fill="#2a2216"
          stroke="#4a3820"
          strokeWidth="0.5"
        />
        {/* Inner bevel — right */}
        <rect
          x="276"
          y="44"
          width="4"
          height="232"
          fill="#2a2216"
          stroke="#4a3820"
          strokeWidth="0.5"
        />

        {/* Inner glow line */}
        <rect
          x="40"
          y="40"
          width="240"
          height="240"
          fill="none"
          stroke="#5a4a20"
          strokeWidth="0.5"
        />

        {/* ── TOP SKULL ── */}
        {/* Skull dome */}
        <ellipse
          cx="160"
          cy="14"
          rx="16"
          ry="11"
          fill="#2a2216"
          stroke="#6a5428"
          strokeWidth="1"
        />
        {/* Eye sockets */}
        <ellipse cx="154" cy="12" rx="4" ry="3.5" fill="#0a0808" />
        <ellipse cx="166" cy="12" rx="4" ry="3.5" fill="#0a0808" />
        {/* Nose cavity */}
        <path d="M158,17 L160,15 L162,17 L161,19 L159,19 Z" fill="#0a0808" />
        {/* Teeth */}
        <rect
          x="152"
          y="20"
          width="3"
          height="4"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <rect
          x="156"
          y="20"
          width="3"
          height="5"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <rect
          x="160"
          y="20"
          width="3"
          height="5"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <rect
          x="164"
          y="20"
          width="3"
          height="4"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        {/* Jaw */}
        <path
          d="M150,20 Q160,26 170,20"
          fill="none"
          stroke="#5a4828"
          strokeWidth="1"
        />
        {/* Skull accent lines */}
        <line
          x1="148"
          y1="10"
          x2="144"
          y2="8"
          stroke="#4a3c1a"
          strokeWidth="0.5"
        />
        <line
          x1="172"
          y1="10"
          x2="176"
          y2="8"
          stroke="#4a3c1a"
          strokeWidth="0.5"
        />

        {/* ── BOTTOM SKULL ── */}
        <ellipse
          cx="160"
          cy="306"
          rx="16"
          ry="11"
          fill="#2a2216"
          stroke="#6a5428"
          strokeWidth="1"
        />
        <ellipse cx="154" cy="304" rx="4" ry="3.5" fill="#0a0808" />
        <ellipse cx="166" cy="304" rx="4" ry="3.5" fill="#0a0808" />
        <path
          d="M158,309 L160,307 L162,309 L161,311 L159,311 Z"
          fill="#0a0808"
        />
        <rect
          x="152"
          y="312"
          width="3"
          height="4"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <rect
          x="156"
          y="312"
          width="3"
          height="5"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <rect
          x="160"
          y="312"
          width="3"
          height="5"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <rect
          x="164"
          y="312"
          width="3"
          height="4"
          rx="0.5"
          fill="#1a1410"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <path
          d="M150,312 Q160,318 170,312"
          fill="none"
          stroke="#5a4828"
          strokeWidth="1"
        />

        {/* ── CORNER BRACKETS — Top Left ── */}
        <rect
          x="0"
          y="0"
          width="52"
          height="52"
          fill="#141008"
          stroke="#3a2e14"
          strokeWidth="0.5"
        />
        <path
          d="M8,44 L8,8 L44,8"
          fill="none"
          stroke="#7a6030"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M12,44 L12,12 L44,12"
          fill="none"
          stroke="#3a2e18"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <circle
          cx="26"
          cy="26"
          r="8"
          fill="#0e0c08"
          stroke="#5a4820"
          strokeWidth="1"
        />
        <circle
          cx="26"
          cy="26"
          r="4"
          fill="#1a1610"
          stroke="#7a6030"
          strokeWidth="0.5"
        />
        <circle cx="26" cy="26" r="1.5" fill="#c09030" />
        {/* rivet */}
        <circle
          cx="10"
          cy="10"
          r="3"
          fill="#2a2010"
          stroke="#6a5428"
          strokeWidth="0.5"
        />
        <circle cx="10" cy="10" r="1" fill="#8a6828" />

        {/* ── CORNER BRACKETS — Top Right ── */}
        <rect
          x="268"
          y="0"
          width="52"
          height="52"
          fill="#141008"
          stroke="#3a2e14"
          strokeWidth="0.5"
        />
        <path
          d="M312,44 L312,8 L276,8"
          fill="none"
          stroke="#7a6030"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M308,44 L308,12 L276,12"
          fill="none"
          stroke="#3a2e18"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <circle
          cx="294"
          cy="26"
          r="8"
          fill="#0e0c08"
          stroke="#5a4820"
          strokeWidth="1"
        />
        <circle
          cx="294"
          cy="26"
          r="4"
          fill="#1a1610"
          stroke="#7a6030"
          strokeWidth="0.5"
        />
        <circle cx="294" cy="26" r="1.5" fill="#c09030" />
        <circle
          cx="310"
          cy="10"
          r="3"
          fill="#2a2010"
          stroke="#6a5428"
          strokeWidth="0.5"
        />
        <circle cx="310" cy="10" r="1" fill="#8a6828" />

        {/* ── CORNER BRACKETS — Bottom Left ── */}
        <rect
          x="0"
          y="268"
          width="52"
          height="52"
          fill="#141008"
          stroke="#3a2e14"
          strokeWidth="0.5"
        />
        <path
          d="M8,276 L8,312 L44,312"
          fill="none"
          stroke="#7a6030"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M12,276 L12,308 L44,308"
          fill="none"
          stroke="#3a2e18"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <circle
          cx="26"
          cy="294"
          r="8"
          fill="#0e0c08"
          stroke="#5a4820"
          strokeWidth="1"
        />
        <circle
          cx="26"
          cy="294"
          r="4"
          fill="#1a1610"
          stroke="#7a6030"
          strokeWidth="0.5"
        />
        <circle cx="26" cy="294" r="1.5" fill="#c09030" />
        <circle
          cx="10"
          cy="310"
          r="3"
          fill="#2a2010"
          stroke="#6a5428"
          strokeWidth="0.5"
        />
        <circle cx="10" cy="310" r="1" fill="#8a6828" />

        {/* ── CORNER BRACKETS — Bottom Right ── */}
        <rect
          x="268"
          y="268"
          width="52"
          height="52"
          fill="#141008"
          stroke="#3a2e14"
          strokeWidth="0.5"
        />
        <path
          d="M312,276 L312,312 L276,312"
          fill="none"
          stroke="#7a6030"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M308,276 L308,308 L276,308"
          fill="none"
          stroke="#3a2e18"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <circle
          cx="294"
          cy="294"
          r="8"
          fill="#0e0c08"
          stroke="#5a4820"
          strokeWidth="1"
        />
        <circle
          cx="294"
          cy="294"
          r="4"
          fill="#1a1610"
          stroke="#7a6030"
          strokeWidth="0.5"
        />
        <circle cx="294" cy="294" r="1.5" fill="#c09030" />
        <circle
          cx="310"
          cy="310"
          r="3"
          fill="#2a2010"
          stroke="#6a5428"
          strokeWidth="0.5"
        />
        <circle cx="310" cy="310" r="1" fill="#8a6828" />

        {/* ── LEFT SIDE — mechanical details ── */}
        {/* Pipe/conduit */}
        <rect
          x="4"
          y="70"
          width="12"
          height="80"
          rx="2"
          fill="#111008"
          stroke="#3a2e14"
          strokeWidth="0.5"
        />
        <rect
          x="6"
          y="70"
          width="8"
          height="80"
          rx="1"
          fill="#0c0a06"
          stroke="#2a2210"
          strokeWidth="0.5"
        />
        {/* Pipe bands */}
        <rect
          x="4"
          y="85"
          width="12"
          height="3"
          fill="#2a2010"
          stroke="#4a3c18"
          strokeWidth="0.5"
        />
        <rect
          x="4"
          y="115"
          width="12"
          height="3"
          fill="#2a2010"
          stroke="#4a3c18"
          strokeWidth="0.5"
        />
        <rect
          x="4"
          y="145"
          width="12"
          height="3"
          fill="#2a2010"
          stroke="#4a3c18"
          strokeWidth="0.5"
        />
        {/* Small data-port */}
        <rect
          x="5"
          y="175"
          width="10"
          height="14"
          rx="1"
          fill="#0a1a0a"
          stroke="#1a3a1a"
          strokeWidth="0.5"
        />
        <rect x="7" y="177" width="6" height="10" rx="0.5" fill="#0d2a0d" />
        {/* Blinking light */}
        <circle
          cx="10"
          cy="200"
          r="2.5"
          fill="#1a3a10"
          stroke="#2a5a18"
          strokeWidth="0.5"
        >
          <animate
            attributeName="fill"
            values="#1a3a10;#4a8a28;#1a3a10"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Side rivets */}
        <circle
          cx="20"
          cy="60"
          r="2.5"
          fill="#2a2010"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <circle
          cx="20"
          cy="260"
          r="2.5"
          fill="#2a2010"
          stroke="#5a4820"
          strokeWidth="0.5"
        />

        {/* ── RIGHT SIDE — mechanical details ── */}
        <rect
          x="304"
          y="70"
          width="12"
          height="80"
          rx="2"
          fill="#111008"
          stroke="#3a2e14"
          strokeWidth="0.5"
        />
        <rect
          x="306"
          y="70"
          width="8"
          height="80"
          rx="1"
          fill="#0c0a06"
          stroke="#2a2210"
          strokeWidth="0.5"
        />
        <rect
          x="304"
          y="85"
          width="12"
          height="3"
          fill="#2a2010"
          stroke="#4a3c18"
          strokeWidth="0.5"
        />
        <rect
          x="304"
          y="115"
          width="12"
          height="3"
          fill="#2a2010"
          stroke="#4a3c18"
          strokeWidth="0.5"
        />
        <rect
          x="304"
          y="145"
          width="12"
          height="3"
          fill="#2a2010"
          stroke="#4a3c18"
          strokeWidth="0.5"
        />
        {/* Cogitator screen */}
        <rect
          x="305"
          y="175"
          width="10"
          height="14"
          rx="1"
          fill="#0a0a1a"
          stroke="#1a1a3a"
          strokeWidth="0.5"
        />
        <rect x="307" y="177" width="6" height="10" rx="0.5" fill="#0d0d2a" />
        <line
          x1="308"
          y1="179"
          x2="312"
          y2="179"
          stroke="#2a2a5a"
          strokeWidth="0.5"
        />
        <line
          x1="308"
          y1="181"
          x2="312"
          y2="181"
          stroke="#2a2a5a"
          strokeWidth="0.5"
        />
        <line
          x1="308"
          y1="183"
          x2="311"
          y2="183"
          stroke="#2a2a5a"
          strokeWidth="0.5"
        />
        {/* Amber light */}
        <circle
          cx="310"
          cy="200"
          r="2.5"
          fill="#3a2008"
          stroke="#5a3810"
          strokeWidth="0.5"
        >
          <animate
            attributeName="fill"
            values="#3a2008;#8a5818;#3a2008"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="300"
          cy="60"
          r="2.5"
          fill="#2a2010"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <circle
          cx="300"
          cy="260"
          r="2.5"
          fill="#2a2010"
          stroke="#5a4820"
          strokeWidth="0.5"
        />

        {/* ── TOP — gothic triangle ── */}
        <polygon
          points="160,2 148,16 172,16"
          fill="#141008"
          stroke="#7a6030"
          strokeWidth="1"
        />
        <polygon
          points="160,6 152,16 168,16"
          fill="#1e1810"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <circle cx="160" cy="11" r="2" fill="#c09030" opacity="0.8" />

        {/* ── BOTTOM — small aquila wings hint ── */}
        <path
          d="M130,295 Q145,285 160,290 Q175,285 190,295"
          fill="none"
          stroke="#4a3c18"
          strokeWidth="1"
        />
        <path
          d="M130,298 Q145,290 160,293 Q175,290 190,298"
          fill="none"
          stroke="#2a2210"
          strokeWidth="0.5"
        />
        {/* Purity seal */}
        <circle
          cx="160"
          cy="298"
          r="5"
          fill="#1a1208"
          stroke="#5a4820"
          strokeWidth="0.5"
        />
        <circle cx="160" cy="298" r="2.5" fill="#c09030" opacity="0.6" />

        {/* ── MID SIDE STUDS ── */}
        {[80, 100, 120, 200, 220, 240].map((y) => (
          <g key={`ls-${y}`}>
            <circle
              cx="34"
              cy={y}
              r="2"
              fill="#1e1a0e"
              stroke="#4a3c18"
              strokeWidth="0.5"
            />
          </g>
        ))}
        {[80, 100, 120, 200, 220, 240].map((y) => (
          <g key={`rs-${y}`}>
            <circle
              cx="286"
              cy={y}
              r="2"
              fill="#1e1a0e"
              stroke="#4a3c18"
              strokeWidth="0.5"
            />
          </g>
        ))}

        {/* Worn metal texture lines — top plate */}
        <line
          x1="55"
          y1="20"
          x2="140"
          y2="20"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <line
          x1="180"
          y1="20"
          x2="265"
          y2="20"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <line
          x1="55"
          y1="30"
          x2="140"
          y2="30"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="180"
          y1="30"
          x2="265"
          y2="30"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.3"
        />
        {/* Worn metal texture lines — bottom plate */}
        <line
          x1="55"
          y1="290"
          x2="140"
          y2="290"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <line
          x1="180"
          y1="290"
          x2="265"
          y2="290"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <line
          x1="55"
          y1="300"
          x2="140"
          y2="300"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="180"
          y1="300"
          x2="265"
          y2="300"
          stroke="#2a2010"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
