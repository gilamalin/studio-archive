"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcons";
import { teamData } from "@/data/team";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { contact } = teamData;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-12 sm:px-6 lg:pt-8 lg:pb-14">
        {/* Heading Outside Box (Matches Team & Upcoming) */}
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h2 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {contact.headline}
          </h2>
        </div>

        {/* Single Flat Surface Box */}
        <div className="flex flex-col justify-between gap-4 rounded-md border border-white/[0.08] bg-[#1A1D24] p-5 md:flex-row md:items-center">
          {/* Left: Inquiry label + Email & Copy */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
            <span className="shrink-0 text-xs font-bold text-[var(--text-muted)]">
              {contact.subcopy}
            </span>

            <div className="flex w-full items-center gap-2 sm:w-auto">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex h-8 flex-1 items-center justify-center gap-2 rounded-md border border-[var(--accent)] bg-transparent px-3.5 font-mono text-xs font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] sm:flex-none"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 stroke-[2.2]" />
                <span className="truncate">{contact.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="이메일 주소 복사"
                className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-white/10 bg-[#111318] px-3 font-mono text-xs font-bold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[var(--accent)] stroke-[2.8]" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 stroke-[2.2]" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: SNS Links */}
          <div className="flex flex-wrap items-center gap-2">
            {contact.snsLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-[#111318] px-3 font-mono text-xs font-bold text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <BrandIcon label={link.label} className="h-3.5 w-3.5 shrink-0" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
