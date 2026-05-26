# Production Launch LP

本番化支援サービスのランディングページ。

## Tech Stack

- **Next.js 16** (Static Export)
- **Tailwind CSS v4**
- **Shadcn UI**
- **Lucide React Icons**
- **Firebase Hosting**

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
# ビルド（静的エクスポート）
npm run build

# Firebase Hosting へデプロイ
firebase deploy --only hosting
```

## Firebase Setup

1. `.firebaserc` の `your-firebase-project-id` を実際の Firebase プロジェクト ID に変更
2. `firebase login` で認証
3. `firebase deploy --only hosting` でデプロイ

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # ヒーローセクション
│   │   ├── pain-points.tsx  # お悩みセクション
│   │   ├── flow.tsx         # 発注の流れ
│   │   ├── tech-flow.tsx    # 技術的な進め方
│   │   ├── pricing.tsx      # 料金プラン
│   │   ├── strengths.tsx    # サービスの強み
│   │   ├── cta.tsx          # CTA
│   │   └── footer.tsx       # フッター
│   └── ui/                  # Shadcn UI コンポーネント
└── lib/
    └── utils.ts
```
