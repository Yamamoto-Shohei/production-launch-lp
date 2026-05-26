"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

// --- Google Forms 設定 ---
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJYstZ3AGhJIh3-2Y9pkCJUpIX5efNzsSWRHu2_6okHZ-dYQ/formResponse";
const ENTRY_NAME = "entry.572638205";
const ENTRY_EMAIL = "entry.1573468461";
const ENTRY_MESSAGE = "entry.1522075248";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function CtaSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new URLSearchParams();
    formData.append(ENTRY_NAME, name);
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_MESSAGE, message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      // no-cors のため常に opaque response になるが、送信自体は成功する
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            まずはあなたの
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vibe
            </span>
            を
            <br />
            気軽にお聞かせください
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            「作ってみたけど、どうやって公開すれば良いか分からない…」
            <br />
            そんな悩みを、一緒に解決しましょう。
            <br />
            難しい要件定義書は不要です。ソースコードと、実現したいイメージを共有いただければ、
            最短ルートでのサービスリリースをご提案します。
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              送信ありがとうございます！
            </h3>
            <p className="text-slate-400">
              内容を確認のうえ、折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 sm:p-10 space-y-6"
          >
            {/* お名前 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="山田 太郎"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>

            {/* ご相談内容 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                ご相談内容 <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="プロジェクトの概要や、現在の状況、実現したいことなどをお気軽にお書きください。"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                送信に失敗しました。お手数ですが、もう一度お試しください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-lg font-medium px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-[1.01]"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  送信中...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  無料で相談する
                </>
              )}
            </button>

            <p className="text-slate-500 text-xs text-center">
              ※ いただいた情報は、本サービスに関するご連絡以外の目的では使用いたしません。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
