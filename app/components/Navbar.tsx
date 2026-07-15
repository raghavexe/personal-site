import { useState } from "react";
import { Link, useLocation } from "react-router";
import MechButton from "./Parts/MechButton";

const NAV_LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "hobbies-games", label: "GAMES" },
  { id: "hobbies-books", label: "BOOKS" },
  { id: "hobbies-tv", label: "TV SHOWS" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const onBlogsPage = location.pathname.startsWith("/blogs");

  return (
    <>
      {/* Flicker keyframes injected once */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Cinzel:wght@600&display=swap');
        @keyframes flicker {
          0%   { opacity: 1; }
          3%   { opacity: 0.85; }
          5%   { opacity: 1; }
          8%   { opacity: 0.9; }
          10%  { opacity: 1; }
          42%  { opacity: 1; }
          43%  { opacity: 0.8; }
          44%  { opacity: 1; }
          70%  { opacity: 1; }
          71%  { opacity: 0.88; }
          72%  { opacity: 0.92; }
          73%  { opacity: 1; }
          100% { opacity: 1; }
        }
        @keyframes flickerDim {
          0%   { opacity: 0.18; }
          15%  { opacity: 0.12; }
          16%  { opacity: 0.22; }
          17%  { opacity: 0.1;  }
          18%  { opacity: 0.18; }
          60%  { opacity: 0.18; }
          61%  { opacity: 0.08; }
          62%  { opacity: 0.18; }
          100% { opacity: 0.18; }
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between"
        style={{
          height: 62,
          background: "#0f0c09",
          borderTop: "3px solid #3a2a12",
          borderBottom: "3px solid #3a2a12",
        }}
      >
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)",
          }}
        />

        {/* Pipe rails */}
        <div
          className="absolute left-0 right-0 z-2"
          style={{
            top: -10,
            height: 7,
            background: "#1e1509",
            borderTop: "1px solid #4a3418",
            borderBottom: "1px solid #261a08",
          }}
        />
        <div
          className="absolute left-0 right-0 z-2"
          style={{
            bottom: -10,
            height: 7,
            background: "#1e1509",
            borderTop: "1px solid #261a08",
            borderBottom: "1px solid #4a3418",
          }}
        />

        {/* Rivet strip — left */}
        <div
          className="absolute top-0 bottom-0 left-0 z-1 flex flex-col items-center justify-evenly"
          style={{
            width: 36,
            background: "#0d0a07",
            borderRight: "1px solid #2a1e0c",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#2e2010",
              border: "1px solid #4a3418",
            }}
          />
          <div
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "#6b0a0a",
              border: "1px solid #8b1010",
            }}
          />
          <div
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#2e2010",
              border: "1px solid #4a3418",
            }}
          />
        </div>

        {/* Rivet strip — right */}
        <div
          className="absolute top-0 bottom-0 right-0 z-1 flex flex-col items-center justify-evenly"
          style={{
            width: 36,
            background: "#0d0a07",
            borderLeft: "1px solid #2a1e0c",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#2e2010",
              border: "1px solid #4a3418",
            }}
          />
          <div
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "#6b0a0a",
              border: "1px solid #8b1010",
            }}
          />
          <div
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#2e2010",
              border: "1px solid #4a3418",
            }}
          />
        </div>

        {/* Brand */}
        <Link
          to="/"
          className="z-2 shrink-0 tracking-[0.22em] uppercase font-semibold"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 15,
            color: "#7a5a28",
            padding: "0 18px 0 50px",
            textDecoration: "none",
          }}
        >
          Raghav
        </Link>

        <div
          className="z-2 shrink-0"
          style={{ width: 1, height: 36, background: "#2a1e0c" }}
        />

        {/* Nav links */}
        <div className="z-2 flex items-stretch flex-1 justify-center h-full">
          {NAV_LINKS.map(({ id, label }) => (
            <MechButton
              key={id}
              sectionId={id}
              text={label}
              active={!onBlogsPage && active === id}
              onClick={setActive}
            />
          ))}

          {/* Blog route button — plate-mounted, navigates to a new page rather than scrolling */}
          <Link
            to="/blogs"
            className="relative flex items-center justify-center px-5 group"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: onBlogsPage ? "#c8a050" : "#7a5a28",
              textDecoration: "none",
              borderLeft: "1px solid #2a1e0c",
              borderRight: "1px solid #2a1e0c",
              background: onBlogsPage ? "rgba(139,16,16,0.12)" : "transparent",
              transition: "color 120ms ease, background 120ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c8a050";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = onBlogsPage ? "#c8a050" : "#7a5a28";
            }}
          >
            <span
              className="rounded-full shrink-0 mr-2"
              style={{
                width: 5,
                height: 5,
                background: "#8b1010",
                animation: onBlogsPage ? "flicker 2.4s infinite" : "none",
              }}
            />
            ARCHIVE
          </Link>
        </div>

        <div
          className="z-2 shrink-0"
          style={{ width: 1, height: 36, background: "#2a1e0c" }}
        />

        {/* Right — socials + contact */}
        <div
          className="z-2 shrink-0 flex items-center gap-3.5"
          style={{ padding: "0 50px 0 18px" }}
        >
          <a
            href="https://github.com/raghavexe"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="flex flex-col items-center justify-center gap-1.5 px-3"
            style={{ color: "#7a5a28" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a050")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a5a28")}
          >
            <div
              className="w-4.5 h-1.75 rounded-[1px] border border-[#1a1208] relative overflow-hidden"
              style={{ background: "#0d0a07" }}
            >
              <div
                className="absolute inset-0 rounded-[1px]"
                style={{
                  background: "#c8d8e0",
                  animation: "flicker 3.1s infinite",
                }}
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/raghav-tengse-05b774257/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="flex flex-col items-center justify-center gap-1.5 px-3"
            style={{ color: "#7a5a28" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a050")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a5a28")}
          >
            <div
              className="w-4.5 h-1.75 rounded-[1px] border border-[#1a1208] relative overflow-hidden"
              style={{ background: "#0d0a07" }}
            >
              <div
                className="absolute inset-0 rounded-[1px]"
                style={{
                  background: "#c8d8e0",
                  animation: "flicker 2.6s infinite",
                }}
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>

          <MechButton
            sectionId="contact"
            text="CONTACT"
            active={!onBlogsPage && active === "contact"}
            onClick={setActive}
          />
        </div>
      </nav>

      {/* Status ticker */}
      <div
        className="fixed left-0 w-full z-40 flex items-center gap-2 box-border"
        style={{
          top: 65,
          background: "#080604",
          borderBottom: "1px solid #1e1509",
          padding: "3px 50px",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.12em",
          color: "#2e2010",
        }}
      >
        <span
          className="rounded-full shrink-0"
          style={{ width: 5, height: 5, background: "#6b0a0a" }}
        />
        <span>SYS.NOMINAL</span>
        <span style={{ color: "#1e1509" }}>|</span>
        <span
          className="rounded-full shrink-0"
          style={{ width: 5, height: 5, background: "#3a1a08" }}
        />
        <span>UPLINK: ESTABLISHED</span>
        <span style={{ color: "#1e1509" }}>|</span>
        <span
          className="rounded-full shrink-0"
          style={{ width: 5, height: 5, background: "#6b0a0a" }}
        />
        <span>{onBlogsPage ? "ARCHIVE: OPEN" : "MACHINE.SPIRIT: DORMANT"}</span>
      </div>
    </>
  );
}
