import { useState } from "react";
import { Link } from "react-router-dom";

import WorkCard from "@/components/feature/WorkCard";
import WorkDetailModal from "@/components/feature/WorkDetailModal";
import { workCategories, works, type Work } from "@/mocks/works";

export default function Works() {
  const [active, setActive] = useState("すべて");
  const [selected, setSelected] = useState<Work | null>(null);

  const filtered =
    active === "すべて" ? works : works.filter((work) => work.category === active);

  return (
    <section id="works" className="bg-gray-950 py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
              <i className="ri-briefcase-line" aria-hidden="true" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl font-black text-white md:text-4xl">制作実績</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
              実案件は守秘義務のため一部のみ公開しています。以下には実案件・自社開発と、制作品質をご覧いただくためのデモサイトを掲載しています。
            </p>
          </div>
          <Link
            to="/works"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
          >
            すべて見る
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" aria-label="制作実績カテゴリ">
          {workCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`min-h-11 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transition-none ${
                active === category
                  ? "bg-amber-400 text-gray-950"
                  : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <WorkCard key={work.id} work={work} onOpen={setSelected} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-amber-500/40 px-8 py-3 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
          >
            <i className="ri-briefcase-line" aria-hidden="true" />
            制作実績をすべて見る
          </Link>
        </div>
      </div>

      {selected ? (
        <WorkDetailModal key={selected.id} work={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
