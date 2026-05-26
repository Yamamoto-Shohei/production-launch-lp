import { Code2, Database, Cloud, TestTube } from "lucide-react";

const techSteps = [
  {
    icon: Code2,
    title: "AIコードの読み解き・補完",
    description:
      "AIが生成したコードの構造・依存関係を把握し、本番稼働に必要な修正箇所やセキュリティリスクを特定します。",
    color: "blue",
  },
  {
    icon: Database,
    title: "バックエンド・DB設計",
    description:
      "会員登録やデータ保持が必要なアプリには、DB設計・API実装・認証基盤をまるっと構築。LPなどデータ不要なものはこのステップをスキップします。",
    color: "cyan",
  },
  {
    icon: Cloud,
    title: "インフラ構築・デプロイ",
    description:
      "プロジェクトに最適なクラウド環境を選定・構築し、ドメイン接続・SSL設定・CI/CDパイプライン整備まで一貫して対応します。",
    color: "emerald",
  },
  {
    icon: TestTube,
    title: "動作検証・公開",
    description:
      "本番環境での動作確認、監視・ログ設定を整え、あなたのプロダクトを世に出します。公開後の運用ポイントもドキュメントで共有します。",
    color: "violet",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    icon: "text-blue-400",
    border: "border-blue-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    icon: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    icon: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    icon: "text-violet-400",
    border: "border-violet-500/20",
  },
};

export function TechFlowSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          制作の流れ（技術的な進め方）
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          AIが作ったコードの「足りない部分」をプロが補完します
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techSteps.map((step, i) => {
            const colors = colorMap[step.color];
            return (
              <div
                key={i}
                className={`relative p-8 rounded-2xl border ${colors.border} bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="text-sm font-mono text-slate-500">
                    STEP {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
