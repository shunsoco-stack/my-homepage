const results = [
  { category: "企業法務", title: "M&A契約交渉", desc: "IT企業の買収案件で、不利な条件を交渉により大幅改善。クライアントの利益を最大化した。", amount: "約12億円規模", tag: "解決済み" },
  { category: "相続", title: "遺産分割調停", desc: "複数の相続人間で争いとなっていた遺産分割を調停で解決。全員が納得できる分割案を実現。", amount: "遺産総額 約3億円", tag: "解決済み" },
  { category: "労働問題", title: "不当解雇・残業代請求", desc: "不当解雇された従業員の代理人として交渉。解雇撤回と未払い残業代の全額支払いを実現。", amount: "残業代 約800万円回収", tag: "解決済み" },
  { category: "民事", title: "交通事故損害賠償", desc: "後遺障害が残る重傷事故の被害者代理人として示談交渉。保険会社の提示額の3倍以上を獲得。", amount: "賠償額 約4,500万円", tag: "解決済み" },
];

export default function LawResults() {
  return (
    <section id="results" className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Track Record</p>
          <h2 className="text-white font-black text-4xl md:text-5xl mb-4">解決実績</h2>
          <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            ※守秘義務の範囲内で一部をご紹介しています。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {results.map((r) => (
            <div key={r.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold">{r.category}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">{r.tag}</span>
              </div>
              <h3 className="text-white font-black text-lg mb-3">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{r.desc}</p>
              <div className="flex items-center gap-2">
                <i className="ri-trophy-line text-amber-400"></i>
                <span className="text-amber-400 font-bold text-sm">{r.amount}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ num: "3,000+", label: "累計解決件数" }, { num: "98%", label: "顧客満足度" }, { num: "26年", label: "創業年数" }, { num: "24h", label: "初回返答時間" }].map((s) => (
            <div key={s.label} className="text-center bg-white/5 rounded-2xl py-8">
              <p className="text-white font-black text-3xl mb-2">{s.num}</p>
              <p className="text-white/40 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
