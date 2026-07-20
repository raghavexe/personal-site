import { useLocation, useNavigate } from "react-router";

interface MechButtonProps {
  sectionId: string;
  text: string;
  active: boolean;
  onClick?: (sectionId: string) => void;
}

export default function MechButton({
  sectionId,
  text,
  active,
  onClick,
}: MechButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.(sectionId);

    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={[
        "relative z-2 h-full flex flex-col items-center justify-center gap-1.5",
        "border-r border-r-[#1e1509] first:border-l first:border-l-[#1e1509]",
        "px-5 bg-transparent cursor-pointer transition-colors duration-100",
        "font-mono text-[10px] tracking-[0.14em] uppercase",
        active ? "text-[#9a6a30]" : "text-[#9a6a30] hover:text-[#5a3a1a]",
      ].join(" ")}
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      {/* Indicator slot */}
      <div
        className={[
          "w-4.5 h-1.75 rounded-[1px] border overflow-hidden relative",
          active ? "border-[#5a3010]" : "border-[#1a1208]",
        ].join(" ")}
        style={{ background: "#0d0a07" }}
      >
        <div
          className="absolute inset-0 rounded-[1px]"
          style={{
            background: active ? "#16962a" : "#f70000",
            animation: active
              ? "flicker 2.8s infinite"
              : "flicker 3.5s infinite",
          }}
        />
      </div>

      <span>{text}</span>
    </button>
  );
}
