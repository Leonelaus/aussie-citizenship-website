import { useId } from "react";

type AustralianFlagProps = {
  className?: string;
  title?: string;
};

/**
 * Original drawing of the Australian National Flag from its public proportions,
 * used here to identify the country. It is not an official government asset.
 */
export function AustralianFlag({ className, title }: AustralianFlagProps) {
  const rawId = useId().replace(/:/g, "");
  const bounds = `flag-bounds-${rawId}`;
  const diagonals = `flag-diagonals-${rawId}`;

  return (
    <svg
      viewBox="0 0 1200 600"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <rect width="1200" height="600" fill="#012169" />
      <g clipPath={`url(#${bounds})`}>
        <rect width="600" height="300" fill="#012169" />
        <path d="M0 0 L600 300 M600 0 L0 300" stroke="#fff" strokeWidth="60" />
        <path
          d="M0 0 L600 300 M600 0 L0 300"
          stroke="#C8102E"
          strokeWidth="40"
          clipPath={`url(#${diagonals})`}
        />
        <path d="M300 0 V300 M0 150 H600" stroke="#fff" strokeWidth="100" />
        <path d="M300 0 V300 M0 150 H600" stroke="#C8102E" strokeWidth="60" />
      </g>
      <polygon
        fill="#fff"
        points="300,360 316.4,415.9 370.4,393.9 336.9,441.6 387.7,470 329.6,473.6 339,531.1 300,487.8 261,531.1 270.4,473.6 212.3,470 263.1,441.6 229.6,393.9 283.6,415.9"
      />
      <polygon
        fill="#fff"
        points="864,438 871.7,464.1 896.8,453.8 881.2,476.1 904.9,489.3 877.8,491 882.2,517.8 864,497.6 845.8,517.8 850.2,491 823.1,489.3 846.8,476.1 831.2,453.8 856.3,464.1"
      />
      <polygon
        fill="#fff"
        points="720,237 727.1,261.2 750.5,251.7 736,272.4 758,284.7 732.8,286.2 736.9,311.1 720,292.4 703.1,311.1 707.2,286.2 682,284.7 704,272.4 689.5,251.7 712.9,261.2"
      />
      <polygon
        fill="#fff"
        points="906,93 913.1,117.2 936.5,107.7 922,128.4 944,140.7 918.8,142.2 922.9,167.1 906,148.4 889.1,167.1 893.2,142.2 868,140.7 890,128.4 875.5,107.7 898.9,117.2"
      />
      <polygon
        fill="#fff"
        points="1050,279 1056,299.5 1075.8,291.4 1063.5,308.9 1082.2,319.3 1060.8,320.6 1064.3,341.7 1050,325.9 1035.7,341.7 1039.2,320.6 1017.8,319.3 1036.5,308.9 1024.2,291.4 1044,299.5"
      />
      <polygon
        fill="#fff"
        points="960,342 964.2,354.2 977.1,354.4 966.8,362.2 970.6,374.6 960,367.2 949.4,374.6 953.2,362.2 942.9,354.4 955.8,354.2"
      />
      <defs>
        <clipPath id={bounds}>
          <rect width="600" height="300" />
        </clipPath>
        <clipPath id={diagonals}>
          <path d="M300 150 h300 v150 z v150 h-300 z h-300 v-150 z v-150 h300 z" />
        </clipPath>
      </defs>
    </svg>
  );
}
