import { useMemo, useState } from "react";
import NavBar from "../components/Navbar";
import POSTS from "~/assets/data/BlogData";

const ALL_TAG = "ALL";
const TAGS = [ALL_TAG, ...Array.from(new Set(POSTS.flatMap((p) => p.tags)))];

function PuritySeal({
  size = 32,
  letter = "R",
  showRibbon = true,
}: {
  size?: number;
  letter?: string;
  showRibbon?: boolean;
}) {
  const viewH = showRibbon ? 130 : 100;
  return (
    <svg
      width={size}
      height={showRibbon ? size * 1.3 : size}
      viewBox={`0 0 90 ${viewH}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ps-wax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c94a3a" />
          <stop offset="45%" stopColor="#8f1f1a" />
          <stop offset="100%" stopColor="#5c100e" />
        </linearGradient>
        {showRibbon && (
          <linearGradient id="ps-ribbon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eee6d3" />
            <stop offset="100%" stopColor="#cfc3a5" />
          </linearGradient>
        )}
      </defs>

      <g transform={`translate(45,${showRibbon ? 62 : 50})`}>
        {showRibbon && (
          <path
            d="M -22 40 L -26 65 L 0 55 L 26 65 L 22 40 Z"
            fill="url(#ps-ribbon)"
            stroke="#8a7d5e"
            strokeWidth="1"
          />
        )}

        <path
          d="
          M 0,-62 C 10,-58 12,-48 8,-40 C 18,-44 27,-38 27,-27
          C 34,-32 42,-27 41,-17 C 48,-18 53,-10 48,-2
          C 55,0 56,10 49,15 C 55,21 53,31 45,32
          C 49,39 44,48 36,46 C 38,54 30,60 23,55
          C 22,63 12,66 6,60 C 2,67 -8,67 -12,60
          C -18,66 -28,63 -29,55 C -36,60 -44,54 -42,46
          C -50,48 -55,39 -51,32 C -59,31 -61,21 -55,15
          C -62,10 -61,0 -54,-2 C -59,-10 -54,-18 -47,-17
          C -48,-27 -40,-32 -33,-27 C -33,-38 -24,-44 -14,-40
          C -18,-48 -16,-58 -6,-62 C -3,-64 3,-64 0,-62 Z"
          fill="url(#ps-wax)"
          stroke="#3f0b0a"
          strokeWidth="1.5"
        />

        <circle
          cx="0"
          cy="-8"
          r="38"
          fill="none"
          stroke="#3f0b0a"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="0"
          cy="-8"
          r="30"
          fill="none"
          stroke="#3f0b0a"
          strokeWidth="0.75"
          opacity="0.4"
        />

        <text
          x="0"
          y="0"
          textAnchor="middle"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 30,
            fontWeight: 700,
            fill: "#2a0505",
          }}
        >
          {letter}
        </text>
      </g>
    </svg>
  );
}

export default function Blogs() {
  const [filter, setFilter] = useState(ALL_TAG);
  const [expanded, setExpanded] = useState<string | null>(null);

  const posts = useMemo(
    () =>
      filter === ALL_TAG ? POSTS : POSTS.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <div
      className="w-full"
      style={{
        background: "#0f0c09",
        fontFamily: "'Share Tech Mono', monospace",
        minHeight: 500,
      }}
    >
      <style>{`
        @keyframes crack {
          0%   { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(-18deg) scale(1.06); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0px rgba(200,160,80,0); }
          50% { box-shadow: 0 0 14px rgba(200,160,80,0.18); }
        }
        .dataslate {
          transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
        }
        .dataslate:hover {
          border-color: #6b4a1e !important;
          transform: translateY(-2px);
        }
        .seal-top {
          transition: transform 220ms ease, opacity 220ms ease;
        }
        .dataslate:hover .seal-top {
          transform: rotate(-16deg) translateY(-2px);
        }
        .seal-crack {
          opacity: 0;
          transition: opacity 220ms ease;
        }
        .dataslate:hover .seal-crack {
          opacity: 1;
        }
      `}</style>

      <NavBar />

      {/* Background scanlines, matching navbar texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(0,0,0,0.10) 3px, rgba(0,0,0,0.10) 4px)",
        }}
      />

      <main
        className="relative z-10 mx-auto"
        style={{
          maxWidth: 1180,
          padding: "0 40px 120px",
          paddingTop: 108,
        }}
      >
        {/* Hero */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="rounded-full shrink-0"
              style={{ width: 6, height: 6, background: "#6b0a0a" }}
            />
            <span
              style={{
                color: "#5a4222",
                fontSize: 11,
                letterSpacing: "0.18em",
              }}
            >
              COGITATOR ARCHIVE — SEAL STATUS: UNLOCKED
            </span>
          </div>

          <h1
            className="uppercase"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              letterSpacing: "0.05em",
              color: "#c8a050",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Archive of Logs
          </h1>

          <p
            className="mt-4"
            style={{
              fontFamily: "'UnifrakturMaguntia', cursive",
              fontSize: 22,
              color: "#7a5a28",
              maxWidth: 620,
            }}
          >
            Recovered transmissions, field notes &amp; half-finished thoughts
          </p>

          <p
            className="mt-5 max-w-xl"
            style={{ color: "#5a4a30", fontSize: 13, lineHeight: 1.7 }}
          >
            Every entry below is a sealed dataslate — hover to break the wax and
            read the transmission in full. Filter by subject using the
            requisition tags.
          </p>
        </section>

        {/* Filter row */}
        <section className="flex flex-wrap items-center gap-2 mb-10">
          <span
            style={{
              color: "#3e2e14",
              fontSize: 10,
              letterSpacing: "0.14em",
              marginRight: 4,
            }}
          >
            DATA-FILTER //
          </span>
          {TAGS.map((tag) => {
            const isActive = filter === tag;
            return (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className="uppercase"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  padding: "6px 12px",
                  color: isActive ? "#0f0c09" : "#7a5a28",
                  background: isActive ? "#c8a050" : "#150f08",
                  border: `1px solid ${isActive ? "#c8a050" : "#3a2a12"}`,
                  cursor: "pointer",
                  transition: "all 120ms ease",
                }}
              >
                {tag}
              </button>
            );
          })}
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {posts.map((post) => {
            const isOpen = expanded === post.id;
            return (
              <article
                key={post.id}
                className="dataslate relative flex flex-col"
                style={{
                  background: "#120d07",
                  border: "1px solid #2a1e0c",
                  padding: "20px 20px 18px",
                  gridColumn: isOpen ? "1 / -1" : undefined,
                }}
              >
                {/* corner rivets */}
                <span
                  className="absolute rounded-full"
                  style={{
                    top: 8,
                    left: 8,
                    width: 4,
                    height: 4,
                    background: "#3a2a12",
                  }}
                />
                <span
                  className="absolute rounded-full"
                  style={{
                    bottom: 8,
                    left: 8,
                    width: 4,
                    height: 4,
                    background: "#3a2a12",
                  }}
                />

                {/* wax seal */}
                <div
                  className="absolute"
                  style={{ top: 8, right: 8, width: 34, height: 34 }}
                >
                  <div className="seal-top absolute inset-0 flex items-center justify-center">
                    <PuritySeal size={34} showRibbon={false} />
                  </div>
                  <div
                    className="seal-crack absolute inset-0 rounded-full"
                    style={{
                      background: "transparent",
                      border: "1px solid #c8a050",
                    }}
                  />
                </div>

                <div className="flex items-center gap-2 mb-3 pr-10">
                  <span
                    style={{
                      color: "#8b1010",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {post.log}
                  </span>
                  <span style={{ color: "#3a2a12" }}>|</span>
                  <span
                    style={{
                      color: "#5a4a30",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {post.stardate}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 18,
                    color: "#d4af61",
                    lineHeight: 1.3,
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    color: "#8a7550",
                    fontSize: 12.5,
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  {isOpen ? post.body[0] : post.excerpt}
                </p>

                {isOpen &&
                  post.body.slice(1).map((para, i) => (
                    <p
                      key={i}
                      style={{
                        color: "#8a7550",
                        fontSize: 12.5,
                        lineHeight: 1.7,
                        marginBottom: 14,
                      }}
                    >
                      {para}
                    </p>
                  ))}

                <div
                  className="mt-auto flex items-center justify-between pt-3"
                  style={{ borderTop: "1px solid #221806" }}
                >
                  <div className="flex gap-1.5 flex-wrap">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.08em",
                          color: "#5a4a30",
                          border: "1px solid #2a1e0c",
                          padding: "2px 7px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span style={{ color: "#3e2e14", fontSize: 10 }}>
                    {post.readTime}
                  </span>
                </div>

                <button
                  onClick={() => setExpanded(isOpen ? null : post.id)}
                  className="mt-4 self-start uppercase"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "#c8a050",
                    background: "transparent",
                    border: "1px solid #3a2a12",
                    padding: "7px 14px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(200,160,80,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {isOpen ? "SEAL ENTRY ▲" : "BREAK SEAL ▸"}
                </button>
              </article>
            );
          })}
        </section>

        {posts.length === 0 && (
          <p
            className="mt-10 text-center"
            style={{ color: "#5a4a30", fontSize: 12 }}
          >
            NO RECORDS MATCH THAT REQUISITION TAG.
          </p>
        )}

        {/* End-of-archive marker so short lists don't trail into dead space */}
        {posts.length > 0 && (
          <div
            className="mt-16 pt-6 text-center"
            style={{ borderTop: "1px solid #221806" }}
          >
            <span
              style={{
                color: "#3e2e14",
                fontSize: 10,
                letterSpacing: "0.16em",
              }}
            >
              END OF TRANSMISSION LOG
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
