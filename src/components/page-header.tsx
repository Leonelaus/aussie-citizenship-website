export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
        {eyebrow}
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">{lede}</p>
    </header>
  );
}
