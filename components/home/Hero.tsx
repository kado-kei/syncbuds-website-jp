import Link from "next/link";
import WatercolorAccent from "@/components/graphics/WatercolorAccent";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden">
      <WatercolorAccent
        color="blue"
        variant="wash"
        opacity={0.04}
        className="absolute -top-32 -right-48 w-[600px] h-[600px]"
      />
      <WatercolorAccent
        color="magenta"
        variant="splash"
        opacity={0.03}
        className="absolute bottom-32 -left-32 w-[350px] h-[350px]"
      />

      {/* w-full 必須: 親が flex のため、これが無いと内容依存幅になり
          見出しのコンテナクエリ（.jp-fit）が正しい幅を取れない */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 text-center pt-40 pb-24">
        <div className="animate-fade-up">
          <h1 className="text-hero jp-fit [--chars:12] text-text mb-8">
            海外で挑戦する若者に、
            <br />
            実践機会と仲間を届ける。
          </h1>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <p className="text-base md:text-lg text-sub mb-8 max-w-lg mx-auto leading-relaxed">
            バンクーバー発。留学生・Co-op生・若手社会人が、
            <br className="hidden sm:block" />
            実践を通じて成長するコミュニティ。
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:400ms]">
          <p className="text-xs text-sub/60 tracking-[0.25em] uppercase mb-16">
            6期 / 累計参加メンバー120名以上 / Vancouver拠点
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:600ms]">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="btn-primary text-lg !px-10 !py-5">
              Join Us <span>→</span>
            </Link>
            <Link href="/partners" className="btn-outline text-lg !px-10 !py-5">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-text/15 to-transparent" />
      </div>
    </section>
  );
}
