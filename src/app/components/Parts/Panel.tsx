interface PanelProps {
  title?: string;
  children: React.ReactNode;
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <div className="flex justify-center items-center w-full py-24">
      {/* use min-h-screen to have one panel on each viewport */}
      <div
        className="
          relative
          w-[80%] 
          p-5
          h-auto
          bg-grimdark-metal
          border-2 border-zinc-900

          shadow-[0_10px_25px_rgba(0,0,0,0.65),0_3px_6px_rgba(0,0,0,0.4)]

          rounded-sm
          overflow-auto
        "
      >
        {/* top rivet line */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-700/40 to-transparent" />
        {/* subtle scanlines */}
        <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0px,transparent_3px,transparent_7px)]" />
        {/* corrosion haze */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,white,transparent_50%),radial-gradient(circle_at_80%_70%,white,transparent_55%)]" />
        {/* content */}
        <div className="relative">
          {title && (
            <h3 className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-zinc-300">
              {title}
            </h3>
          )}

          <div className="text-zinc-400 leading-relaxed text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
