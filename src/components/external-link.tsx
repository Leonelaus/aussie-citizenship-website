export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-foreground underline decoration-gold-soft decoration-2 underline-offset-4 hover:decoration-gold"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
