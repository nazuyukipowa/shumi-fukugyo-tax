export const siteConfig = {
  name: '趣味副業の確定申告ガイド',
  shortName: '趣味副業タックス',
  description:
    '料理・音楽・DIYなど、趣味を副業にした会社員のための確定申告・節税・会計ソフト比較ガイド。経費の考え方、青色申告、開業届までやさしく解説します。',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shumi-fukugyo-tax.com',
  ogImage: '/og-image.png',
  locale: 'ja_JP',
  twitter: '@shumi_fukugyo',
  keywords: [
    '確定申告',
    '副業',
    '趣味',
    '節税',
    '会計ソフト',
    'freee',
    'マネーフォワード',
    '青色申告',
    '開業届',
    '料理',
    '音楽',
    'DIY',
  ],
} as const;

export type Category = {
  slug: string;
  title: string;
  description: string;
  href: string;
  emoji: string;
};

export const categories: Category[] = [
  {
    slug: 'kakutei-shinkoku',
    title: '確定申告の基本',
    description:
      '副業で20万円超えたらどうする？申告の流れ・必要書類・期限まで会社員向けに解説。',
    href: '/kakutei-shinkoku',
    emoji: '📝',
  },
  {
    slug: 'hobby-guide',
    title: '趣味別 経費・節税ガイド',
    description:
      '料理・音楽・DIYそれぞれの経費の考え方と落とし穴。趣味と事業の線引きを実例で。',
    href: '/hobby-guide',
    emoji: '🎨',
  },
  {
    slug: 'kaikei-soft',
    title: '会計ソフト比較',
    description:
      'freeeとマネーフォワード、副業会社員にはどっち？料金・機能・使いやすさを比較。',
    href: '/kaikei-soft',
    emoji: '💻',
  },
  {
    slug: 'kaigyo-aoiro',
    title: '開業届・青色申告',
    description:
      '開業届の出し方、青色申告承認申請の流れ、控除65万円のメリットをやさしく解説。',
    href: '/kaigyo-aoiro',
    emoji: '🏷️',
  },
];

export const hobbies = [
  {
    slug: 'cooking',
    title: '料理',
    description:
      '料理教室・レシピ販売・ケータリング。食材費・器具・撮影機材の経費化のコツ。',
    href: '/hobby-guide/cooking',
    emoji: '🍳',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'まな板の上に並べられた野菜と調理器具',
  },
  {
    slug: 'music',
    title: '音楽',
    description:
      'ライブ・配信・楽曲販売。楽器・機材・スタジオ代を経費にする際の注意点。',
    href: '/hobby-guide/music',
    emoji: '🎸',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'アコースティックギターと楽譜',
  },
  {
    slug: 'diy',
    title: 'DIY',
    description:
      'ハンドメイド販売・YouTube。材料費・工具・作業スペースの按分の考え方。',
    href: '/hobby-guide/diy',
    emoji: '🔨',
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=900&q=80&auto=format&fit=crop',
    imageAlt: '木工作業の道具と木材',
  },
] as const;

export const affiliateLinks = {
  freee: {
    name: 'freee会計',
    href:
      process.env.NEXT_PUBLIC_FREEE_AFFILIATE_URL ??
      'https://www.freee.co.jp/',
    tagline: '質問に答えるだけで申告書が完成',
    points: [
      '簿記の知識ゼロでもOK',
      'スマホアプリも充実',
      '銀行口座・クレカ自動連携',
    ],
    color: 'from-sky-500 to-cyan-600',
  },
  moneyforward: {
    name: 'マネーフォワード クラウド確定申告',
    href:
      process.env.NEXT_PUBLIC_MF_AFFILIATE_URL ??
      'https://biz.moneyforward.com/tax_return',
    tagline: '自動仕訳で会計業務を効率化',
    points: [
      '家計簿アプリ連携で取引取込が速い',
      '青色申告の65万円控除に対応',
      'サポート体制も安心',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
} as const;

// ---- 編集ポリシー（組織として）----------------------------------

export const editorialPolicies = [
  {
    title: '一次情報をベースに執筆',
    body:
      '記事の内容は、国税庁・中小企業庁などの公的資料、および各種法令を一次情報として執筆しています。私見や憶測ではなく、出典のあるルールを起点にしています。',
  },
  {
    title: '公開前のファクトチェック',
    body:
      '掲載前に、複数の編集メンバーが数値・条文・期限などの事実関係をクロスチェックしています。誤りに気付いた場合は速やかに訂正履歴を残します。',
  },
  {
    title: '法改正に追随',
    body:
      '所得税法・租税特別措置法は毎年小さな改正があります。各記事には最終更新日を表示し、改正後はできる限り早く反映します。',
  },
  {
    title: '個別判断は専門家へ',
    body:
      '当サイトは一般的な解説を目的としたメディアです。個別事案の最終判断は、税理士または所轄の税務署にご相談いただくことを推奨しています。',
  },
] as const;

// ---- アンケート結果（属性のみ・名前なし）----------------------------------

export type Voice = {
  text: string;
  attribute: string; // 例: 30代会社員（IT職）
  hobby: string;
};

export const voices: Voice[] = [
  {
    text:
      '初めての確定申告で何から手を付けるか分からなかったのですが、ステップごとに整理されていて迷わず終えられました。20万円ルールの誤解も解けました。',
    attribute: '30代会社員（IT職）',
    hobby: 'DIY家具の販売',
  },
  {
    text:
      '料理教室の食材費の按分は曖昧にしていたので不安でしたが、記録の付け方の例まで載っていて、自分のやり方を見直せました。',
    attribute: '40代会社員（メーカー）',
    hobby: '料理教室・レシピ販売',
  },
  {
    text:
      'freeeとマネーフォワードを比較する記事を読んで、自分の使い方ならマネーフォワードと納得して選べました。決め手まで書かれていて助かります。',
    attribute: '20代会社員（広告）',
    hobby: '音楽配信',
  },
];

// ---- 最新記事（ダミー） ----------------------------------

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date: string; // ISO
  readingTime: number; // min
  author: string;
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    slug: 'jigyo-vs-zatsu',
    title: '事業所得と雑所得、判断はどこで分かれる？',
    excerpt:
      '2022年の所得税法改正以降、副業の所得区分は厳しく見られるようになりました。最新の通達を踏まえた判断基準を整理します。',
    category: '確定申告',
    href: '/kakutei-shinkoku',
    date: '2026-05-01',
    readingTime: 8,
    author: '副業タックス編集部',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'ノートと電卓を並べたデスク',
  },
  {
    slug: 'diy-receipt',
    title: 'ホームセンターのレシート、これは経費？DIYの線引き',
    excerpt:
      '個人利用と事業利用が混じるDIYの仕入れ。按分のルールと、領収書のメモ術を実例で紹介します。',
    category: 'DIY',
    href: '/hobby-guide/diy',
    date: '2026-04-28',
    readingTime: 6,
    author: '副業タックス編集部',
    image:
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=900&q=80&auto=format&fit=crop',
    imageAlt: '木材と工具',
  },
  {
    slug: 'kaikei-soft-survey',
    title: 'freeeとマネーフォワード、副業会社員300人に聞きました',
    excerpt:
      '実際に使った人はどう感じているのか。編集部独自アンケートをもとに、満足度と乗り換え理由を分析します。',
    category: '会計ソフト',
    href: '/kaikei-soft',
    date: '2026-04-21',
    readingTime: 10,
    author: '副業タックス編集部',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'ノートパソコンとグラフ',
  },
  {
    slug: 'music-foreign-income',
    title: '音楽配信の海外入金、ドル建ての換算ルール',
    excerpt:
      'SpotifyやYouTubeからの収入は外貨建てで入金される場合があります。記帳時の為替レートの考え方を解説。',
    category: '音楽',
    href: '/hobby-guide/music',
    date: '2026-04-14',
    readingTime: 7,
    author: '副業タックス編集部',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'ヘッドホンと音響機材',
  },
  {
    slug: 'shogaku-genkyaku',
    title: '30万円未満の電動工具を一括経費化する特例',
    excerpt:
      '青色申告者だけが使える「少額減価償却資産の特例」。年間300万円までの枠を上手に使う方法とは。',
    category: '節税',
    href: '/kaigyo-aoiro',
    date: '2026-04-07',
    readingTime: 5,
    author: '副業タックス編集部',
    image:
      'https://images.unsplash.com/photo-1572297870735-1de4934b431c?w=900&q=80&auto=format&fit=crop',
    imageAlt: '電動工具',
  },
  {
    slug: 'kaigyo-pitfalls',
    title: '開業届を出すデメリット、5つの落とし穴',
    excerpt:
      'メリットばかり語られがちな開業届ですが、扶養や失業給付に関わる注意点もあります。判断のポイントを整理。',
    category: '開業',
    href: '/kaigyo-aoiro',
    date: '2026-03-31',
    readingTime: 6,
    author: '副業タックス編集部',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop',
    imageAlt: '書類と万年筆',
  },
];

// ---- 数字インフォグラフィック ----------------------------------

export type StatItem = {
  number: string;
  unit?: string;
  label: string;
  source: string;
};

export const statItems: StatItem[] = [
  {
    number: '65',
    unit: '万円',
    label: '青色申告で受けられる特別控除の最大額',
    source: '所得税法',
  },
  {
    number: '20',
    unit: '万円',
    label: '会社員の副業で確定申告が必要になる所得の基準',
    source: '国税庁',
  },
  {
    number: '3',
    unit: '/15',
    label: '確定申告の提出期限（毎年同じ）',
    source: '所得税法',
  },
  {
    number: '300',
    unit: '万円',
    label: '少額減価償却資産の特例で経費化できる年間上限',
    source: '租税特別措置法',
  },
];
