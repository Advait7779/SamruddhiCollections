export default function SareeBorder({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden bg-[#7C2D12] text-[#FDE047] py-1 select-none ${className}`}>
      <div className="flex items-center justify-around text-xs tracking-widest font-mono opacity-90 whitespace-nowrap overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-2">
            <span>◆</span>
            <span className="text-[10px]">▲</span>
            <span>✦</span>
            <span className="text-[10px]">▼</span>
          </span>
        ))}
      </div>
    </div>
  )
}
