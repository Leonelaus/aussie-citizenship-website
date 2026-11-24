import Link from "next/link";
import { AustralianFlag } from "@/components/australian-flag";
import { ComingSoon } from "@/components/coming-soon";
import { OperaHouse } from "@/components/opera-house";
import { benefits, features } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(22,50,79,0.09),transparent_52%),radial-gradient(ellipse_at_bottom_right,rgba(196,163,106,0.16),transparent_46%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(226,196,138,0.09),transparent_48%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.04),transparent_42%)]"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <AustralianFlag
                className="h-6 w-12 rounded-[3px] ring-1 ring-black/10"
                title="Australian National Flag"
              />
              <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
                Independent study aid
              </p>
            </div>
            <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.08] tracking-tight text-balance sm:text-6xl">
              Prepare for the Australian citizenship test with calm, clear study.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Aussie Citizenship is a mobile study aid for people preparing for
              the Australian citizenship test. It helps you revise at your own
              pace. It is not affiliated with, or endorsed by, the Australian
              Government or the Department of Home Affairs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/features"
                className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-6 text-base font-semibold text-navy-foreground transition-opacity hover:opacity-90"
              >
                Explore features
              </Link>
              <a
                href="#download"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-card px-6 text-base font-semibold transition-colors hover:bg-sand"
              >
                Coming Soon on the App Store
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
              No download is available yet. Using the app does not promise a
              pass, a particular mark, or a successful citizenship application.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-sand to-background p-4 shadow-[0_30px_70px_-40px_rgba(22,50,79,0.55)] dark:shadow-none">
              <OperaHouse className="h-auto w-full text-navy" />
              <p className="px-3 pb-2 text-sm text-muted">
                A study companion for people making Australia home. The
                illustration is an original drawing of the Sydney Opera House.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Revision, kept straightforward.
          </h2>
          <div className="space-y-4 text-lg leading-8 text-muted">
            <p>
              Studying for citizenship is a significant step. Aussie Citizenship
              is designed to help you review ideas about Australia’s history,
              government, and values using plain language and practice.
            </p>
            <p>
              It is an educational tool only. It does not replace the official
              study resource, it does not handle your application, and it does
              not tell you that you will pass.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
              Features
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
              What you can practise
            </h2>
          </div>
          <Link
            href="/features"
            className="text-sm font-semibold underline decoration-gold-soft decoration-2 underline-offset-4"
          >
            Read the feature guide
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.slug}
              className="rounded-3xl border border-line bg-card p-6 transition-colors hover:border-gold-soft"
            >
              <h3 className="font-display text-2xl tracking-tight">{feature.title}</h3>
              <p className="mt-3 leading-7 text-muted">{feature.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="rounded-[2rem] border border-line bg-sand px-6 py-10 sm:px-10">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            A clearer way to prepare
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 leading-7 text-muted">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <ComingSoon />
      </div>
    </>
  );
}
