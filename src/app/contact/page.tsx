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
        <h2 className="mt-8 text-lg font-semibold">You can write about</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted">
          <li>Questions about the website or the coming app.</li>
          <li>Privacy questions about this draft policy.</li>
          <li>Corrections to public website copy.</li>
        </ul>
        <p className="mt-6 text-sm leading-6 text-muted">
          This page does not promise a reply time. Do not send identity
          documents or citizenship application files to this address.
        </p>
      </div>
    </div>
  );
}
