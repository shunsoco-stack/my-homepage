const features = [
  { icon: "ri-flow-chart", title: "ワークフロー自動化", desc: "ドラッグ&ドロップで業務フローを設計。承認・通知・データ転送を自動化します。", color: "bg-indigo-50 text-indigo-500" },
  { icon: "ri-sparkling-2-line", title: "AI文書生成", desc: "議事録・報告書・メールの下書きをAIが自動生成。編集するだけで完成します。", color: "bg-violet-50 text-violet-500" },
  { icon: "ri-team-line", title: "チームコラボレーション", desc: "タスク・コメント・ファイルを一元管理。リモートチームでもスムーズに連携。", color: "bg-sky-50 text-sky-500" },
  { icon: "ri-plug-line", title: "外部ツール連携", desc: "Slack・Notion・Google Workspace・Salesforceなど100以上のツールと連携可能。", color: "bg-emerald-50 text-emerald-500" },
  { icon: "ri-line-chart-line", title: "リアルタイム分析", desc: "業務効率・ボトルネック・チームパフォーマンスをダッシュボードで可視化。", color: "bg-amber-50 text-amber-500" },
  { icon: "ri-lock-2-line", title: "エンタープライズセキュリティ", desc: "SOC2 Type II準拠。SSO・2FA・監査ログで企業レベルのセキュリティを実現。", color: "bg-rose-50 text-rose-500" },
];

export default function StartupFeatures() {
  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-indigo-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Features</p>
          <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">flowAIでできること</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            AIと自動化の力で、チームの生産性を根本から変えます。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f) => (
            <div key={f.title} className="p-7 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-all group">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${f.color}`}>
                <i className={`${f.icon} text-xl`}></i>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20SaaS%20product%20dashboard%20UI%20on%20laptop%20screen%2C%20AI%20workflow%20automation%20interface%2C%20clean%20minimal%20design%20with%20indigo%20and%20white%20color%20scheme%2C%20data%20visualization%20charts%2C%20professional%20software%20mockup%2C%20dark%20background&width=1200&height=600&seq=startup-dashboard1&orientation=landscape"
            alt="flowAI ダッシュボード"
            className="w-full h-72 md:h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent flex items-end p-8">
            <div>
              <p className="text-white font-bold text-lg mb-1">直感的なワークフローエディタ</p>
              <p className="text-white/60 text-sm">コードなしで複雑な業務フローを自動化</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
