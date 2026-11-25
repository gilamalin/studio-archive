import { ArrowUpRight } from "lucide-react";
import { siteMeta } from "@/data/site";

interface SteamCtaButtonProps {
  size?: "sm" | "md";
}

export function SteamCtaButton({ size = "md" }: SteamCtaButtonProps) {
  const hasSteamUrl = siteMeta.steamUrl.trim().length > 0;
  const paddingClass =
    size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm";

  if (hasSteamUrl) {
    return (
      <a
        href={siteMeta.steamUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`arcade-btn inline-flex items-center justify-center gap-2 rounded-md bg-[#FF5A1F] font-bold tracking-tight text-white ${paddingClass}`}
      >
        <span className="inline-block h-2 w-2 rounded-xs bg-[#FACC15] border border-[#18181B]" />
        <span>{siteMeta.steamLiveLabel}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
      </a>
    );
  }

  return (
    <span
      aria-label="Steam 출시 예정"
      className={`inline-flex select-none items-center justify-center gap-2 rounded-md border-2 border-[#18181B] bg-[#FACC15] font-bold tracking-tight text-[#18181B] shadow-[3px_3px_0px_#18181B] ${paddingClass}`}
    >
      <span className="inline-block h-2 w-2 rounded-xs bg-[#18181B]" />
      <span className="font-mono">{siteMeta.steamComingSoonLabel}</span>
    </span>
  );
}
