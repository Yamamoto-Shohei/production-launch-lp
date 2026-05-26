import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          まずはあなたの
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Vibe
          </span>
          を
          <br />
          気軽にお聞かせください
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          「作ってみたけど、どうやって公開すれば良いか分からない…」
          <br />
          そんな悩みを、一緒に解決しましょう。
          <br />
          難しい要件定義書は不要です。ソースコードと、実現したいイメージを共有いただければ、
          最短ルートでのサービスリリースをご提案します。
        </p>

        <a
          href="https://www.lancers.jp/menu/detail/610299"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg px-10 py-7 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-[1.02] no-underline"
          )}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          無料で相談する
        </a>

        <p className="text-slate-500 text-sm mt-6">
          ランサーズのメッセージにてお気軽にご連絡ください
        </p>
      </div>
    </section>
  );
}
