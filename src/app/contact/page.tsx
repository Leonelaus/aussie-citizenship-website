import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the operator of the Aussie Citizenship website and study aid. This page shows a contact email and does not use a form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: "Contact the operator of Aussie Citizenship.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="Contact"
        title="Write to us by email."
        lede="This website does not include a contact form or an account. Email is the contact method shown here."
      />

      <div className="mt-10 max-w-2xl rounded-[2rem] border border-line bg-card p-6 sm:p-8">
        <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
          Support
        </p>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-display mt-3 block text-3xl tracking-tight break-all underline decoration-gold-soft decoration-2 underline-offset-8"
        >
          {siteConfig.contactEmail}
        </a>
        <dl className="mt-8 space-y-3 text-sm leading-6">
          <div>
            <dt className="font-semibold">Publisher</dt>
            <dd className="text-muted">
              {siteConfig.publisher.legalName}, an individual sole trader in{" "}
              {siteConfig.publisher.state}, {siteConfig.publisher.country}
            </dd>
          </div>
          <div>
            <dt className="font-semibold">ABN</dt>
            <dd className="text-muted">{siteConfig.publisher.abn}</dd>
          </div>
          <div>
            <dt className="font-semibold">Website</dt>
            <dd>
              <a
                href={siteConfig.url}
                className="text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                {siteConfig.url}
              </a>
            </dd>
          </div>
        </dl>
        <h2 className="mt-8 text-lg font-semibold">You can write about</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted">
          <li>Questions about the website or the free iPhone app.</li>
          <li>Privacy questions.</li>
          <li>Corrections to public website copy.</li>
        </ul>
        <p className="mt-6 text-sm leading-6 text-muted">
          Aussie Citizenship is an independent educational application and is
          not affiliated with, endorsed by, or operated by the Australian
          Government or the Department of Home Affairs.
        </p>
        <h2 className="mt-8 text-lg font-semibold">The free app</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted">
          <li>Version 1.0.0 is free. It has no advertising, no tracking, and no active purchase.</li>
          <li>The app contains 500 practice questions. 30 are accessible. The other 470 stay locked.</li>
          <li>A mock exam uses 20 questions drawn from those 30.</li>
          <li>Settings includes Reset study progress. After you confirm, it clears scores, exam history, the streak, and the daily challenge. Language and dark mode stay as they are.</li>
          <li>Send Feedback and Report a Question open an email you can edit. Nothing is sent until you send it. Scores and study history are not included.</li>
        </ul>
        <p className="mt-6 text-sm leading-6 text-muted">
          Support and feedback messages are kept for a maximum of {siteConfig.emailRetention} after
          the last message in the thread, unless a longer period is required by law. This page
          applies from {siteConfig.effectiveDate}. Do not send identity documents or citizenship
          application files to this address.
        </p>
      </div>
    </div>
  );
}
