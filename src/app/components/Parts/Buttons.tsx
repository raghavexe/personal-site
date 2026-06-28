interface ButtonProps {
  sectionId: string;
  text: string;
  active?: boolean;
}

export default function Button({
  sectionId,
  text,
  active = false,
}: ButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="
          group relative inline-flex items-center gap-1
          px-4 py-3
  
          bg-zinc-950
          border-2 border-zinc-900
          shadow-[
            inset_0_1px_1px_rgba(255,255,255,0.15), 
            inset_0_-2px_4px_rgba(0,0,0,0.8), 
            0_2px_4px_rgba(0,0,0,0.5)
          ] 
          rounded-sm
  
          shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.04)]
  
          active:translate-y-px
          active:shadow-[inset_0_4px_8px_rgba(0,0,0,1)]
  
          overflow-hidden
          transition-all duration-150
        "
    >
      {/* worn metal hatch texture */}
      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,transparent_2px,transparent_6px)]" />

      {/* subtle corrosion noise */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_80%,white,transparent_45%)]" />

      {/* LED housing */}
      <div className="relative w-4 h-4 rounded-full bg-black border border-zinc-800 flex items-center justify-center shadow-inner">
        <div
          className={`
              w-2.5 h-2.5 rounded-full transition-all duration-300
  
              ${
                active
                  ? "bg-green-400 shadow-[0_0_6px_#22c55e,0_0_14px_#22c55e] animate-[flicker_3s_infinite]"
                  : "bg-(--imperial-red) shadow-[0_0_10px_var(--imperial-red),0_0_20px_rgba(185,28,28,0.5)] animate-[flicker_3s_infinite]"
              }
            `}
        />
      </div>

      {/* label */}
      <span
        className="
            font-mono text-[13px]
            uppercase tracking-[0.2em]
            text-zinc-400
            group-hover:text-zinc-200
            transition-colors
          "
      >
        {text}
      </span>
    </button>
  );
}
