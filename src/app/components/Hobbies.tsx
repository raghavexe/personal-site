import { useLoaderData } from "react-router";
import Panel from "./Parts/Panel";

interface Achievements {
  total: number;
  unlocked: number;
}

interface SteamGame {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  achievements?: Achievements | null;
}

function getRank(hours: number) {
  if (hours >= 200) return { title: "Chapter master", seal: "★★★" };
  if (hours >= 75) return { title: "Veteran", seal: "★★" };
  if (hours >= 20) return { title: "Battle-brother", seal: "★" };
  if (hours >= 1) return { title: "Neophyte", seal: "" };
  return { title: "Unproven", seal: "" };
}

function formatPlaytime(minutes: number) {
  return Math.round(minutes / 60);
}

function RelicPlaque({ game }: { game: SteamGame }) {
  const hours = formatPlaytime(game.playtime_forever);
  const rank = getRank(hours);
  const iconUrl = `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`;

  const isComplete =
    !!game.achievements &&
    game.achievements.total > 0 &&
    game.achievements.unlocked === game.achievements.total;

  return (
    <div
      className={`relative rounded-sm p-4 shadow-[0_4px_10px_rgba(0,0,0,0.6)] ${
        isComplete
          ? "bg-gradient-to-b from-amber-950 to-zinc-900 border border-amber-400/70 shadow-[0_0_18px_rgba(217,170,60,0.35)]"
          : "bg-gradient-to-b from-zinc-800 to-zinc-900 border border-amber-900/50"
      }`}
    >
      {isComplete && (
        <div className="pointer-events-none absolute inset-0 rounded-sm bg-amber-300/5 animate-pulse" />
      )}

      <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
      <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
      <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />

      {isComplete && (
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center shadow-[0_0_10px_rgba(217,170,60,0.7)] animate-[spin_8s_linear_infinite]">
          <span className="text-amber-950 text-[10px] font-bold">✠</span>
        </div>
      )}

      <div className="relative flex items-center gap-3">
        <div className="relative shrink-0">
          <img
            src={iconUrl}
            alt=""
            className={`w-12 h-12 contrast-125 border ${
              isComplete
                ? "grayscale-0 border-amber-400/70"
                : "filter sepia hue-rotate-90 saturate-150 border-amber-900/60"
            }`}
          />
          {rank.seal && (
            <span className="absolute -bottom-1 -right-1 text-[9px] text-amber-500 bg-zinc-900 px-1 border border-amber-800/60">
              {rank.seal}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p
            className={`text-sm font-semibold uppercase tracking-wide text-wrap ${
              isComplete ? "text-amber-100" : "text-amber-200"
            }`}
          >
            {game.name}
          </p>
        </div>
      </div>

      <div className="relative mt-3 pt-2 border-t border-amber-900/40 flex items-center justify-between text-[10px] uppercase tracking-wide">
        <span className="text-zinc-500">Hours served</span>
        <span className="text-amber-400 font-mono">{hours}</span>
      </div>

      {game.achievements && game.achievements.total > 0 && (
        <div className="relative mt-2 pt-2 border-t border-amber-900/40">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wide mb-1">
            <span className={isComplete ? "text-amber-300" : "text-zinc-500"}>
              {isComplete ? "Relic sanctified" : "Trials completed"}
            </span>
            <span
              className={`font-mono ${
                isComplete ? "text-amber-300" : "text-amber-400"
              }`}
            >
              {game.achievements.unlocked}/{game.achievements.total}
            </span>
          </div>
          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${
                isComplete ? "bg-amber-400" : "bg-amber-700"
              }`}
              style={{
                width: `${
                  (game.achievements.unlocked / game.achievements.total) * 100
                }%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function HobbiesGames() {
  const games = useLoaderData() as SteamGame[];

  const sorted = [...(games ?? [])].sort(
    (a, b) => b.playtime_forever - a.playtime_forever
  );

  return (
    <Panel>
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-zinc-900 border-2 border-zinc-700 rounded-sm px-8 py-10 shadow-[inset_0_0_60px_rgba(0,0,0,0.7)]">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, white, transparent 50%), radial-gradient(circle at 80% 70%, white, transparent 55%)",
            }}
          />

          <div className="relative text-center mb-8">
            <p className="text-amber-600 text-xs tracking-[0.4em] uppercase mb-1">
              Steam Reliquary archive
            </p>
            <h2 className="text-amber-300 text-xl font-bold uppercase tracking-[0.2em]">
              Hall of Recreation
            </h2>
            <div className="w-24 h-px bg-amber-800/60 mx-auto mt-3" />
          </div>

          {sorted.length === 0 ? (
            <p className="relative text-zinc-600 text-sm text-center py-10 uppercase tracking-widest">
              the reliquary stands empty — no relics recovered
            </p>
          ) : (
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sorted.map((game) => (
                <RelicPlaque key={game.appid} game={game} />
              ))}
            </div>
          )}

          <div className="relative text-center mt-8">
            <div className="w-24 h-px bg-amber-800/60 mx-auto mb-3" />
            <p className="text-amber-700 text-[10px] tracking-[0.3em] uppercase">
              {sorted.length} relics catalogued
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}
