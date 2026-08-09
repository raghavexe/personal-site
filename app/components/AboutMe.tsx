import { useEffect, useState } from "react";
import Panel from "./Parts/Panel";
import ScreenFrame from "./Parts/ScreenFrame";
import { ScreenHeader, ScreenFooter } from "./Parts/ScreenHeaderFooter";
import Divider from "./Parts/Divider";
import TravelGlobe from "./Parts/TravelMap";
import languages from "~/assets/data/Languages";
import languagesLearning from "~/assets/data/LanguagesLearning";
import technologies from "~/assets/data/Technologies";
import education from "~/assets/data/Education";
import thesis from "~/assets/data/Thesis";
import workExperience from "~/assets/data/WorkExperience";
import industrialProjects from "~/assets/data/IndustrialProjects";

/* Includes things i love to do, and what i do as a software Engineer */

function LoadingLine({ name, index }: { name: string; index: number }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const delay = index * 250;
    const timer = setTimeout(() => setPct(100), delay);
    return () => clearTimeout(timer);
  }, [index]);

  const filled = Math.round(pct / 5);
  const bar = "/".repeat(filled) + " ".repeat(20 - filled);

  return (
    <div className="grid grid-cols-[70px_1fr_32px] sm:grid-cols-[90px_1fr_38px] items-center gap-2 text-green-400 whitespace-nowrap">
      <span className="truncate">&gt; {name}</span>
      <span className="text-green-600 tracking-tighter overflow-hidden transition-all duration-1500 ease-out">
        {bar}
      </span>
      <span className="text-right tabular-nums">{pct}%</span>
    </div>
  );
}

function Terminal({
  slug,
  title,
  footer,
  items,
}: {
  slug: string;
  title: string;
  footer: string;
  items: { name: string }[];
}) {
  return (
    <ScreenFrame>
      <ScreenHeader title={title} />

      <div className="border border-green-700 text-green-300 text-[11px] leading-relaxed px-2 py-2">
        // authorization is not required to view this archive, but tampering
        with it will summon a tech-priest
      </div>

      <div className="text-green-500 text-[11px] truncate">
        // link open: /archive/{slug}_records
      </div>

      <div className="space-y-1 text-[12px]">
        {items.map((item, i) => (
          <LoadingLine key={item.name} name={item.name} index={i} />
        ))}
      </div>

      <Divider />

      <p className="text-green-400 text-[11px] text-center py-1">
        !! archive status: stable !!
      </p>

      <Divider />

      <div className="text-green-500 text-[11px] space-y-0.5 pt-1">
        <p>// machine spirit: content</p>
        <p>// memory spool cleared</p>
        <p>// record purge unnecessary</p>
      </div>

      <ScreenFooter>{footer}</ScreenFooter>
    </ScreenFrame>
  );
}

function EducationTerminal() {
  return (
    <ScreenFrame minHeight="min-h-0">
      <ScreenHeader title="Education" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {education.map((entry) => (
          <div key={entry.school}>
            <p className="text-green-400 text-[13px]">&gt; {entry.school}</p>
            <p className="text-yellow-600 text-[11px] normal-case pl-3">
              {entry.program}
            </p>
          </div>
        ))}
      </div>

      <Divider />

      <div>
        <p className="text-green-400 text-[12px]">// bachelor thesis</p>
        <p className="text-green-300 text-[13px] normal-case mt-2 leading-relaxed">
          {thesis.title}
        </p>
        <p className="text-yellow-600 text-[11px] normal-case mt-2 leading-relaxed">
          {thesis.description}
        </p>
      </div>

      <ScreenFooter>Lexmechanic Learning Records</ScreenFooter>
    </ScreenFrame>
  );
}

function WorkExperienceTerminal() {
  return (
    <ScreenFrame minHeight="min-h-0">
      <ScreenHeader title="Work Experience" />

      <div className="space-y-4">
        {workExperience.map((job) => (
          <div key={job.org}>
            <p className="text-green-400 text-[13px]">
              &gt; {job.role} — {job.org}
            </p>
            <p className="text-green-600 text-[11px] normal-case pl-3">
              {job.period}
            </p>
          </div>
        ))}
      </div>

      <Divider />

      <div>
        <p className="text-green-400 text-[12px] mb-3">
          // industrial projects
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 "
          style={{ animation: "flicker 2.0s infinite" }}
        >
          {industrialProjects.map((project) => (
            <div
              key={project.name}
              className="border border-green-700 px-3 py-3 normal-case"
            >
              <p className="text-green-300 text-[12px] uppercase tracking-wide mb-1">
                {project.name}
              </p>
              <p className="text-green-400 text-[11px] leading-relaxed mb-2">
                {project.description}
              </p>
              <p className="text-yellow-400 text-[10px] uppercase">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ScreenFooter>The Machine Endures</ScreenFooter>
    </ScreenFrame>
  );
}

export default function AboutMe() {
  return (
    <Panel>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          <Terminal
            slug="lingua"
            title="Language Vault"
            footer="The code compiles"
            items={languages}
          />
          <Terminal
            slug="cogitatio"
            title="Learning Logs"
            footer="The mind expands"
            items={languagesLearning}
          />
          <Terminal
            slug="machina"
            title="Technologies Used"
            footer="The stack endures"
            items={technologies}
          />
        </div>

        <EducationTerminal />
        <WorkExperienceTerminal />
        <TravelGlobe />
      </div>
    </Panel>
  );
}
