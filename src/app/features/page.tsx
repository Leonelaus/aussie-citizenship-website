import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";
import { PageHeader } from "@/components/page-header";
import { features } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "500 practice questions, with 30 accessible and 470 locked, 20-question mock exams from the 30, and on-device progress in the free Aussie Citizenship iPhone app.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features",
    description:
      "500 practice questions, with 30 accessible and 470 locked, and 20-question mock exams drawn from the 30.",
    url: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="Features"
        title="Study tools, described plainly."
        lede="The free iPhone app contains 500 practice questions. Version 1.0.0 makes 30 accessible and leaves 470 locked. Mock exams use 20 questions from those 30. Progress stays on the device. None of this is an official test, and none of it promises a result."
      />
      <div className="mt-12 space-y-6">
        {features.map((feature, index) => (
          <article
            key={feature.slug}
            id={feature.slug}
            className="scroll-mt-28 rounded-[2rem] border border-line bg-card p-6 sm:p-8"
          >
            <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight">{feature.title}</h2>
            <p className="mt-4 text-lg leading-8 text-muted">{feature.summary}</p>
            <div className="mt-4 space-y-4 leading-7 text-foreground/90">
              {feature.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-line bg-sand px-4 py-3 text-sm leading-6 text-muted">
              {feature.note}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <ComingSoon compact />
      </div>
    </div>
  );
}
