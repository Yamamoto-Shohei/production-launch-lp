import { Shield, Zap, BookOpen, HeartHandshake } from "lucide-react";

const strengths = [
  {
    icon: Zap,
    title: "フルスタック対応力",
    description:
      "フロントエンドからインフラまで幅広い技術領域をカバーし、最適なソリューションを提案します。",
  },
  {
    icon: Shield,
    title: "本番化に特化した専門性",
    description:
      "「作ったけど公開できない」という課題に正面から向き合い、確実に本番環境へ導きます。",
  },
  {
    icon: BookOpen,
    title: "難しい要件定義書は不要",
    description:
      "ソースコードと実現したいイメージを共有いただければ、最短ルートでのリリースをご提案します。",
  },
  {
    icon: HeartHandshake,
    title: "運用を見据えた仕上げ",
    description:
      "ただデプロイするだけでなく、監視・ログ・ドキュメントなど運用を意識した本番品質に仕上げます。",
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
          お客様のアイデアを「動いて、公開され、運用できるプロダクト」へと昇華させます
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
