import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibeコーディング本番化サービス | AIで作ったプロダクトを世に出す",
  description:
    "Claude CodeやCursorで作ったプロトタイプを、本番デプロイして世に出すところまで一貫サポート。LP・Webアプリ・業務システムまで対応。",
  openGraph: {
    title: "Vibeコーディング本番化サービス | AIで作ったプロダクトを世に出す",
    description:
      "Claude CodeやCursorで作ったプロトタイプを、本番デプロイして世に出すところまで一貫サポート。LP・Webアプリ・業務システムまで対応。",
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
