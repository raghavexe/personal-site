// HobbiesTvShows.tsx
import { useState } from "react";
import Panel from "./Parts/Panel";
import movies from "~/assets/data/MoviesData";
import watched from "~/assets/data/ShowsData";

type ShowToWatch = {
  name: string;
  showDate: string; // DD-MM-YYYY
  seasons: number;
  episodes: number;
  imdbLink: string;
};

function yearOf(dateStr: string): string {
  return dateStr.split("-")[2];
}

const toWatch: ShowToWatch[] = [];

function PuritySeals({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-sm"
      aria-label={`${rating} out of 5 purity seals`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "text-[#8b1a1a] opacity-100 [text-shadow:0_0_4px_rgba(139,26,26,0.6)]"
              : "text-[#3a332a] opacity-40"
          }
        >
          ✠
        </span>
      ))}
    </span>
  );
}

function HazardRule() {
  return (
    <div className="my-4 h-1.5 bg-[repeating-linear-gradient(45deg,#c9a227_0px,#c9a227_10px,#0a0908_10px,#0a0908_20px)] opacity-85" />
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-3 w-3 shrink-0 fill-none stroke-[#c9a227] stroke-2 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArchiveSection({
  title,
  subtitle,
  count,
  defaultOpen = false,
  children,
}: {
  title: string;
  subtitle?: string;
  count: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 border border-[#3a332a] bg-[#100e0c] px-3 py-2 text-left transition-colors hover:border-[#c9a227]/50"
      >
        <span className="flex items-baseline gap-2">
          <h2 className="font-gothic text-sm uppercase tracking-widest text-[#8b1a1a]">
            {title}
          </h2>
          {subtitle && (
            <span className="text-[0.65rem] normal-case tracking-wide text-[#d8cfa8] opacity-50">
              {subtitle}
            </span>
          )}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-widest text-[#d8cfa8] opacity-50">
            {count} logged
          </span>
          <Chevron open={open} />
        </span>
      </button>
      {open && <div className="mt-2">{children}</div>}
    </section>
  );
}

export default function HobbiesTvShows() {
  return (
    <>
      <Panel>
        <div className="relative border border-[#3a332a] bg-[#0a0908] p-8 font-terminal text-[#d8cfa8]">
          {/* corner brackets */}
          <div className="pointer-events-none absolute left-1.5 top-1.5 h-3.5 w-3.5 border-l-2 border-t-2 border-[#c9a227]" />
          <div className="pointer-events-none absolute bottom-1.5 right-1.5 h-3.5 w-3.5 border-b-2 border-r-2 border-[#c9a227]" />

          <header>
            <h1 className="font-gothic text-2xl font-bold uppercase tracking-wide text-[#c9a227]">
              Vox-Archive // Recorded Campaigns
            </h1>
            <p className="mt-1 mb-4 text-xs uppercase tracking-wide opacity-60">
              Auto-transcribed by Cogitator Unit 71-Θ · Classified: Personal
            </p>
          </header>

          <HazardRule />

          <ArchiveSection
            title="Completed Campaigns"
            count={watched.length}
            defaultOpen
          >
            <ul className="flex flex-col gap-2">
              {watched.map((show) => (
                <li
                  key={show.name}
                  className="border border-[#3a332a] border-l-[3px] border-l-[#c9a227] bg-linear-to-b from-[#c9a227]/5 to-transparent px-3.5 py-2.5"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={show.imdbLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold tracking-wide text-[#d8cfa8] no-underline hover:text-[#c9a227]"
                    >
                      {show.name}
                    </a>
                    <PuritySeals rating={show.myRating} />
                  </div>
                  <div className="mt-1 flex gap-4 text-[0.7rem] uppercase tracking-wide opacity-65">
                    <span>{show.seasons} campaign(s)</span>
                    <span>{show.episodes} engagements</span>
                    <span>{yearOf(show.showDate)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </ArchiveSection>

          <HazardRule />

          <ArchiveSection title="Pending Deployments" count={toWatch.length}>
            <ul className="flex flex-col gap-2">
              {toWatch.map((show) => (
                <li
                  key={show.name}
                  className="border border-[#3a332a] border-l-[3px] border-l-[#3a332a] px-3.5 py-2.5 opacity-75"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={show.imdbLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold tracking-wide text-[#d8cfa8] no-underline hover:text-[#c9a227]"
                    >
                      {show.name}
                    </a>
                    <span className="border border-[#3a332a] px-1.5 py-0.5 text-[0.65rem] tracking-widest text-[#3a332a]">
                      AWAITING ORDERS
                    </span>
                  </div>
                  <div className="mt-1 flex gap-4 text-[0.7rem] uppercase tracking-wide opacity-65">
                    <span>{show.seasons} campaign(s)</span>
                    <span>{show.episodes} engagements</span>
                    <span>{yearOf(show.showDate)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </ArchiveSection>

          <HazardRule />

          <ArchiveSection
            title="Sanctioned Sorties"
            subtitle="(single-engagement films)"
            count={movies.length}
          >
            <ul className="flex flex-col gap-2">
              {movies.map((movie) => (
                <li
                  key={movie.name}
                  className="border border-[#3a332a] border-l-[3px] border-l-[#c9a227] bg-linear-to-b from-[#c9a227]/5 to-transparent px-3.5 py-2.5"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={movie.imdbLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold tracking-wide text-[#d8cfa8] no-underline hover:text-[#c9a227]"
                    >
                      {movie.name}
                    </a>
                    <PuritySeals rating={movie.myRating} />
                  </div>
                  <div className="mt-1 flex gap-4 text-[0.7rem] uppercase tracking-wide opacity-65">
                    <span>{movie.runtimeMinutes} min duration</span>
                    <span>{yearOf(movie.releaseDate)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </ArchiveSection>
        </div>
      </Panel>
    </>
  );
}
