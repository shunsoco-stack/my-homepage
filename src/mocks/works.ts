export interface WorkGalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface WorkItem {
  id: number;
  demo: boolean;
  title: string;
  category: string;
  subcategory?: string;
  label?: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  appUrl?: string;
  githubUrl?: string;
  ctaLabel?: string;
  badges?: string[];
  note?: string;
  gallery?: WorkGalleryImage[];
}

export const workCategories = [
  "すべて",
  "AIエージェント",
  "ホームページ制作",
  "LP制作",
  "業務効率化システム",
  "アプリ開発",
] as const;

export const works: WorkItem[] = [
  {
    id: 10,
    demo: false,
    title: "AI調達・仕入先選定エージェント",
    category: "AIエージェント",
    subcategory: "調達・購買エージェント",
    year: "2026",
    description:
      "調達要件から、Evidence付きSupplier調査、不足情報の再調査、通常コードによる重み付き評価、交渉Draft、Human Reviewまでを一つのWorkspaceで支援するConcept Project。",
    tags: ["Next.js 16", "TypeScript", "Zod", "Vitest", "Vercel"],
    badges: [
      "Concept Project",
      "Verified snapshot",
      "External AI OFF",
      "Human approval required",
    ],
    note:
      "2026-08-26取得の公式公開情報を固定snapshotとして使用しています。Live検索・注文・決済・契約・発注メール送信は行いません。",
    image: "/works/ai-procurement-supplier-agent.webp",
    gallery: [
      {
        src: "/works/ai-procurement-supplier-agent/01-procurement-goal.png",
        label: "Procurement Goal",
        alt: "AI調達・仕入先選定エージェントの調達条件入力と評価Weight設定画面",
      },
      {
        src: "/works/ai-procurement-supplier-agent/02-agent-plan.png",
        label: "Agent Plan",
        alt: "AI調達・仕入先選定エージェントの8段階の調達計画とActivity Log画面",
      },
      {
        src: "/works/ai-procurement-supplier-agent/03-supplier-candidates.png",
        label: "Supplier Candidates",
        alt: "AI調達・仕入先選定エージェントのEvidence付きSupplier候補一覧画面",
      },
      {
        src: "/works/ai-procurement-supplier-agent/04-comparison-missing-data.png",
        label: "Comparison + Missing Data",
        alt: "AI調達・仕入先選定エージェントのSupplier比較表、不足情報Task、再調査結果画面",
      },
      {
        src: "/works/ai-procurement-supplier-agent/05-recommendation-negotiation.png",
        label: "Recommendation / Negotiation",
        alt: "AI調達・仕入先選定エージェントの重み付き評価、Risk、交渉案、Human Review画面",
      },
    ],
    url: "https://ai-procurement-supplier-agent.vercel.app",
    githubUrl: "https://github.com/shunsoco-stack/ai-procurement-supplier-agent",
    ctaLabel: "Live Demo",
  },
  {
    id: 7,
    demo: false,
    title: "BaoBao 公式アプリ",
    category: "アプリ開発",
    year: "運用中",
    description: "タイリラクゼーション店舗向けの会員アプリ。会員認証、QR機能、プッシュ通知、月額サブスクリプションを実装。",
    tags: ["React", "TypeScript", "Firebase", "Capacitor", "Stripe"],
    image: "/works/baobao.webp",
    url: "https://apps.apple.com/app/id6762620176",
  },
  {
    id: 8,
    demo: false,
    title: "House Darts Tournament",
    category: "アプリ開発",
    year: "運用中",
    description: "ダーツ大会の作成・参加・運営を支援するWeb／モバイルアプリ。大会管理、トーナメント表、QRエントリー、通知機能を実装。",
    tags: ["React", "TypeScript", "Firebase", "Capacitor"],
    image: "/works/house-darts-tournament.webp",
    url: "https://house-darts-tournament.web.app",
  },
  {
    id: 1,
    demo: true,
    title: "飲食店チェーン 公式サイトリニューアル",
    category: "ホームページ制作",
    year: "2024",
    description: "全国15店舗を展開する飲食チェーンの公式サイトをフルリニューアル。予約システムとの連携も実装。",
    tags: ["React", "Next.js", "SEO"],
    image: "/works/restaurant.webp",
    url: "/works/restaurant",
  },
  {
    id: 2,
    demo: true,
    title: "不動産会社 物件管理システム",
    category: "業務効率化システム",
    year: "2024",
    description: "物件情報の登録・管理・公開を一元化するシステムを想定した設計。",
    tags: ["Python", "PostgreSQL", "API"],
    image: "/works/realestate.webp",
    url: "/works/realestate",
  },
  {
    id: 3,
    demo: true,
    title: "美容サロン 予約LP",
    category: "LP制作",
    year: "2024",
    description: "コンバージョン率を重視したランディングページ。A/Bテストを想定した設計。",
    tags: ["HTML/CSS", "JavaScript", "GA4"],
    image: "/works/salon.webp",
    url: "/works/salon",
  },
  {
    id: 4,
    demo: true,
    title: "EC事業者 在庫管理ツール",
    category: "業務効率化システム",
    year: "2023",
    description: "複数ECモールの在庫を一括管理するツール。手動作業をほぼゼロに自動化。",
    tags: ["Node.js", "React", "API連携"],
    image: "/works/ec.webp",
    url: "/works/ec",
  },
  {
    id: 5,
    demo: true,
    title: "士業事務所 コーポレートサイト",
    category: "ホームページ制作",
    year: "2023",
    description: "税理士事務所の信頼感を高めるコーポレートサイトを想定した設計。",
    tags: ["React", "TailwindCSS", "SEO"],
    image: "/works/lawfirm.webp",
    url: "/works/lawfirm",
  },
  {
    id: 6,
    demo: true,
    title: "スタートアップ サービス紹介LP",
    category: "LP制作",
    year: "2023",
    description: "SaaSプロダクトのサービス紹介LP。ユーザー登録を想定した導線設計。",
    tags: ["React", "Framer Motion", "CRO"],
    image: "/works/startup.webp",
    url: "/works/startup",
  },
];

export type Work = WorkItem;
