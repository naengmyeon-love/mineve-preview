export type BrandLineId = "salt" | "renew" | "rest";
export type EvidenceStatus = "draft" | "verified" | "hidden";

export type MineralEvidence = {
  symbol: string;
  name: string;
  value?: string;
  unit?: string;
  status: EvidenceStatus;
  source?: string;
  testDate?: string;
  testedSubject?: "원료" | "완제품";
};

export type ValueItem = {
  index: string;
  title: string;
  label: string;
  description: string;
  href?: string;
};

export type Product = {
  slug: string;
  line: BrandLineId;
  name: string;
  subtitle: string;
  size: string;
  price: number;
  descriptor: string;
  status?: "available" | "coming-soon";
  gallery: Array<{ label: string; ratio: "4:5" | "16:9" | "3:4" }>;
  description: string[];
  ingredients: string[];
  howToUse: string[];
  origin: string;
  quality: string;
};

export type Note = {
  slug: string;
  category: NoteCategory;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  heroLabel: string;
  body: Array<{ heading?: string; paragraphs: string[] }>;
  relatedProduct?: string;
};

export type NoteCategory =
  | "ISLAND"
  | "MINERAL"
  | "BODY"
  | "RITUAL"
  | "TABLE"
  | "PEOPLE";

export const brand = {
  name: "MINEVE",
  signature: "Minerals through Jeju",
  definition:
    "제주 미네랄의 원천을 바탕으로 식탁, 피부, 몸의 균형을 제안하는 라이프케어 브랜드",
};

export const navigation = [
  { label: "SALT", href: "/salt" },
  { label: "RENEW", href: "/renew" },
  { label: "REST", href: "/rest" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "NOTES", href: "/notes" },
  { label: "SHOP", href: "/shop" },
];

export const homeContent = {
  hero: {
    eyebrow: "Minerals through Jeju",
    title: "제주의 미네랄을,\n매일의 균형으로.",
    description: "식탁과 피부, 몸의 리듬을 잇는 세 가지 라이프케어 컬렉션",
    mediaLabel: "제주의 물과 검은 화산암이 만나는 해안 풍경",
    cta: { label: "MINEVE의 시작을 읽어보기", href: "/our-story" },
  },
  introduction: {
    eyebrow: "A life care brand born through Jeju",
    title: "균형은 멀리 있는 이상이 아니라, 매일 선택하는 작은 감각입니다.",
    body: [
      "제주 미네랄의 원천을 바탕으로 식탁, 피부, 몸의 균형을 제안합니다.",
      "자연의 서사와 확인 가능한 정보를 함께 전하며, 과장보다 오래 지속되는 신뢰를 선택합니다.",
    ],
    cta: { label: "브랜드 철학 자세히 보기", href: "/our-story" },
  },
  collections: {
    eyebrow: "Three lines, one origin",
    title: "미네랄이 일상에 머무는 세 가지 방식",
    description: "하나의 원천에서 시작해 서로 다른 쓰임으로 이어지는 MINEVE의 컬렉션입니다.",
  },
  origin: {
    eyebrow: "Born through Jeju",
    title: "섬 아래, 보이지 않는 곳에서 시작된 긴 물길",
    description:
      "제주의 비는 다공질 화산암층을 지나 지하로 스며듭니다. MINEVE는 그 원천이 제품과 일상으로 이어지는 모든 단계를 살핍니다.",
    mediaLabel: "제주 화산암층을 통과하는 물의 여정",
    cta: { label: "제주 원천에 대한 이야기", href: "/our-story#born-through-jeju" },
  },
  standards: {
    eyebrow: "Our standards",
    title: "확인한 만큼 말하고, 필요한 맥락까지 함께 전합니다.",
    description:
      "산지와 시험 정보를 구분해 기록하고, 확인된 정보만 소비자 화면에 공개합니다.",
  },
  notes: {
    eyebrow: "MINEVE Notes",
    title: "제품보다 오래 남는 이야기",
    description:
      "섬, 미네랄, 몸과 식탁을 바라보는 비상업적 에디토리얼 공간입니다.",
  },
};

export const homeValues: ValueItem[] = [
  {
    index: "01",
    title: "Jeju Origin",
    label: "제주에서 시작된 원천",
    description: "섬의 물과 지층, 원료가 지나온 배경을 살핍니다.",
    href: "/our-story#born-through-jeju",
  },
  {
    index: "02",
    title: "Mineral Balance",
    label: "균형을 읽는 태도",
    description: "수치만 분리하지 않고 출처와 시험 맥락을 함께 봅니다.",
    href: "/our-story#mineral-balance",
  },
  {
    index: "03",
    title: "Daily Ritual",
    label: "매일 이어지는 쓰임",
    description: "식탁, 피부, 몸의 작은 습관으로 원천을 연결합니다.",
    href: "/our-story#origin-to-ritual",
  },
  {
    index: "04",
    title: "Clear Standards",
    label: "확인된 정보만 공개",
    description: "과장된 효능 대신 근거와 표현의 범위를 분명히 합니다.",
    href: "/our-story#standards",
  },
];

export const footerContent = {
  company: {
    name: "MINEVE",
    signature: "Minerals through Jeju",
    location: "Jeju, Republic of Korea",
  },
  customerCare: [
    { label: "고객 문의", href: "/contact" },
    { label: "배송 안내", href: "/shipping" },
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
  ],
  social: ["Instagram", "YouTube"],
};

export const lines = {
  salt: {
    id: "salt" as const,
    eyebrow: "MINEVE SALT",
    name: "Jeju Mineral Salt",
    title: "제주의 깊은 물길이 완성한 미네랄 솔트",
    intro:
      "화산섬 아래 오랜 시간 스며든 물의 여정에서 시작합니다. 매일의 식탁에서 재료 본연의 감각을 깨우는 네 가지 소금을 제안합니다.",
    heroLabel: "Jeju mineral salt landscape · 권장 비율 21:9",
    accent: "Chalk White / Mineral Grey",
    philosophyTitle: "Origin becomes taste",
    philosophy:
      "MINEVE SALT는 산지와 원료의 배경을 투명하게 전하고, 과장된 효능 대신 입자와 풍미, 쓰임의 차이를 설명합니다.",
    guideTitle: "A salt for each table",
    guide:
      "담백한 마무리부터 해조의 감칠맛, 제주 감귤과 표고의 향까지. 요리의 마지막 순간에 필요한 감각을 선택하세요.",
  },
  renew: {
    id: "renew" as const,
    eyebrow: "MINEVE RENEW",
    name: "Mineral Skincare",
    title: "피부를 대하는 조용하고 충실한 시간",
    intro:
      "미네랄 솔트와 피부 친화적인 보습 성분을 중심으로, 목욕 이후의 바디 리추얼을 차분하게 설계합니다.",
    heroLabel: "Mineral skincare texture · 권장 비율 16:9",
    accent: "Mineral Sage / Skin Beige",
    philosophyTitle: "Respect the skin’s rhythm",
    philosophy:
      "씻고, 다듬고, 보습하는 기본에 집중합니다. 원료의 역할과 사용 순서를 이해하기 쉬운 언어로 안내합니다.",
    guideTitle: "Three steps, one considered ritual",
    guide:
      "폴리시로 시작해 바디 트리트먼트로 수분을 더하고, 목과 데콜테에는 필요한 만큼 밤을 덧바릅니다.",
  },
  rest: {
    id: "rest" as const,
    eyebrow: "MINEVE REST",
    name: "Magnesium Wellness",
    title: "하루의 리듬에 더하는 미네랄 웰니스",
    intro:
      "분주한 낮과 느린 저녁, 서로 다른 시간의 루틴을 위한 두 가지 미네랄 포뮬러를 제안합니다.",
    heroLabel: "Daily mineral wellness ritual · 권장 비율 16:9",
    accent: "Pale Water Blue / Deep Blue Grey",
    philosophyTitle: "A measured daily practice",
    philosophy:
      "단정한 섭취 방법과 원료 정보를 중심으로 안내합니다. 수치와 기능 관련 정보는 확인된 범위만 공개합니다.",
    guideTitle: "Hydrate by day, pause by night",
    guide:
      "HYDRATE는 낮의 물 마시는 습관과 함께, NIGHT는 저녁의 느린 루틴과 함께하도록 구성했습니다.",
  },
};

export const products: Product[] = [
  {
    slug: "mineve-salt-original",
    line: "salt",
    name: "MINEVE SALT ORIGINAL",
    subtitle: "Jeju Lava Seawater Salt",
    size: "90g",
    price: 7900,
    descriptor: "맑고 균형 잡힌 기본 소금",
    gallery: [
      { label: "SALT ORIGINAL 정면 패키지", ratio: "4:5" },
      { label: "고운 소금 결정 매크로", ratio: "4:5" },
      { label: "완성된 요리 위 사용 장면", ratio: "16:9" },
    ],
    description: [
      "제주 용암해수 유래 원료를 바탕으로 만든 MINEVE의 기본 소금입니다.",
      "섬세한 입자로 일상의 조리와 마지막 간에 두루 사용하기 좋도록 설계했습니다.",
    ],
    ingredients: ["소금 100% — 상세 원산지 표기는 최종 패키지 기준 검토 필요"],
    howToUse: ["국, 무침, 구이 등 일상 조리에 사용하세요.", "습기가 적은 곳에 밀봉해 보관하세요."],
    origin: "Jeju, Korea — 원료 및 제조지 최종 확인 필요",
    quality: "원료 시험 정보는 제품 출시 전 검증 자료로 교체됩니다.",
  },
  {
    slug: "mineve-salt-deep",
    line: "salt",
    name: "MINEVE SALT DEEP",
    subtitle: "Jeju Premium Mineral Salt",
    size: "90g",
    price: 9500,
    descriptor: "깊고 선명한 마무리",
    gallery: [
      { label: "SALT DEEP 정면 패키지", ratio: "4:5" },
      { label: "미네랄 솔트 결정", ratio: "4:5" },
    ],
    description: [
      "재료의 여운을 또렷하게 정리하는 프리미엄 미네랄 솔트입니다.",
      "구이와 채소 요리의 마지막 간에 소량씩 더해보세요.",
    ],
    ingredients: ["소금 100% — 최종 원재료 정보는 제품 표시사항에서 안내됩니다."],
    howToUse: ["조리 마지막에 소량씩 더해 간을 맞추세요."],
    origin: "Jeju, Korea — 최종 증빙 자료 반영 예정",
    quality: "미네랄 구성 수치는 시험 완료 후 공개됩니다.",
  },
  {
    slug: "mineve-salt-coast",
    line: "salt",
    name: "MINEVE SALT COAST",
    subtitle: "Jeju Tot Seaweed Salt",
    size: "85g",
    price: 12900,
    descriptor: "톳의 해조 풍미를 담은 소금",
    gallery: [
      { label: "SALT COAST 정면 패키지", ratio: "4:5" },
      { label: "제주 톳과 소금 텍스처", ratio: "4:5" },
    ],
    description: [
      "제주 톳의 해조 풍미를 더한 블렌드 솔트입니다.",
      "밥, 달걀, 두부처럼 담백한 재료와 자연스럽게 어울립니다.",
    ],
    ingredients: ["소금, 제주 톳 — 정확한 배합비와 원재료명 검토 필요"],
    howToUse: ["완성된 요리에 기호에 따라 뿌려 사용하세요."],
    origin: "Jeju, Korea — 원재료별 원산지 확인 필요",
    quality: "알레르기 및 교차오염 문구는 생산 시설 확인 후 반영됩니다.",
  },
  {
    slug: "mineve-salt-blend-01",
    line: "salt",
    name: "MINEVE SALT BLEND 01",
    subtitle: "Jeju Citrus & Shiitake Salt",
    size: "80–85g",
    price: 13900,
    descriptor: "감귤과 표고의 향긋한 감칠맛",
    gallery: [
      { label: "SALT BLEND 01 정면 패키지", ratio: "4:5" },
      { label: "감귤과 표고 블렌드 텍스처", ratio: "4:5" },
    ],
    description: [
      "제주 감귤의 산뜻한 향과 표고의 감칠맛을 조합한 첫 번째 시즌 블렌드입니다.",
      "샐러드, 버섯, 구운 채소의 마무리에 어울립니다.",
    ],
    ingredients: ["소금, 제주 감귤, 표고버섯 — 중량 및 배합비 검토 필요"],
    howToUse: ["향을 살리기 위해 조리 마지막에 사용하세요."],
    origin: "Jeju, Korea — 원재료별 원산지 확인 필요",
    quality: "표시 중량은 80–85g 중 최종 제품 사양 확정이 필요합니다.",
  },
  {
    slug: "jeju-mineral-salt-body-polish",
    line: "renew",
    name: "Jeju Mineral Salt Body Polish",
    subtitle: "Mineral exfoliating body care",
    size: "280g",
    price: 42000,
    descriptor: "씻어내는 바디 폴리시",
    gallery: [
      { label: "Body Polish 정면 패키지", ratio: "4:5" },
      { label: "솔트 폴리시 제형", ratio: "4:5" },
    ],
    description: [
      "제주 미네랄 솔트를 중심으로 설계한 씻어내는 바디 폴리시입니다.",
      "주 1–2회, 물기 있는 피부에 부드럽게 사용하는 리추얼을 제안합니다.",
    ],
    ingredients: ["전성분 및 각 성분의 배합 목적은 처방 확정 후 공개"],
    howToUse: ["물기 있는 피부에 부드럽게 마사지한 뒤 충분히 씻어내세요.", "자극이 느껴지면 사용을 중단하세요."],
    origin: "제주 유래 원료 적용 범위 및 제조지 검증 필요",
    quality: "피부 효능 표현은 인체적용시험 및 표시광고 검토 전 사용하지 않습니다.",
  },
  {
    slug: "mineral-barrier-body-treatment",
    line: "renew",
    name: "Mineral Barrier Body Treatment",
    subtitle: "Daily moisture treatment",
    size: "200mL",
    price: 38000,
    descriptor: "매일 사용하는 바디 보습 단계",
    gallery: [
      { label: "Body Treatment 정면 패키지", ratio: "4:5" },
      { label: "부드러운 크림 제형", ratio: "4:5" },
    ],
    description: [
      "목욕 후 피부에 부드럽게 펴 바르는 데일리 바디 트리트먼트입니다.",
      "끈적임과 흡수감은 최종 처방 평가 후 상세 안내할 예정입니다.",
    ],
    ingredients: ["전성분은 제품 출시 시 패키지와 함께 안내됩니다."],
    howToUse: ["샤워 후 물기를 닦고 몸 전체에 적당량을 펴 바르세요."],
    origin: "원료 및 제조 정보 확정 대기",
    quality: "Barrier 관련 표현은 제품 근거 자료와 함께 규제 검토가 필요합니다.",
  },
  {
    slug: "neck-decollete-recovery-balm",
    line: "renew",
    name: "Neck & Décolleté Recovery Balm",
    subtitle: "Focused moisture balm",
    size: "50mL",
    price: 46000,
    descriptor: "목과 데콜테를 위한 집중 보습 밤",
    gallery: [
      { label: "Recovery Balm 정면 패키지", ratio: "4:5" },
      { label: "밤 텍스처와 사용 장면", ratio: "4:5" },
    ],
    description: [
      "목과 데콜테에 필요한 만큼 덧바르는 보습 밤입니다.",
      "제품명의 Recovery 표현은 회복 효능이 아닌 저녁 관리 단계의 의미로 사용하며 최종 검토가 필요합니다.",
    ],
    ingredients: ["전성분은 제품 출시 시 패키지와 함께 안내됩니다."],
    howToUse: ["바디 트리트먼트 다음 단계에서 목과 데콜테에 부드럽게 펴 바르세요."],
    origin: "원료 및 제조 정보 확정 대기",
    quality: "제품명과 효능 관련 표현은 출시 시장별 규제 검토가 필요합니다.",
  },
  {
    slug: "hydrate-jeju-electrolyte",
    line: "rest",
    name: "HYDRATE Jeju Electrolyte",
    subtitle: "Daily mineral drink mix",
    size: "4g × 14포",
    price: 24000,
    descriptor: "낮의 물 마시는 습관과 함께",
    gallery: [
      { label: "HYDRATE 정면 패키지", ratio: "4:5" },
      { label: "물에 타는 파우더 사용 장면", ratio: "4:5" },
    ],
    description: [
      "일상의 물 마시는 루틴과 함께하도록 설계 중인 분말 제품입니다.",
      "전해질 및 미네랄 수치는 완제품 시험 완료 후 공개합니다.",
    ],
    ingredients: ["원재료명과 영양정보는 제품 출시 시 표시사항에서 안내됩니다."],
    howToUse: ["섭취량과 희석 비율은 최종 제품 기준으로 교체 예정입니다."],
    origin: "제주 유래 원료 범위 확인 필요",
    quality: "식품 유형, 영양성분, 기능성 표현에 대한 사전 검토가 필요합니다.",
  },
  {
    slug: "night-magnesium-balance",
    line: "rest",
    name: "NIGHT Magnesium Balance",
    subtitle: "Evening mineral drink mix",
    size: "2.5g × 30포",
    price: 39000,
    descriptor: "저녁의 느린 리듬과 함께",
    gallery: [
      { label: "NIGHT 정면 패키지", ratio: "4:5" },
      { label: "저녁 음용 루틴", ratio: "4:5" },
    ],
    description: [
      "저녁의 차분한 루틴과 함께하도록 기획한 마그네슘 함유 분말 제품입니다.",
      "수면, 스트레스와 관련된 효능을 의미하지 않으며 함량과 섭취 기준은 검증 후 공개합니다.",
    ],
    ingredients: ["전체 원재료명과 영양정보는 제품 출시 시 표시사항에서 안내됩니다."],
    howToUse: ["섭취량과 섭취 시점은 최종 표시사항 기준으로 교체 예정입니다."],
    origin: "원료별 원산지와 제조 정보 확인 필요",
    quality: "Balance 명칭 및 섭취 관련 문구는 출시 시장별 규제 검토가 필요합니다.",
  },
];

export const upcomingProducts = [
  { line: "rest" as const, name: "REST Mineral Bath", status: "Coming Soon" },
  { line: "rest" as const, name: "REST Body Mist", status: "Coming Soon" },
];

export const mineralEvidence: MineralEvidence[] = [
  {
    symbol: "Na",
    name: "Sodium",
    status: "draft",
    testedSubject: "완제품",
  },
  {
    symbol: "Mg",
    name: "Magnesium",
    status: "draft",
  },
  {
    symbol: "Si",
    name: "Silicon",
    status: "hidden",
    testedSubject: "원료",
  },
  {
    symbol: "K",
    name: "Potassium",
    status: "draft",
    testedSubject: "완제품",
  },
];

export const publishedMineralEvidence = mineralEvidence.filter(
  (item): item is MineralEvidence & { status: "verified"; value: string } =>
    item.status === "verified" && typeof item.value === "string",
);

export const rituals = [
  {
    number: "01",
    title: "At the table",
    description: "완성된 요리에 한 꼬집을 더하고 재료의 결을 천천히 살핍니다.",
    href: "/salt",
    label: "식탁의 미네랄",
  },
  {
    number: "02",
    title: "After water",
    description: "목욕 뒤 피부의 감각에 집중하며 필요한 단계만 차분히 이어갑니다.",
    href: "/renew",
    label: "피부의 미네랄",
  },
  {
    number: "03",
    title: "Through the day",
    description: "낮과 저녁의 서로 다른 리듬에 맞춰 작은 웰니스 습관을 만듭니다.",
    href: "/rest",
    label: "몸의 미네랄",
  },
];

export const notes: Note[] = [
  {
    slug: "water-beneath-the-island",
    category: "ISLAND",
    title: "섬 아래 흐르는 물의 시간",
    excerpt: "비가 땅에 닿은 뒤, 제주의 다공질 현무암층을 지나 다시 우리 앞에 이르기까지.",
    date: "2026.07.18",
    readTime: "6 min read",
    author: "MINEVE Editorial",
    heroLabel: "제주 지층과 물의 흐름 · Article hero 16:9",
    body: [
      {
        paragraphs: [
          "제주의 물을 이해하려면 눈앞의 바다보다 먼저 발아래의 땅을 바라봐야 한다. 빗물은 표면에 오래 머물지 않고 다공질의 화산암층 사이로 스며든다.",
          "이 움직임은 한 장의 풍경 사진으로는 설명하기 어렵다. 물은 보이지 않는 곳에서 천천히 이동하고, 지층과 만나는 시간 속에서 섬 특유의 물성을 만든다.",
        ],
      },
      {
        heading: "보이지 않는 통로",
        paragraphs: [
          "현무암의 크고 작은 틈은 물이 지나가는 자연의 통로가 된다. 같은 제주 안에서도 지층의 구조와 취수 환경에 따라 물의 성격은 달라질 수 있다.",
          "그래서 산지를 말할 때는 낭만적인 이미지보다 취수 지점, 원료의 구분, 시험 방법과 같은 구체적인 정보가 함께 필요하다.",
        ],
      },
      {
        heading: "원천에서 일상으로",
        paragraphs: [
          "MINEVE가 관심을 두는 것은 원천 그 자체만이 아니다. 그 원천이 정제와 제조의 과정을 지나 식탁과 피부, 몸의 습관으로 이어지는 전체의 흐름이다.",
          "좋은 원료에 대한 이야기는 투명한 기록과 함께할 때 비로소 일상의 선택에 도움이 된다.",
        ],
      },
    ],
    relatedProduct: "mineve-salt-original",
  },
  {
    slug: "reading-a-mineral-label",
    category: "MINERAL",
    title: "미네랄 데이터를 읽는 법",
    excerpt: "숫자보다 먼저 확인해야 하는 출처, 시험일, 그리고 원료와 완제품의 차이.",
    date: "2026.07.05",
    readTime: "7 min read",
    author: "MINEVE Research Notes",
    heroLabel: "시험 기록과 미네랄 표기 · Article hero 16:9",
    body: [
      {
        paragraphs: [
          "미네랄 표에서 가장 크게 보이는 것은 숫자지만, 그 숫자를 이해하기 위한 정보는 대개 더 작은 글씨에 숨어 있다.",
          "어떤 시료를 언제, 어떤 방식으로 시험했는지를 모르면 서로 다른 두 수치를 단순히 비교하기 어렵다.",
        ],
      },
      {
        heading: "원료와 완제품을 구분하기",
        paragraphs: [
          "원료 시험 결과가 완제품의 실제 함량과 같다고 볼 수는 없다. 배합과 제조 공정을 거치며 구성은 달라질 수 있기 때문이다.",
          "MINEVE의 데이터 영역은 시험 대상과 검증 상태를 함께 표시하도록 설계한다.",
        ],
      },
      {
        heading: "확정되지 않은 숫자를 다루는 태도",
        paragraphs: [
          "시험 전의 예상값은 실제 정보처럼 노출하지 않는다. 레이아웃 확인을 위한 값이라면 샘플임을 분명히 하고, 검증 뒤 전체 기록을 교체한다.",
        ],
      },
    ],
  },
  {
    slug: "the-quiet-work-of-bathing",
    category: "BODY",
    title: "목욕 이후의 조용한 일",
    excerpt: "더 많은 단계보다 피부의 감각을 듣는 순서에 관하여.",
    date: "2026.06.22",
    readTime: "5 min read",
    author: "MINEVE Editorial",
    heroLabel: "목욕 뒤 천천히 이어지는 바디 케어 · Article hero 16:9",
    body: [
      {
        paragraphs: [
          "목욕 이후의 피부 관리는 무언가를 많이 바르는 일보다 지금 피부가 어떤 감각인지 알아차리는 데서 시작한다.",
          "온도와 마찰을 낮추고, 물기가 완전히 사라지기 전에 필요한 보습 단계를 이어가는 것만으로도 루틴은 충분히 단정해진다.",
        ],
      },
      {
        heading: "속도를 늦추는 순서",
        paragraphs: [
          "팔과 다리처럼 넓은 부위부터 부드럽게 펴 바르고, 목과 데콜테는 남은 양을 얇게 덧바른다. 매일 같은 양을 고집할 필요는 없다.",
        ],
      },
    ],
    relatedProduct: "mineral-barrier-body-treatment",
  },
  {
    slug: "one-pinch-at-the-table",
    category: "TABLE",
    title: "식탁 위 한 꼬집의 기준",
    excerpt: "소금의 양보다 먼저 맛의 방향을 정하는 작은 습관.",
    date: "2026.06.10",
    readTime: "4 min read",
    author: "MINEVE Table",
    heroLabel: "채소 요리와 소금 한 꼬집 · Article hero 16:9",
    body: [
      {
        paragraphs: [
          "소금은 양만으로 설명하기 어려운 재료다. 입자의 크기와 녹는 속도, 함께 섞인 재료에 따라 같은 한 꼬집도 다른 인상을 남긴다.",
          "조리 중의 간과 완성 뒤의 간을 구분하면 필요한 양을 더 세심하게 살필 수 있다.",
        ],
      },
      {
        heading: "마지막에 더하는 향",
        paragraphs: [
          "감귤이나 해조가 더해진 블렌드는 열을 오래 가하기보다 먹기 직전에 소량 사용하는 편이 향의 성격을 살피기 좋다.",
        ],
      },
    ],
    relatedProduct: "mineve-salt-blend-01",
  },
  {
    slug: "a-ritual-without-rush",
    category: "RITUAL",
    title: "서두르지 않는 저녁의 구조",
    excerpt: "하루를 바꾸겠다는 약속 대신, 반복 가능한 작은 순서를 만드는 법.",
    date: "2026.05.29",
    readTime: "5 min read",
    author: "MINEVE Editorial",
    heroLabel: "조용한 저녁의 물과 빛 · Article hero 16:9",
    body: [
      {
        paragraphs: [
          "좋은 리추얼은 거창한 변화보다 반복 가능한 순서에 가깝다. 조명을 낮추고, 물을 준비하고, 화면에서 잠시 멀어지는 짧은 흐름이면 충분하다.",
          "특정 제품이 이 시간을 대신 만들 수는 없다. 제품은 이미 존재하는 습관 옆에 놓이는 하나의 선택이다.",
        ],
      },
    ],
    relatedProduct: "night-magnesium-balance",
  },
  {
    slug: "hands-that-record-origin",
    category: "PEOPLE",
    title: "원천을 기록하는 사람들",
    excerpt: "산지의 신뢰를 만드는 것은 풍경이 아니라 꾸준히 남겨진 기록이다.",
    date: "2026.05.12",
    readTime: "8 min read",
    author: "MINEVE People",
    heroLabel: "원료 기록을 살피는 파트너 · Article hero 16:9",
    body: [
      {
        paragraphs: [
          "산지에 대한 신뢰는 한 사람의 설명만으로 완성되지 않는다. 취수와 생산, 시험, 보관의 여러 단계에서 각자의 기록이 이어져야 한다.",
          "MINEVE는 앞으로 함께하는 생산자와 연구 파트너의 역할을 구체적으로 소개하고, 확인 가능한 범위와 아직 확인 중인 범위를 나누어 전하려 한다.",
        ],
      },
    ],
  },
];

export const storySections = [
  {
    number: "01",
    id: "manifesto",
    kicker: "Brand Manifesto",
    title: "우리는 균형을 하나의 답이 아닌, 매일 조율하는 감각이라 생각합니다.",
    body: [
      "섬의 깊은 물길에서 시작한 미네랄이 식탁과 피부, 몸의 리듬으로 이어지도록.",
      "MINEVE는 자연의 서사와 확인 가능한 정보를 함께 전합니다.",
    ],
    media: "미네랄 원천의 추상적 풍경 · 16:9",
  },
  {
    number: "02",
    id: "about",
    kicker: "About MINEVE",
    title: "Minerals through Jeju",
    body: [
      "MINEVE는 Mineral과 흐름의 감각을 담은 이름입니다.",
      "제주라는 원천을 관광의 이미지가 아니라 물질과 시간, 기록의 관점으로 바라봅니다.",
    ],
    media: "브랜드의 세 가지 영역 · 3:4",
  },
  {
    number: "03",
    id: "born-through-jeju",
    kicker: "Born through Jeju",
    title: "섬 아래에서 시작되는 보이지 않는 여정",
    body: [
      "빗물은 화산암층을 통과하며 지하의 긴 흐름에 합류합니다.",
      "우리는 그 과정을 낭만화하기보다 원료가 어디서 오고 어떻게 다뤄지는지 투명하게 기록합니다.",
    ],
    media: "제주 화산암층과 물 · 16:9",
  },
  {
    number: "04",
    id: "natural-passage",
    kicker: "A Natural Passage",
    title: "자연에서 제품으로, 단계를 건너뛰지 않는 태도",
    body: [
      "산지, 정제, 배합, 제조, 시험의 단계마다 확인할 정보가 있습니다.",
      "MINEVE는 완성된 제품만큼 그 사이의 통로를 중요하게 다룹니다.",
    ],
    media: "원료에서 제품까지의 공정 기록 · 16:9",
  },
  {
    number: "05",
    id: "mineral-balance",
    kicker: "Mineral Balance",
    title: "숫자와 감각 사이의 균형",
    body: [
      "미네랄 데이터는 출처와 시험 대상을 함께 읽어야 합니다.",
      "감성적인 경험과 과학적 근거가 서로를 과장하지 않도록 구분해 설명합니다.",
    ],
    media: "시험 기록과 물성 관찰 · 3:4",
  },
  {
    number: "06",
    id: "origin-to-ritual",
    kicker: "From Origin to Ritual",
    title: "원천의 가치는 일상의 쓰임에서 완성됩니다.",
    body: [
      "한 꼬집의 소금, 목욕 뒤의 보습, 낮과 저녁의 물 한 잔.",
      "작지만 반복 가능한 장면 안에서 MINEVE의 세 라인이 만납니다.",
    ],
    media: "식탁, 피부, 몸의 일상 리추얼 · 16:9",
  },
  {
    number: "07",
    id: "standards",
    kicker: "Our Standards",
    title: "확인한 것과 확인 중인 것을 분명히 나눕니다.",
    body: [
      "근거 없는 효능을 약속하지 않습니다. 산지와 시험 정보를 가능한 범위에서 공개합니다.",
      "지속 가능한 포장과 책임 있는 생산 기준은 파트너 확정 후 측정 가능한 목표로 제시합니다.",
    ],
    media: "품질 기준과 투명한 라벨 · 16:9",
  },
  {
    number: "08",
    id: "people-partners",
    kicker: "People & Partners",
    title: "좋은 원천 뒤에는 오래 기록하는 사람들이 있습니다.",
    body: [
      "생산자, 연구자, 제조 파트너의 전문성과 역할을 구체적으로 소개할 예정입니다.",
      "현재 인물과 파트너 정보는 계약 및 인터뷰 확정 후 교체합니다.",
    ],
    media: "제주 생산자와 연구 파트너 · 3:4",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getNote = (slug: string) =>
  notes.find((note) => note.slug === slug);
