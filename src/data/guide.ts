import type { GuideData } from "./types";

export const guideData: GuideData = {
  headline: "How to Play",
  subcopy: "",
  keyBindings: [
    { keys: ["W", "A", "S", "D"], action: "이동", category: "이동" },
    { keys: ["SPACE"], action: "점프", category: "이동" },
    { keys: ["SHIFT"], action: "대시 / 박치기", category: "이동" },
    { keys: ["LMB", "RMB"], action: "왼손 · 오른손 잡기", category: "물리" },
    { keys: ["E"], action: "던지기", category: "물리" },
    { keys: ["TAB"], action: "점수판", category: "시스템" },
  ],
  customizeGuide: {
    id: "customize",
    title: "캐릭터 · 커스터마이징",
    summary: "로비에서 외형과 컬러를 즉시 변경합니다.",
    mediaSrc: "",
    expectedPath: "public/media/guide-customize.webp",
    steps: [
      "로비 [캐릭터] 슬롯에서 컬러·체형 선택",
      "모자·고글 등 액세서리 파츠 조합",
      "선택 즉시 로비 캐릭터에 실시간 반영",
    ],
  },
  stageSelectGuide: {
    id: "stage-select",
    title: "옵션별 스테이지 선택",
    summary: "방장이 라운드 규칙과 스테이지를 설정합니다.",
    mediaSrc: "",
    expectedPath: "public/media/guide-stage-select.webp",
    steps: [
      "싱글 연습 또는 멀티 파티(2–8인) 선택",
      "지정 스테이지 반복 또는 랜덤 로테이션 설정",
      "목표 승수(3·5·7승) 선택 후 게임 시작",
    ],
  },
  stagesHeadline: "Stages & Rules",
  stages: [
    {
      id: "stage-ringout",
      index: "01",
      name: "링아웃 난투",
      modeTag: "서바이벌",
      winCondition: "발판 위 최후의 1인 생존",
      singleRule: "AI 봇 3명과 3라운드 생존 기록 측정",
      multiRule: "최대 8인 난투 · 탈락 시 관전 전환",
      scoringRule: "라운드 우승 +3점 · 장외 유도 +1점",
    },
    {
      id: "stage-relay",
      index: "02",
      name: "폭탄 릴레이",
      modeTag: "술래잡기",
      winCondition: "타이머 종료 시 폭탄 미보유",
      singleRule: "봇에게 폭탄을 넘겨 연속 생존 콤보 기록",
      multiRule: "폭탄 보유자 이속 +15% · 접촉·투척 전달",
      scoringRule: "웨이브 생존 +2점 · 3초 전 전달 +1점",
    },
    {
      id: "stage-trap",
      index: "03",
      name: "함정 장애물",
      modeTag: "레이스",
      winCondition: "장애물 돌파 후 결승선 선착",
      singleRule: "체크포인트 기준 최단 완주 타임어택",
      multiRule: "상대 잡기·밀치기 허용 · 1~3위 차등 점수",
      scoringRule: "1위 +4점 · 2위 +2점 · 3위 +1점",
    },
  ],
  multiplayer: {
    createSteps: [
      "[멀티플레이] → [방 만들기] 선택",
      "인원(2–8인)·공개 여부 설정 후 생성",
      "생성된 6자리 코드를 팀원에게 공유",
    ],
    joinSteps: [
      "[멀티플레이] → [방 참여하기] 선택",
      "로비 목록 선택 또는 6자리 코드 입력",
      "준비(READY) 완료 후 시작 대기",
    ],
    warnings: [
      "방장이 방을 나가면 진행 중인 방이 즉시 폭파됩니다.",
      "라운드 중 난입 시 다음 라운드부터 참여됩니다.",
    ],
  },
};
