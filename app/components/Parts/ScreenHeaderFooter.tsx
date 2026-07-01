function ScreenHeader({ title }: { title: string }) {
  return (
    <div className="bg-green-400 text-black text-center text-[12px] font-bold tracking-widest py-2 leading-snug">
      +++ {title} +++
    </div>
  );
}

function ScreenFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-400 text-black text-center text-[11px] font-bold tracking-widest py-2 px-1 mt-4 leading-snug">
      ++ {children} ++
    </div>
  );
}

export { ScreenFooter, ScreenHeader };
