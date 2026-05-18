const WISDOM = [
  "천둥을 붙잡는 마음은, 이미 지나간 비 소리까지 듣고 있었다. 두려움은 종종 폭풍이 아니라 메아리일 때가 많다.",
  "가득 찬 잔에는 새 차가 들어오지 않는다. 억지로 비우지 말고, 숨만 깊게보내 보라.",
  "물 위에 달이 있을 때, 잔잔한 물만 그대로 비춘다. 잠깐만 흔들림을 멈춰 보아라.",
  "하늘을 지나가는 구름이 하늘 전부는 아니다. 너도 그 구름이 지나갈 만큼 넓은 공간이다.",
  "손을 쥐면 아픔이라 부르고, 펴면 편안함이라 부른다. 둘 다 원래 네 손에 있었다.",
  "바람 앞에서 촛불은 기울 뿐, 꺼지지 않는다. 부러졌다고 믿지 말고, 기울어짐을 허락해 보라.",
  "짊어진 것은 돌이 아니라, 돌이라고 부른 생각이다. 한 번만 내려놓아 보아라. 그다음에 남는 것을 느껴 보라.",
  "오늘의 길은 어제도 내일도 아니다. 지금 밟는 이 한 걸음, 눈 위에 떨어진 것처럼 가볍다.",
  "괴로움은 항상 풀어 달라 하지 않는다. 가끔은, 새벽을 바라보듯 그저 지켜보기만 하면 된다.",
  "새는 답을 알아서 노래하지 않는다. 목소리가 있어서 노래할 뿐이다. 네 말도 들려주었으니, 이제 날려내도 된다.",
  "숲은 소리 없이 자란다. 나무마다 이름을 붙이지 않아도 된다. 네 안에서도, 조용히 자라는 것이 있다.",
  "분노는 연기이고, 그 아래에는 작은 불씨가 있다. 숨을 고르면 불씨가 보인다. 그때는 그것에게도 말을 걸어 보라.",
  "지금 이 순간까지, 너는 모든 어려운 시간을 지나왔다. 그것은 작은 일이 아니다.",
  "놓는다는 것은 잊는 것이 아니다. 손을 느슨하게 해, 기억이 옆에 앉을 수 있게 해 주는 일이다.",
  "멀리 있는 것을 두려워하기보다, 가까이 있는 숨을 먼저 돌아보아라.",
] as const;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getMockWisdom(worry: string): string {
  const trimmed = worry.trim();
  if (!trimmed) return WISDOM[0];

  const index = hashString(trimmed) % WISDOM.length;
  return WISDOM[index];
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
