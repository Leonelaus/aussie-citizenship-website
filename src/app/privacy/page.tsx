import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy (draft)",
  description:
    "Draft privacy policy for the Aussie Citizenship website. It describes the current static website only and does not claim how the unreleased app handles personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy (draft)",
    description:
      "Draft privacy policy for the Aussie Citizenship website. Not a final statement of app data practices.",
    url: "/privacy",
  },
};

const sections = [
  {
    id: "status",
    title: "Status of this draft",
    body: [
      `This Privacy Policy is a draft for review by ${siteConfig.publisher.legalName}. The effective date is ${siteConfig.effectiveDate.toLowerCase()}. It is not in force as a final policy.`,
      "Until a final policy is published, do not treat this page as a complete account of how personal information is handled. It will be updated before the app is offered for download if the app’s real behaviour differs from what is written here.",
    ],
  },
  {
    id: "operator",
    title: "Who publishes Aussie Citizenship",
    body: [
      `${siteConfig.publisher.legalName} is an individual sole trader in ${siteConfig.publisher.state}, ${siteConfig.publisher.country}. ABN ${siteConfig.publisher.abn}. That person publishes the Aussie Citizenship website and the independent study aid of the same name. This draft does not publish a company name, a phone number, or a postal or residential address.`,
      "Aussie Citizenship is not the Australian Government and not the Department of Home Affairs. It is not affiliated with, or endorsed by, either of them. Government websites have their own privacy notices.",
    ],
  },
  {
    id: "website",
    title: "What this website does today",
    body: [
      "This marketing website is a static site for a free study aid. It does not include accounts, a contact form, a payment checkout, active in-app purchases, or an analytics product.",
      "If you use the colour theme control, the site stores your choice of light or dark in your browser’s local storage under the key “theme”. That value stays on your device. This website does not send it to a server.",
      `Support email is ${siteConfig.contactEmail}. If you write to that address, your message is handled by your email app and by Gmail. Google may process or store those messages outside Australia. This draft does not list the countries Google uses. Support messages are kept for ${siteConfig.emailRetention} after the last message in the thread, unless a longer period is required by law. This Privacy Policy is not in force until its effective date.`,
    ],
  },
  {
    id: "not-claimed",
    title: "What this draft does not claim",
    body: [
      "This draft does not claim that the website or the app currently collects, stores, sells, or shares any particular category of personal information beyond the theme preference and any email you choose to send.",
      "The free version described here has no active in-app purchases. This draft does not describe a paid tier, accounts, advertising, location, contacts, or analytics. Those points will be stated only if, and exactly as, a released version does them.",
    ],
  },
  {
    id: "app",
    title: "The app is not yet available",
    body: [
      "The Aussie Citizenship app is not yet offered for download. Nothing in this draft should be read as a description of data the unreleased app collects.",
      "Before release, the final policy needs to match the app’s actual behaviour, including what it handles, why, who else sees it, and how long it is kept.",
    ],
  },
  {
    id: "final",
    title: "What is still to be confirmed",
    body: [
      "Whether the Privacy Act 1988 (Cth) applies to this individual publisher, including any right to contact the Office of the Australian Information Commissioner.",
      "The countries in which Google stores Gmail messages. This draft states only that processing or storage may occur outside Australia.",
      "The information the released app actually handles, written from the product’s real behaviour.",
      "The effective date of the final policy. A lawyer has not yet reviewed this draft.",
    ],
  },
  {
    id: "contact",
    title: "Privacy contact",
    body: [],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="Draft — not yet in force"
        title="Privacy Policy"
        lede="This is a draft for review. It describes this static website and the free study aid as published today. It does not invent a data-collection story for the unreleased app."
      />
      <p className="mt-6 text-sm text-muted">
        Effective date: {siteConfig.effectiveDate}. Last reviewed {siteConfig.lastReviewed}.
      </p>
      <nav aria-label="On this page" className="mt-8 rounded-3xl border border-line bg-sand p-5">
        <p className="text-sm font-semibold">On this page</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="underline-offset-4 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="font-display text-3xl tracking-tight">{section.title}</h2>
            {section.id === "contact" ? (
              <p className="mt-4 leading-7 text-muted">
                Privacy questions about this draft can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-semibold text-foreground underline decoration-gold-soft underline-offset-4"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            ) : section.id === "final" ? (
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-muted">
                {section.body.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <div className="mt-4 space-y-4 leading-7 text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
