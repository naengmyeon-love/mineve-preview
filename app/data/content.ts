export type LineId = "salt" | "renew" | "rest";

export type Product = {
  slug: string;
  line: LineId;
  name: string;
  english: string;
  size: string;
  price: number;
  description: string;
  image: string;
  detail: string;
  use: string;
  ingredients: string;
};

export type Note = {
  slug: string;
  category: "Island" | "Mineral" | "Table" | "Skin" | "Body";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const images = {
  coast: "/images/mineve-coast.webp",
  basalt: "/images/mineve-basalt.webp",
  salt: "/images/salt.jpg",
  water: "/images/water.jpg",
  renew: "/images/mineve-renew.webp",
  rest: "/images/mineve-rest.webp",
  product: "/images/mineve-products.webp",
  forest: "/images/forest.jpg",
  night: "/images/night.jpg",
};

export const collections = {
  salt: {
    id: "salt" as const,
    eyebrow: "Everyday mineral",
    title: "SALT",
    headline: "식탁의 미네랄",
    intro: "제주의 바다와 화산암층을 지난 미네랄을 가장 일상적인 한 꼬집으로 전합니다.",
    image: images.basalt,
    color: "Deep ocean",
  },
  renew: {
    id: "renew" as const,
    eyebrow: "After water",
    title: "RENEW",
    headline: "피부의 미네랄",
    intro: "물과 소금 결정, 식물성 오일이 목욕 뒤 피부의 감각을 천천히 되돌립니다.",
    image: images.renew,
    color: "Warm sand",
  },
  rest: {
    id: "rest" as const,
    eyebrow: "Day to night",
    title: "REST",
    headline: "몸의 미네랄",
    intro: "낮의 수분과 저녁의 호흡. 하루의 리듬을 고르는 조용한 미네랄 루틴입니다.",
    image: images.rest,
    color: "Night blue",
  },
};

export const passageSteps = [
  {
    number: "01",
    title: "제주에 내리는 비",
    copy: "바다에서 건너온 수분이 한라산과 오름 위에 닿으며 긴 여정이 시작됩니다.",
    image: images.coast,
  },
  {
    number: "02",
    title: "화산암층을 지나는 시간",
    copy: "물은 수없이 겹친 현무암의 틈을 천천히 통과하며 불필요한 것을 덜어냅니다.",
    image: images.basalt,
  },
  {
    number: "03",
    title: "현무암 지하수",
    copy: "보이지 않는 땅 아래에서 물과 광물이 만나 제주 고유의 미네랄 균형을 만듭니다.",
    image: images.water,
  },
  {
    number: "04",
    title: "미네랄 원료",
    copy: "출처와 공정을 확인할 수 있는 원료만 고르고, 필요한 만큼만 정제합니다.",
    image: images.salt,
  },
  {
    number: "05",
    title: "MINEVE의 제품",
    copy: "식탁과 피부, 몸의 시간에 맞춰 SALT, RENEW, REST의 세 감각으로 나눕니다.",
    image: images.product,
  },
  {
    number: "06",
    title: "매일의 리추얼",
    copy: "한 꼬집, 한 번의 목욕, 한 잔의 물처럼 오래 이어갈 수 있는 동작으로 완성됩니다.",
    image: images.rest,
  },
];

export const products: Product[] = [
  {
    slug: "jeju-mineral-salt-original",
    line: "salt",
    name: "제주 미네랄 솔트 오리지널",
    english: "Jeju Mineral Salt Original",
    size: "90 g",
    price: 12000,
    description: "맑은 짠맛과 단정한 결정감으로 요리의 마지막을 정리하는 기본 소금.",
    image: images.product,
    detail: "제주 용암해수 유래 원료를 천천히 건조해 미세한 수분감과 깨끗한 여운을 남겼습니다.",
    use: "완성된 생선과 채소, 국물 요리에 한 꼬집씩 더해 재료의 맛을 또렷하게 살려주세요.",
    ingredients: "천일염 100% (제주산)",
  },
  {
    slug: "jeju-mineral-salt-fine",
    line: "salt",
    name: "제주 미네랄 솔트 파인",
    english: "Jeju Mineral Salt Fine",
    size: "80 g",
    price: 12000,
    description: "고운 입자가 빠르게 녹아 베이킹과 소스에 자연스럽게 스미는 소금.",
    image: images.product,
    detail: "결정의 크기를 곱게 다듬어 재료의 조직 사이로 균일하게 퍼지도록 만들었습니다.",
    use: "반죽, 드레싱, 수프처럼 소금이 고르게 녹아야 하는 요리에 사용하세요.",
    ingredients: "천일염 100% (제주산)",
  },
  {
    slug: "jeju-mineral-salt-herb",
    line: "salt",
    name: "제주 미네랄 솔트 허브",
    english: "Jeju Mineral Salt Herb",
    size: "90 g",
    price: 14000,
    description: "제주 허브의 낮은 향이 결정 사이에 머무는 테이블 블렌드.",
    image: images.product,
    detail: "바질과 로즈메리의 향을 절제해 소금의 깨끗한 맛 뒤에 초록의 잔향만 남겼습니다.",
    use: "구운 채소, 흰살생선, 부드러운 치즈 위에 마지막 한 꼬집을 더하세요.",
    ingredients: "천일염 92%, 바질, 로즈메리, 감귤피",
  },
  {
    slug: "mineral-body-polish",
    line: "renew",
    name: "미네랄 바디 폴리시",
    english: "Mineral Body Polish",
    size: "220 g",
    price: 36000,
    description: "소금 결정과 오일이 만나 물기 있는 피부에서 부드럽게 녹는 스크럽.",
    image: images.renew,
    detail: "서로 다른 크기의 미네랄 결정과 식물성 오일의 비율을 세심하게 맞춰 거친 마찰을 줄였습니다.",
    use: "주 1–2회, 젖은 피부에 원을 그리듯 마사지한 뒤 미온수로 씻어냅니다.",
    ingredients: "Sea Salt, Sunflower Seed Oil, Jojoba Seed Oil",
  },
  {
    slug: "mineral-bath-soak",
    line: "renew",
    name: "미네랄 배스 솔트",
    english: "Mineral Bath Soak",
    size: "300 g",
    price: 28000,
    description: "따뜻한 물과 함께 몸의 속도를 늦추는 입욕 미네랄.",
    image: images.basalt,
    detail: "맑은 소금 결정과 편백 잎의 낮은 향이 욕실의 공기를 천천히 바꿉니다.",
    use: "따뜻한 물에 2–3스푼을 완전히 녹인 뒤 15분간 머무르세요.",
    ingredients: "Sea Salt, Magnesium Sulfate, Hinoki Leaf Oil",
  },
  {
    slug: "mineral-body-oil",
    line: "renew",
    name: "미네랄 바디 오일",
    english: "Mineral Body Oil",
    size: "100 ml",
    price: 44000,
    description: "물 이후의 피부에 얇고 고른 윤기를 남기는 리스토어 오일.",
    image: images.product,
    detail: "가벼운 식물성 오일과 미네랄 유래 보습 성분을 피부에 오래 남지 않도록 설계했습니다.",
    use: "샤워 직후 물기가 조금 남은 피부에 부드럽게 눌러 바릅니다.",
    ingredients: "Jojoba Seed Oil, Squalane, Magnesium PCA",
  },
  {
    slug: "night-magnesium-balance",
    line: "rest",
    name: "나이트 마그네슘 밸런스",
    english: "Night Magnesium Balance",
    size: "100 ml",
    price: 39000,
    description: "저녁의 호흡을 고르게 만드는 마그네슘 바디 리추얼.",
    image: images.rest,
    detail: "무겁지 않은 오일감과 삼나무 향이 잠들기 전의 조용한 제스처가 됩니다.",
    use: "샤워 뒤 어깨와 종아리에 천천히 마사지합니다.",
    ingredients: "Jojoba Seed Oil, Magnesium PCA, Cedarwood Oil",
  },
];

export const notes: Note[] = [
  {
    slug: "water-beneath-jeju",
    category: "Island",
    title: "제주 아래 흐르는 물의 시간",
    excerpt: "비가 현무암의 틈을 지나 다시 우리 앞에 이르기까지.",
    date: "2026.07.18",
    readTime: "6 min",
    image: images.coast,
    body: [
      "제주의 물은 도착한 자리보다 지나온 시간을 먼저 말합니다. 바다에서 올라온 수분은 오름과 숲에 내리고, 다공질의 현무암층을 지나며 눈에 보이지 않는 길을 만듭니다.",
      "MINEVE는 그 시간을 빠르게 설명하지 않습니다. 물의 출처와 원료의 이동, 제품이 완성되는 과정을 차례로 기록합니다. 자연을 장식으로 소비하지 않기 위해서입니다.",
    ],
  },
  {
    slug: "reading-minerals",
    category: "Mineral",
    title: "미네랄을 고르는 네 가지 기준",
    excerpt: "숫자보다 먼저 확인해야 할 출처와 과정의 기록.",
    date: "2026.07.05",
    readTime: "7 min",
    image: images.salt,
    body: [
      "좋은 미네랄은 함량 하나로 판단하기 어렵습니다. 어디에서 시작했는지, 어떤 공정을 거쳤는지, 매일 반복해 사용할 수 있는지가 함께 설명되어야 합니다.",
      "MINEVE는 출처, 정제 방식, 입자와 질감, 사용 순간을 기준으로 원료를 살핍니다. 확인되지 않은 효능보다 확인할 수 있는 과정을 먼저 말합니다.",
    ],
  },
  {
    slug: "one-pinch",
    category: "Table",
    title: "식탁 위 한 꼬집의 기준",
    excerpt: "짠맛의 세기가 아니라 요리의 방향을 정하는 일.",
    date: "2026.06.10",
    readTime: "4 min",
    image: images.product,
    body: [
      "한 꼬집의 소금은 요리의 끝에서 전체를 다시 연결합니다. 입자의 크기와 녹는 속도는 같은 재료도 전혀 다른 표정으로 만듭니다.",
      "고운 소금은 소스와 반죽에, 굵은 결정은 구운 채소와 생선의 마지막에 어울립니다. 필요한 만큼만 더하고 천천히 맛을 확인하는 것이 MINEVE가 제안하는 사용법입니다.",
    ],
  },
  {
    slug: "after-water",
    category: "Skin",
    title: "물 이후 피부가 기억하는 것",
    excerpt: "씻어낸 뒤 3분, 피부의 감각을 지키는 순서.",
    date: "2026.06.22",
    readTime: "5 min",
    image: images.renew,
    body: [
      "목욕 뒤 피부에는 물이 떠난 자리와 온기가 함께 남습니다. 이 짧은 시간에 무엇을 더하고 무엇을 남겨둘지에 따라 피부의 감각은 달라집니다.",
      "POLISH, SOAK, RESTORE. 덜어내고, 머무르고, 되돌리는 세 단계는 많은 제품보다 고른 순서를 위한 리추얼입니다.",
    ],
  },
  {
    slug: "quiet-bathing",
    category: "Body",
    title: "목욕 이후의 조용한 호흡",
    excerpt: "더 많이 바르기보다 몸의 속도를 늦추는 시간.",
    date: "2026.05.29",
    readTime: "5 min",
    image: images.rest,
    body: [
      "저녁의 물은 하루 동안 몸에 쌓인 감각을 천천히 분리합니다. 따뜻한 물에 머무는 시간, 피부의 물기를 닦는 속도, 잠들기 전 한 잔의 물이 하나의 리듬을 만듭니다.",
      "REST는 큰 변화를 약속하지 않습니다. 내일도 반복할 수 있는 조용한 동작을 제안합니다.",
    ],
  },
];

export const storyChapters = [
  {
    number: "01",
    title: "제주에 내리는 비",
    subtitle: "모든 미네랄의 첫 장면",
    copy: "섬의 물은 하늘에서 시작합니다. 바다에서 건너온 수분이 한라산과 오름에 닿고, 숲과 돌 위에 머무르며 제주 고유의 순환을 만듭니다. 우리는 원료를 보기 전에 그 원료가 시작된 풍경을 먼저 살핍니다.",
    image: images.coast,
  },
  {
    number: "02",
    title: "화산암층을 지나는 시간",
    subtitle: "빠르게 흐르지 않는 물",
    copy: "빗물은 구멍이 많은 현무암층 사이로 스며듭니다. 수십 겹의 지층을 통과하는 동안 불필요한 것은 덜어지고 광물의 흔적이 더해집니다. 보이지 않는 이 시간이 MINEVE 원료의 첫 번째 기준입니다.",
    image: images.basalt,
  },
  {
    number: "03",
    title: "현무암과 물",
    subtitle: "섬 아래의 투명한 저장고",
    copy: "제주의 지하에는 바닷물과 담수가 서로 다른 밀도로 층을 이루는 물길이 있습니다. MINEVE는 물을 단순한 배경으로 사용하지 않고, 어디에서 어떻게 얻었는지 설명할 수 있는 원료로 다룹니다.",
    image: images.water,
  },
  {
    number: "04",
    title: "미네랄을 고르는 기준",
    subtitle: "출처, 과정, 그리고 매일의 감각",
    copy: "높은 수치나 화려한 효능보다 출처가 분명한지, 공정이 과도하지 않은지, 매일 반복해도 편안한지를 확인합니다. 결정의 크기와 녹는 속도, 피부에 남는 질감까지 제품의 언어로 기록합니다.",
    image: images.salt,
  },
  {
    number: "05",
    title: "SALT, RENEW, REST",
    subtitle: "하나의 원료가 만나는 세 장면",
    copy: "식탁의 미네랄 SALT, 물 이후 피부를 위한 RENEW, 낮과 저녁의 몸을 돌보는 REST. 같은 제주에서 시작하지만 사용하는 시간과 감각에 따라 서로 다른 표정을 갖습니다.",
    image: images.product,
  },
  {
    number: "06",
    title: "MINEVE가 제안하는 일상",
    subtitle: "오래 이어지는 작은 동작",
    copy: "균형은 멀리 있는 이상이 아니라 매일 되풀이할 수 있는 작은 선택이라고 믿습니다. 한 꼬집의 소금, 물 뒤의 오일, 잠들기 전의 호흡이 자연과 일상을 다시 연결합니다.",
    image: images.rest,
  },
];

export const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;
