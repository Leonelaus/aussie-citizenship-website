/**
 * Public site settings.
 * The live site origin and support email are the production values.
 */

const SITE_URL = "https://aussie-citizenship.vercel.app";
const SUPPORT_EMAIL = "ausiecitizenship.support@gmail.com";

function resolveSiteUrl(value: string | undefined): string {
  const candidate = value?.trim() || SITE_URL;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return SITE_URL;
    }
    return url.origin;
  } catch {
    return SITE_URL;
  }
}

function resolveEmail(value: string | undefined): string {
  const candidate = value?.trim() || SUPPORT_EMAIL;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate) ? candidate : SUPPORT_EMAIL;
}

export const siteConfig = {
  name: "Aussie Citizenship",
  title: "Aussie Citizenship | Independent citizenship test study aid",
  description:
    "Aussie Citizenship is an independent mobile study aid for people preparing for the Australian citizenship test. It is not affiliated with or endorsed by the Australian Government or the Department of Home Affairs.",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  contactEmail: resolveEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  locale: "en_AU",
  copyrightYear: 2026,
  lastReviewed: "24 November 2026",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalItems = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export const officialResources = [
  {
    href: "https://immi.homeaffairs.gov.au/citizenship/test-and-interview",
    label: "Citizenship test and interview",
    source: "Department of Home Affairs",
  },
  {
    href: "https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond",
    label: "Australian Citizenship: Our Common Bond",
    source: "Department of Home Affairs",
  },
] as const;

export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export function applyStoredTheme() {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
  } catch {
    return "light" as const;
  }
}
