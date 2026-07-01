import { useState, useEffect } from "react";
import Panel from "./Parts/Panel";
import ScreenFrame from "./Parts/ScreenFrame";
import { ScreenHeader, ScreenFooter } from "./Parts/ScreenHeaderFooter";
import Divider from "./Parts/Divider";
import DarkImperium from "../assets/Dark-Imperium1.jpg";
import DarkImperium2 from "../assets/Dark-Imperium2.jpg";
import DarkImperium3 from "../assets/Dark-Imperium3.jpg";
import Fulgrim from "../assets/Fulgrim-Book.jpg";
import Shattered from "../assets/Shattered.jpg";
import Cyberpunk from "../assets/Cyberpunk.jpeg";
import Deathwatch from "../assets/Deathwatch.png";

type Book = {
  name: string;
  author: string;
  ISBN: string;
  link: string;
  imgLink: string;
};

const BooksRead: Book[] = [
  {
    name: "Fulgrim: The Perfect Son",
    author: "Jude Reid",
    ISBN: "978-1836092049",
    link: "https://www.blacklibrary.com/new-titles/warhammer-40000/ebook-fulgrim-the-perfect-son-eng-2025.html",
    imgLink: Fulgrim,
  },
  {
    name: "Dark Imperium",
    author: "Guy Haley",
    ISBN: "978-1784966645",
    link: "https://www.blacklibrary.com/warhammer-40000/novels/dark-imperium-ebook-2021.html",
    imgLink: DarkImperium,
  },
  {
    name: "Dark Imperium: Plague War",
    author: "Guy Haley",
    ISBN: "978-1784969103",
    link: "https://www.blacklibrary.com/warhammer-40000/novels/dark-imperium-plague-war-ebook-2021.html",
    imgLink: DarkImperium2,
  },
  {
    name: "Dark Imperium: Godblight",
    author: "Guy Haley",
    ISBN: "978-1800262034",
    link: "https://www.blacklibrary.com/authors/guy-haley/dark-imperium-godblight-ebook-2021.html",
    imgLink: DarkImperium3,
  },
  {
    name: "Shadow of the Tomb Raider",
    author: "S. D. Perry",
    ISBN: "978-1785659911",
    link: "https://titanbooks.com/9712-shadow-of-the-tomb-raider-path-of-the-apocalypse/",
    imgLink:
      "https://m.media-amazon.com/images/I/71xxiQxQoUL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Siege of Terra: The Shattered and the Soulless",
    author: "Graham McNeill",
    ISBN: "978-1836090199",
    link: "https://www.blacklibrary.com/new-titles/the-horus-heresy/ebook-the-shattered-and-the-soulless-eng-2025.html",
    imgLink: Shattered,
  },
  {
    name: "Cyberpunk: No_Coincidence",
    author: "Rafał Kosik",
    ISBN: "978-3-426-22812-8",
    link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.amazon.de/Cyberpunk-2077-Coincidence-Rafal-Kosik/dp/3426228122&ved=2ahUKEwjvjquZgLKVAxXWSfEDHb5ANpkQFnoECDAQAQ&usg=AOvVaw0sjV1bYSlKx94LVKjE0D_0",
    imgLink: Cyberpunk,
  },
  {
    name: "Deathwatch",
    author: "Steve Parker",
    ISBN: "978-1789991246",
    link: "https://www.amazon.de/-/en/Deathwatch-Steve-Parker/dp/1849704465",
    imgLink: Deathwatch,
  },
];

function BookModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4">
        <div className="rounded-sm border-2 border-amber-800/70 bg-zinc-900 shadow-[0_0_40px_rgba(120,60,0,0.3)]">
          <div className="bg-gradient-to-r from-amber-950 via-amber-800 to-amber-950 text-amber-100 text-center font-mono font-bold tracking-widest py-2 uppercase text-sm border-b border-amber-700/50">
            +++ Scriptorium Record +++
          </div>

          <div className="flex gap-5 p-6">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 border-2 border-amber-700/40 pointer-events-none z-10" />
              <img
                src={book.imgLink}
                alt={book.name}
                className="w-32 object-contain shadow-[4px_4px_12px_rgba(0,0,0,0.8)]"
              />
              <div className="absolute left-0 top-0 w-1 h-full bg-amber-600/30" />
            </div>

            <div className="flex flex-col justify-between font-mono min-w-0">
              <div className="space-y-3">
                <p className="text-amber-200 text-sm uppercase tracking-wide leading-tight">
                  {book.name}
                </p>
                <div className="space-y-1">
                  <p className="text-amber-600 text-[11px] uppercase tracking-widest">
                    // Scribed by
                  </p>
                  <p className="text-amber-300 text-[13px]">{book.author}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-amber-600 text-[11px] uppercase tracking-widest">
                    // Codex sigil
                  </p>
                  <p className="text-amber-800 text-[11px]">{book.ISBN}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => {
                    window.open(book.link, "_blank");
                    onClose();
                  }}
                  className="w-full bg-amber-800/40 hover:bg-amber-700/50 border border-amber-700/60 text-amber-200 hover:text-amber-100 text-[11px] uppercase tracking-widest py-2 transition-all font-mono"
                >
                  ++ Open Tome ++
                </button>
                <button
                  onClick={onClose}
                  className="w-full border border-zinc-700 text-zinc-600 hover:text-zinc-400 hover:border-zinc-500 text-[10px] uppercase tracking-widest py-1.5 transition-colors font-mono"
                >
                  // return to shelf
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-900/40 px-6 py-2 flex justify-between text-[9px] font-mono uppercase text-amber-900">
            <span>Imperial Library — Restricted Access</span>
            <span>{book.ISBN}</span>
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
            <div key={colIndex} className="flex-1 min-w-[220px] space-y-1">
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
