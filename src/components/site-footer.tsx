import Link from "next/link";
import { legalItems, navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-sand">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="font-display text-2xl tracking-tight">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            An independent study aid for the Australian citizenship test. Not
            affiliated with, or endorsed by, the Australian Government or the
            Department of Home Affairs. This is not a government website, and it
            does not promise a test result.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold">Pages</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold">Legal and contact</p>
          <ul className="mt-3 space-y-2">
            {legalItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-muted sm:px-8">
          © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
