// Home — Nathan's MS/MBA Career Planner
// Design: The Signal — dark navy, electric cyan, Space Grotesk
// Layout: Fixed left sidebar + scrollable two-column content area

import { useState, useMemo, useCallback } from "react";
import archetypes, { CREDIT_MAX, CREDIT_MIN, type Archetype } from "@/data/archetypes";
import { CreditBar } from "@/components/CreditBar";
import { CourseTable } from "@/components/CourseTable";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  ChevronRight,
  RotateCcw,
  BookOpen,
  TrendingUp,
  Zap,
  AlertTriangle,
  CheckCircle2,
  GraduationCap,
  Info,
} from "lucide-react";

const accentColorMap: Record<string, string> = {
  cyan:    "oklch(0.78 0.18 200)",
  orange:  "oklch(0.75 0.18 50)",
  violet:  "oklch(0.72 0.18 290)",
  emerald: "oklch(0.72 0.16 160)",
  pink:    "oklch(0.75 0.18 340)",
  red:     "oklch(0.65 0.22 25)",
};

const accentBgMap: Record<string, string> = {
  cyan:    "oklch(0.78 0.18 200 / 12%)",
  orange:  "oklch(0.75 0.18 50 / 12%)",
  violet:  "oklch(0.72 0.18 290 / 12%)",
  emerald: "oklch(0.72 0.16 160 / 12%)",
  pink:    "oklch(0.75 0.18 340 / 12%)",
  red:     "oklch(0.65 0.22 25 / 12%)",
};

function useArchetypeState(archetype: Archetype) {
  const defaultEnrolled = useMemo(
    () => new Set(archetype.courses.map(c => c.id)),
    [archetype]
  );
  const [enrolled, setEnrolled] = useState<Set<string>>(defaultEnrolled);

  const toggle = useCallback((id: string) => {
    setEnrolled(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const reset = useCallback(() => setEnrolled(defaultEnrolled), [defaultEnrolled]);

  const fallCredits = useMemo(() =>
    archetype.courses
      .filter(c => c.semester === "fall" && enrolled.has(c.id))
      .reduce((s, c) => s + c.credits, 0),
    [archetype, enrolled]
  );

  const springCredits = useMemo(() =>
    archetype.courses
      .filter(c => c.semester === "spring" && enrolled.has(c.id))
      .reduce((s, c) => s + c.credits, 0),
    [archetype, enrolled]
  );

  const fallDropCount = useMemo(() =>
    archetype.courses.filter(c => c.semester === "fall" && c.isDropCandidate && enrolled.has(c.id)).length,
    [archetype, enrolled]
  );

  const springDropCount = useMemo(() =>
    archetype.courses.filter(c => c.semester === "spring" && c.isDropCandidate && enrolled.has(c.id)).length,
    [archetype, enrolled]
  );

  return { enrolled, toggle, reset, fallCredits, springCredits, fallDropCount, springDropCount };
}

export default function Home() {
  const [activeId, setActiveId] = useState(archetypes[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const archetype = archetypes.find(a => a.id === activeId)!;
  const { enrolled, toggle, reset, fallCredits, springCredits, fallDropCount, springDropCount } =
    useArchetypeState(archetype);

  const accentColor = accentColorMap[archetype.color];
  const accentBg = accentBgMap[archetype.color];

  const fallNeedsDrop = fallCredits > CREDIT_MAX;
  const springNeedsDrop = springCredits > CREDIT_MAX;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside
        className={cn(
          "flex flex-col shrink-0 border-r border-white/5 transition-all duration-300",
          sidebarOpen ? "w-64" : "w-16"
        )}
        style={{ background: "oklch(0.155 0.022 255)" }}
      >
        {/* Logo / Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 text-base"
            style={{ background: accentBg, border: `1px solid ${accentColor}30` }}
          >
            <img
              src="/manus-storage/logo-icon_e5d07c3f.png"
              alt="Career Planner"
              className="w-5 h-5 object-contain"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          {sidebarOpen && (
            <div className="min-w-0 animate-fade-in">
              <p className="text-xs font-semibold text-foreground truncate">Career Planner</p>
              <p className="text-[10px] text-muted-foreground truncate">MS/MBA · EC Year 2026–27</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(v => !v)}
            className="ml-auto text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            <ChevronRight className={cn("w-4 h-4 transition-transform", !sidebarOpen && "rotate-180")} />
          </button>
        </div>

        {/* Archetype list */}
        <ScrollArea className="flex-1 overflow-auto py-2">
          <div className="px-2 space-y-0.5">
            {sidebarOpen && (
              <p className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-widest">
                Career Paths
              </p>
            )}
            {archetypes.map(a => {
              const isActive = a.id === activeId;
              const aAccent = accentColorMap[a.color];
              return (
                <button
                  key={a.id}
                  onClick={() => setActiveId(a.id)}
                  className={cn(
                    "archetype-card w-full flex items-center gap-3 rounded-md px-2 py-2.5 text-left",
                    isActive
                      ? "bg-white/[0.06] text-foreground"
                      : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground/80"
                  )}
                >
                  <span
                    className="text-base shrink-0 w-6 h-6 flex items-center justify-center rounded"
                    style={isActive ? { background: `${aAccent}20` } : {}}
                  >
                    {a.icon}
                  </span>
                  {sidebarOpen && (
                    <div className="min-w-0 flex-1 animate-fade-in">
                      <p className={cn("text-xs font-semibold truncate", isActive && "text-foreground")}>
                        {a.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground/60 truncate">{a.subtitle}</p>
                    </div>
                  )}
                  {isActive && sidebarOpen && (
                    <div
                      className="w-1 h-4 rounded-full shrink-0"
                      style={{ background: aAccent }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollArea>

        {/* Footer */}
        {sidebarOpen && (
          <div className="px-4 py-3 border-t border-white/5">
            <p className="text-[10px] text-muted-foreground/40 leading-relaxed">
              Nathan Shiham Alam<br />
              Harvard MS/MBA: Engineering Sciences
            </p>
          </div>
        )}
      </aside>

      {/* ── Main Content ─────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-4">
            <div
              className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ background: accentBg }}
            >
              {archetype.icon}
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">{archetype.title}</h1>
              <p className="text-xs text-muted-foreground">{archetype.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Personality tags */}
            <div className="hidden md:flex items-center gap-1.5">
              {archetype.personality.map(p => (
                <span
                  key={p}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                  style={{
                    color: accentColor,
                    borderColor: `${accentColor}40`,
                    background: accentBg,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <Separator orientation="vertical" className="h-6 hidden md:block" />

            {/* Reset button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-white/5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </TooltipTrigger>
              <TooltipContent>Restore all courses to enrolled</TooltipContent>
            </Tooltip>
          </div>
        </header>

        {/* Tagline + target companies */}
        <div
          className="px-6 py-3 border-b border-white/5 shrink-0"
          style={{ background: `${accentColor}06` }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm text-foreground/70 italic">"{archetype.tagline}"</p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mr-1">Target:</span>
              {archetype.targetCompanies.slice(0, 4).map(c => (
                <span key={c} className="text-[10px] text-muted-foreground/60 px-1.5 py-0.5 rounded border border-white/5 bg-white/[0.02]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content area */}
        <ScrollArea className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Instructions */}
            <div className="flex items-start gap-2 mb-6 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <Info className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground/60 leading-relaxed">
                All courses start enrolled. <strong className="text-foreground/60">Uncheck</strong> courses to drop them and watch your credit count update live.
                Courses marked <span className="text-[oklch(0.82_0.18_75)]">LIKELY DROP</span> are the recommended candidates to cut first.
                Mandatory core courses cannot be dropped.
              </p>
            </div>

            {/* Two-column semester layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ── Fall 2026 ── */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 rounded-full" style={{ background: accentColor }} />
                    <h2 className="text-sm font-bold text-foreground uppercase tracking-widest">Fall 2026</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {fallNeedsDrop && (
                      <span className="flex items-center gap-1 text-[10px] text-[oklch(0.82_0.18_75)]">
                        <AlertTriangle className="w-3 h-3" />
                        Drop {fallDropCount} candidates
                      </span>
                    )}
                    {!fallNeedsDrop && fallCredits >= CREDIT_MIN && (
                      <span className="flex items-center gap-1 text-[10px] text-[oklch(0.72_0.16_160)]">
                        <CheckCircle2 className="w-3 h-3" />
                        Good to go
                      </span>
                    )}
                  </div>
                </div>

                <CreditBar
                  current={fallCredits}
                  label="Fall Credits"
                />

                {/* Drop note */}
                {fallNeedsDrop && (
                  <div className="p-3 rounded-md border border-[oklch(0.82_0.18_75/25%)] bg-[oklch(0.82_0.18_75/5%)] animate-fade-in">
                    <p className="text-xs text-[oklch(0.82_0.18_75)] leading-relaxed">
                      {archetype.fallDropNote}
                    </p>
                  </div>
                )}

                <CourseTable
                  courses={archetype.courses}
                  enrolled={enrolled}
                  onToggle={toggle}
                  semester="fall"
                />

                {/* Fall stats */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { label: "Total", value: archetype.courses.filter(c => c.semester === "fall" && enrolled.has(c.id)).length, icon: BookOpen },
                    { label: "SEAS", value: archetype.courses.filter(c => c.semester === "fall" && c.school === "SEAS" && enrolled.has(c.id)).length, icon: Zap },
                    { label: "HBS", value: archetype.courses.filter(c => c.semester === "fall" && c.school === "HBS" && enrolled.has(c.id)).length, icon: TrendingUp },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex flex-col items-center gap-1 p-2 rounded-md bg-white/[0.02] border border-white/5">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground/50" />
                      <span className="font-mono text-base font-semibold text-foreground/80">{value}</span>
                      <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Spring 2027 ── */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 rounded-full bg-[oklch(0.72_0.16_160)]" />
                    <h2 className="text-sm font-bold text-foreground uppercase tracking-widest">Spring 2027</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {springNeedsDrop && (
                      <span className="flex items-center gap-1 text-[10px] text-[oklch(0.82_0.18_75)]">
                        <AlertTriangle className="w-3 h-3" />
                        Drop {springDropCount} candidates
                      </span>
                    )}
                    {!springNeedsDrop && springCredits >= CREDIT_MIN && (
                      <span className="flex items-center gap-1 text-[10px] text-[oklch(0.72_0.16_160)]">
                        <CheckCircle2 className="w-3 h-3" />
                        Good to go
                      </span>
                    )}
                  </div>
                </div>

                <CreditBar
                  current={springCredits}
                  label="Spring Credits"
                />

                {/* Drop note */}
                {springNeedsDrop && (
                  <div className="p-3 rounded-md border border-[oklch(0.82_0.18_75/25%)] bg-[oklch(0.82_0.18_75/5%)] animate-fade-in">
                    <p className="text-xs text-[oklch(0.82_0.18_75)] leading-relaxed">
                      {archetype.springDropNote}
                    </p>
                  </div>
                )}

                <CourseTable
                  courses={archetype.courses}
                  enrolled={enrolled}
                  onToggle={toggle}
                  semester="spring"
                />

                {/* Spring stats */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { label: "Total", value: archetype.courses.filter(c => c.semester === "spring" && enrolled.has(c.id)).length, icon: BookOpen },
                    { label: "SEAS", value: archetype.courses.filter(c => c.semester === "spring" && c.school === "SEAS" && enrolled.has(c.id)).length, icon: Zap },
                    { label: "HBS", value: archetype.courses.filter(c => c.semester === "spring" && c.school === "HBS" && enrolled.has(c.id)).length, icon: TrendingUp },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex flex-col items-center gap-1 p-2 rounded-md bg-white/[0.02] border border-white/5">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground/50" />
                      <span className="font-mono text-base font-semibold text-foreground/80">{value}</span>
                      <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Year summary bar */}
            <div
              className="mt-8 p-4 rounded-xl border"
              style={{
                borderColor: `${accentColor}20`,
                background: accentBg,
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5" style={{ color: accentColor }} />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Full-Year Summary</p>
                    <p className="text-[11px] text-muted-foreground">{archetype.focus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-mono text-xl font-bold" style={{ color: accentColor }}>
                      {(fallCredits + springCredits).toFixed(1)}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Total Credits</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-xl font-bold text-foreground/80">
                      {archetype.courses.filter(c => enrolled.has(c.id)).length}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Courses</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-xl font-bold text-foreground/80">
                      {archetype.courses.filter(c => c.school === "SEAS" && enrolled.has(c.id)).length}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">SEAS</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-xl font-bold text-foreground/80">
                      {archetype.courses.filter(c => c.school === "HBS" && enrolled.has(c.id)).length}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">HBS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
