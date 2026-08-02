export type Product = {
  slug: string;
  line: "salt" | "renew" | "rest";
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
};

export const images = {
  coast: "https://images.unsplash.com/photo-1538485399081-7c897a9ed594?auto=format&fit=crop&w=2200&q=88",
  basalt: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88",
  sea: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=2000&q=88",
  salt: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=1600&q=88",
  saltField: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1800&q=88",
  water: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1800&q=88",
  skin: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1600&q=88",
  bath: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=1600&q=88",
  forest: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=88",
  night: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=88",
  table: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=88",
  ritual: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=88",
  mineral: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=88",
};

export const collections = {
  salt: {
    id: "salt",
    eyebrow: "Everyday mineral",
    title: "MINEVE SALT",
    headline: "한 꼬집 안에 놓인\n제주의 미네랄",
    intro: "바다와 현무암 지층을 지나온 제주 원료를 식탁 위 가장 섬세한 감각으로 다듬습니다.",
    image: images.salt,
    accent: "salt",
    passage: ["결정의 크기", "음식의 온도", "마지막 한 꼬집"],
  },
  renew: {
    id: "renew",
    eyebrow: "After water",
    title: "MINEVE RENEW",
    headline: "물 이후,\n피부의 균형",
    intro: "씻어낸 뒤의 피부에 미네랄 텍스처와 수분의 리듬을 차분히 되돌립니다.",
    image: images.water,
    accent: "renew",
    passage: ["POLISH", "SOAK", "RESTORE"],
  },
  rest: {
    id: "rest",
    eyebrow: "Day to night",
    title: "MINEVE REST",
    headline: "낮과 저녁의 리듬을\n채우는 미네랄",
    intro: "하루의 시작과 끝, 서로 다른 몸의 시간에 맞춘 조용한 웰니스 루틴입니다.",
    image: images.forest,
    accent: "rest",
    passage: ["DAY · CLEAR", "PAUSE · BREATHE", "NIGHT · SETTLE"],
  },
} as const;

export const products: Product[] = [
  {
    slug: "jeju-mineral-salt-original",
    line: "salt",
    name: "제주 미네랄 솔트 오리지널",
    english: "Jeju Mineral Salt Original",
    size: "120 g",
    price: 18000,
    description: "부드러운 짠맛과 단단한 결정감. 매일의 식탁을 위한 기본 솔트.",
    image: images.salt,
    detail: "중간 입자의 결정이 천천히 녹으며 재료 본연의 맛을 선명하게 올립니다.",
    use: "완성된 요리에 한 꼬집. 구운 채소, 생선, 달걀 요리에 권합니다.",
    ingredients: "천일염 100%",
  },
  {
    slug: "jeju-mineral-salt-fine",
    line: "salt",
    name: "제주 미네랄 솔트 파인",
    english: "Jeju Mineral Salt Fine",
    size: "100 g",
    price: 16000,
    description: "고운 입자가 빠르게 스며드는 조리용 미네랄 솔트.",
    image: images.saltField,
    detail: "균일하고 고운 입자로 국물, 드레싱, 베이킹에 자연스럽게 섞입니다.",
    use: "조리 중 소량씩 더해 간을 맞추세요.",
    ingredients: "천일염 100%",
  },
  {
    slug: "mineral-body-polish",
    line: "renew",
    name: "미네랄 바디 폴리시",
    english: "Mineral Body Polish",
    size: "220 g",
    price: 36000,
    description: "소금 결정과 오일이 만나 물기 있는 피부에서 부드럽게 녹는 스크럽.",
    image: images.skin,
    detail: "크기가 다른 미네랄 결정과 식물성 오일의 대비를 섬세하게 설계했습니다.",
    use: "주 1–2회, 젖은 피부에 원을 그리듯 마사지한 뒤 씻어냅니다.",
    ingredients: "Sea Salt, Sunflower Seed Oil, Jojoba Seed Oil",
  },
  {
    slug: "mineral-bath-soak",
    line: "renew",
    name: "미네랄 배스 소크",
    english: "Mineral Bath Soak",
    size: "300 g",
    price: 42000,
    description: "따뜻한 물과 함께 몸의 속도를 낮추는 입욕 미네랄.",
    image: images.bath,
    detail: "맑은 소금 결정과 차분한 향이 욕실의 공기를 천천히 바꿉니다.",
    use: "따뜻한 물에 2–3 스푼을 완전히 녹이고 15분간 머무르세요.",
    ingredients: "Sea Salt, Magnesium Sulfate, Hinoki Leaf Oil",
  },
  {
    slug: "day-mineral-mist",
    line: "rest",
    name: "데이 미네랄 미스트",
    english: "Day Mineral Mist",
    size: "80 ml",
    price: 29000,
    description: "물과 가까워지는 낮의 리듬. 가볍게 내려앉는 미네랄 미스트.",
    image: images.water,
    detail: "미세한 안개처럼 분사되어 건조한 순간에 가볍게 수분을 더합니다.",
    use: "얼굴에서 20cm 거리를 두고 필요할 때마다 분사합니다.",
    ingredients: "Mineral Water, Betaine, Panthenol",
  },
  {
    slug: "night-magnesium-balance",
    line: "rest",
    name: "나이트 마그네슘 밸런스",
    english: "Night Magnesium Balance",
    size: "100 ml",
    price: 39000,
    description: "저녁의 호흡을 고르게 만드는 부드러운 바디 오일.",
    image: images.night,
    detail: "무겁지 않은 오일감과 나무 향이 잠들기 전의 조용한 제스처가 됩니다.",
    use: "샤워 후 어깨와 팔다리에 천천히 마사지합니다.",
    ingredients: "Jojoba Seed Oil, Magnesium PCA, Cedarwood Oil",
  },
];

export const notes: Note[] = [
  { slug: "water-beneath-jeju", category: "Island", title: "섬 아래 흐르는 물의 시간", excerpt: "비가 현무암의 틈을 지나 다시 우리 앞에 이르기까지.", date: "2026.07.18", readTime: "6 min", image: images.coast },
  { slug: "reading-minerals", category: "Mineral", title: "미네랄을 읽는 다섯 가지 기준", excerpt: "숫자보다 먼저 살펴야 할 출처와 과정의 기록.", date: "2026.07.05", readTime: "7 min", image: images.mineral },
  { slug: "one-pinch", category: "Table", title: "식탁 위 한 꼬집의 기준", excerpt: "짠맛의 크기가 아니라 음식의 방향을 정하는 일.", date: "2026.06.10", readTime: "4 min", image: images.table },
  { slug: "after-water", category: "Skin", title: "물 이후 피부가 기억하는 것", excerpt: "씻어낸 뒤 3분, 피부의 감각을 지키는 순서.", date: "2026.06.22", readTime: "5 min", image: images.skin },
  { slug: "quiet-bathing", category: "Body", title: "목욕 이후의 조용한 일", excerpt: "더 많이 바르기보다 몸의 속도를 낮추는 시간.", date: "2026.05.29", readTime: "5 min", image: images.ritual },
];

export const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;
