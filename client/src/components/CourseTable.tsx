// CourseTable — Interactive course list with live credit tracking
// Design: The Signal — dark rows, amber drop candidates, cyan checkboxes

import { cn } from "@/lib/utils";
import type { Course } from "@/data/archetypes";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface CourseTableProps {
  courses: Course[];
  enrolled: Set<string>;
  onToggle: (id: string) => void;
  semester: "fall" | "spring";
}

const categoryLabel: Record<string, string> = {
  mandatory: "CORE",
  technical: "SEAS",
  elective: "HBS",
  short: "SHORT",
};

const categoryColor: Record<string, string> = {
  mandatory: "text-[oklch(0.78_0.18_200)] border-[oklch(0.78_0.18_200/40%)] bg-[oklch(0.78_0.18_200/8%)]",
  technical: "text-[oklch(0.72_0.16_160)] border-[oklch(0.72_0.16_160/40%)] bg-[oklch(0.72_0.16_160/8%)]",
  elective: "text-[oklch(0.75_0.17_280)] border-[oklch(0.75_0.17_280/40%)] bg-[oklch(0.75_0.17_280/8%)]",
  short: "text-[oklch(0.55_0.015_255)] border-[oklch(0.55_0.015_255/40%)] bg-[oklch(0.55_0.015_255/8%)]",
};

export function CourseTable({ courses, enrolled, onToggle, semester }: CourseTableProps) {
  const semCourses = courses.filter(c => c.semester === semester);

  return (
    <div className="space-y-1">
      {semCourses.map((course, i) => {
        const isEnrolled = enrolled.has(course.id);
        const isDropCandidate = course.isDropCandidate;
        const isMandatory = course.category === "mandatory";

        return (
          <div
            key={course.id}
            className={cn(
              "course-row group flex items-start gap-3 rounded-md px-3 py-2.5 border",
              "animate-fade-in-up",
              `stagger-${Math.min(i + 1, 6)}`,
              isEnrolled
                ? isDropCandidate
                  ? "border-[oklch(0.82_0.18_75/20%)] bg-[oklch(0.82_0.18_75/5%)]"
                  : "border-white/5 bg-white/[0.03] hover:bg-white/[0.05]"
                : "dropped border-white/[0.03] bg-transparent"
            )}
          >
            <Checkbox
              id={course.id}
              checked={isEnrolled}
              disabled={isMandatory}
              onCheckedChange={() => !isMandatory && onToggle(course.id)}
              className={cn(
                "mt-0.5 shrink-0",
                isMandatory && "opacity-60 cursor-not-allowed"
              )}
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn(
                    "text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border",
                    categoryColor[course.category]
                  )}>
                    {categoryLabel[course.category]}
                  </span>
                  {course.school === "HBS" ? (
                    <a
                      href={`https://coursecatalog.mba.hbs.edu/?details&srcdb=${
                        semester === "spring" ? "792154" : "792148"
                      }&code=${encodeURIComponent(course.code)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-muted-foreground/70 hover:text-foreground hover:underline transition-colors"
                    >
                      {course.code}
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-muted-foreground/70">
                      {course.code}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {isDropCandidate && isEnrolled && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border text-[oklch(0.82_0.18_75)] border-[oklch(0.82_0.18_75/40%)] bg-[oklch(0.82_0.18_75/8%)]">
                      LIKELY DROP
                    </span>
                  )}
                  <span className="font-mono text-sm font-semibold text-foreground/80">
                    {course.credits.toFixed(1)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-1">
                <span className={cn(
                  "text-sm font-medium leading-snug",
                  isEnrolled ? "text-foreground" : "text-muted-foreground/40"
                )}>
                  {course.title}
                </span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3 h-3 text-muted-foreground/30 hover:text-muted-foreground/70 transition-colors shrink-0 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs text-xs">
                    <p className="font-medium mb-1">{course.rationale}</p>
                    {course.dropReason && (
                      <p className="text-[oklch(0.82_0.18_75)] mt-1">⚠ {course.dropReason}</p>
                    )}
                    {course.time && (
                      <p className="text-muted-foreground mt-1">{course.days} · {course.time}</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </div>

              {course.time && (
                <p className="text-[11px] text-muted-foreground/50 mt-0.5">
                  {course.days} · {course.time}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
