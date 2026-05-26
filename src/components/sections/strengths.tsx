import { Code2, Puzzle, MessageCircle, HeartHandshake } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "AIが書いたコードを読み解ける",
    description:
      "Claude CodeやCursorが生成したコードの構造を正確に把握し、本番品質に引き上げます。",
  },
  {
    icon: Puzzle,
    title: "足りない部分だけをプロが補完",
    description:
      "AIが作った部分はそのまま活かし、デプロイ・インフラ・バックエンドなど不足する部分だけを構築します。",
  },
  {
    icon: MessageCircle,
    title: "アイデア段階からの壁打ち伴走",
    description:
      "具体化しきれていないアイデアでも大丈夫。技術的な実現方法やサービス設計から一緒に考えます。",
  },
  {
    icon: HeartHandshake,
    title: "運用を見据えた本番品質",
    description:
      "ただデプロイするだけでなく、監視・ログ・ドキュメントなど運用を意識した品質で仕上げます。",
  },
];

export function StrengthsSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          サービスの強み
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg max-w-3xl mx-auto">
          Vibeコーディングで作ったプロダクトを「世に出せる状態」に仕上げます
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {strengths.map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
