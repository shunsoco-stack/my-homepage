import type { Work } from "@/mocks/works";
import { resolvePublicUrl } from "@/utils/resolvePublicUrl";

type WorkCardProps = {
  work: Work;
  onOpen: (work: Work) => void;
  showDescription?: boolean;
};

export default function WorkCard({ work, onOpen, showDescription = false }: WorkCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(work)}
      aria-haspopup="dialog"
      aria-label={`${work.title}の詳細を見る`}
      className="group w-full overflow-hidden rounded-2xl bg-gray-900 text-left transition-all hover:ring-2 hover:ring-amber-500/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/80 motion-reduce:transition-none"
    >
      <span className={`block w-full overflow-hidden ${showDescription ? "h-52" : "h-48"}`}>
        <img
          src={resolvePublicUrl(work.image)}
          alt=""
          width={800}
          height={500}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </span>
      <span className="block p-5">
        <span className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-amber-300">{work.category}</span>
          {work.label || work.badges?.[0] ? (
            <span className="rounded-full bg-violet-400/15 px-2 py-0.5 text-xs font-semibold text-violet-200">
              {work.label ?? work.badges?.[0]}
            </span>
          ) : work.demo ? (
            <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-xs font-semibold text-amber-200">
              デモサイト
            </span>
          ) : null}
          <span className="text-xs text-white/55">{work.year}</span>
        </span>
        <span className="mb-3 block text-sm font-bold leading-snug text-white">{work.title}</span>
        {showDescription ? (
          <span className="mb-4 line-clamp-2 block text-xs leading-relaxed text-white/60">
            {work.description}
          </span>
        ) : null}
        <span className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </span>
      </span>
    </button>
  );
}
