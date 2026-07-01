// CreditBar — Live credit counter with animated progress bar
// Design: The Signal — electric cyan fill, amber warning, red danger

import { cn } from "@/lib/utils";

interface CreditBarProps {
  current: number;
  max?: number;
  min?: number;
  label?: string;
  className?: string;
}

export function CreditBar({ current, max = 16.5, min = 15.0, label, className }: CreditBarProps) {
  const pct = Math.min((current / max) * 100, 100);
  const isOver = current > max;
  const isUnder = current < min;
  const isGood = !isOver && !isUnder;

  const fillColor = isOver
    ? "bg-[oklch(0.65_0.22_25)]"
    : isUnder
    ? "bg-[oklch(0.82_0.18_75)]"
    : "bg-[oklch(0.78_0.18_200)]";

  const textColor = isOver
    ? "text-[oklch(0.65_0.22_25)]"
    : isUnder
    ? "text-[oklch(0.82_0.18_75)]"
    : "text-[oklch(0.78_0.18_200)]";

  const statusText = isOver
    ? `${(current - max).toFixed(1)} over limit`
    : isUnder
    ? `${(min - current).toFixed(1)} below minimum`
    : "On target";

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          {label ?? "Credits"}
        </span>
        <div className="flex items-center gap-2">
          <span className={cn("font-mono text-lg font-semibold", textColor)}>
            {current.toFixed(1)}
          </span>
          <span className="text-muted-foreground font-mono text-xs">/ {max}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className={cn("h-full rounded-full credit-bar-fill", fillColor)}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Min/max markers */}
      <div className="flex items-center justify-between">
        <span className={cn("text-xs font-mono", isUnder ? "text-[oklch(0.82_0.18_75)]" : "text-muted-foreground/50")}>
          min {min}
        </span>
        <span className={cn("text-xs", isGood ? "text-[oklch(0.72_0.16_160)]" : isOver ? "text-[oklch(0.65_0.22_25)]" : "text-[oklch(0.82_0.18_75)]")}>
          {statusText}
        </span>
        <span className={cn("text-xs font-mono", isOver ? "text-[oklch(0.65_0.22_25)]" : "text-muted-foreground/50")}>
          max {max}
        </span>
      </div>
    </div>
  );
}
