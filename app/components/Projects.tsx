import { useState, useEffect } from "react";
import ScreenFrame from "./Parts/ScreenFrame";
import { ScreenHeader, ScreenFooter } from "./Parts/ScreenHeaderFooter";
import Panel from "./Parts/Panel";

type Project = {
  name: string;
  description: string;
  tech: string;
  github?: string;
  inProgress?: boolean;
};

const PersonalProjects: Project[] = [
  {
    name: "Home4U",
    description:
      "Built a Raspberry Pi–based home security system that uses motion sensors to detect movement and automatically trigger an alarm. Focused on real-time monitoring, sensor integration, and automated surveillance for smart home security.",
    tech: "Android, Raspberry Pi, C++",
    github: "https://github.com/raghavexe/Home4U",
  },
  {
    name: "Instagram JSON Export Dataset Generator",
    description:
      "Developed an open-source Python library that converts Instagram message exports into clean, structured datasets for LLM fine-tuning and AI training. Automates data cleaning, formatting, and preprocessing to simplify dataset creation.",
    tech: "Python, YAML, JSON",
    github: "https://github.com/raghavexe/chat-cleaner-for-instagram-dms",
  },
  {
    name: "CyberSafeAI",
    description:
      "Built an AI-powered web application that analyzes user-generated text for profanity, abusive language, and harmful content. Leveraged a custom-trained machine learning model to provide real-time feedback and encourage more respectful communication.",
    tech: "Python, Machine Learning, Google Cloud",
  },
  {
    name: "Java Text Search Embedding Library",
    description:
      "Created a Java library for generating vector embeddings and performing semantic text search. Enables efficient similarity matching and information retrieval beyond traditional keyword-based search.",
    tech: "Java, NLP, Text Embeddings",
    github: "https://github.com/raghavexe/Embedding-Lib",
    inProgress: true,
  },
  {
    name: "Recipes4U",
    description:
      "Developed a community-driven cooking platform where users can share recipes, enroll in cooking courses, and review dishes. Designed to encourage collaboration and knowledge sharing among home cooks.",
    tech: "JavaScript, MongoDB, HTML, CSS",
    github: "https://github.com/raghavexe/Recipes4U",
  },
  {
    name: "German Numberplates",
    description:
      "Built a searchable web application that allows users to identify German cities and districts from their vehicle registration prefixes, providing a fast and intuitive lookup experience.",
    tech: "PostgreSQL, JavaScript, HTML, CSS",
    github: "https://github.com/raghavexe/german-numberplates",
  },
];

const RITUAL_LINES = [
  "// Initiating machine spirit communion...",
  "// Anointing the cogitator with sacred oils...",
  "// Reciting the Litany of Activation...",
  "// Verifying clearance sigil...",
  "// Cross-referencing Omnissiah's data vaults...",
  "// Ritual integrity confirmed...",
  "// Authorization granted by the Adeptus Mechanicus...",
  "// Establishing uplink to repository...",
  "// May the Emperor guide your code...",
];

const DENIED_LINES = [
  "// Initiating clearance verification...",
  "// Scanning for valid sigil...",
  "// Cross-referencing Inquisitorial records...",
  "// ERROR: No repository sigil detected...",
  "// Alerting the Ordo Hereticus...",
  "// Access attempt logged...",
  "// The Omnissiah does not recognize this request...",
  "// Clearance: DENIED BY ORDER OF THE MECHANICUS...",
];

function AuthorizationModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const denied = !project.github;
  const lines = denied ? DENIED_LINES : RITUAL_LINES;

  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setVisibleLines((prev) => [...prev, lines[currentLine]]);
        setProgress(Math.round(((currentLine + 1) / lines.length) * 100));
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done && !denied && project.github) {
      const timer = setTimeout(() => {
        window.open(project.github, "_blank");
        onClose();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [done, denied, project.github, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4">
        <div
          className={`rounded-[28px] border-[3px] p-1.5 ${
            denied
              ? "border-red-900 bg-zinc-700 shadow-[0_0_40px_rgba(180,0,0,0.2)]"
              : "border-zinc-500 bg-zinc-700 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
          }`}
        >
          <div className="rounded-[22px] border-2 border-zinc-600 bg-zinc-800 p-3">
            <div
              className="relative rounded-[16px] bg-black overflow-hidden"
              style={{
                backgroundImage: denied
                  ? "repeating-linear-gradient(0deg, rgba(180,0,0,0.07) 0px, rgba(180,0,0,0.07) 1px, transparent 1px, transparent 3px)"
                  : "repeating-linear-gradient(0deg, rgba(34,197,94,0.07) 0px, rgba(34,197,94,0.07) 1px, transparent 1px, transparent 3px)",
              }}
            >
              <div
                className={`pointer-events-none absolute inset-0 animate-pulse ${
                  denied ? "bg-red-900/10" : "bg-green-400/5"
                }`}
              />

              <div className="relative font-mono px-6 py-6 space-y-4">
                <div
                  className={`text-center font-bold tracking-widest py-2 uppercase text-sm ${
                    denied
                      ? "bg-red-700 text-red-100"
                      : "bg-green-400 text-black"
                  }`}
                >
                  {denied
                    ? "+++ Access Verification Protocol +++"
                    : "+++ Adeptus Mechanicus Authorization +++"}
                </div>

                <div
                  className={`border px-3 py-2 text-[11px] uppercase tracking-wide ${
                    denied
                      ? "border-red-900 text-red-400"
                      : "border-green-700 text-green-300"
                  }`}
                >
                  &gt; Clearance request: {project.name}
                </div>

                <div className="space-y-1 min-h-[200px]">
                  {visibleLines.map((line, i) => (
                    <p
                      key={i}
                      className={`text-[11px] uppercase`}
                      style={{
                        color:
                          denied && i >= lines.length - 2
                            ? "#f87171"
                            : denied
                              ? "#dc2626"
                              : "#22c55e",
                        animation: "fadeIn 0.2s ease-in",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                  {!done && (
                    <span
                      className={`inline-block text-[11px] animate-pulse ${
                        denied ? "text-red-500" : "text-green-400"
                      }`}
                    >
                      _
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <div
                    className={`flex justify-between text-[10px] uppercase ${
                      denied ? "text-red-800" : "text-green-600"
                    }`}
                  >
                    <span>Verification progress</span>
                    <span className="font-mono">{progress}%</span>
                  </div>
                  <div
                    className={`h-1.5 bg-zinc-800 border rounded-full overflow-hidden ${
                      denied ? "border-red-900" : "border-green-900"
                    }`}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        denied ? "bg-red-700" : "bg-green-500"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {done && denied ? (
                  <div className="bg-red-900 text-red-200 text-center font-bold tracking-widest py-2 uppercase text-sm animate-pulse border border-red-700">
                    ++ Access Denied — No Repository Clearance Found ++
                  </div>
                ) : done && !denied ? (
                  <div className="bg-green-400 text-black text-center font-bold tracking-widest py-2 uppercase text-sm animate-pulse">
                    ++ Uplink established — opening repository ++
                  </div>
                ) : null}

                <button
                  onClick={onClose}
                  className={`w-full border text-[10px] uppercase tracking-widest py-2 transition-colors font-mono ${
                    denied
                      ? "border-red-900 text-red-800 hover:text-red-500 hover:border-red-700"
                      : "border-green-900 text-green-700 hover:text-green-500 hover:border-green-700"
                  }`}
                >
                  // {denied ? "withdraw request" : "abort ritual"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const denied = !project.github;

  return (
    <div
      onClick={onClick}
      className={`group relative border px-3 py-3 normal-case cursor-pointer transition-all duration-200 ${
        denied
          ? "border-red-900/50 hover:border-red-700/70 hover:bg-red-950/10"
          : "border-green-700 hover:border-green-400 hover:bg-green-950/20 hover:shadow-[0_0_12px_rgba(34,197,94,0.2)]"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2 min-w-0">
          <p
            className={`text-[12px] uppercase tracking-wide truncate transition-colors ${
              denied
                ? "text-red-400/70 group-hover:text-red-300"
                : "text-green-300 group-hover:text-green-100"
            }`}
          >
            {project.name}
          </p>
          {project.inProgress && (
            <span className="shrink-0 text-[9px] uppercase tracking-widest px-1.5 py-0.5 border border-amber-700/60 text-amber-500 bg-amber-950/30 animate-pulse">
              in progress
            </span>
          )}
        </div>
        <span
          className={`shrink-0 text-[10px] uppercase tracking-widest transition-colors ${
            denied
              ? "text-red-900 group-hover:text-red-700"
              : "text-green-700 group-hover:text-green-400"
          }`}
        >
          {denied ? "[denied]" : "[access]"}
        </span>
      </div>

      <p
        className={`text-[11px] leading-relaxed mb-2 ${
          denied ? "text-red-400/50" : "text-green-400"
        }`}
      >
        {project.description}
      </p>

      <p className="text-yellow-400 text-[10px] uppercase">{project.tech}</p>

      {denied && (
        <div className="absolute inset-0 pointer-events-none border border-red-900/20 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(180,0,0,0.03)_8px,rgba(180,0,0,0.03)_9px)]" />
      )}
    </div>
  );
}

export default function ProjectExperienceTerminal() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Panel>
      {selected && (
        <AuthorizationModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}

      <ScreenFrame minHeight="min-h-0">
        <ScreenHeader title="Projects Undertaken" />

        <div>
          <p className="text-green-400 text-[12px] mb-3">
            // Personal projects — select to request repository access
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PersonalProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>

        <ScreenFooter>Repository Clearance Granted Through GitHub</ScreenFooter>
      </ScreenFrame>
    </Panel>
  );
}
