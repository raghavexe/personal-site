export default function ScreenFrame({
  children,
  minHeight = "min-h-[440px]",
}: {
  children: React.ReactNode;
  minHeight?: string;
}) {
  return (
    <div className="h-full rounded-[34px] border-[3px] border-zinc-500 bg-zinc-700 p-1.5 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]">
      <div className="h-full rounded-[28px] border-2 border-zinc-600 bg-zinc-800 p-3">
        <div
          className={`relative h-full ${minHeight} rounded-[22px] bg-black overflow-hidden shadow-[inset_0_0_35px_rgba(0,0,0,0.9)]`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(34,197,94,0.07) 0px, rgba(34,197,94,0.07) 1px, transparent 1px, transparent 3px)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-green-400/5 animate-pulse" />
          <div className="relative font-mono uppercase px-6 py-6 text-sm space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
