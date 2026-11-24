import type { Metadata } from "next";
import { Attribution } from "@/components/attribution";
import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { officialResources } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aussie Citizenship is an independent educational study aid for the Australian citizenship test. It is not a government service and does not promise exam success.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description:
      "The mission and independent educational purpose of Aussie Citizenship.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="About"
        title="An independent way to revise."
        lede="Aussie Citizenship exists to help people prepare for the Australian citizenship test with clear study tools. It is a private educational project, not a government service."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-line bg-card p-6 sm:p-8">
          <h2 className="font-display text-3xl tracking-tight">Mission</h2>
          <div className="mt-4 space-y-4 text-lg leading-8 text-muted">
            <p>
              The aim is simple: give people a calm place to practise what they
              are learning for citizenship. The app uses plain language, short
              study sessions, and a record of what you have already covered.
            </p>
            <p>
              Preparation should sit beside the official material, not in place
              of it. Aussie Citizenship does not lodge applications, book tests,
              or speak for the Department of Home Affairs.
            </p>
          </div>
        </section>
        <section className="rounded-[2rem] bg-navy p-6 text-navy-foreground sm:p-8">
          <h2 className="font-display text-3xl tracking-tight">
            Independent educational purpose
          </h2>
          <p className="mt-4 leading-7 text-navy-foreground/85">
            Aussie Citizenship is an independent educational application and is
            not affiliated with, endorsed by, or operated by the Australian
            Government or the Department of Home Affairs.
          </p>
        </section>
      </div>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-line p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-tight">What it is for</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-muted">
            <li>Personal revision before the citizenship test.</li>
            <li>500 practice questions, with 30 accessible and 470 locked in version 1.0.0. Mock exams use 20 questions from the 30.</li>
            <li>Seeing which topics you may want to read again.</li>
            <li>Reading supporting explanations in more than one language.</li>
          </ul>
        </article>
        <article className="rounded-[2rem] border border-line p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-tight">What it is not</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-muted">
            <li>An official test, past paper, or government question bank.</li>
            <li>Legal, migration, or citizenship advice.</li>
            <li>A promise that you will pass, or that an application will succeed.</li>
            <li>A substitute for instructions on an official government website.</li>
            <li>A purchase. This version does not offer one.</li>
          </ul>
        </article>
      </section>

      <section className="mt-6 rounded-[2rem] border border-line bg-sand p-6 sm:p-8">
        <h2 className="font-display text-3xl tracking-tight">Official sources</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          Read the official citizenship study resource and follow the Department
          of Home Affairs for applications, bookings, and test rules. Those
          pages can change. If a link here stops working, start again from the
          department’s own website.
        </p>
        <ul className="mt-6 space-y-3">
          {officialResources.map((resource) => (
            <li key={resource.href}>
              <ExternalLink href={resource.href}>{resource.label}</ExternalLink>
              <span className="mt-1 block text-sm text-muted">{resource.source}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-[2rem] border border-line bg-card p-6 sm:p-8">
        <h2 className="font-display text-3xl tracking-tight">
          Sources and attribution
        </h2>
        <div className="mt-4">
          <Attribution />
        </div>
      </section>
    </div>
  );
}
