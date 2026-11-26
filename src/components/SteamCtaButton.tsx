import { ArrowUpRight } from "lucide-react";
import { siteMeta } from "@/data/site";

interface SteamCtaButtonProps {
  size?: "sm" | "md";
  fullWidth?: boolean;
}

function SteamIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .127.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012zm11.415-9.303a3.015 3.015 0 0 0-3.015-3.015 3.015 3.015 0 0 0-3.015 3.015 3.015 3.015 0 0 0 3.015 3.015 3.015 3.015 0 0 0 3.015-3.015zm-5.273-.005a2.268 2.268 0 0 1 2.266-2.266 2.268 2.268 0 0 1 2.266 2.266 2.268 2.268 0 0 1-2.266 2.266 2.268 2.268 0 0 1-2.266-2.266z" />
    </svg>
  );
}

export function SteamCtaButton({
  size = "md",
  fullWidth = false,
}: SteamCtaButtonProps) {
  const hasSteamUrl = siteMeta.steamUrl.trim().length > 0;
  const paddingClass =
    size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-3 text-sm";
  const iconClass = size === "sm" ? "h-4 w-4 shrink-0" : "h-[18px] w-[18px] shrink-0";
  const widthClass = fullWidth ? "w-full" : "";

  if (hasSteamUrl) {
    return (
      <a
        href={siteMeta.steamUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 rounded-md bg-[var(--accent)] font-black tracking-tight text-[var(--accent-fg)] shadow-[0_8px_22px_rgba(234,179,8,0.2)] transition-all hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 ${paddingClass} ${widthClass}`}
      >
        <SteamIcon className={iconClass} />
        <span>{siteMeta.steamLiveLabel}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
      </a>
    );
  }

  return (
    <span
      aria-label="Steam 출시 예정"
      className={`inline-flex select-none items-center justify-center gap-2.5 rounded-md bg-[var(--accent)] font-black tracking-tight text-[var(--accent-fg)] shadow-[0_8px_22px_rgba(234,179,8,0.18)] ${paddingClass} ${widthClass}`}
    >
      <SteamIcon className={iconClass} />
      <span className="font-mono">{siteMeta.steamComingSoonLabel}</span>
    </span>
  );
}
