import Link from "next/link";
import WatercolorAccent from "@/components/graphics/WatercolorAccent";

export default function JoinLead() {
  return (
    <section className="relative py-[var(--spacing-section-lg)] bg-bg overflow-hidden">
      <WatercolorAccent
        color="violet"
        variant="wash"
        opacity={0.03}
        className="absolute top-0 right-0 w-[500px] h-[500px]"
      />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
          Join Us
        </p>
        <h2 className="text-section-title text-text mb-8">
          一緒に、挑戦しませんか。
        </h2>
        <p className="text-sub text-lg md:text-xl leading-relaxed mb-6 max-w-xl mx-auto">
          未経験でも、英語が完璧でなくても大丈夫。
          「本気でやりたい」その気持ちがあれば、ここがあなたの場所です。
        </p>
        <p className="text-sm text-sub/60 tracking-wide mb-14">
          IG運用 / Web制作 / コミュニティ運営 / スポンサー営業 / Ryugaku+ 開発
        </p>
        <Link href="/join" className="btn-primary text-lg !px-10 !py-5">
          Join Us <span>→</span>
        </Link>
      </div>
    </section>
  );
}
