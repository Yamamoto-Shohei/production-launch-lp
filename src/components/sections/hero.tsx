"use client";

import { buttonVariants } from "@/components/ui/button";
import { Rocket, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
          <Rocket className="w-4 h-4" />
          Vibeコーディング → 本番リリース
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
          AIで作ったプロダクト、
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            世に出すところまで
          </span>
          <br />
          一緒にやります
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Claude CodeやCursorで形にしたアイデア、
          <br className="hidden sm:block" />
          本番デプロイして反響を見るところまでサポートします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-[1.02]"
            )}
          >
            無料で相談する
          </button>
          <button
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-slate-700 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6 rounded-xl"
            )}
          >
            料金を見る
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}
