import type { SiteMeta } from "./types";

export const siteMeta: SiteMeta = {
  studioName: "STUDIO ARCHIVE",
  studioTag: "INDIE GAME LAB",
  pageTitle: "STUDIO ARCHIVE — 액티브 래그돌 파티 게임 & 차기 라인업",
  pageDescription:
    "3인 인디 팀의 액티브 래그돌 멀티플레이어 물리 파티 게임과 차기 개인 프로젝트 3종 쇼케이스.",
  steamUrl: "",
  steamComingSoonLabel: "STEAM · COMING SOON",
  steamLiveLabel: "STEAM STORE",
  navItems: [
    { id: "hero", index: "01", label: "메인 프로젝트" },
    { id: "behind", index: "02", label: "개발 비하인드" },
    { id: "upcoming", index: "03", label: "차기 라인업" },
  ],
  footer: {
    copyright: "© 2026 STUDIO ARCHIVE",
    note: "3-Person Indie Team · Steam PC Target",
    links: [
      { label: "GITHUB", href: "https://github.com" },
      { label: "CONTACT", href: "mailto:hello@studio-archive.dev" },
    ],
  },
};
