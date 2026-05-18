export const EMOTIONS = [
  "집착",
  "불안",
  "비교",
  "상실",
  "공허",
  "분노",
  "욕망",
  "후회",
  "외로움",
] as const;

export type Emotion = (typeof EMOTIONS)[number];

export type EmotionKeyword = {
  text: string;
  weight: number;
};

export type EmotionRule = {
  emotion: Emotion;
  keywords: EmotionKeyword[];
};

export const EMOTION_RULES: EmotionRule[] = [
  {
    emotion: "집착",
    keywords: [
      { text: "계속 생각", weight: 3 },
      { text: "생각나", weight: 3 },
      { text: "떠나지 않", weight: 2 },
      { text: "붙잡", weight: 3 },
      { text: "잊을 수 없", weight: 2 },
      { text: "그 사람", weight: 2 },
      { text: "연락", weight: 2 },
      { text: "확인", weight: 2 },
      { text: "집착", weight: 4 },
      { text: "미련", weight: 3 },
      { text: "놓지 못", weight: 3 },
      { text: "되돌아보", weight: 2 },
    ],
  },
  {
    emotion: "불안",
    keywords: [
      { text: "불안", weight: 4 },
      { text: "걱정", weight: 3 },
      { text: "잠이 안", weight: 3 },
      { text: "잠 못", weight: 3 },
      { text: "두렵", weight: 3 },
      { text: "초조", weight: 3 },
      { text: "앞일", weight: 2 },
      { text: "미래", weight: 2 },
      { text: "어떻게 될", weight: 2 },
      { text: "심장", weight: 2 },
      { text: "숨이 가", weight: 2 },
      { text: "떨리", weight: 2 },
    ],
  },
  {
    emotion: "비교",
    keywords: [
      { text: "비교", weight: 4 },
      { text: "남들", weight: 3 },
      { text: "다들", weight: 2 },
      { text: "나만", weight: 3 },
      { text: "뒤처", weight: 3 },
      { text: "부럽", weight: 3 },
      { text: "열등", weight: 3 },
      { text: "인스타", weight: 2 },
      { text: "성공", weight: 2 },
      { text: "잘나", weight: 2 },
      { text: "못난", weight: 2 },
      { text: "경쟁", weight: 2 },
    ],
  },
  {
    emotion: "상실",
    keywords: [
      { text: "잃었", weight: 3 },
      { text: "떠났", weight: 3 },
      { text: "헤어", weight: 3 },
      { text: "이별", weight: 4 },
      { text: "죽었", weight: 3 },
      { text: "없어졌", weight: 3 },
      { text: "끝났", weight: 2 },
      { text: "상실", weight: 4 },
      { text: "그리움", weight: 3 },
      { text: "보고 싶", weight: 2 },
      { text: "돌아오지", weight: 2 },
      { text: "빈자리", weight: 3 },
    ],
  },
  {
    emotion: "공허",
    keywords: [
      { text: "공허", weight: 4 },
      { text: "텅 빈", weight: 3 },
      { text: "무의미", weight: 3 },
      { text: "허전", weight: 3 },
      { text: "쓸쓸", weight: 2 },
      { text: "아무것도", weight: 2 },
      { text: "의욕", weight: 2 },
      { text: "무력", weight: 2 },
      { text: "막막", weight: 2 },
      { text: "심심", weight: 1 },
      { text: "삶이", weight: 1 },
      { text: "공동", weight: 2 },
    ],
  },
  {
    emotion: "분노",
    keywords: [
      { text: "화가", weight: 3 },
      { text: "분노", weight: 4 },
      { text: "짜증", weight: 3 },
      { text: "억울", weight: 3 },
      { text: "미워", weight: 3 },
      { text: "증오", weight: 3 },
      { text: "때리", weight: 2 },
      { text: "소리", weight: 1 },
      { text: "참을 수 없", weight: 2 },
      { text: "욕", weight: 2 },
      { text: "배신", weight: 2 },
      { text: "불공평", weight: 2 },
    ],
  },
  {
    emotion: "욕망",
    keywords: [
      { text: "갖고 싶", weight: 3 },
      { text: "욕망", weight: 4 },
      { text: "탐", weight: 3 },
      { text: "더 원", weight: 2 },
      { text: "부족", weight: 2 },
      { text: "돈", weight: 2 },
      { text: "인정", weight: 2 },
      { text: "사랑받", weight: 2 },
      { text: "질투", weight: 3 },
      { text: "빼앗", weight: 2 },
      { text: "채워지지", weight: 3 },
      { text: "결핍", weight: 2 },
    ],
  },
  {
    emotion: "후회",
    keywords: [
      { text: "후회", weight: 4 },
      { text: "그때", weight: 2 },
      { text: "왜 그랬", weight: 3 },
      { text: "돌이킬", weight: 3 },
      { text: "잘못", weight: 2 },
      { text: "미안", weight: 2 },
      { text: "다시", weight: 1 },
      { text: "과거", weight: 2 },
      { text: "했어야", weight: 3 },
      { text: "하지 말", weight: 2 },
      { text: "늦었", weight: 2 },
      { text: "되돌릴", weight: 2 },
    ],
  },
  {
    emotion: "외로움",
    keywords: [
      { text: "외로", weight: 4 },
      { text: "혼자", weight: 3 },
      { text: "고립", weight: 3 },
      { text: "아무도", weight: 2 },
      { text: "이해하지", weight: 2 },
      { text: "말할 사람", weight: 3 },
      { text: "쓸쓸", weight: 2 },
      { text: "버림", weight: 3 },
      { text: "소외", weight: 3 },
      { text: "빈 방", weight: 2 },
      { text: "홀로", weight: 2 },
      { text: "외톨이", weight: 3 },
    ],
  },
];
