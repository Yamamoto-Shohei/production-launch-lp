import Image from "next/image";
import { Award, BookOpen, Briefcase, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    text: "エンジニア歴17年。SIer → Webサービス → スタートアップCTOとフルスタックに経験",
  },
  {
    icon: Code2,
    text: "副業でLINE活用SaaSや人材派遣業務アプリの開発をリード",
  },
  {
    icon: Award,
    text: "技術特許取得（業務実行支援システム）",
  },
  {
    icon: BookOpen,
    text: "Software Design 2024年10月号に設計・開発手法の記事を寄稿",
  },
];

export function ProfileSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          このサービスについて
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          個人エンジニアが直接お手伝いするサービスです
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8 sm:p-10">
          {/* Intro */}
          <div className="mb-8 flex flex-col sm:flex-row gap-6 items-start">
            <Image
              src="/profile.jpg"
              alt="山本 祥平"
              width={96}
              height={96}
              className="rounded-2xl flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold text-white mb-1">山本 祥平</h3>
              <p className="text-sm text-blue-400 mb-4">
                フルスタックエンジニア
              </p>
              <p className="text-slate-300 leading-relaxed">
                SIer時代の金融系大規模開発から、食べログでのWebサービス開発・マネジメント、
                現在はスタートアップで開発本部長として事業運営・システム開発全般を担っています。
                副業では自分自身でもプロダクトを作り、世に出す経験を積んでいます。
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                  <item.icon className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-slate-400 text-sm leading-relaxed">
              「自分でもプロダクトを作って公開する」経験があるからこそ、
              Vibeコーディングで生まれたアイデアを世に出す難しさと楽しさの両方がわかります。
              企業の看板ではなく、エンジニア個人として責任を持ってお手伝いします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
