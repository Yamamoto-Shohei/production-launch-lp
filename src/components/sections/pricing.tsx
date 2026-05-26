"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";

const plans = [
  {
    title: "アイデア壁打ち・サービス設計",
    price: "¥50,000",
    priceNote: "〜",
    timeline: "1〜2週間",
    description:
      "途中までアイデアを考えたけど具体的なところまで詰められていない方向け。サービスの具体化や技術選定の壁打ちから伴走します。",
    features: [
      "サービスコンセプトの壁打ち",
      "技術構成・実現方法のアドバイス",
      "必要な機能の洗い出し",
      "開発ロードマップ作成",
      "本番化プランへのスムーズな接続",
    ],
    popular: false,
  },
  {
    title: "LP・静的サイトデプロイ",
    price: "¥100,000",
    priceNote: "〜",
    timeline: "最短7日",
    description:
      "データ保持を伴わないLPやポートフォリオを、クラウドにデプロイしてドメインを繋げて公開完了。",
    features: [
      "クラウドへのデプロイ",
      "独自ドメイン接続",
      "SSL証明書設定",
      "基本的なCI/CD構築",
      "構成ドキュメント納品",
    ],
    popular: false,
  },
  {
    title: "Webアプリ本番化",
    price: "¥500,000",
    priceNote: "〜",
    timeline: "約30日〜",
    description:
      "会員登録やDB連携が必要なアプリケーション向け。バックエンド・インフラ構成をまるっと作成して世に出します。",
    features: [
      "バックエンド・API実装",
      "DB設計・認証基盤構築",
      "CI/CDパイプライン構築",
      "本番環境デプロイ",
      "ログ設計・エラーハンドリング",
      "運用ドキュメント納品",
    ],
    popular: true,
  },
  {
    title: "フルスタック構築・デプロイ",
    price: "¥1,000,000",
    priceNote: "〜",
    timeline: "約60〜90日",
    description:
      "業務アプリケーションなど大規模なプロダクト向け。アーキテクチャ設計からマルチ環境構成まで、トータルで本番化を支援します。",
    features: [
      "アーキテクチャ設計",
      "DB・API・フロントエンド接続",
      "インフラ構築（IaC対応）",
      "マルチ環境構成",
      "CI/CD・ステージング環境",
      "監視・ログ・アラート設定",
      "本番デプロイ・運用支援",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          対応範囲・価格の目安
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          プロジェクトの規模や完成度に応じて柔軟に調整いたします
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={cn(
                "relative bg-slate-950/50 border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700",
                plan.popular &&
                  "border-blue-500/50 shadow-lg shadow-blue-500/10 scale-[1.02]"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              )}
              <CardHeader className="pb-4">
                {plan.popular && (
                  <Badge className="w-fit bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 mb-2">
                    人気
                  </Badge>
                )}
                <CardTitle className="text-xl text-white">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-lg ml-1">
                    {plan.priceNote}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">納期目安：{plan.timeline}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={cn(
                    buttonVariants(),
                    "w-full rounded-xl py-5",
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                  )}
                >
                  相談する
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          ※ 表示価格は税別です。プロジェクトの内容に応じて個別にお見積もりいたします。
        </p>
        <p className="text-center text-slate-400 text-sm mt-3">
          📌 公開後の<span className="text-blue-400 font-medium">保守・運用サポート</span>はオプションプランにて応相談で承ります。
        </p>
      </div>
    </section>
  );
}
