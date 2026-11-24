import type { Metadata } from "next";
import { Attribution } from "@/components/attribution";
import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { officialResources, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use (draft)",
  description:
    "Draft terms of use for the Aussie Citizenship website and study aid, including educational disclaimers and a statement that the project is not a government service.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use (draft)",
    description:
      "Draft terms for the independent Aussie Citizenship study aid. Not legal advice and not a promise of exam success.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="Draft — not yet in force"
        title="Terms of Use"
        lede="These terms are a draft. They are not legal advice, and a lawyer has not reviewed them. Do not treat them as final."
      />
      <p className="mt-6 text-sm text-muted">
        Effective date: {siteConfig.effectiveDate}. Last reviewed {siteConfig.lastReviewed}.
      </p>

      <div className="mt-10 space-y-10 leading-7 text-muted">
        <section id="agreement" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Using the website
          </h2>
          <p className="mt-4">
            {siteConfig.publisher.legalName}, an individual sole trader in{" "}
            {siteConfig.publisher.state}, {siteConfig.publisher.country} (ABN{" "}
            {siteConfig.publisher.abn}), publishes
            the Aussie Citizenship website and the free iPhone study aid. By using
            this website you agree to this draft as a description of how the site
            may be used while it is under review. If you do not agree, please do
            not use the site. The effective date is{" "}
            {siteConfig.effectiveDate.toLowerCase()}. The app links to this page
            and states that the website policies are drafts. These terms are not
            in force until that date.
          </p>
        </section>

        <section id="education" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Educational purpose
          </h2>
          <p className="mt-4">
            The website and the free iPhone app are for general education and
            personal study. They are not legal advice, migration advice, or
            government advice. Citizenship law, test rules, fees, and
            application steps can change. You are responsible for checking the
            current position with the Australian Government.
          </p>
        </section>

        <section id="independence" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            No government affiliation
          </h2>
          <p className="mt-4">
            Aussie Citizenship is an independent study aid. It is not affiliated
            with, endorsed by, sponsored by, or produced for the Australian
            Government or the Department of Home Affairs. Names of government
            bodies are used only to identify the public test you may be
            preparing for.
          </p>
        </section>

        <section id="results" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            No promise of results
          </h2>
          <p className="mt-4">
            We do not promise that you will pass the citizenship test, achieve
            a particular mark, be invited to a test, or be approved for
            Australian citizenship. Practice scores are study feedback only.
            They are not official results.
          </p>
        </section>

        <section id="official" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Official information
          </h2>
          <p className="mt-4">
            Official resources should be your source of truth. Two starting
            points on the Department of Home Affairs website are:
          </p>
          <ul className="mt-4 space-y-3">
            {officialResources.map((resource) => (
              <li key={resource.href}>
                <ExternalLink href={resource.href}>{resource.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section id="availability" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            App availability
          </h2>
          <p className="mt-4">
            The version described on this website is the free iPhone app. The
            initial release is for iPhone. It includes 30 practice questions and
            20-question mock exams. Study progress and exam results stay on the
            device. The app does not ask for an account. It does not include
            active in-app purchases, a restore, or a subscription, and this
            website has no payment checkout. “Coming Soon on the App Store”
            means a public listing is not linked from this website. It is not a
            store listing, a pre-order, or a promise of a release date. Do not
            pay anyone who claims to sell access to the app.
          </p>
        </section>

        <section id="use" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Acceptable use
          </h2>
          <p className="mt-4">
            Use the website for personal information only. Do not misuse it,
            attempt to break it, or present it as an official government
            service. Do not copy the site and offer it as your own product.
          </p>
        </section>

        <section id="ip" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Intellectual property
          </h2>
          <p className="mt-4">
            The website’s original text, layout, and illustrations are owned by{" "}
            {siteConfig.publisher.legalName}. The Australian National Flag on this
            website is shown to identify Australia. The Sydney Opera House drawing
            on this website is an original geometric illustration, not a photograph
            and not an official logo. Government names and publications remain the
            property of their respective owners.
          </p>
          <h3 className="mt-8 font-display text-2xl tracking-tight text-foreground">
            Sources and attribution
          </h3>
          <div className="mt-4">
            <Attribution />
          </div>
        </section>

        <section id="liability" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Warranties and liability
          </h2>
          <p className="mt-4">
            The website is provided for general study information. To the
            extent permitted by the Australian Consumer Law and any other law
            that cannot be excluded, the publisher does not accept liability for
            loss arising from reliance on this draft website, including a test
            result or an application outcome. This clause has not been reviewed by a lawyer. Nothing in
            these terms excludes, restricts, or modifies rights under the
            Australian Consumer Law, or any other rights that cannot legally be
            excluded.
          </p>
        </section>

        <section id="law" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Governing law
          </h2>
          <p className="mt-4">
            These draft terms are governed by {siteConfig.governingLaw}. The
            courts of {siteConfig.publisher.state} are the selected forum. That
            selection does not limit a right to bring a claim in another court
            where the Australian Consumer Law, or any other applicable Australian
            law, allows it. These terms are not in force until the effective date.
          </p>
        </section>

        <section id="changes" className="scroll-mt-28">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Changes and contact
          </h2>
          <p className="mt-4">
            This draft may be replaced or corrected at any time. The date above
            shows when this copy was last reviewed. Support email is kept for{" "}
            {siteConfig.emailRetention}, as described in the draft Privacy Policy.
            Questions can be sent to{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-semibold text-foreground underline decoration-gold-soft underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
