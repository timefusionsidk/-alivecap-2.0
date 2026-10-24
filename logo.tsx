import type { SVGProps } from "react";

const dot = { fill: "var(--primary)" } as const;
const halo = { stroke: "var(--primary)" } as const;

/** App icon: a lens ring + stem (the letter "a") with a live dot. Decorative; pair with <Logo />. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <rect width="512" height="512" rx="112" fill="#0f0e0c" />
      <g fill="none" stroke="#f3ece4" strokeWidth="36" strokeLinecap="round">
        <circle cx="256" cy="256" r="96" />
        <path d="M352 160V352" />
      </g>
      <circle cx="256" cy="256" r="54" fill="none" strokeWidth="6" opacity="0.5" style={halo} />
      <circle cx="256" cy="256" r="34" style={dot} />
    </svg>
  );
}

/** Wordmark: every round letter is a lens. Uses currentColor, so it works in light and dark themes. */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="-18 -26 554 152"
      role="img"
      aria-label="alivecap"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="30" cy="50" r="30"/>
      <circle cx="403" cy="50" r="30"/>
      <circle cx="489" cy="50" r="30"/>
      <path d="M60 20V80M86 -8V80M112 20V80M138 20L160 80L182 20M208 50H268A30 30 0 1 0 259 71M347 31A30 30 0 1 0 347 69M433 20V80M459 20V108"/>
      
      <circle cx="112" cy="-2" r="11" strokeWidth="1.5" opacity="0.5" style={halo} />
      <circle cx="112" cy="-2" r="6.5" stroke="none" style={dot} />
    </svg>
  );
}
