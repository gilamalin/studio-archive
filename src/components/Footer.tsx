import { siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111318]">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6">
        <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
          {siteMeta.footer.copyright}
        </span>
      </div>
    </footer>
  );
}
