"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
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
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="flex flex-col justify-between gap-5 rounded-md border border-white/10 bg-[var(--surface)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)] md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
              <h2 className="text-lg font-black text-[var(--text)] sm:text-xl">
                {contact.headline}
              </h2>
            </div>
            <p className="mt-1 pl-3.5 text-sm font-medium text-[var(--text-muted)]">
              {contact.subcopy}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            {/* Business Email + Copy */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 font-mono text-xs font-black text-[var(--accent-fg)] shadow-[0_6px_18px_rgba(234,179,8,0.18)] transition-all hover:brightness-105 sm:text-sm"
              >
                <Mail className="h-4 w-4 stroke-[2.4]" />
                <span>{contact.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="이메일 주소 복사"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-white/10 bg-[#111318] px-3 py-2 font-mono text-xs font-bold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
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

            {/* SNS Links */}
            <div className="flex flex-wrap items-center gap-2">
              {contact.snsLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm border border-white/10 bg-[#111318] px-2.5 py-1 font-mono text-xs font-bold text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
