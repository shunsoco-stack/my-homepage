import { useState } from "react";
import { works } from "@/mocks/works";

const categories = ["すべて", "ホームページ制作", "LP制作", "業務効率化システム"];

export default function Works() {
  const [active, setActive] = useState("すべて");
  const [selected, setSelected] = useState<null | (typeof works)[0]>(null);

  const filtered =
    active === "すべて" ? works : works.filter((w) => w.category === active);

  return (
    <section id="works" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold mb-3">
              <i className="ri-briefcase-line"></i>
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">制作実績</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  active === cat
                    ? "bg-amber-500 text-white"
                    : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelected(work)}
              className="group rounded-2xl overflow-hidden bg-gray-900 cursor-pointer hover:ring-2 hover:ring-amber-500/50 transition-all"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-amber-400 font-semibold">{work.category}</span>
                  <span className="text-xs text-white/30">{work.year}</span>
                </div>
                <h3 className="text-white font-bold text-sm leading-snug mb-3">{work.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-amber-500 font-semibold">{selected.category}</span>
                <span className="text-xs text-gray-400">{selected.year}</span>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">{selected.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {selected.url && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-external-link-line"></i>
                  サイトを見る
                </a>
              )}
              <button
                onClick={() => setSelected(null)}
                className="mt-3 w-full py-2.5 rounded-full border border-gray-200 text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
