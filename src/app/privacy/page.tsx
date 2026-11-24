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
      "This Privacy Policy is a draft for review. It is not in force as a final policy, and it should be read with that limit in mind.",
      "It will be replaced before the app is offered for download. Until that final policy is published, do not treat this page as a complete account of how personal information is handled.",
    ],
  },
  {
    id: "operator",
    title: "Who this draft refers to",
    body: [
      "“Aussie Citizenship” in this draft means the independent study-aid project and this website. The legal name of the operator, any ABN, and any postal address are still to be confirmed and are not stated here.",
      "This project is not the Australian Government and not the Department of Home Affairs. Government websites have their own privacy notices.",
    ],
  },
  {
    id: "website",
    title: "What this website does today",
    body: [
      "This marketing website is a static site. It shows information about the study aid. It does not include accounts, a contact form, payments, or an analytics product.",
      "If you use the colour theme control, the site stores your choice of light or dark in your browser’s local storage under the key “theme”. That value stays on your device. This website does not send it to a server.",
      "The pages link to an email address. If you choose to send an email, that message is handled by your email app and by the email service used for the published address. This draft does not set a retention period for email, because the operator’s email setup is still to be confirmed.",
    ],
  },
  {
    id: "not-claimed",
    title: "What this draft does not claim",
    body: [
      "This draft does not claim that the website or the app currently collects, stores, sells, or shares any particular category of personal information beyond the theme preference described above.",
      "It does not claim that the app uses accounts, advertising, location, contacts, payment details, or analytics. Those points will be stated only if, and exactly as, the finished app does them.",
    ],
  },
  {
    id: "app",
    title: "The app is not yet available",
    body: [
      "The Aussie Citizenship app is not yet offered for download. Nothing in this draft should be read as a description of data the app collects.",
      "Before release, the final policy needs to say what information the app actually handles, why, who else sees it, how long it is kept, and how someone can ask a question or request access if the Privacy Act 1988 (Cth) applies to the operator.",
    ],
  },
  {
    id: "final",
    title: "What the final policy will cover",
    body: [
      "The operator’s legal name and contact details.",
      "The information the website and app actually handle, if any, written from the product’s real behaviour.",
      "The purpose of that handling, and whether any service provider is involved.",
      "How long information is kept, and whether it leaves Australia.",
      "How to make a privacy enquiry or a complaint, including any right to contact the Office of the Australian Information Commissioner if that office has a role in the operator’s circumstances.",
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
        lede="This is a draft for review. It describes this static website as it is published today. It does not invent a data-collection story for the unreleased app."
      />
      <p className="mt-6 text-sm text-muted">Last reviewed {siteConfig.lastReviewed}.</p>
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
