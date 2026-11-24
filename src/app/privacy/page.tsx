import type { Metadata } from "next";
import { Attribution } from "@/components/attribution";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Aussie Citizenship website and the free iPhone app. Study progress stays on the device. Effective on the public launch date of version 1.0.0.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Privacy Policy for the free iPhone app and this website. Effective on the public launch date of version 1.0.0.",
    url: "/privacy",
  },
};

const sections = [
  {
    id: "status",
    title: "Status",
    paragraphs: [
      `This Privacy Policy is published by ${siteConfig.publisher.legalName}. The effective date is ${siteConfig.effectiveDate}. It describes the free iPhone app and this website, and it applies from that date.`,
      "This policy does not claim that the publisher is exempt from the Privacy Act 1988 (Cth).",
    ],
  },
  {
    id: "operator",
    title: "Who publishes Aussie Citizenship",
    paragraphs: [
      `${siteConfig.publisher.legalName} is an individual sole trader in ${siteConfig.publisher.state}, ${siteConfig.publisher.country}. ABN ${siteConfig.publisher.abn}. That person publishes the Aussie Citizenship website and the independent study aid of the same name. This page does not publish a company name, a phone number, or a postal or residential address.`,
      "Aussie Citizenship is an independent educational application and is not affiliated with, endorsed by, or operated by the Australian Government or the Department of Home Affairs.",
    ],
  },
  {
    id: "website",
    title: "What this website does",
    paragraphs: [
      "This marketing website is a static site. It does not include accounts, a contact form, a payment checkout, or an analytics product.",
      "If you use the colour theme control, the site stores your choice of light or dark in your browser’s local storage under the key “theme”. That value stays on your device. This website does not send it to a server.",
      `Support email is ${siteConfig.contactEmail}. If you write to that address, your message is handled by your email app and by Gmail. Google’s privacy policy says Google maintains servers around the world and that information may be processed outside the country where the sender lives. Google does not publish the countries used for this inbox, and this page does not list them. Support and feedback messages are kept for a maximum of ${siteConfig.emailRetention} after the last message in the thread, unless a longer period is required by law.`,
      "This page does not say that no personal information is ever processed. Apple device backups, and logs that Vercel may keep for this website, are outside the app.",
    ],
  },
  {
    id: "app",
    title: "What the free iPhone app stores",
    paragraphs: [
      "The current release is for iPhone. Study progress is stored only on the device, in Async Storage, under the key “aussie-citizenship-state-v1”. The study screens do not upload answers. The study features do not make their own network requests.",
      "The app does not ask for a name, email address, phone number, or account. It does not request camera, photo, microphone, location, contacts, or tracking permission. The direct dependencies do not include an analytics, advertising, or tracking SDK.",
      "Send Feedback and Report a Question open an email you can read and edit. A question report includes the question ID and the app version. General feedback includes the app version. The draft does not include your name, scores, answers, or study history. Nothing is sent until you send it. If no email app is available, the support address is copied on the device.",
    ],
    bullets: [
      "Interface language and the dark-mode setting.",
      "A notifications preference. The notifications switch is disabled and stays off. The saved preference does not schedule reminders.",
      "Question IDs answered correctly or incorrectly, and practice counts.",
      "Mock-exam results: date, score, total, duration, pass or fail, and values scores.",
      "The last active date, the streak, and the current daily challenge (date, question IDs, selected answers, completion, and score).",
    ],
  },
  {
    id: "reset",
    title: "Reset study progress",
    paragraphs: [
      "Settings includes Reset study progress. After you confirm, it clears scores, exam history, the last active date, the streak, and the daily challenge. It keeps language and dark mode.",
      "Deleting the app removes the local record. An iCloud or computer backup is Apple’s. Restoring a backup can bring the record back. The publisher cannot delete that copy.",
    ],
  },
  {
    id: "links",
    title: "Links opened from Settings",
    paragraphs: [
      "Settings can open these addresses in the browser: this privacy page, the terms page, the contact page, the Our Common Bond page, and the Creative Commons licence page. The in-app privacy and terms screens stay on the device.",
      "A development build can talk to a local Expo development server. That is not part of the study features described for the App Store version.",
    ],
  },
  {
    id: "purchases",
    title: "Purchases, advertising, and analytics",
    paragraphs: [
      "Purchases are not active. No payment SDK is installed. Version 1.0.0 does not offer a purchase, a restore, or a subscription, and it does not store a paid-status value in the on-device study record. There is no advertising and no analytics SDK in the direct dependencies. The app contains 500 practice questions. This version makes 30 accessible and leaves 470 locked.",
    ],
  },
  {
    id: "manifest",
    title: "Apple privacy manifest",
    paragraphs: [
      "The source tree does not contain a hand-written app PrivacyInfo.xcprivacy file. Expo and React Native modules that are installed include their own manifests. Those inspected declare no collected data and no tracking. Async Storage declares the file-timestamp API reason C617.1. expo-constants declares the UserDefaults reason CA92.1.",
      "The merged manifest still needs to be confirmed inside the first App Store archive. ITSAppUsesNonExemptEncryption is false because the app adds no custom cryptography.",
    ],
  },
  {
    id: "sources",
    title: "Sources and attribution",
    paragraphs: [],
  },
  {
    id: "not-claimed",
    title: "What this policy does not claim",
    paragraphs: [
      "It does not say that no personal information is ever processed. Device backups, email handled by Google, and website hosting logs sit outside the app’s own study screens.",
      "It does not claim that the publisher is exempt from the Privacy Act 1988 (Cth).",
      "It does not say the question bank is copyright-cleared. It does not say the Australian National Flag image or the Sydney Opera House artwork in the app icon is cleared. A licensing enquiry for that Opera House image has not been made and remains unresolved.",
    ],
  },
  {
    id: "final",
    title: "What is still to be confirmed",
    paragraphs: [
      "The countries in which Google stores Gmail messages. This page states only that Google may process information outside the sender’s country, and it does not list countries.",
      "The merged privacy manifest inside the first App Store archive.",
      "Legal clearance of the question bank, the flag image, and the Opera House artwork in the app icon. The Sydney Opera House licensing enquiry remains deferred and unresolved.",
    ],
  },
  {
    id: "contact",
    title: "Privacy contact",
    paragraphs: [],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="Effective on the public launch date"
        title="Privacy Policy"
        lede="This policy describes this website and the free iPhone app. It applies from the public launch date of version 1.0.0."
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
                Privacy questions can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-semibold text-foreground underline decoration-gold-soft underline-offset-4"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            ) : section.id === "sources" ? (
              <div className="mt-4">
                <Attribution />
              </div>
            ) : section.id === "final" ? (
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-muted">
                {section.paragraphs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <>
                {section.paragraphs.length > 0 ? (
                  <div className="mt-4 space-y-4 leading-7 text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {"bullets" in section && section.bullets ? (
                  <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-muted">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
