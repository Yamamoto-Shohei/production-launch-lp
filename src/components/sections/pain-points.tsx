import {
  AlertTriangle,
  ServerCrash,
  Wrench,
  TrendingDown,
} from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    text: "せっかく作ったプロダクトが公開できない",
  },
  {
    icon: ServerCrash,
    text: "本番環境へのデプロイが複雑で進まない",
  },
  {
    icon: Wrench,
    text: "既存システムの保守運用を効率化したい",
  },
  {
    icon: TrendingDown,
    text: "技術負債を解消し、スケーラブルな基盤を構築したい",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          こんなお悩みはありませんか？
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          多くのスタートアップ・個人開発者が直面する課題を解決します
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-slate-200 text-lg font-medium leading-relaxed pt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            これらのお悩みをお持ちの方へ、
            <span className="text-blue-400 font-bold">
              既存コードの&ldquo;本番化&rdquo;に特化
            </span>
            してご支援します。
          </p>
        </div>
      </div>
    </section>
  );
}
