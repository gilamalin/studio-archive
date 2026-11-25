export interface NavItem {
  id: string;
  index: string;
  label: string;
}

export interface SiteMeta {
  studioName: string;
  studioTag: string;
  pageTitle: string;
  pageDescription: string;
  steamUrl: string; // 비어 있으면 'STEAM · COMING SOON' 비활성 배지, URL 입력 시 라이브 링크 버튼으로 자동 전환
  steamComingSoonLabel: string;
  steamLiveLabel: string;
  navItems: NavItem[];
  footer: {
    copyright: string;
    note: string;
    links: {
      label: string;
      href: string;
    }[];
  };
}

export interface HeroMetric {
  label: string;
  value: string;
  accent?: "orange" | "yellow" | "none";
}

export interface HeroMediaClip {
  id: string;
  index: string;
  title: string;
  tag: string;
  type: "video" | "image";
  /**
   * public/media/ 경로 (예: "/media/clip-01-ringout.mp4").
   * 비어 있으면 16:9 플레이스홀더 프레임이 표시됩니다.
   */
  src: string;
  expectedPath: string;
  caption: string;
}

export interface HeroData {
  eyebrow: string;
  title: string;
  workingTitleTag: string;
  subcopy: string;
  metrics: HeroMetric[];
  mediaClips: HeroMediaClip[];
}

export interface PivotStage {
  step: "BEFORE" | "PIVOT" | "NOW";
  title: string;
  summary: string;
  highlight?: boolean;
}

export interface PipelineEfficiencyItem {
  label: string;
  metric: string;
  detail: string;
}

export interface TechSolutionItem {
  id: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
}

export interface BehindData {
  sectionIndex: string;
  headline: string;
  subcopy: string;
  pivotLabel: string;
  pivotStages: PivotStage[];
  pipelineTitle: string;
  pipelineTools: string[];
  pipelineItems: PipelineEfficiencyItem[];
  techTitle: string;
  techSolutions: TechSolutionItem[];
}

export type ProjectStage = "Concept" | "Prototype";

export interface UpcomingProject {
  id: string;
  index: string;
  slug: string;
  /**
   * 추후 단독 상세 페이지(/projects/[slug])로 승격할 때 true로 전환.
   * false인 경우 클릭 시 프리뷰 모달이 열립니다.
   */
  hasDetailPage: boolean;
  title: string;
  genre: string;
  stage: ProjectStage;
  hook: string;
  logline: string;
  techStack: string[];
  corePoints: [string, string, string];
}

export interface UpcomingSectionData {
  sectionIndex: string;
  headline: string;
  subcopy: string;
  projects: UpcomingProject[];
}
