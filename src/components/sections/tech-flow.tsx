import { Code2, Database, Cloud, TestTube } from "lucide-react";

const techSteps = [
  {
    icon: Code2,
    title: "ソースコード分析",
    description:
      "共有されたコードを徹底的に読み込み、システム構造や依存関係、潜在的なボトルネック・セキュリティリスクを洗い出します。",
    color: "blue",
  },
  {
    icon: Database,
    title: "アーキテクチャ・DB設計",
    description:
      "想定トラフィックや将来の拡張性を踏まえ、最適なクラウド構成とデータベースモデルを設計し、スケーラビリティと堅牢性を確保します。",
    color: "cyan",
  },
  {
    icon: Cloud,
    title: "インフラ構築・デプロイ",
    description:
      "IaC（Terraform/CDKなど）を用いて本番環境を構築し、CI/CDパイプラインを整備したうえで、安全なロールアウト戦略を設計・実施します。",
    color: "emerald",
  },
  {
    icon: TestTube,
    title: "動作検証・最終調整",
    description:
      "本番相当環境での動作検証、監視・ログ設定、リリース手順の整備を行い、必要な最終調整を反映します。",
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
          プロの技術力で、確実に本番環境へ
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
