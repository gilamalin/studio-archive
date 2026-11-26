"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteMeta } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const routeActiveIndex = Math.max(
    0,
    siteMeta.navItems.findIndex((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    )
  );

  // Optimistic index so the underline starts gliding at 0ms on click
  const [visualIndex, setVisualIndex] = useState(routeActiveIndex);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
    ready: boolean;
    animate: boolean;
  }>({ left: 0, width: 0, ready: false, animate: false });

  useEffect(() => {
    setVisualIndex(routeActiveIndex);
  }, [routeActiveIndex]);

  useEffect(() => {
    const updateIndicator = (shouldAnimate: boolean) => {
      const activeEl = linkRefs.current[visualIndex];
      if (!activeEl) return;
      setIndicator((prev) => ({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        ready: true,
        animate: shouldAnimate && prev.ready,
      }));
    };

    updateIndicator(true);

    const handleResize = () => updateIndicator(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visualIndex]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111318]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Clean Team Wordmark Logo */}
        <Link
          href="/"
          onClick={() => setVisualIndex(0)}
          className="inline-flex items-center gap-2.5 tracking-tight text-[var(--text)]"
        >
          <span className="inline-block h-2 w-2 rounded-[2px] bg-[var(--accent)]" />
          <span className="text-sm font-black tracking-wide sm:text-base">
            {siteMeta.studioName}
          </span>
        </Link>

        {/* Desktop 4-Page Navigation with Smooth Sliding Underline */}
        <nav
          aria-label="페이지 이동"
          className="relative hidden h-full items-center gap-6 md:flex"
        >
          {siteMeta.navItems.map((item, idx) => {
            const isActive = idx === visualIndex;

            return (
              <Link
                key={item.href}
                ref={(el) => {
                  linkRefs.current[idx] = el;
                }}
                href={item.href}
                onClick={() => setVisualIndex(idx)}
                className={`relative inline-flex h-full items-center gap-1.5 text-xs font-bold transition-colors ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                <span
                  className={`font-mono text-[11px] font-bold transition-colors ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)]/70"
                  }`}
                >
                  {item.index}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Sliding Active Underline */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate3d(${indicator.left}px, 0, 0)`,
              width: `${indicator.width}px`,
            }}
            className={`pointer-events-none absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] will-change-transform ${
              indicator.ready ? "opacity-100" : "opacity-0"
            } ${
              indicator.animate
                ? "transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : ""
            }`}
          />
        </nav>
      </div>

      {/* Compact Mobile 4-Page Sliding Underline Bar */}
      <nav
        aria-label="모바일 페이지 이동"
        className="relative grid grid-cols-4 border-t border-white/10 bg-[#111318] md:hidden"
      >
        {siteMeta.navItems.map((item, idx) => {
          const isActive = idx === visualIndex;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setVisualIndex(idx)}
              className={`flex items-center justify-center py-2.5 text-[11px] font-bold transition-colors ${
                isActive ? "text-[var(--text)]" : "text-[var(--text-muted)]"
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}

        <span
          aria-hidden="true"
          style={{
            transform: `translate3d(${visualIndex * 100}%, 0, 0)`,
          }}
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-1/4 bg-[var(--accent)] will-change-transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      </nav>
    </header>
  );
}
