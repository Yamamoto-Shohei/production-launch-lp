import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "本番化支援サービス | あなたのアイデアを最速でプロダクトに",
  description:
    "既存コードの本番化に特化。プロトタイプから本番環境へのデプロイを、16年のエンジニアリング経験で支援します。",
  openGraph: {
    title: "本番化支援サービス | あなたのアイデアを最速でプロダクトに",
    description:
      "既存コードの本番化に特化。プロトタイプから本番環境へのデプロイを支援します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
