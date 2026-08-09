import { useState, useEffect } from "react";
import Panel from "./Parts/Panel";
import ScreenFrame from "./Parts/ScreenFrame";
import { ScreenHeader, ScreenFooter } from "./Parts/ScreenHeaderFooter";
import Divider from "./Parts/Divider";
import { type Book } from "~/assets/data/BooksData";
import BooksRead from "~/assets/data/BooksData";

function BookModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4">
        <div className="rounded-[28px] border-[3px] border-zinc-500 bg-zinc-700 p-1.5 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
          <div className="rounded-[22px] border-2 border-zinc-600 bg-zinc-800 p-3">
            <div
              className="relative rounded-2xl bg-black overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(34,197,94,0.07) 0px, rgba(34,197,94,0.07) 1px, transparent 1px, transparent 3px)",
              }}
            >
              <div className="pointer-events-none absolute inset-0 animate-pulse bg-green-400/5" />

              <div className="relative font-mono px-6 py-6 space-y-4">
                <div className="text-center font-bold tracking-widest py-2 uppercase text-sm bg-green-400 text-black">
                  +++ Scriptorium Record +++
                </div>

                <div className="border border-green-700 px-3 py-2 text-[14px] uppercase tracking-wide text-green-300">
                  &gt; {book.name}
                </div>

                <div className="flex gap-5">
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 border border-green-700/50 pointer-events-none z-10" />
                    <img
                      src={book.imgLink}
                      alt={book.name}
                      className="w-40 object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-3 min-w-0">
                    <div>
                      <p className="text-green-600 text-[13px] uppercase tracking-widest">
                        // Scribed by
                      </p>
                      <p className="text-green-300 text-[13px] uppercase truncate">
                        {book.author}
                      </p>
                    </div>
                    <div>
                      <p className="text-green-600 text-[13px] uppercase tracking-widest">
                        // Codex sigil
                      </p>
                      <p className="text-green-300 text-[13px]">{book.ISBN}</p>
                    </div>
                    <div className="h-px bg-green-900/60 w-full" />
                    <div className="space-y-1">
                      <p className="text-green-700 text-[10px] uppercase tracking-widest">
                        // archive status: complete
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-400 text-black text-center font-bold tracking-widest py-2 uppercase text-sm">
                  ++ Record verified — tome available ++
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      window.open(book.link, "_blank");
                      onClose();
                    }}
                    className="border border-green-700 text-green-300 hover:bg-green-950/30 hover:border-green-400 text-[10px] uppercase tracking-widest py-2 transition-colors"
                  >
                    // open tome
                  </button>
                  <button
                    onClick={onClose}
                    className="border border-green-900 text-green-700 hover:text-green-500 hover:border-green-700 text-[10px] uppercase tracking-widest py-2 transition-colors"
                  >
                    // return to shelf
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingLine({
  name,
  index,
  onClick,
}: {
  name: string;
  index: number;
  onClick: () => void;
}) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const delay = index * 250;
    const timer = setTimeout(() => setPct(100), delay);
    return () => clearTimeout(timer);
  }, [index]);
  const filled = Math.round(pct / 5);
  const bar = "/".repeat(filled) + " ".repeat(20 - filled);
  return (
    <div
      onClick={onClick}
      className="grid grid-cols-[1fr_90px_34px] items-center gap-2 text-green-400 min-w-0 cursor-pointer hover:text-green-200 hover:bg-green-400/5 transition-colors px-1 -mx-1 rounded-sm"
    >
      <span className="truncate">&gt; {name}</span>
      <span className="text-green-600 tracking-tighter overflow-hidden whitespace-nowrap transition-all duration-1500 ease-out">
        {bar}
      </span>
      <span className="text-right tabular-nums">{pct}%</span>
    </div>
  );
}

function chunkItems<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
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
  items: Book[];
}) {
  const [selected, setSelected] = useState<Book | null>(null);

  return (
    <>
      {selected && (
        <BookModal book={selected} onClose={() => setSelected(null)} />
      )}

      <ScreenFrame>
        <ScreenHeader title={title} />
        <div className="border border-green-700 text-green-300 text-[11px] leading-relaxed px-2 py-2">
          // authorization is not required to view this archive, but tampering
          with it will summon a tech-priest
        </div>
        <div className="text-green-500 text-[11px] truncate">
          // link open: /archive/{slug}_records
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px]">
          {chunkItems(items, 5).map((col, colIndex) => (
            <div key={colIndex} className="flex-1 min-w-55 space-y-1">
              {col.map((item, i) => (
                <LoadingLine
                  key={item.ISBN}
                  name={item.name}
                  index={colIndex * 5 + i}
                  onClick={() => setSelected(item)}
                />
              ))}
            </div>
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
    </>
  );
}

export default function HobbiesBooks() {
  return (
    <Panel>
      <div className="max-w-7xl mx-auto">
        <Terminal
          slug="books"
          title="Data Repository"
          footer="knowledge is power — guard it well"
          items={BooksRead}
        />
      </div>
    </Panel>
  );
}
