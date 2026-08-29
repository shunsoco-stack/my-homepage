import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  FileSearch,
  Github,
  GitBranch,
  ListChecks,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { aiMeetingFollowUpWork } from "@/mocks/works";
import { resolvePublicUrl } from "@/utils/resolvePublicUrl";
import WorksNavbar from "../components/WorksNavbar";

const workflow = [
  "Meeting Notes",
  "Decision Extraction",
  "Action Items",
  "Owner / Due Date",
  "Missing Information",
  "Follow-up Plan",
  "Progress Update",
  "Delay Detection",
  "Reminder Draft",
  "Human Review",
];

const executionLoop = [
  "Meeting",
  "Actions",
  "Ownership",
  "Monitoring",
  "Delay",
  "Follow-up",
  "Next Meeting",
];

const features = [
  {
    icon: FileSearch,
    title: "Decision / Actionを分離",
    description:
      "決まった方針と、誰かが実行するTaskを別Entityとして扱い、議事録内の発言時刻・行・引用をEvidenceとして保持します。",
  },
  {
    icon: UserCheck,
    title: "不足情報は人が補完",
    description:
      "OwnerやDue Dateが明記されていない場合は未設定のまま検出。AIが参加者や日付から推測して確定することはありません。",
  },
  {
    icon: Clock3,
    title: "決定論的な遅延判定",
    description:
      "Due DateとStatusだけを使う通常コードで、今日・期限接近・今週・期限超過を重複なく分類します。",
  },
  {
    icon: GitBranch,
    title: "Blocked影響をRe-plan",
    description:
      "Blockerの根拠と依存関係から、影響を受けるActionと次に確認すべきことをDraftとして提示します。",
  },
  {
    icon: CalendarClock,
    title: "ReminderはDraftまで",
    description:
      "期限接近・期限超過Taskの確認文を生成。編集・コピーはできますが、メールやチャットへ自動送信しません。",
  },
  {
    icon: ClipboardCheck,
    title: "次回会議へ接続",
    description:
      "前回決定事項、未完了Task、Blocker、確認事項を整理し、次回会議用Agenda Draftへつなげます。",
  },
];

const screenshots = [
  {
    src: "/works/ai-meeting-follow-up-agent/01-meeting-input.png",
    title: "Meeting Input",
    description: "会議タイトル・日時・参加者・議事録・会議メモを入力する画面",
    width: 1440,
    height: 1080,
  },
  {
    src: "/works/ai-meeting-follow-up-agent/02-decisions-action-items.png",
    title: "Decisions / Action Items",
    description: "決定事項とAction Itemを分離し、抽出根拠を確認する画面",
    width: 1440,
    height: 1031,
  },
  {
    src: "/works/ai-meeting-follow-up-agent/03-missing-owner-due-date.png",
    title: "Missing Owner / Due Date",
    description: "不明な担当者と期限をEvidenceを見ながら人が補完する画面",
    width: 1440,
    height: 1039,
  },
  {
    src: "/works/ai-meeting-follow-up-agent/04-follow-up-dashboard.png",
    title: "Follow-up Dashboard",
    description: "未完了・期限超過・Blocked・要確認を会議横断で追跡する画面",
    width: 1440,
    height: 1087,
  },
  {
    src: "/works/ai-meeting-follow-up-agent/05-reminder-next-agenda.png",
    title: "Reminder / Next Agenda",
    description: "自動送信しないReminderと次回Agenda Draftを確認する画面",
    width: 1440,
    height: 1000,
  },
];

const demoMeetings = [
  ["開発定例", "2", "4", "Blocked・今日の期限・Due不足"],
  ["営業会議", "2", "4", "期限超過・Reminder・Owner不足"],
  ["プロジェクト進捗会議", "2", "5", "移行Blocker・後続Task・完了Task"],
];

const guardrails = [
  "根拠のないOwner・Due Dateの補完",
  "Taskの自動完了",
  "Owner・Due Date・Statusの自動変更",
  "Re-planの自動適用",
  "Reminderの自動送信",
  "AgendaからのTask自動変更",
];

const limitations = [
  "固定Demo Dataを使うConcept Project",
  "External LLM・音声文字起こし・外部送信は未接続",
  "Browser-local stateのみで、認証・共有・永続Databaseは未実装",
  "ReminderとAgendaはDraftのみ",
];

export default function AiMeetingFollowUpAgentPage() {
  const productionUrl = aiMeetingFollowUpWork.appUrl!;
  const githubUrl = aiMeetingFollowUpWork.githubUrl!;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <WorksNavbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <Link
              to="/works"
              className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
              制作実績へ戻る
            </Link>

            <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-400/10 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
                    <img
                      src={resolvePublicUrl("/works/ai-meeting-follow-up-agent/icon.svg")}
                      alt=""
                      width={150}
                      height={150}
                      className="h-10 w-10"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                      AI Agent · Meeting Execution
                    </p>
                    <p className="mt-1 text-sm text-white/50">Concept Project / 自主制作</p>
                  </div>
                </div>

                <h1 className="text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  会議を、
                  <span className="text-amber-300">実行に変える。</span>
                </h1>
                <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/80 md:text-lg">
                  議事録を作って終わりにしない。決定とActionを根拠付きで追跡し、次の会議までつなげます。
                </p>
                <p className="mt-3 text-sm font-bold text-cyan-200">要約は入力。価値は会議後。</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    アプリを試す
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHubを見る
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-white/55">
                  {aiMeetingFollowUpWork.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/15 to-cyan-400/10 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900 p-2 shadow-2xl shadow-black/40">
                  <img
                    src={resolvePublicUrl("/works/ai-meeting-follow-up-agent/04-follow-up-dashboard.png")}
                    alt="未完了・期限超過・Blocked・要確認を会議横断で追跡するFollow-up Dashboard"
                    width={1440}
                    height={1087}
                    className="h-auto w-full rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-5 -left-4 rounded-2xl border border-amber-300/25 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
                  <p className="text-xs font-bold text-amber-300">Human Review required</p>
                  <p className="mt-1 text-xs text-white/55">自動送信・自動変更なし</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/45 py-20 md:py-24" aria-labelledby="difference-heading">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Positioning</p>
                <h2 id="difference-heading" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  議事録ではなく、
                  <br />会議後のExecutionを管理
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  会議で決まったActionは、議事録が完成しただけでは実行されません。担当と期限の不足、進捗、遅延、Blocker、次回会議への持ち越しまでを継続して扱います。
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-wider text-white/45">
                      <tr>
                        <th className="px-5 py-4 font-semibold">比較</th>
                        <th className="px-5 py-4 font-semibold">AI議事録作成アプリ</th>
                        <th className="px-5 py-4 font-semibold text-amber-300">今回のAgent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <th className="px-5 py-5 font-semibold text-white/65">主目的</th>
                        <td className="px-5 py-5 text-white/55">会議内容をまとめる</td>
                        <td className="px-5 py-5 font-bold text-white">会議後のActionを追跡する</td>
                      </tr>
                      <tr>
                        <th className="px-5 py-5 font-semibold text-white/65">中心画面</th>
                        <td className="px-5 py-5 text-white/55">要約・議題・発言</td>
                        <td className="px-5 py-5 font-bold text-white">Owner・期限・Blocked・遅延</td>
                      </tr>
                      <tr>
                        <th className="px-5 py-5 font-semibold text-white/65">時間軸</th>
                        <td className="px-5 py-5 text-white/55">会議終了まで</td>
                        <td className="px-5 py-5 font-bold text-white">会議終了後から次回会議まで</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-14 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.04] p-6 md:p-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Meeting-to-Meeting Continuity</p>
              <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
                {executionLoop.map((step, index) => (
                  <li key={step} className="relative flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-4 text-center text-xs font-bold text-white/75">
                    {step}
                    {index < executionLoop.length - 1 && (
                      <ArrowRight className="absolute -right-4 z-10 hidden h-4 w-4 text-cyan-300/60 lg:block" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" aria-labelledby="workflow-heading">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Agent Workflow</p>
              <h2 id="workflow-heading" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                抽出で終わらず、Human Reviewまで
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                AIは整理・検出・Draftを担当し、確定と実行は人が行います。
              </p>
            </div>

            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <li key={step} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <span className="text-xs font-black text-amber-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-sm font-bold text-white/85">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-slate-900/65 p-6 transition-colors hover:border-amber-300/25">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/50 py-20 md:py-24" aria-labelledby="demo-heading">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Demo Mode</p>
                <h2 id="demo-heading" className="mt-3 text-3xl font-black tracking-tight">3つの会議を横断して追跡</h2>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  基準日は2026-08-26 JST。人名・会社名・会議内容はすべて架空です。
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {[
                    ["13", "Action Item"],
                    ["12", "未完了"],
                    ["2", "期限超過"],
                    ["2", "Blocked"],
                    ["4", "Needs Review"],
                    ["6", "Decision"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-2xl font-black text-amber-300">{value}</p>
                      <p className="mt-1 text-xs font-semibold text-white/50">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] text-left text-sm">
                    <thead className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-wider text-white/45">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Meeting</th>
                        <th className="px-5 py-4 text-center font-semibold">Decisions</th>
                        <th className="px-5 py-4 text-center font-semibold">Actions</th>
                        <th className="px-5 py-4 font-semibold">Showcase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {demoMeetings.map(([meeting, decisions, actions, showcase]) => (
                        <tr key={meeting}>
                          <th className="px-5 py-5 font-bold text-white">{meeting}</th>
                          <td className="px-5 py-5 text-center text-white/60">{decisions}</td>
                          <td className="px-5 py-5 text-center text-white/60">{actions}</td>
                          <td className="px-5 py-5 text-white/55">{showcase}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" aria-labelledby="gallery-heading">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Production Gallery</p>
              <h2 id="gallery-heading" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                同一Productionで検証した5画面
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Vercel Productionから取得し、GitHub READMEでも5枚すべての表示を確認しています。
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {screenshots.map((screenshot, index) => (
                <figure
                  key={screenshot.src}
                  className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 ${index === 3 ? "lg:col-span-2" : ""}`}
                >
                  <div className="overflow-hidden border-b border-white/10 bg-slate-950 p-2">
                    <img
                      src={resolvePublicUrl(screenshot.src)}
                      alt={screenshot.description}
                      width={screenshot.width}
                      height={screenshot.height}
                      loading="lazy"
                      className="h-auto w-full rounded-2xl"
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="font-bold text-white">{screenshot.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/50">{screenshot.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/50 py-20 md:py-24" aria-labelledby="guardrails-heading">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:px-10 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-300/15 bg-emerald-300/[0.035] p-7 md:p-8">
              <div className="flex items-center gap-3 text-emerald-200">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-[0.18em]">Human-in-the-loop</p>
              </div>
              <h2 id="guardrails-heading" className="mt-5 text-2xl font-black">Agentが勝手に実行しないこと</h2>
              <ul className="mt-6 space-y-3">
                {guardrails.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/65">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-amber-300/15 bg-amber-300/[0.035] p-7 md:p-8">
              <div className="flex items-center gap-3 text-amber-200">
                <CircleAlert className="h-6 w-6" aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-[0.18em]">Known Limitations</p>
              </div>
              <h2 className="mt-5 text-2xl font-black">Concept Projectとしての範囲</h2>
              <ul className="mt-6 space-y-3">
                {limitations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
              <Bot className="h-8 w-8" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">会議後のActionを、次の会議まで。</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
              Extract → Assign → Monitor → Delay → Follow-up。デモでは3会議・13 Actionの継続管理を体験できます。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={productionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                アプリを試す
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Sourceを見る
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-white/35 sm:flex-row md:px-10">
          <p>AI会議フォローアップエージェント — Concept Project</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" aria-hidden="true" /> Human Review</span>
            <span className="inline-flex items-center gap-1.5"><ListChecks className="h-3.5 w-3.5" aria-hidden="true" /> Action Tracking</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
