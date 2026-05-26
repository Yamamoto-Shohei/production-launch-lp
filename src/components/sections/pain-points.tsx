import {
  AlertTriangle,
  ServerCrash,
  Database,
  Lightbulb,
} from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    text: "Claude CodeやCursorで作ったけど、ここからどうすれば？",
  },
  {
    icon: ServerCrash,
    text: "ローカルでは動くけど、公開するにはセキュリティやインフラが足りない",
  },
  {
    icon: Database,
    text: "会員登録やDB連携が必要だけど、バックエンドの作り方がわからない",
  },
  {
    icon: Lightbulb,
    text: "アイデアはあるけど、具体的な設計まで落とし込めていない",
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
          Vibeコーディングで形にしたその先、一歩が踏み出せない方へ
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
            AIで作ったプロトタイプを、
            <span className="text-blue-400 font-bold">
              本番デプロイして世に出すところまで
            </span>
            一貫してサポートします。
          </p>
        </div>
      </div>
    </section>
  );
}
