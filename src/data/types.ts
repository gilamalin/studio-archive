export interface NavItem {
  href: string;
  index: string;
  label: string;
}

export interface SiteMeta {
  gameTitle: string;
  workingTitleTag: string;
  studioName: string;
  pageTitle: string;
  pageDescription: string;
  steamUrl: string;
  steamComingSoonLabel: string;
  steamLiveLabel: string;
  navItems: NavItem[];
  footer: {
    copyright: string;
    note: string;
  };
}

/* Page 1: 게임 소개 & 특징 */
export interface SceneSlide {
  id: string;
  index: string;
  title: string;
  tag: string;
  caption: string;
  /** public/media/ 영상 경로 (.mp4 / .webm). 비어 있으면 16:9 플레이스홀더 표시 */
  videoSrc: string;
  expectedPath: string;
}

export interface GameFeature {
  id: string;
  index: string;
  keyword: string;
  summary: string;
  screenshotSrc: string;
  expectedPath: string;
  caption: string;
}

export interface HomeData {
  eyebrow: string;
  tagline: string;
  slides: SceneSlide[];
  featuresHeadline: string;
  features: GameFeature[];
}

/* Page 2: 기본 게임 가이드 & 스테이지별 플레이 방식 */
export interface KeyBinding {
  keys: string[];
  action: string;
  category: "MOVE" | "PHYSICS" | "SYSTEM";
}

export interface GuideStepPanel {
  id: string;
  title: string;
  summary: string;
  mediaSrc: string;
  expectedPath: string;
  steps: string[];
}

export interface StageRule {
  id: string;
  index: string;
  name: string;
  modeTag: string;
  winCondition: string;
  singleRule: string;
  multiRule: string;
  scoringRule: string;
}

export interface MultiplayerGuide {
  createSteps: string[];
  joinSteps: string[];
  warnings: string[];
}

export interface GuideData {
  headline: string;
  subcopy: string;
  keyBindings: KeyBinding[];
  customizeGuide: GuideStepPanel;
  stageSelectGuide: GuideStepPanel;
  stagesHeadline: string;
  stages: StageRule[];
  multiplayer: MultiplayerGuide;
}

/* Page 2 하단: 기술/제작 하이라이트 */
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

export interface DevNoteItem {
  date: string;
  title: string;
  summary: string;
}

export interface BehindData {
  headline: string;
  subcopy: string;
  pivotLabel: string;
  pivotStages: PivotStage[];
  pipelineTitle: string;
  pipelineTools: string[];
  pipelineItems: PipelineEfficiencyItem[];
  techTitle: string;
  techSolutions: TechSolutionItem[];
  devNotes: DevNoteItem[];
}

/* Page 3: 팀원 구성 & 연락처 */
export interface TeamLink {
  label: string;
  href: string;
}

export interface TeamMember {
  id: string;
  index: string;
  name: string;
  handle: string;
  oneLiner: string;
  roles: string[];
  avatarSrc: string;
  expectedAvatarPath: string;
  links: TeamLink[];
}

export interface ContactData {
  headline: string;
  subcopy: string;
  email: string;
  snsLinks: TeamLink[];
}

export interface TeamPageData {
  headline: string;
  subcopy: string;
  members: TeamMember[];
  contact: ContactData;
}
