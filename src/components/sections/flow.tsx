"use client";

import {
  MessageSquare,
  Search,
  FileText,
  Handshake,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "お問い合わせ・ソース共有",
    description:
      "下記フォームより、開発されたソースコード（GitHubリポジトリURLまたはZIPファイル）とプロジェクト概要を共有ください。",
  },
  {
    icon: Search,
    number: "02",
    title: "コード精査・ヒアリング",
    description:
      "共有いただいたソースコードをプロの視点で詳細に分析します。必要に応じてビデオ通話で簡単なヒアリングを行い、現状やゴールを正確に把握します。",
  },
  {
    icon: FileText,
    number: "03",
    title: "構成案・見積もり提示",
    description:
      "現状のコードと要件に基づき、最適なアーキテクチャ、DB、API、インフラ構成案とお見積もりを具体的に提示します。",
  },
  {
    icon: Handshake,
    number: "04",
    title: "契約・作業開始",
    description:
      "提案内容と見積もりにご納得いただけましたら、契約・お支払い手続きをお願いいたします。その後、速やかに本番化に向けた作業を開始します。",
  },
  {
    icon: Rocket,
    number: "05",
    title: "デプロイ・動作確認・納品",
    description:
      "構築した本番環境へのデプロイ、入念な動作確認を行い、全ての作業完了後、構成ドキュメントや運用のポイントとともに納品いたします。",
  },
];

export function FlowSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          発注の流れ
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          シンプルな5ステップで、あなたのプロダクトを本番環境へ
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 md:gap-8">
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-white font-bold text-sm sm:text-base">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
