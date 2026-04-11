const skills = [
  { label: "フロントエンド", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
  { label: "バックエンド", items: ["Python", "Node.js", "PostgreSQL", "REST API"] },
  { label: "デザイン", items: ["Figma", "UI/UX設計", "レスポンシブ", "SEO"] },
  { label: "その他", items: ["Git", "AWS", "Vercel", "自動化ツール"] },
];

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold mb-3">
            <i className="ri-user-line"></i>
            <span>About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">プロフィール</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://static.readdy.ai/image/8331bc91c62b129cdf3d84eb8852a520/a398b8a03e3a757338f0a504dc5a27c4.png"
                  alt="プロフィール写真"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900">きんじょー</h3>
                <p className="text-gray-500 text-sm mt-0.5">フリーランス Web エンジニア / デザイナー</p>
                <div className="flex items-center gap-3 mt-2">
                  <a href="https://github.com" target="_blank" rel="nofollow noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
                    <i className="ri-github-line text-lg"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
                    <i className="ri-twitter-x-line text-lg"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                神奈川を拠点に活動するフリーランスのWebエンジニア・デザイナーです。
                大手SIerでのシステム開発経験を経て、2023年に独立。
                以来、中小企業・スタートアップを中心に50件以上のプロジェクトを担当してきました。
              </p>
              <p>
                「技術は手段、目的はクライアントの成功」をモットーに、
                単なる制作にとどまらず、ビジネス課題の本質から向き合い、
                成果につながるソリューションを提供することを大切にしています。
              </p>
              <p>
                初回相談は無料です。まずはお気軽にご連絡ください。
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              {[
                { year: "2023", event: "フリーランスとして独立" },
                { year: "2023", event: "累計30件のプロジェクト完了" },
                { year: "2023", event: "業務効率化システム開発に注力開始" },
                { year: "2024", event: "累計50件突破・満足度98%達成" },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-amber-500 w-10 flex-shrink-0 pt-0.5">{item.year}</span>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills + Philosophy */}
          <div className="space-y-6">
            {/* Philosophy card */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <p className="text-xs text-white/40 font-semibold mb-4 tracking-widest">PHILOSOPHY</p>
              <blockquote className="text-xl font-black leading-snug mb-6">
                「技術は手段、<br />目的はクライアントの成功」
              </blockquote>
              <p className="text-white/60 text-sm leading-relaxed">
                かっこいいサイトを作ることより、クライアントのビジネスが伸びることを最優先に考えます。
                だから、要件定義から一緒に考え、本当に必要なものを作ります。
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-5">スキルセット</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs text-amber-500 font-semibold mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
