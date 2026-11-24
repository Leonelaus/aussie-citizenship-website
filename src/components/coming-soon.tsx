import { AustralianFlag } from "@/components/australian-flag";

export function ComingSoon({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="scroll-mt-24"
    >
      <div className="overflow-hidden rounded-[2rem] border border-line bg-card">
        <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_240px] lg:p-12">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
              iOS
            </p>
            <h2
              id="download-heading"
              className="font-display mt-3 text-3xl tracking-tight sm:text-4xl"
            >
              Coming Soon on the App Store
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Aussie Citizenship is being prepared for iPhone and iPad. There is
              no download yet, and this page does not link to a store listing.
            </p>
            <div
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-navy px-4 py-3 text-navy-foreground"
              role="group"
              aria-label="Coming Soon on the App Store"
            >
              <PhoneMark />
              <span>
                <span className="block text-[0.7rem] font-semibold tracking-[0.14em] uppercase opacity-80">
                  Coming soon on the
                </span>
                <span className="block text-lg leading-tight font-semibold">
                  App Store
                </span>
              </span>
            </div>
            {!compact ? (
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                When the app is released, this website will be updated with the
                genuine App Store link. Until then, please do not rely on any
                unofficial download.
              </p>
            ) : null}
          </div>
          <div className="mx-auto w-full max-w-[240px] rounded-[2rem] border border-line bg-sand p-3">
            <div className="flex min-h-[300px] flex-col rounded-[1.4rem] border border-line bg-background px-5 py-6">
              <AustralianFlag
                className="h-5 w-10 rounded-[2px]"
                title="Australian National Flag"
              />
              <p className="font-display mt-8 text-2xl leading-tight tracking-tight">
                Study at your own pace.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li className="rounded-xl bg-sand px-3 py-2">Practice questions</li>
                <li className="rounded-xl bg-sand px-3 py-2">Mock tests</li>
                <li className="rounded-xl bg-sand px-3 py-2">Your progress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="none">
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
