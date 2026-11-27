import type { SiteMeta } from "./types";

export const siteMeta: SiteMeta = {
  gameTitle: "FLIP & FLOP",
  workingTitleTag: "가제",
  studioName: "FLIP FIVE",
  pageTitle: "FLIP & FLOP — FLIP FIVE",
  pageDescription:
    "나는 그저 멋지게 해내고 싶었을 뿐인데 팔다리가 말을 듣지 않아 엉망진창이 되었습니다 — FLIP FIVE 액티브 래그돌 멀티플레이 물리 파티 게임.",
  steamUrl: "",
  steamComingSoonLabel: "STEAM · COMING SOON",
  steamLiveLabel: "STEAM STORE",
  navItems: [
    { href: "/", index: "01", label: "Game" },
    { href: "/guide", index: "02", label: "Guide" },
    { href: "/devlog", index: "03", label: "Devlog" },
    { href: "/team", index: "04", label: "Studio" },
  ],
  footer: {
    copyright: "© 2026 FLIP FIVE",
    note: "3-Person Indie Team · Steam PC Target",
  },
};
