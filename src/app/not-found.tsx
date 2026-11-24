import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
        The link may be out of date. You can return to the home page or read
        how the study aid works.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-6 font-semibold text-navy-foreground"
        >
          Back to home
        </Link>
        <Link
          href="/features"
          className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 font-semibold"
        >
          View features
        </Link>
      </div>
    </div>
  );
}
