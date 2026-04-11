export default function WorksHero() {
  return (
    <section className="relative bg-gray-950 pt-32 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4">
          <i className="ri-briefcase-line"></i>
          <span>Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">制作実績</h1>
        <p className="text-white/50 text-base max-w-xl leading-relaxed">
          これまでに手がけたホームページ・LP・業務システムの一部をご紹介します。
          各案件の詳細はカードをクリックしてご覧ください。
        </p>
      </div>
    </section>
  );
}
