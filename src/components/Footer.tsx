import { siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-[#18181B] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-black text-[#18181B]">
            {siteMeta.footer.copyright}
          </span>
          <span className="text-xs font-semibold text-[#52525B]">
            {siteMeta.footer.note}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {siteMeta.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="font-mono text-xs font-extrabold text-[#18181B] underline-offset-4 hover:text-[#FF5A1F] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
