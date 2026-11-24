type OperaHouseProps = {
  className?: string;
};

/** Original geometric illustration. Not a photograph or a trademark logo. */
export function OperaHouse({ className }: OperaHouseProps) {
  return (
    <svg
      viewBox="0 0 720 460"
      className={className}
      role="img"
      aria-label="Stylised illustration of the Sydney Opera House and harbour"
    >
      <title>Stylised illustration of the Sydney Opera House</title>
      <rect width="720" height="460" fill="currentColor" opacity="0.04" rx="28" />
      <path
        d="M0 360c80-28 140-8 210 6 78 16 120-24 210-10 86 14 150 36 300-8v112H0V360z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M0 392c90 18 150-8 230 4 90 14 140-22 230-6 70 12 150 28 260-6v76H0v-68z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M78 332h564l-26 28H104l-26-28z"
        fill="currentColor"
        opacity="0.88"
      />
      <path d="M58 360h604l-16 18H74l-16-18z" fill="currentColor" opacity="0.45" />
      <path
        d="M118 330c0-62 22-112 48-132 14 18 22 58 22 132h-70z"
        fill="currentColor"
      />
      <path
        d="M168 330c2-104 36-188 86-214 18 26 30 92 32 214H168z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M268 330c6-132 52-228 118-252 24 34 38 118 36 252H268z"
        fill="currentColor"
      />
      <path
        d="M404 330c8-118 46-196 98-184 18 30 24 96 16 184H404z"
        fill="currentColor"
        opacity="0.78"
      />
      <path
        d="M154 330c8-78 34-132 62-150"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M250 330c16-120 58-196 104-214"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
      <path
        d="M360 330c18-130 62-210 112-226"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="3"
      />
      <circle cx="92" cy="118" r="3" fill="currentColor" opacity="0.45" />
      <circle cx="108" cy="104" r="2.2" fill="currentColor" opacity="0.35" />
      <circle cx="118" cy="128" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="132" cy="112" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="124" cy="96" r="1.6" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
