import { siteMeta } from "@/data/site";
import { SteamCtaButton } from "./SteamCtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#18181B] bg-[#FAF7F2]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#hero"
          className="inline-flex items-center gap-2.5 font-extrabold tracking-tight text-[#18181B]"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm border-2 border-[#18181B] bg-[#FF5A1F] font-mono text-xs font-black text-white shadow-[2px_2px_0px_#18181B]">
            SA
          </span>
          <span className="text-sm sm:text-base">{siteMeta.studioName}</span>
          <span className="hidden rounded-sm border border-[#18181B] bg-white px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#52525B] md:inline-block">
            {siteMeta.studioTag}
          </span>
        </a>

        <nav aria-label="섹션 이동" className="hidden items-center gap-1 md:flex">
          {siteMeta.navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-1.5 rounded-md border-2 border-transparent px-2.5 py-1 text-xs font-bold text-[#18181B] transition-colors hover:border-[#18181B] hover:bg-white"
            >
              <span className="font-mono text-[11px] font-extrabold text-[#FF5A1F]">
                {item.index}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="shrink-0">
          <SteamCtaButton size="sm" />
        </div>
      </div>
    </header>
  );
}
