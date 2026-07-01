import Panel from "./Panel";
import InquistionSeal from "../../assets/Inquisiton.png";

function RedactedLine({ width, delay }: { width: string; delay: number }) {
  return (
    <div
      className="h-2 bg-black/70 rounded-[1px]"
      style={{
        width,
        animation: `redact-shimmer 4s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function InquisitorialSeal() {
  return <img src={InquistionSeal}></img>;
}

export default function UnderInquisitorialSeal({
  sectionName = "this dossier",
}: {
  sectionName?: string;
}) {
  return (
    <Panel>
      <div className="w-full mx-auto">
        <div
          className="relative rounded-sm border-2 border-red-950 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0a0505 0%, #150707 60%, #0a0505 100%)",
            boxShadow: "inset 0 0 70px rgba(0,0,0,0.85)",
          }}
        >
          {/* corner rivets */}
          {[
            "top-2 left-2",
            "top-2 right-2",
            "bottom-2 left-2",
            "bottom-2 right-2",
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} w-2 h-2 rounded-full`}
              style={{
                background: "#3a1010",
                border: "1px solid #6b1a1a",
              }}
            />
          ))}

          {/* header bar */}
          <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-red-200 text-center font-mono font-bold tracking-[0.3em] py-2 uppercase text-xs border-b border-red-800/60">
            +++ Inquisitorial Seal +++
          </div>

          <div className="px-8 py-10 flex flex-col items-center text-center">
            <InquisitorialSeal />

            <p className="mt-6 font-mono text-red-500 text-[11px] uppercase tracking-[0.35em]">
              Ordo Records Division
            </p>

            <h2 className="mt-3 font-mono text-2xl uppercase tracking-[0.15em] text-red-200 font-bold">
              Classified
            </h2>

            <p className="mt-4 font-mono text-[12px] leading-relaxed text-red-300/80 max-w-md">
              Access to {sectionName} has been withheld pending Inquisition
              review. Records remain sealed until clearance is granted.
            </p>

            {/* redacted document field */}
            <div className="mt-8 w-full max-w-sm space-y-2.5">
              <RedactedLine width="88%" delay={0} />
              <RedactedLine width="64%" delay={0.4} />
              <RedactedLine width="76%" delay={0.8} />
              <RedactedLine width="52%" delay={1.2} />
              <RedactedLine width="70%" delay={1.6} />
            </div>

            <div className="mt-8 border border-red-900/60 px-4 py-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-400">
                Status: Pending Review — Do Not Distribute
              </p>
            </div>
          </div>

          <div className="border-t border-red-900/40 px-6 py-2 flex justify-between text-[9px] font-mono uppercase text-red-900">
            <span>Ordo Inquisitorius — Eyes Only</span>
            <span>File Sealed</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes seal-flicker {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(201,162,39,0.25)); }
          50% { filter: drop-shadow(0 0 12px rgba(201,162,39,0.5)); }
        }
        @keyframes redact-shimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </Panel>
  );
}
